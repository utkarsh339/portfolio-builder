import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  await connectDB();

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ message: "User registered" });
}
