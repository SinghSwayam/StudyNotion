import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

import CourseInformationForm from "./CourseInformation/CourseInformationForm";
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";
import PublishCourse from "./PublishCourse/PublishCourse";

export default function RenderSteps() {
    const { step } = useSelector((state) => state.course);

    const steps = [
        {
            id: 1,
            title: "Course Information",
        },
        {
            id: 2,
            title: "Course Builder",
        },
        {
            id: 3,
            title: "Publish",
        },
    ];

    return (
        <>
            <div className="relative mb-2 flex w-[85%]  justify-between mx-auto">
                {steps.map((item, index) => (
                    <div key={item.id} className="flex flex-col items-center relative">

                        <button
                            className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${step === item.id
                                ? "border-yellow-50 bg-yellow-800 text-yellow-50"
                                : "border-richblack-700 bg-richblack-800 text-richblack-300"
                                } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
                        >
                            {step > item.id ? (
                                <FaCheck className="font-bold text-richblack-900" />
                            ) : (
                                item.id
                            )}
                        </button>

                    </div>
                ))}
            </div>

            <div className="relative mb-16 mt-2 flex w-full select-none justify-between">
                {steps.map((item) => (
                    <div key={item.id} className="flex min-w-[130px] flex-col items-center gap-y-2">
                        <p className={`text-sm ${step >= item.id ? "text-richblack-5" : "text-richblack-500"}`}>
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Render specific component based on current step */}
            {step === 1 && <CourseInformationForm />}
            {step === 2 && <CourseBuilderForm />}
            {step === 3 && <PublishCourse />}
        </>
    );
}
