import React, {useRef, useState, forwardRef} from "react";
import styles from './resume.module.css';
import { useEffect } from "react";
import {FiPaperclip, FiGithub, FiCalendar,FiAtSign, FiPhone, FiLinkedin, FiMapPin,FiExternalLink} from "react-icons/fi";
import {ImPhone, ImLinkedin2, ImGithub} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import {HiOutlineExternalLink} from "react-icons/hi"; 
import {BsGlobe} from "react-icons/bs";

const Resume = forwardRef((props, ref) => {
    const information = props.information;
    const sections = props.sections;
    const containerRef = useRef();
  
    const [columns, setColumns] = useState([[], []]);
    const [source, setSource] = useState("");
    const [target, seTarget] = useState("");
  
    const info = {
      workExp: information[sections.workExp],
      project: information[sections.project],
      achievement: information[sections.achievement],
      education: information[sections.education],
      basicInfo: information[sections.basicInfo],
      summary: information[sections.summary],
      profile: information[sections.profile],
      skills: information[sections.skills],
    };
  
    const getFormattedDate = (value) => {
      if (!value) return "";
      const date = new Date(value);
      return `${date.getFullYear()}`;
      // return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
  
    const sectionDiv = {
      [sections.workExp]: (
        <div
          key={"workexp"}
          draggable
          onDragOver={() => seTarget(info.workExp?.id)}
          onDragEnd={() => setSource(info.workExp?.id)}
          className={`${styles.section} ${
            info.workExp?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
          <div className={styles.content}>
            {info.workExp?.details?.map((item) => (
              <div className={styles.item} key={item.title}>
                {item.title ? (
                  <p className={styles.title}>{item.title}</p>
                ) : (
                  <span />
                )}
                {item.companyName ? (
                  <p className={styles.subTitle}>{item.companyName}</p>
                ) : (
                  <span />
                )}
                
                {item.startDate && item.endDate ? (
                  <div className={styles.wdate}>
                    <FiCalendar /> {getFormattedDate(item.startDate)}-
                    {getFormattedDate(item.endDate)}
                  </div>
                ) : (
                  <div />
                )}
                {item.location ? (
                  <p className={styles.location}>
                    <FiMapPin /> <p className={styles.locText}>{item.location}</p>
                  </p>
                ) : (
                  <span />
                )}
                {item.points?.length > 0 ? (
                  <ul className={styles.points}>
                    {item.points?.map((elem, index) => (
                      <li className={styles.point} key={elem + index}>
                        {elem}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span />
                )}
                {item.certificationLink ? (
                  <a className={styles.link} href={item.certificationLink} target="_blank">
                    <FiPaperclip />
                    Certificate Link
                  </a>
                ) : (
                  <span />
                )}
              </div>
            ))}
          </div>
        </div>
      ),
      [sections.project]: (
        <div
          key={"project"}
          draggable
          onDragOver={() => seTarget(info.project?.id)}
          onDragEnd={() => setSource(info.project?.id)}
          className={`${styles.section} ${
            info.project?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
          <div className={styles.content}>
            {info.project?.details?.map((item) => (
              <div className={styles.item}>
                {item.title ? (
                  <p className={styles.title}>{item.title}</p>
                ) : (
                  <span />
                )}
                <div className={styles.proLink}>
                {item.github ? (
                  <a className={styles.plink} href={item.github} target="_blank">
                    <FiGithub />
                  </a>
                ) : (
                  <span />
                )}
                {item.link ? (
                  <a className={styles.plink} href={item.link} target="_blank">
                    <FiExternalLink />
                  </a>
                ) : (
                  <span />
                )}
                
                </div>
                {item.overview ? (
                  <p className={styles.overview}>{item.overview} </p>
                ) : (
                  <span />
                )}
                {item.points?.length > 0 ? (
                  <ul className={styles.points}>
                    {item.points?.map((elem, index) => (
                      <li className={styles.point} key={elem + index}>
                        {elem}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span />
                )}
              </div>
            ))}
          </div>
        </div>
      ),
      [sections.education]: (
        <div
          key={"education"}
          draggable
          onDragOver={() => seTarget(info.education?.id)}
          onDragEnd={() => setSource(info.education?.id)}
          className={`${styles.section} ${
            info.education?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>
            {info.education?.sectionTitle}
          </div>
          <div className={styles.content}>
            {info.education?.details?.map((item) => (
              <div className={styles.item}>
                {item.title ? (
                  <p className={styles.etitle}>{item.title}</p>
                ) : (
                  <span />
                )}
                {item.college ? (
                  <p className={styles.esubTitle}>{item.college}</p>
                ) : (
                  <span />
                )}
                {item.startDate && item.endDate ? (
                  <div className={styles.date}>
                    <FiCalendar /> {getFormattedDate(item.startDate)} -
                    {getFormattedDate(item.endDate)}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      ),
      [sections.achievement]: (
        <div
          key={"achievement"}
          draggable
          onDragOver={() => seTarget(info.achievement?.id)}
          onDragEnd={() => setSource(info.achievement?.id)}
          className={`${styles.section} ${
            info.achievement?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>
            {info.achievement?.sectionTitle}
          </div>
          <div className={styles.content}>
            {info.achievement?.points?.length > 0 ? (
              <ul className={styles.numbered}>
                {info.achievement?.points?.map((elem, index) => (
                  <li className={styles.point} key={elem + index}>
                    {elem}
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}
          </div>
        </div>
      ),
      [sections.summary]: (
        <div
          key={"summary"}
          draggable
          onDragOver={() => seTarget(info.summary?.id)}
          onDragEnd={() => setSource(info.summary?.id)}
          className={`${styles.section} ${
            info.summary?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
          <div className={styles.content}>
            <p className={styles.overview}>{info.summary?.detail}</p>
          </div>
        </div>
      ),
      [sections.profile]: (
        <div
          key={"profile"}
          draggable
          onDragOver={() => seTarget(info.profile?.id)}
          onDragEnd={() => setSource(info.profile?.id)}
          className={`${styles.section} ${
            info.profile?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.profile?.sectionTitle}</div>
          <div className={styles.content}>
            <p className={styles.overview}>{info?.profile?.detail}</p>
          </div>
        </div>
      ),
      [sections.skills]: (
        <div
          key={"skills"}
          draggable
          onDragOver={() => seTarget(info.skills?.id)}
          onDragEnd={() => setSource(info.skills?.id)}
          className={`${styles.section} ${
            info.skills?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>
            {info.skills?.sectionTitle}
          </div>
          <div className={styles.content}>
            {info.skills?.points?.length > 0 ? (
              <ul className={styles.numbered}>
                {info.skills?.points?.map((elem, index) => (
                  <li className={styles.point} key={elem + index}>
                    {elem}
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}
          </div>
        </div>
      ),
    };
  
    const swapSourceTarget = (source, target) => {
      if (!source || !target) return;
      const tempColumns = [[...columns[0]], [...columns[1]]];
  
      let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
      let sourceColumnIndex = 0;
      if (sourceRowIndex < 0) {
        sourceColumnIndex = 1;
        sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
      }
  
      let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
      let targetColumnIndex = 0;
      if (targetRowIndex < 0) {
        targetColumnIndex = 1;
        targetRowIndex = tempColumns[1].findIndex((item) => item === target);
      }
  
      const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
      tempColumns[sourceColumnIndex][sourceRowIndex] =
        tempColumns[targetColumnIndex][targetRowIndex];
  
      tempColumns[targetColumnIndex][targetRowIndex] = tempSource;
  
      setColumns(tempColumns);
    };
  
    useEffect(() => {
      setColumns([
        [sections.profile, sections.education,sections.achievement, sections.skills, sections.summary],
        [sections.workExp, , sections.project],
      ]);
    }, []);
  
    useEffect(() => {
      swapSourceTarget(source, target);
    }, [source]);
  
    useEffect(() => {
      const container = containerRef.current;
      if (!props.activeColor || !container) return;
  
      container.style.setProperty("--color", props.activeColor);
    }, [props.activeColor]);
  
    return (
      <div ref={ref}>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.header}>
            <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
            <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>
  
            <div className={styles.links}>
            {info.basicInfo?.detail?.phone ? (
                <a className={styles.link} target="_blank">
                 {info.basicInfo?.detail?.phone}  <p className={styles.logo}><ImPhone /> </p>
                </a>
              )
               : (
                <span />
              )}
              {info.basicInfo?.detail?.email ? (
                <a className={styles.link } type="email" href={info.basicInfo?.detail?.email} target="_blank">
                 {info.basicInfo?.detail?.email} <p className={styles.logo}><MdEmail /> </p>
                </a>
              )
               : (
                <span />
              )}
              {
                info.basicInfo?.detail?.linkedin ? (
                <a className={styles.link} href={'https://www.linkedin.com/in/'+info.basicInfo?.detail?.linkedin} target="_blank">
                {info.basicInfo?.detail?.linkedin} <p className={styles.logo}><ImLinkedin2 /> </p>
                </a>
              ) : (
                <span />
              )
              }
              {info.basicInfo?.detail?.github ? (
                <a className={styles.link} href={'https://github.com/'+info.basicInfo?.detail?.github} target="_blank">
                {info.basicInfo?.detail?.github} <p className={styles.logo}><ImGithub /> </p>
                </a>
              ) 
              : (
                <span />
              )}
            </div>
          </div>
  
          <div className={styles.main}>
          <div className={styles.left_bar}></div>
            <div className={styles.col1}>
              {columns[0].map((item) => sectionDiv[item])}
            </div>
            <div className={styles.col2}>
              {columns[1].map((item) => sectionDiv[item])}
            </div>
          </div>
        </div>
      </div>
    );
  });
  
  export default Resume;