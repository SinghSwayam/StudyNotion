import React from 'react'
import HighlightText from './HighlightText'
import KnowYourProgress from '../../../assets/Images/Know_your_progress.svg'
import ComapreYourProgress from '../../../assets/Images/Compare_with_others.svg'
import PlanYourLesson from '../../../assets/Images/Plan_your_lessons.svg'
import CTAButton from '../../core/HomePage/Button';
import { IoIosMore } from 'react-icons/io'

const LearningLanguageSection = () => {
    return (
        <div className='m-32 w-full'>
            <div className='flex flex-col gap-5 items-center w-[100%]'>
                <div className='  text-4xl font-semibold  text-center'>
                    Your swiss knife for <HighlightText text={'learning any language'} />
                </div>
                <p className=' text-center text-richblack-700  text-base font-medium w-full lg:w-[70%]'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
                <div className='flex lg:flex-row flex-col  lg:items-center mx-auto  lg:justify-center mt-3 '>
                    <img src={KnowYourProgress} alt='KnowYourProgress' className=' lg:-mr-36 object-contain' />
                    <img src={ComapreYourProgress} alt='ComapreYourProgress' className=' lg:m-0 -my-28 object-contain' />
                    <img src={PlanYourLesson} alt='PlanYourLesson' className='lg:-ml-40 object-contain' />
                </div>
                <div className=' w-fit text-center'>
                    <CTAButton active={true} linkto={'/signup'}><p className='flex items-end'>Learn More <IoIosMore /></p> </CTAButton>
                </div>
            </div>
        </div>
    )
}

export default LearningLanguageSection