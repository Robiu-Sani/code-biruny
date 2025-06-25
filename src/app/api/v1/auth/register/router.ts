import { NextResponse } from "next/server";
import connectDB from "app/api/db/db";
import User from "app/api/model/user.model";
import { IUser } from "app/api/interace/user.interface";

// GET all users
export async function GET() {
  try {
    await connectDB();
    const users = await User.find();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch users", error },
      { status: 500 }
    );
  }
}

// CREATE a new user
export async function POST(req: Request) {
  try {
    await connectDB();
    const body: IUser = await req.json();
    const newUser = await User.create(body);
    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create user", error },
      { status: 500 }
    );
  }
}

// UPDATE a user by ID (full replace)
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, ...updates }: IUser = await req.json();
    if (!id)
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });
    return NextResponse.json({ success: true, data: updatedUser });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update user", error },
      { status: 500 }
    );
  }
}

// PARTIAL UPDATE a user by ID
export async function PATCH(req: Request) {
  try {
    await connectDB();
    const { id, ...partialUpdates }: Partial<IUser> = await req.json();
    if (!id)
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );

    const patchedUser = await User.findByIdAndUpdate(
      id,
      { $set: partialUpdates },
      { new: true }
    );
    return NextResponse.json({ success: true, data: patchedUser });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to patch user", error },
      { status: 500 }
    );
  }
}

// DELETE a user by ID
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id }: { id: string } = await req.json();
    if (!id)
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );

    const deletedUser = await User.findByIdAndDelete(id);
    return NextResponse.json({ success: true, data: deletedUser });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete user", error },
      { status: 500 }
    );
  }
}
