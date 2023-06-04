import React from 'react';
import { Link } from "react-router-dom";
import styles from './about.module.css';
import SideImg from '../../assets/about.svg';
import { FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { TbBrandGithub } from 'react-icons/tb';
import { HiOutlineExternalLink } from 'react-icons/hi';


const About = () => {
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
              <li className='textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out font-inter'> <Link to='/about'>ABOUT</Link></li>
              <li className='textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out font-inter'> <Link to='/faq'>FAQ</Link></li>
              <li className='textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out font-inter'> <Link className="btn font-bold py-3 px-5 rounded-lg bg-black text-white  max-h-14 w-130" to='/editor' >TRY IT!</Link> </li>
            </ul>
          </div>
        </div>

        {/* {Mobile} */}
        <div className='flex md:hidden w-full h-full'></div>
      </header>
      <div className={styles.title}>
        ABOUT
      </div>
      <div className={styles.section}>
        <img src={SideImg} alt="About Us" />
        <div className={styles.sectionRight}>
          <p>
            Create a resume that stands out and gets noticed with <span className={styles.span}>Resume Builder!</span> Make it easy to create a professional resume with our intuitive drag-and-drop tools and customizable templates. Choose the color that best fits your style, download your resume in PDF format, and get ready for your next job-winning opportunity. Don't wait – get started today with Resume Builder and <span className={styles.span}>take the first step towards your dream job!</span>
          </p>
          <p>
            I created this Resume Builder to address the challenges faced by job seekers in crafting the perfect resume. Our goal is to help you stand out from the competition and land your dream job with ease.
          </p>
          <p>
            If you would like to <span className={styles.span2}>collaborate</span> with me to further improve this website or if you have any <span className={styles.span2}>feedback or reviews</span>, please feel free to <span className={styles.span2}>reach out to me via my social media handles</span>. Your input is highly valued and appreciated.
          </p>
          <footer>
            ©BeginnerCoder21
            <div className={styles.contactme}>
            <a href="https://github.com/BeginnerCoder21"><TbBrandGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/anushka-purwar-58b23a19b/"><FaLinkedinIn size={20}/></a>
            <a href="http://15a0e6d5ccbc417bb8e.me/Portfolio-React/"><HiOutlineExternalLink size={20}/></a>
            <a href="https://www.behance.net/crafterina29"><FaBehance size={20}/></a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default About;