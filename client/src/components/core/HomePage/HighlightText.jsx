import React from 'react'

const HighlightText = ({ text }) => {
    return (
        <span className=' bg-gradient-to-b from-[#1FA2FF] via-[rgb(18,216,250)] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
            {text}
        </span>
    )
}

export default HighlightText