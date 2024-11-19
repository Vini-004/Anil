"use client";

import Image from "next/image";
import {gsap} from "gsap";
import ScrollTriger from "gsap/ScrollTrigger";
import profilepic from "./Anil-removebg-preview.png";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

import code from "./code.jpg";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTriger);
function Home() {
  useEffect(() => {
    const scroll = document.querySelectorAll(".box");
    const pinTrigger = ScrollTriger.create({
      trigger: "content-wrapper",
      pin: true,
      start: "top",
      end: "200%",

    })
    const time = gsap.timeline();

    time.to(scroll , {
      y: "-200%",
      scrollTrigger:{
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub:1,
      }
    }
    )
    
    return () => {
      pinTrigger?.kill();
      time.kill();
    }
  });

  return (
    <div className="content-wrapper">
    <main>
      <section>
    
      <div  className="  navbar py-8 pl-6 flex static justify-between">
      <div>
      <h1 className="font-bold ">DushyantDrx</h1>
      </div>
      <div>
        <ul className="flex gap-5 pr-6 " >
          <div className="flex box justify-center gap-4 mb-1 text-4xl mr-10 ">
          
          <a href="#"> <CiLinkedin/> </a> 
          <a href="#">  <CiFacebook/> </a>
          <a href="https://api.whatsapp.com/send?phone=7597074959">   <FaWhatsapp/> </a> 
          
          </div>          
          <li>
            <a href="#" className=" px-4 py-4 rounded-full bg-gradient-to-b from-cyan-300"  
            >Resume</a>
          </li>
        </ul>
      </div>
      </div>
      <div className=" main box flex ml-11 mt-10">
      <div className="pl-40 text-6xl  text-center">
        <h1> Dushyant Jangir</h1>
        <h2 className="text-3xl"> Technical Expert </h2>
        <div className="box h-80 w-96 mt-20">
        <p className="text-lg leading-8 text-left text-gray-200">
        Dynamic Social Media Consultant with a proven track record of crafting impactful strategies to drive engagement, boost brand visibility, and increase ROI. Skilled in content creation, analytics, and multi-platform management, I specialize in turning creative ideas into measurable results.Let's connect and grow your online presence!
        </p>
        </div>
      </div>
      <div  className="box  relative ml-8 overflow-hidden  bg-gradient-to-b from-teal-500 rounded-full h-96 w-96 " >
        <Image 
        src={profilepic}
        alt="Dushyant Jangir"
        objectFit="cover"
         />
      </div>
      </div>
      </section>
      <section>
      <div className= " box relative text-center font text-4xl h-96 w-full bg-gradient-to-b from-teal-600">
       <div className="relative mt-6" >
       <h2 className="">Service I Offer</h2>
       </div>
       <div className="service flex gap-6">
       <div className=" text-lg py-20 pl-20 text-left leading-9 h-5/6 w-5/12" >
       <ul>
        <li>
          Custom Software Development 
        </li>
        <li>
          Cloud Computing Service
        </li>
        <li>
          Data analytics and Business Intelligence
        </li>
        <li>
          Chatbot Development
        </li>
        <li>
          Cloud Migration Service 
        </li>
        <li>
        Virtual Reality (VR) and Argument Reality (AR)
       </li>
       <li>
        Mobile App Development
       </li>
       <li>
        CyberSecurity Services
       </li>
       <li>
        Artificial Intelligence Development
        </li>
        <li>
          Blockchain Development
        </li>
        
        <li>
          IT Consulting and Strategy
        </li>
        <li>
          Full Stack Web Development 
        </li>
        <li>
          Machine Learning Solution
        </li>
        <li>
          Game Development
        </li>
       </ul>
       
       </div>
       
        <div className="left h-96 w-6/12 rounded-full ml-16 m-20">
        <Image
        src={code}
        alt="Code"/>
        </div> 
       </div>
       
        </div>
        <div className="gyan text-center">
          <h1>
            "The best way to predict the future is to invent it"
          </h1>
        </div>
        
        </section>
        </main>
        </div>
        
    
  
    
  );
}
export default Home;
