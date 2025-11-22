import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/common/Navbar.jsx'
import OpenRoute from "./components/core/Auth/OpenRoute"
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Catalog from "./pages/Catalog";
import Error from './pages/Error.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx'
import UpdatePassword from './pages/UpdatePassword.jsx'
import VerifyEmail from './components/core/HomePage/VerifyEmail.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MyProfile from './components/core/Dashboard/MyProfile.jsx'
import PrivateRoute from './components/core/Auth/PrivateRoute.jsx'
import Settings from './components/core/Dashboard/Settings/Settings.jsx'
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses.jsx'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from './utils/constants.js'
import Cart from './components/core/Dashboard/Cart/Cart.jsx'
import MyCourses from './components/core/Dashboard/MyCourses.jsx'
import AddCourse from './components/core/Dashboard/AddCourse/AddCourse.jsx'
import EditCourse from './components/core/Dashboard/EditCourse/EditCourse.jsx'
import CourseDetails from './pages/CourseDetails.jsx'
import VideoDetails from './components/core/ViewCourse/VideoDetails.jsx'
import ViewCourse from './pages/ViewCourse.jsx'
import Instructor from './components/core/Dashboard/InstructorDashboard/Instructor.jsx'

function App() {

  const { user } = useSelector((state) => state.profile);

  return (
    <div className=' w-screen min-h-screen bg-richblack-900 flex flex-col font-inter '>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path='/about'
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />

        <Route
          path='/contact'
          element={
            <OpenRoute>
              <ContactUs />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />

          <Route path="dashboard/settings" element={<Settings />} />


          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />

              </>
            )
          }
        </Route>

        <Route element={
          <PrivateRoute>
            <ViewCourse />
          </PrivateRoute>
        }>

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route
                  path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                  element={<VideoDetails />}
                />
              </>
            )
          }

        </Route>

        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  )
}

export default App
