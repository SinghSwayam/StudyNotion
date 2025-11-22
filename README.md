# <h1 align="center">StudyNotion : AN ED-TECH PLATFORM</h1>
<div align="center"><img alt="StudyNotion" src="https://res.cloudinary.com/dnpfg6mua/image/upload/v1723387527/c997de1c-fe08-4fb5-b77d-aee5239cdfbd.png"/></div>

# Project Description:

StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

StudyNotion aims to provide:
− A seamless and interactive learning experience for students, making education more accessible and engaging.
− A platform for instructors to showcase their expertise and connect with learners across the globe.
In the following sections, we will cover the technical details of the platform, including:

1. System architecture: The high-level overview of the platform's components and diagrams of the architecture.
2. Front-end: The description of the front-end architecture, user interface design, features, and functionalities of the front-end, and frameworks, libraries, and tools used.
3. Back-end: The description of the back-end architecture, features and functionalities of the back-end, frameworks, libraries, tools used, and data models and database schema.
4. API Design: The description of the API design, list of API endpoints, their functionalities, and sample API requests and responses.
5. Deployment: The description of the deployment process, hosting environment and infrastructure, and deployment scripts and configuration.
6. Testing: The description of the testing process, types of testing, test frameworks and tools used.
7. Future Enhancements: The list of potential future enhancements to the platform, explanation of how these enhancements would improve the platform, estimated timeline and priority for implementing these enhancements.
   In summary, StudyNotion is a versatile and intuitive ed-tech platform that is designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise. In the following sections, we will delve into the technical details of the platform, which will provide a comprehensive understanding of the platform's features and functionalities.

# System Architecture

The StudyNotion ed-tech platform consists of three main components: the front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

# Front-end

The front end of the platform is built using ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

# Back-end

The back end of the platform is built using NodeJS and ExpressJS, which are popular frameworks for building scalable and robust server-side applications. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.

# Database

The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data, which is useful for storing course content such as videos, images, and PDFs. The database stores the course content, user data, and other relevant information related to the platform.

#Architecture Diagram:
<img alt="Architecture-Diagram" src="https://res.cloudinary.com/dnpfg6mua/image/upload/v1723387606/a9a720d6-a607-4779-8739-c0e05f89d19d.png"/>

# Front-end

The front end is part of the platform that the user interacts with. It's like the "face" of the platform that the user sees and interacts with. The front end of StudyNotion is designed using a tool called Figma, which is a popular design tool that allows for the creation of clean and minimal user interfaces. You can take a look at the Figma design for the StudyNotion front-end by following this link:
https://www.figma.com/file/Mikd0FjHKAofUlWQSi70nf/StudyNotion_shared.
The front end of StudyNotion has all the necessary pages that an ed-tech platform should have. Some of these pages are:

# For Students:

− Homepage: This page will have a brief introduction to the platform, as well as links to the course list and user details.
− Course List: This page will have a list of all the courses available on the platform, along with their descriptions and ratings.
− Wishlist: This page will display all the courses that a student has added to their wishlist.
− Cart Checkout: This page will allow the user to complete the course purchase.
− Course Content: This page will have the course content for a particular course, including videos, and other related material.
− User Details: This page will have details about the student's account, including their name, email, and other relevant information.
− User Edit Details: This page will allow the student to edit their account details.

# For Instructors:

− Dashboard: This page will have an overview of the instructor's courses, as well as the ratings and feedback for each course.
− Insights: This page will have detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
− Course Management Pages: These pages will allow the instructor to create, update, and delete courses, as well as manage the course content and pricing.
− View and Edit Profile Details: These pages will allow the instructor to view and edit their account details.

# Back-end

Description of the Back-end Architecture:

StudyNotion uses a monolithic architecture, with the backend built using Node.js and Express.js, and MongoDB as the primary database. Monolithic architecture refers to a design approach where all the modules of the application are combined into a single large program, with a single codebase, to enable better control, security, and performance.
Node.js is a popular JavaScript runtime that allows us to run JavaScript code outside of the browser. Express.js is a web application framework that simplifies the process of building web applications in Node.js. MongoDB is a popular NoSQL database that allows for flexible data storage and retrieval, making it a suitable choice for complex applications like StudyNotion.

# Features and Functionalities of the Back-end:

The back end of StudyNotion provides a range of features and functionalities, including:

1. User authentication and authorization: Students and instructors can sign up and log in to the platform using their email addresses and password. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
2. Course management: Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
3. Payment Integration: Students will purchase and enrol on courses by completing the checkout flow that is followed by Razorpay integration for payment handling.
4. Cloud-based media management: StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
5. Markdown formatting: Course content in document format is stored in Markdown format, which allows for easier display and rendering on the front end.

# Frameworks, Libraries, and Tools used:

The back end of StudyNotion uses a range of frameworks, libraries, and tools to ensure its functionality and performance, including:

1. Node.js: Node.js is used as the primary framework for the back end.
2. MongoDB: MongoDB is used as the primary database, providing a flexible and scalable data storage solution.
3. Express.js: Express.js is used as a web application framework, providing a range of features and tools for building web applications.
4. JWT: JWT (JSON Web Tokens) are used for authentication and authorization, providing a secure and reliable way to manage user credentials.
5. Bcrypt: Bcrypt is used for password hashing, adding an extra layer of security to user data.
6. Mongoose: Mongoose is used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.

# Data Models and Database Schema:

The back end of StudyNotion uses a range of data models and database schemas to manage data, including:

1. Student schema: Includes fields such as name, email, password, and course details for each student.
2. Instructor schema: Includes fields such as name, email, password, and course details for each instructor.
3. Course schema: Includes fields such as course name, description, instructor details, and media content.

<img alt="Data-Models-and-Database-Schema" src="https://res.cloudinary.com/dnpfg6mua/image/upload/v1723387611/11d77684-0b46-4a95-bdcf-de8ef16e05f8.png"/>

# Conclusion:

In conclusion, this document outlines the architecture, features, and functionalities of the StudyNotion ed-tech platform. It highlights the use of MERN stack technologies and REST API design and outlines the deployment process using free hosting services, Vercel for the front-end, Render.com or Railway.app for the backend, and MongoDB Atlas for the database. Additionally, it lists potential future enhancements that could be implemented to improve the platform, along with their estimated timelines and priorities.
Throughout the development of the project, various achievements will be made in terms of implementing the desired functionalities and creating a user-friendly interface. However, there will be challenges to be faced during the development process, such as integrating different technologies and debugging errors.
