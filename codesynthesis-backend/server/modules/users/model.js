import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    email: { type: String, unique: true },
    fullName: String,
    avatar: String,
    providerData: { uid: String, provider: String }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)