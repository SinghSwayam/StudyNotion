import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../services/apiconnector';
import { contactusEndpoint } from '../../services/apis';
import CountryCode from '../../data/countrycode.json'
import { RiMailSendLine } from 'react-icons/ri';
import { LiaHourglassEndSolid } from 'react-icons/lia';
import toast from 'react-hot-toast';

const ContactUsForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const submitContactForm = async (data) => {
        console.log("Logging Data", data);
        try {
            setLoading(true);
            const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
            console.log("Printing response:", response);
            setLoading(false);
            toast.success("Message sent successfully")
        } catch (error) {
            console.log("Error:", error.message);
            setLoading(false);
            toast.error("Unable to send the Message")
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstName: "",
                lastName: "",
                message: "",
                phoneNo: "",
            });
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <form
            className="flex flex-col gap-4 mt-10"
            onSubmit={handleSubmit(submitContactForm)}
        >
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="firstname" className="label-style">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter first name"
                        className="form-style"
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstname && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your name.
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="lastName" className="label-style">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter last name"
                        className="form-style"
                        {...register("lastName")}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="label-style">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="form-style"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your Email address.
                    </span>
                )}
            </div>

            <div className="flex flex-col justify-center gap-2">
                <label htmlFor="phonenumber" className="label-style">
                    Phone Number
                </label>

                <div className="flex gap-5">
                    <div className="flex w-[81px] flex-col gap-2">
                        <select
                            type="text"
                            name="countrycode"
                            id="countrycode"
                            className="form-style"
                            defaultValue={"+91"}
                            {...register("countrycode", { required: true })}
                        >
                            {CountryCode.map((ele, i) => {
                                return (
                                    <option key={i} value={ele.code}>
                                        {ele.code} - {ele.country}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                        <input
                            type='tel'
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="12345 67890"
                            className="form-style leading-4"
                            {...register("phoneNo", {
                                required: {
                                    value: true,
                                    message: "Please enter your Phone Number.",
                                },
                                maxLength: { value: 12, message: "Invalid Phone Number" },
                                minLength: { value: 10, message: "Invalid Phone Number" },
                            })}
                        />
                    </div>
                </div>
                {errors.phoneNo && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        {errors.phoneNo.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="label-style">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Enter your message here"
                    className="form-style"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your Message.
                    </span>
                )}
            </div>

            <button
                disabled={loading}
                type="submit"
                className={`rounded-md flex justify-center items-center gap-3 bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
             ${!loading && "transition-all duration-200 hover:scale-95 hover:shadow-none"}  disabled:bg-richblack-500 sm:text-[16px] `}
            >
                Send Message {loading ? (<LiaHourglassEndSolid />) : (<RiMailSendLine />)}
            </button>
        </form>
    )
}

export default ContactUsForm


