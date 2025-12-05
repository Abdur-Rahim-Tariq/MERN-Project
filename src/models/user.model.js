import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index: true,
        },

        email: {
            type:String,
            required:true,
            lowercase:true,
            trim:true
        },
        fullName: {
            type:String,
            required:true,
            trim:true
        },
        password: {
            type:String,
            required:true,
        },
        avator: {
            type:String,

        },
        coverPhoto: {
            type:String,
        }

    },{
        timestamps: true,
    }
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { userId: this._id, name: this.name, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return token;
};

userSchema.methods.generateRefreshToken = function () {
    const refreshToken = jwt.sign(
        { userId: this._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    );
    return refreshToken;
};

export const User = mongoose.model('User', userSchema)
