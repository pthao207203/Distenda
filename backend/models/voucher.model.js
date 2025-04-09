const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
    voucherCode: {
        type: String,
        required: true,
        unique: true,
    },
    minAmount: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    discountAmount: {
        type: Number,
        required: true,
    },
    validityPeriod: {
        type: Number, // Representing validity in currency or days
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 1,
    },
    createdBy: {
        userId: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    updatedBy: [{
        userId: String,
        updatedAt: Date,
    }, ],
});

const Voucher = mongoose.model("Voucher", voucherSchema, "Voucher");

module.exports = Voucher;