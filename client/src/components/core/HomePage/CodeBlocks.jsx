import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import CTAButton from './Button';
import { TypeAnimation } from 'react-type-animation';
const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor
}) => {
    return (
        <div className={`flex ${position} flex-col items-center my-20 justify-between gap-10 `}>

            {/* section 1 */}
            <div className=' lg:w-[45%] flex flex-col gap-8'>
                {heading}
                <div className=' text-richblack-300 font-bold'>{subheading}</div>
                <div className='flex lg:flex-row md:flex-row sm:flex-row  flex-col gap-7 mt-7'>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className='flex items-center justify-center gap-2'>{ctabtn1.btnText} <FaArrowRight /></div>
                    </CTAButton>
                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>

            {/* section 2 */}
            <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
                {backgroundGradient}


                <div className='text-center flex flex-col w[10%] text-richblack-400 px-3 font-inter font-bold'>
                    <p>1 </p>
                    <p>2 </p>
                    <p>3 </p>
                    <p>4 </p>
                    <p>5 </p>
                    <p>6 </p>
                    <p>7 </p>
                    <p>8 </p>
                    <p>9 </p>
                    <p>10 </p>
                    <p>11 </p>
                </div>
                <div className={`w-[90%] flex ml-2 flex-col gap-2 font-bold font-mono ${codeColor}`}>
                    <TypeAnimation
                        sequence={[codeblock, 10000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace: "pre-line",
                                display: 'block',
                                animationDelay: 0
                            }
                        }
                        omitDeletionAnimation={true}

                    />
                </div>
            </div>

        </div>
    )
}

export default CodeBlocks