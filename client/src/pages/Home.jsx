import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import '../App.css'
import ExploreMore from '../components/core/HomePage/ExploreMore';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import KnowYourInstructor from '../components/core/HomePage/KnowYourInstructor';
import Footer from '../components/common/Footer';
import { IoIosMore } from 'react-icons/io';
import ReviewSlider from '../components/common/ReviewSlider';
// import './Home.css'
const Home = () => {
    return (
        <div>
            {/* Section 1 */}
            {/* Become instructor button */}
            <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between '>
                <Link to={"/signup"}>
                    <div className='group mt-10 p-1  mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none '>
                        <div className=' group-hover:bg-richblack-900 flex flex-row items-center gap-2 rounded-full px-10 py-[5px]'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                {/* Heading */}
                <div className='text-center font-semibold text-4xl mt-7'>
                    Empower Your Future with
                    <HighlightText text={" Coding Skills"} />
                </div>

                {/* SubHeading */}
                <div className=' mt-4 w-[65%] text-center text-lg text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                {/* Two Button */}
                <div className="mt-8 lg:flex xl:flex md:flex flex-row gap-7 hidden">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>
                <div className=" flex  flex-row gap-7  mt-8 lg:hidden xl:hidden md:hidden ">
                    <CTAButton active={true} linkto={"/signup"}>
                        Signup
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Login
                    </CTAButton>
                </div>

                {/* Video */}
                <div className='shadow-[20px_20px_0px_4px_#ffffff,-2px_0px_32px_3px_#63b3ed] mx-3 my-12 w-10/12 '>
                    <video muted loop autoPlay >
                        <source src={Banner} />
                    </video>
                </div>

                {/* Code Section 1 */}
                <div className=' w-10/12  '>
                    <CodeBlocks
                        position={'flex-row  lg:flex-row'}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock your <HighlightText text={'coding potential'} /> with our online courses.
                            </div>
                        }
                        subheading={
                            <div className=''>
                                Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                            </div>
                        }
                        ctabtn1={
                            {
                                btnText: "Try it Yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a><a href="three/">Three</a></nav>`}
                        codeColor={' text-yellow-25'}
                        backgroundGradient={<div className='codeblock1 absolute'></div>}

                    />
                </div>

                {/* Code Section 2 */}
                <div className=' w-10/12 '>
                    <CodeBlocks
                        position={' lg:flex-row-reverse'}
                        heading={
                            <div className='text-5xl  font-semibold'>
                                Start <HighlightText text={'coding in seconds'} /> .
                            </div>
                        }
                        subheading={
                            <div className=''>
                                Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                            </div>
                        }
                        ctabtn1={
                            {
                                btnText: "Continue lesson",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a><a href="three/">Three</a></nav>`}
                        codeColor={' text-blue-25'}
                        backgroundGradient={<div className='codeblock2 absolute'></div>}

                    />
                </div>

                {/* Explore More */}
                <ExploreMore />

            </div>

            {/* Section 2 */}
            <div className="bg-pure-greys-5 text-richblack-700">

                {/* Buttons below exploreMore */}
                <div className="homepage-bg  h-[310px]">
                    {/* Explore Full Catagory Section */}
                    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                        <div className="lg:h-[190px]"></div>
                        <div className="flex lg:flex-row md:flex-row sm:flex-row gap-7 text-white flex-col  ">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/login"}>
                                Learn More
                            </CTAButton>
                        </div>
                    </div>
                </div>

                {/* Get the skills you need for a job that is in demand */}
                <div className=' mx-auto w-11/12 lg:max-w-maxContent  lg:mt-[7rem] flex flex-col items-center gap-5 justify-evenly'>

                    <div className='flex lg:flex-row md:flex-row flex-col mx-auto gap-5 '>
                        <div className='text-4xl font-semibold lg:w-[45%] md:w-[45%] '>
                            Get the skills you need for a <HighlightText text={'job that is in demand.'} />
                        </div>

                        <div className='lg:w-[45%] md:w-[45%] flex flex-col items-start gap-8'>
                            <div className=' text-[16px]'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                            <CTAButton active={true} linkto={'signup'} ><p className='flex items-end'>Learn More <IoIosMore /></p></CTAButton>
                        </div>
                    </div>

                    <TimeLineSection />

                    <LearningLanguageSection />

                </div>


            </div>
            {/* Section 3 */}
            <div className='w-11/12 mx-auto flex flex-col items-center justify-between gap-8 bg-richblack-900'>

                <KnowYourInstructor />

                <p className=' text-richblack-100 mt-10 font-semibold text-center text-4xl'>Reviews from other learners</p>

                <ReviewSlider />

            </div>

            {/* Footer*/}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home