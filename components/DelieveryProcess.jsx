import Image from "next/image";
import React, { useEffect } from "react";
import style from "../styles/DelieveryProces.module.css"
//-------- images for delivery process --------------------
import step1 from '../public/img/step-1.jpg';
import step2 from '../public/img/step-2.jpg';
import step3 from '../public/img/step-3.jpg';
import step4 from '../public/img/step-4.jpg';

const images =[
    {
      img: step1,
      step: "Choose your favorite products",
      animation: "fade-right",
    },
    {
        img: step2,
        step: "Free and fast delivery",
        animation: "fade-left",
    },
    {
        img: step3, // Step 3 is optionalDependencies   for the next step index
        step: "Easy payments methods",
        animation: "fade-right",
    },
    {
        img: step4, 
        step: "and Finally, enjoy your Pizza",
        animation: "fade-left",
    }
];

const DelieveryProcess = () => {
  return (
    <>
    <hr className={style.line} />
      <div className={style.container}>
        <div className={style.stepContainer}>
          <h1 className={style.heading} data-aos="fade-right">
            How it <span>Works</span>
          </h1>

          <section className={style.steps}>


             {images.map((x, index)=>(

             <div key={index} className={style.box} data-aos={x.animation}>
              <Image
                src={x.img}
                alt=""
                className="image"
                objectFit="cover"
                // layout="fill"
                />
              <h5>{x.step}</h5>
            </div>
            ))}
            
            
          </section>
        </div>
      </div>
    </>
  );
};



export const getServerSideProps = ()=>{

    Aos.init({duration: 1000});
}


export default DelieveryProcess;
