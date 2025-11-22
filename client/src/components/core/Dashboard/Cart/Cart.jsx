import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses';
import RenderTotalAmount from './RenderTotalAmount';
import { resetCart } from '../../../../slices/cartSlice';

const Cart = () => {

    const { total, totalItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const resetHandler = () => {
        dispatch(resetCart());
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className="mb-14 text-4xl font-medium text-richblack-25">Cart</h1>
                {
                    total && <button className='mb-14 text-xl font-medium text-richblack-900 px-3 py-1 rounded-lg hover:scale-90 transition-all duration-200  bg-yellow-50' onClick={resetHandler}>Reset</button>
                }
            </div>
            <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
                {totalItems} Courses in Cart
            </p>
            {total > 0 ? (
                <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
                    <RenderCartCourses />
                    <RenderTotalAmount />
                </div>
            ) : (
                <p className="mt-14 text-center text-3xl text-richblack-100">
                    Your cart is empty
                </p>
            )}
        </>
    )
}

export default Cart