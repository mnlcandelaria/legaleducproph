// services/userService.ts
import { connectToDatabase } from "@/lib/actions/database.action";
import UserModel from '@/models/User';
import { IUser, UserData } from '@/types';

export class UserService {
  static async createUser(userData: UserData): Promise<IUser> {
    await connectToDatabase();
    const user = await UserModel.create(userData);
    return user;
  }

  static async findUserByEmail(email: string): Promise<IUser | null> {
    await connectToDatabase();
    const user = await UserModel.findOne({ email });
    return user;
  }

  static async findUserById(id: string): Promise<IUser | null> {
    await connectToDatabase();
    const user = await UserModel.findById(id);
    return user;
  }

  static async findUserByGoogleId(googleId: string): Promise<IUser | null> {
    await connectToDatabase();
    const user = await UserModel.findOne({ googleId });
    return user;
  }

  static async updateUser(email: string, updateData: Partial<UserData>): Promise<IUser | null> {
    await connectToDatabase();
    const user = await UserModel.findOneAndUpdate(
      { email },
      { ...updateData, updatedAt: new Date() },
      { new: true }
    );
    return user;
  }

  static async updateUserById(id: string, updateData: Partial<UserData>): Promise<IUser | null> {
    await connectToDatabase();
    const user = await UserModel.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true }
    );
    return user;
  }

  static async deleteUser(id: string): Promise<boolean> {
    await connectToDatabase();
    const result = await UserModel.findByIdAndDelete(id);
    return !!result;
  }

  static async deleteUserByEmail(email: string): Promise<boolean> {
    await connectToDatabase();
    const result = await UserModel.findOneAndDelete({ email });
    return !!result;
  }

  static async getAllUsers(limit: number = 50, skip: number = 0): Promise<IUser[]> {
    await connectToDatabase();
    const users = await UserModel
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    return users;
  }

  static async getUserCount(): Promise<number> {
    await connectToDatabase();
    const count = await UserModel.countDocuments();
    return count;
  }

  static async searchUsers(query: string, limit: number = 20): Promise<IUser[]> {
    await connectToDatabase();
    const users = await UserModel
      .find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } }
        ]
      })
      .limit(limit)
      .sort({ createdAt: -1 });
    return users;
  }

  static async updateLastLogin(email: string): Promise<IUser | null> {
    await connectToDatabase();
    const user = await UserModel.findOneAndUpdate(
      { email },
      {
        lastLoginAt: new Date(),
        updatedAt: new Date()
      },
      { new: true }
    );
    return user;
  }
}