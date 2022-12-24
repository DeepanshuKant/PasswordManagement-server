const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');



const passwordSchema = new mongoose.Schema(
    {
        id: { type: String, required: [true, "Please Enter ID"] },
        password: { type: String, required: [true, "Please Enter Password"] },
        category: { type: String, default: "Google" },
        user: { type: mongoose.Schema.ObjectId, ref: 'users', required: true },
        createdAt: { type: Date, default: Date.now },
    }
)


const passwordModel = mongoose.model('passwords', passwordSchema);


module.exports = passwordModel;