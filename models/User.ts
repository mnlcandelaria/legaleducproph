// models/User.ts
import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '@/types';

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // Not required for Google OAuth users
  },
  image: {
    type: String,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  provider: {
    type: String,
  },
  emailVerified: {
    type: Date,
  },
  lastLoginAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
UserSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;