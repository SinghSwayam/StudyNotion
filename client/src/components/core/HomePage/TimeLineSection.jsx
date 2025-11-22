import React from 'react'

import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timeLineImage from '../../../assets/Images/TimelineImage.png'

const timeline = [
    {
        logo: Logo1,
        heading: "Leadership",
        description: "Fully committed to the success company."
    },
    {
        logo: Logo2,
        heading: "Responsibility",
        description: "Students will always be our top priority."
    },
    {
        logo: Logo3,
        heading: "Flexibility",
        description: "The ability to switch is an important skills."
    },
    {
        logo: Logo4,
        heading: "Solve the problem",
        description: "Code your way to a solution."
    },
]

const TimeLineSection = () => {
    return (
        <div className=' mt-14'>
            <div className='flex lg:flex-row  flex-col gap-5 items-center'>
                {/* left box */}
                <div className=' lg:w-[45%] flex flex-col gap-10'>
                    {
                        timeline.map((element, index) => {
                            return (
                                <div className='relative' key={index}>
                                    <div className='flex flex-row gap-5'>
                                        <div className='w-[50px] h-[50px] bg-[#efeeee] rounded-full flex justify-center items-center'>
                                            <img src={element.logo} alt={element.heading} />
                                        </div>

                                        <div>
                                            <h2 className=' font-semibold text-[18px]'>{element.heading}</h2>
                                            <p className=' text-base'>{element.description}</p>
                                        </div>
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className='absolute top-[3.2rem] left-6 h-[50px] border-l-2 border-dashed border-pure-greys-300'></div>
                                    )}
                                </div>
                            );
                        })
                    }
                </div>

                {/* right box */}
                <div className='relative shadow-[16px_16px_0px_0px_#ededed,-9px_-9px_26px_0px_#90cdf4]'>
                    <img src={timeLineImage} alt='Time Line Iage' className=' shadow-white object-cover h-fit' />

                    <div className='absolute bg-caribbeangreen-700 justify-between flex lg:flex-row md:flex-row flex-col text-white uppercase md:py-10 py-8 lg:py-10 left-[50%] translate-y-[-50%] translate-x-[-50%]'>

                        <div className=' flex flex-row  gap-5 items-center lg:border-r md:border-r  border-caribbeangreen-300  md:px-16 px-10  lg:px-16'>
                            <p className=' lg:text-3xl md:text-2xl sm:text-xl font-bold'>10 </p>
                            <p className=' text-caribbeangreen-300 text-sm'>Years of Experience</p>
                        </div>
                        <h2 className='lg:invisible md:invisible my-3 mx-4 border border-caribbeangreen-300' />
                        <div className=' flex  flex-row gap-5 items-center md:px-16 px-10 lg:px-16'>
                            <p className=' lg:text-3xl md:text-2xl sm:text-xl font-bold'>250</p>
                            <p className=' text-caribbeangreen-300 text-sm'>Type of Courses</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default TimeLineSection