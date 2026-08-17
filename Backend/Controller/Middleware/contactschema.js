const mongoose = require("mongoose")

const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false   // optional in form
    },
    service: {
        type: String,
        enum: ["Custom Software Development", "Web Development", "Mobile App Development",
               "ERP & CRM Solutions", "Workflow Automation", "Digital Marketing", "Other"],
        required: true
    },
    message: {
        type: String,
        required: true
    },
    agree: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("ContactCollection", contactschema)