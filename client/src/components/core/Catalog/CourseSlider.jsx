import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import './Slider.css'
import { Autoplay, Navigation, Pagination, } from 'swiper/modules'

import Course_Card from './Course_Card'
import { FreeMode } from 'swiper/modules'

const CourseSlider = ({ Courses }) => {
    return (
        <>
            {Courses?.length ? (
                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}
                    modules={[FreeMode, Pagination, Autoplay, Navigation]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    className="max-h-[30rem] "
                >
                    {Courses?.map((course, i) => (
                        <SwiperSlide key={i}>
                            <Course_Card course={course} Height={"h-[250px]"} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p className="text-xl text-richblack-5">No Course Found</p>
            )}
        </>
    )
}

export default CourseSlider