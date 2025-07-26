// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/actions/database.action';
import UserModel from '@/models/User';
import { RegisterData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: RegisterData = await request.json();
    const { name, email, password, confirmPassword } = body;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      provider: 'credentials',
    });

    // Remove password from response
    const userResponse = {
      id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: userResponse
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}