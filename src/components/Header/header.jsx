import React from "react";
import { Link } from "react-router-dom";
import mainImg from '../../assets/main_img.svg';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import colorp from '../../assets/color_picker.svg';
import download from '../../assets/download.svg';
import edit_details from '../../assets/edit_details.svg';
import slider from '../../assets/Slider.svg';

function Header() {
  return (
    <>
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
      <div className="md:flex flex-row items-left w-screen mt-40 justify-between p-10">
        <div className="flex items-start max-w-sm flex-1 flex-col">
          <p className="text-5xl font-poppins font-extra-bold w-[800px] ml-24">CREATE PROFESSIONAL <span className="text-[#FF9900]">RESUME</span> & <span className="text-[#FF9900]">CV</span> IN JUST FEW MINUTES</p>
          <p className="text-3xl font-poppins font-bold-light mt-3 ml-24">CREATE YOUR RESUME EASILY! IT'S <span className="text-[#FF9900]">FREE</span> </p>
          <Link to='/editor'>
            <button className="btn font-bold py-3 px-14 rounded-lg ml-24 mt-10 bg-black text-white max-h-14 w-130">TRY IT!</button>
          </Link>

        </div>
        <div className="flex items-center max-h-2xl max-w-2xl flex-3 mr-40">
          <img src={mainImg} alt="mainimage" />
          <img src={avatar1} alt="img1" className="absolute top-28 right-56" />
          <img src={avatar2} alt="img1" className="absolute top-[190px] right-14" />
          <img src={avatar3} alt="img1" className="absolute top-[350px] right-20" />
        </div>
      </div>
      <div className="w-[calc(100vw-150px)] border-b-2 ml-14 border-#7E7E7E" ></div>
      <div className="flex items-center">
        <div className="flex">
          <p className="text-4xl font-poppins ml-32 mt-10 font-bold-light w-[140px]">KEY <span className="text-[#FF9900]">FEATURES</span></p>
        </div>
        <div className="flex flex-row justify-evenly w-full">
          <div className="flex flex-row ml-52 items-center">
            <div className="flex flex-row">
              <div className="w-[270px] align-middle justify-center items-center">
                <img src={colorp} alt="color_picker" className="w-[123px] h-[89px] text-center justify-center ml-16" />
                <p className="text-center font-poppins font-semibold text-2xl mt-5">Pick a color</p>
                <p className="text-center font-poppins text-[#6B6B6B] mt-2 leading-7">We offer a variety of colors to choose from. Pick the one that suits your preference.</p>
              </div>
              <div className="w-[270px] align-middle justify-center items-center ml-16">
                <img src={edit_details} alt="color_picker" className="w-[123px] h-[89px] text-center justify-center ml-16" />
                <p className="text-center font-poppins font-semibold text-2xl mt-5">Fill the details</p>
                <p className="text-center font-poppins text-[#6B6B6B] mt-2 leading-7">Fill your information, save it and instantly view a side-by-side preview of your resume.</p>
              </div>
              <div className="w-[270px] align-middle justify-center items-center ml-16">
                <img src={slider} alt="color_picker" className="w-[123px] h-[89px] text-center justify-center ml-16" />
                <p className="text-center font-poppins font-semibold text-2xl mt-5">Customize</p>
                <p className="text-center font-poppins text-[#6B6B6B] mt-2 leading-7">Personalize the sections as per your preference by rearranging them, then download your professional resume in PDF format.</p>
              </div>
              {/* <div className="w-[270px] align-middle justify-center items-center ml-16">
                <img src={download} alt="color_picker" className="w-[123px] h-[89px] ml-16" />
                <p className="text-center font-poppins font-semibold text-2xl mt-5">Download</p>
                <p className="text-center font-poppins text-[#6B6B6B] mt-2 leading-7">Download your professional resume in pdf format.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Header;