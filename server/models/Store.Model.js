const mongoose = require("mongoose"); 

const StoreSchema = new mongoose.Schema(
    {
        StoreName: {
            type: String,
            required: [
                true , "Store namee must Contain 3 characters"
            ]
        },

        StoreNumber: {
            type: Number,
            required:[
                true , "Must be unique number greater than 0"
            ]
        },

        Open: {
            type: Boolean,
        },
    },
    { timestamps: true },
);

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;