import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: { type: String, default: "" },
    image :{
        type: String,
        default: "",
    },
    categoryId:[{
        type: mongoose.Schema.ObjectId,
        ref: 'category'
    }]
},{timestamps:true})

const subCategoryModel = mongoose.model("subcategory", subCategorySchema)
export default subCategoryModel