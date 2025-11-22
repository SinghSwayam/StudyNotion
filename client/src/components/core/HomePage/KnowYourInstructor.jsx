import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'

const KnowYourInstructor = () => {
    return (
        <div className=' w-[87%] mx-auto mt-16'>
            <div className='w-full mx-auto flex lg:flex-row md:flex-row flex-col justify-center items-center gap-20   '>

                <div className='lg:w-[50%] md:w-[70%] w-[80%]'>
                    <img src={Instructor} alt='Instructor' className='shadow-[-22px_-20px_0px_0px_#fff] ' />
                </div>

                <div className=' lg:w-[50%] md:w-[70%] w-[90%] text-white font-semibold flex-col flex gap-10'>
                    <div className='text-4xl lg:w-[60%] w-[100%] '>Become an <HighlightText text={'Instructor'} /></div>

                    <p className=' text-[16px] font-medium lg:w-[80%] w-[100%] text-richblack-200'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>


                    <div className=' w-fit'>
                        <CTAButton active={true} linkto={'/signup'} className=''>
                            <div className=' flex w-fit gap-2 items-center '>
                                Start Teaching Today <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default KnowYourInstructor