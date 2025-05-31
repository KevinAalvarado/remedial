/*
    Campos:
    fullName,
    email,
    password,
    age,
    countryOfResidence
    */

import { Schema, model} from "mongoose";

const customersSchema = new Schema(
    {

        fullName: {
            type: String,
            require: true,
        },

        email: {
            type: String,
            require: true,
        },

        passowrd: {
            type: String,
            require: true,
        },

        age: {
            type: Number,
            require: true,
        },

        countryOfResidence: {
            type: String,
            require: true,
        },

        imageCustomer: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
        strict: false,
    }

);

export default model("Customers", customersSchema);