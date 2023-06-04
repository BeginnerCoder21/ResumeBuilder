import React from 'react'
import { Link } from "react-router-dom";
import Faq from "react-faq-component";

const Faqs = () => {
  const data = {
    rows: [
      {
        title: "How much does it cost to use Resume Builder?",
        content: <p>The Resume Builder website is available for free.<span className="text-orange-400"> Works best on Microsoft edge to download PDF</span>. It provides a convenient platform 
        to create a visually appealing resume within minutes using our complimentary resume builder. If you'd like, you can collaborate 
        with me to further customize this website.Feel free to reach out to me via my social media channels to share your suggestions and ideas.
        On About page, you can find my social media links.
        </p>,
      },
      {
        title: "How to use Resume Builder?",
        content:
          <p>Pick a color of your choice, manually enter your details, and save your progress - hooray! Your resume is now prepared. 
          You have the option to preview your resume alongside the editing interface. To obtain the final version, simply 
          click on the "Download" button.</p>,
      },
      {
        title: "What features does Resume Builder offer?",
        content:
          <p>
            Create a resume that stands out and gets noticed with Resume Builder! Our intuitive 
            <span className="text-orange-400"> drag-and-drop</span> feature and customizable templates make 
            it easy to create a professional resume. Drag the section to other side and customize it according to your need.
            Choose the color that best fits your style, download your resume in PDF format, and get ready for your next job-winning opportunity.
            Don't wait – get started today with Resume Builder and take the first step towards your dream job!
          </p>,
      },
      {
        title: "How easy is it to create a professional resume with Resume Builder?",
        content: `Create the perfect resume with Resume Builder, the easy-to-use online resume maker. 
        Our drag and drop feature allows you to customize your resume sections in minutes for free. 
        Choose from stunning color options, download your resume in PDF format, and make sure it looks 
        professional and stands out from the crowd. Take control of your job search today with Resume Builder!`,
      },
      {
        title: "Does Resume Builder offer any advice or tips for creating a great resume?",
        content: <p>Ummm, that feature has not been incorporated yet. However, we have upcoming enhancements and additions 
        planned for the website. Keep an eye out for these exciting updates! Remember to share your valuable feedback by contacting 
        me through my social media channels.</p>,
      },
      {
        title: "Does Resume Builder provide help with formatting and styling my resume?",
        content:<p>You have the option to choose from six colors: Dark Orange, Deep Sky Blue, Dark Violet, 
        Sea Green, Raspberry, and Bluish Purple. The template design is pre-set and cannot be customized. 
        When you start, you will see a blank resume, you can input your details. After saving your work, 
        you can preview your completed resume. 
        <br /> <br />
        If you are interested in obtaining an editable template for Canva or Figma, 
        please reach out to me on <a href="https://www.linkedin.com/in/anushka-purwar-58b23a19b/"><u>LinkedIn</u></a>. 
        Please note that this service is <u>not available for fee.</u></p>,
      },
      {
        title: "Is the website Responsive?",
        content:<p>Currently, the website lacks responsiveness, but I am actively working on making it adaptable 
        to different screen sizes. For optimal performance, I recommend trying it on Microsoft Edge.</p>,
      },
    ],
  };

  const styles = {
    rowTitleTextSize: '18px',
    rowContentColor: '#767676',
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "#FF9900",
    rowContentTextSize: '16px',
    rowContentPaddingTop: '5px',
    rowContentPaddingBottom: '5px',
    rowContentPaddingRight: '100px',
    transitionDuration: "1s",
    timingFunc: "ease"
  };

  const config = {
    animate: true,
    tabFocus: true
  };
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
      <div>
        <div className="flex flex-col z-50 w-screen p-4 px-16 font-lexend">
        <p className=" mt-32 text-center w-full font-inter text-3xl font-bold text-headingColor">FAQ's</p>
        <div className=" mt-14 ">
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Faqs