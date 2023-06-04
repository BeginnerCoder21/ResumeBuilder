import React, { useState, useRef } from "react";
import Editor from "../Editor/editor";
import styles from './body.module.css';
import Resume from "../Resume/resume";
import ReactToPrint from "react-to-print";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

function Body() {
    const colors = ["#FF9900", "#0085FF", "#7B10AD", "#169256", "#D80953", "#6923FF"];
    const pageStyle = `{ size: 8.3in 11.7in }`;
    const sections = {
        basicInfo: "BASIC INFORMATION",
        workExp: "WORK EXPERIENCE",
        project: "PROJECTS",
        education: "EDUCATION",
        achievement: "ACHIEVEMENTS",
        summary: "SUMMARY",
        profile: "PROFILE",
        skills: "SKILLS"
    };
    const resumeRef = useRef();

    const [activeColor, setActiveColor] = useState(colors[0]);
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.profile]: {
            id: sections.profile,
            sectionTitle: sections.profile,
            detail: "",
        },
        [sections.skills]: {
            id: sections.skills,
            sectionTitle: sections.skills,
            points: [],
        },
    });

    
    return (

        <div>
            <header className="fixed z-50 w-screen p-6 px-16 border-b-2 border-#7E7E7E bg-white">
                {/* {Desktop and Tablet} */}
                <div className='hidden md:flex w-full h-full items-center justify-between '>
                    <Link to='/' className='flex items-center gap-2'>
                        <p className='text-headingColor font-bold font-inter text-sm'>RESUME BUILDER</p>
                    </Link>

                    <div className="flex items-center gap-10">
                        <ul className='flex items-center gap-14 font-inter text-sm font-bold'>
                            <li className='textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out font-inter'><Link to='/about'>ABOUT</Link></li>
                            <li className='textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out font-inter'><Link to='/faq'>FAQ</Link></li>
                            <li className='textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out font-inter'>
                                <ReactToPrint
                                    trigger={() => {
                                        return (
                                            <button className="font-bold py-3 px-4 rounded-lg bg-black text-white  max-h-14 w-130" to='/editor' >
                                                DOWNLOAD
                                            </button>
                                        );
                                    }}
                                    pageStyle={pageStyle}
                                    content={() => resumeRef.current}
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* {Mobile} */}
                <div className='flex md:hidden w-full h-full'></div>
            </header>
            <div className="flex w-full mt-28 bg-slate-400"></div>
            <div className={styles.container}>
                <div className="flex justify-between align-middle gap-y-40 w-[400px]">
                    <div className="flex flex-col mt-10 ml-10">
                        <p className="flex text-md font-poppins font-semibold">Select a Color</p>
                        <div className="flex flex-row gap-4 mt-5">
                            {colors.map((item) => (
                                <span
                                    key={item}
                                    style={{ backgroundColor: item }}
                                    className={`${'h-[36px] w-[36px] rounded-full'} ${activeColor === item ? 'border-4 border-black opacity-80' : ""
                                        }`}
                                    onClick={() => setActiveColor(item)}
                                />
                            ))}
                        </div>

                    </div>
                    
                </div>
                <div className={styles.box}>
                <div className={styles.editor}>
                    <Editor
                        sections={sections}
                        information={resumeInformation}
                        setInformation={setResumeInformation}
                    />
                    
                </div>
                <div className={styles.resume}>
                <Resume
                        ref={resumeRef}
                        sections={sections}
                        information={resumeInformation}
                        activeColor={activeColor}
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Body;