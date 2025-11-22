const Course = require("../models/Course");
const Category = require("../models/Category");
const { Mongoose } = require("mongoose");
require("dotenv").config;


//****************************createCategory handler function****************************
exports.createCategory = async (req, res) => {
    try {
        //fetch data
        const { name, description } = req.body;
        //validate 
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields."
            });
        };

        //create entry in db    
        const categoryDetails = await Category.create({
            name: name,
            description: description,
        });
        console.log(categoryDetails);
        //return response

        return res.status(200).json({
            category: categoryDetails.name,
            success: true,
            message: "Category created successfully."
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Error while creating Category",
            error: error
        });
    }
}

//****************************getAllCategorys handler function****************************

exports.showAllCategory = async (req, res) => {

    try {

        const allCategory = await Category.find({}, { name: true, description: true });
        return res.status(200).json({
            success: true,
            message: "All Category returned successfully",
            data: allCategory
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while getting all Category",
        });
    }

}

exports.categoryPageDetails = async (req, res) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    try {
        const { categoryId } = req.body
        // Get courses for the specified category
        const selectedCategory = await Category.findById(categoryId)
            .populate({
                path: "courses",
                match: { status: "Published" },
                populate: "ratingAndReviews",
                populate: {
                    path: "instructor",
                },
            })
            .exec()

        //console.log("SELECTED COURSE", selectedCategory)
        // Handle the case when the category is not found
        if (!selectedCategory) {
            console.log("Category not found.")
            return res
                .status(404)
                .json({ success: false, message: "Category not found" })
        }
        // Handle the case when there are no courses
        if (selectedCategory.courses.length === 0) {
            console.log("No courses found for the selected category.")
            return res.status(404).json({
                success: false,
                message: "No courses found for the selected category.",
            })
        }

        // Get courses for other categories
        const categoriesExceptSelected = await Category.find({
            _id: { $ne: categoryId },
        })
        let differentCategory = await Category.findOne(
            categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
                ._id
        )
            .populate({
                path: "courses",
                match: { status: "Published" },
                populate: {
                    path: "instructor",
                },
            })
            .exec()
        //console.log("Different COURSE", differentCategory)
        // Get top-selling courses across all categories
        const allCategories = await Category.find()
            .populate({
                path: "courses",
                match: { status: "Published" },
                populate: {
                    path: "instructor",
                },
            })
            .exec()
        const allCourses = allCategories.flatMap((category) => category.courses)
        const mostSellingCourses = allCourses
            .sort((a, b) => b.sold - a.sold)
            .slice(0, 10)
        // console.log("mostSellingCourses COURSE", mostSellingCourses)
        res.status(200).json({
            success: true,
            data: {
                selectedCategory,
                differentCategory,
                mostSellingCourses,
            },
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}