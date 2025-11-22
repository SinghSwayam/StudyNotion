import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';
import { FaRegEdit } from "react-icons/fa";
import { formattedDate } from '../../../utils/dateFormatter';

const MyProfile = () => {

    const { user, loading } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    return (
        <div className='text-white'>
            <h2 className=' text-4xl font-medium text-richblack-50 '>My Profile</h2>

            {/* section 1 */}
            <div className='flex lg:flow-row md:flex-row flex-col items-center justify-between mt-5 bg-richblack-800 py-4 px-7 rounded-lg' >
                <div className='flex items-center gap-x-4'>
                    <img src={`${user?.image}`} alt={`profile-${user?.firstName}`} className=' aspect-square w-[78px] rounded-full object-cover' />
                    <div>
                        <p className='font-semibold text-richblack-5'>{user?.firstName + " " + user?.lastName}</p>
                        <p className=' text-richblack-200'>{user?.email}</p>
                    </div>
                </div>
                <IconBtn
                    text={"Edit"}
                    onClick={() => navigate("/dashboard/settings")}
                    customClasses={'bg-yellow-50'}
                >
                    <FaRegEdit />
                </IconBtn>
            </div>

            {/* section 2 */}
            <div className='flex flex-col  justify-between mt-4 bg-richblack-800 gap-y-6 py-4 px-7 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-lg '>About</p>
                    <IconBtn
                        text={"Edit"}
                        onClick={() => navigate("/dashboard/settings")}
                        customClasses={'bg-yellow-50'}
                    >
                        <FaRegEdit />
                    </IconBtn>
                </div>

                <p className='text-richblack-50 text-sm w-[90%] overflow-hidden break-words'>
                    {
                        user?.additionalDetails?.about ? `${(user?.additionalDetails?.about)}` : "Write something about yourself..."
                    }
                </p>

            </div>

            {/* section 3 */}
            <div className='flex flex-col  justify-between mt-5 bg-richblack-800 gap-y-6 py-4 px-7 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-lg'>Personal Details</p>
                    <IconBtn
                        text={"Edit"}
                        onClick={() => navigate("/dashboard/settings")}
                        customClasses={'bg-yellow-50'}
                    >
                        <FaRegEdit />
                    </IconBtn>
                </div>

                <div className='grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className=' flex flex-col gap-1'>
                        <p className='text-sm text-richblack-300 '>First Name</p>
                        <p>{user?.firstName}</p>
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <p className='text-sm text-richblack-300' >Last Name</p>
                        <p>{user?.lastName}</p>
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <p className='text-sm text-richblack-300' >Email</p>
                        <p>{user?.email}</p>
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <p className='text-sm text-richblack-300' >Gender</p>
                        <p>{user?.additionalDetails.gender ?? "Add Gender"}</p>
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <p className='text-sm text-richblack-300' >Contact Number</p>
                        <p>{user?.additionalDetails.contactNumber ?? "Add Contact Number"}</p>
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <p className='text-sm text-richblack-300' >Date of Birth</p>
                        <p>{formattedDate(user?.additionalDetails?.dateOfBirth) ?? "Add Date of Birth"}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MyProfile