/*
    Campos:
    name,
    category,
    maximumBet,
    minimumBet
    */

import { Schema, model, ObjectId } from "mongoose";

const gamesSchema = new Schema(
    {

        name: {
            type: String,
            require: true,
        },

        category: {
            type: String,
            require: true,
        },

        maximunBet: {
            type: Number,
            require: true,
        },

        minimunBet: {
            type: Number,
            require: true,
        },

        imageGame: {
            type: String,
            require: true,
        },
    });

export default model("Games", gamesSchema);