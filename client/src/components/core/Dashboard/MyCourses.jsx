import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"

export default function MyCourses() {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true)
            const result = await fetchInstructorCourses(token)
            console.log("result", result)
            if (result) {
                setCourses(result)
            }
            setLoading(false)
        }
        fetchCourses()
    }, [])

    return (
        <div className="">
            <div className="mb-14 flex items-center justify-between">
                <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
                <IconBtn
                    text="Add Course"
                    onClick={() => navigate('/dashboard/add-course')}
                    customClasses={"bg-yellow-50"}
                >
                    <VscAdd />
                </IconBtn>
            </div>
            {
                loading ? (<div className=" mx-[50%]  my-auto spinner"></div>) :
                    courses && <CoursesTable courses={courses} setCourses={setCourses} />

            }
        </div>
    )
}