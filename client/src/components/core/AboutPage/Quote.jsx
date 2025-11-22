import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Quote = () => {
    return (
        <div className='text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white'>

            <span className=' select-none text-richblack-500'>"</span> We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={"combines technology"} /> ,<span className=' bg-gradient-to-b from-[#e46339] to-[#da851d] text-transparent bg-clip-text font-bold'>expertise</span>, and community to create an <span className=' bg-gradient-to-b from-[#e49d32]  to-[#f1f106] text-transparent bg-clip-text font-bold'>unparalleled educational experience. </span><span className=' text-richblack-500 select-none'>"</span>

        </div>
    )
}

export default Quote