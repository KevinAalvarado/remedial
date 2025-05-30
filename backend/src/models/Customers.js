/*
    Campos:
    fullName,
    email,
    password,
    age,
    countryOfResidence
    */

    import { Schema, model, ObjectId } from "mongoose";

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
        });
    
    export default model("Customers", customersSchema);