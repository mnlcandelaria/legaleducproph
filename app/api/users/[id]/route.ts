// // app/api/users/[id]/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { getServerSession } from "next-auth/next";
// import { authOptions } from '@/lib/auth';
// import { connectToDatabase } from "@/lib/actions/database.action";
// import UserModel from '@/models/User';
//
// interface RouteParams {
//   params: {
//     id: string;
//   };
// }
//
// export async function GET(
//   request: NextRequest,
//   { params }: RouteParams
// ) {
//   try {
//     const session = await getServerSession(authOptions);
//
//     if (!session?.user?.email) {
//       return NextResponse.json(
//         { error: 'Unauthorized' },
//         { status: 401 }
//       );
//     }
//
//     await connectToDatabase();
//     const user = await UserModel.findById(params.id);
//
//     if (!user) {
//       return NextResponse.json(
//         { error: 'User not found' },
//         { status: 404 }
//       );
//     }
//
//     // Only allow users to access their own data
//     if (user.email !== session.user.email) {
//       return NextResponse.json(
//         { error: 'Forbidden' },
//         { status: 403 }
//       );
//     }
//
//     return NextResponse.json({ user });
//   } catch (error) {
//     console.error('Error fetching user by ID:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }
//
// export async function DELETE(
//   request: NextRequest,
//   { params }: RouteParams
// ) {
//   try {
//     const session = await getServerSession(authOptions);
//
//     if (!session?.user?.email) {
//       return NextResponse.json(
//         { error: 'Unauthorized' },
//         { status: 401 }
//       );
//     }
//
//     await connectToDatabase();
//     const user = await UserModel.findById(params.id);
//
//     if (!user) {
//       return NextResponse.json(
//         { error: 'User not found' },
//         { status: 404 }
//       );
//     }
//
//     // Only allow users to delete their own account
//     if (user.email !== session.user.email) {
//       return NextResponse.json(
//         { error: 'Forbidden' },
//         { status: 403 }
//       );
//     }
//
//     await UserModel.findByIdAndDelete(params.id);
//
//     return NextResponse.json({
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }