import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Vault from "@/app/model/Vault";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    await dbConnect();
    const newVault = new Vault(formData);
    await newVault.save();
    return NextResponse.json({ message: "Vault created successfully!" });
  } catch (error) {
    console.error("Error creating vault:", error);
    return NextResponse.json(
      { message: "Failed to create vault, please try again later." },
      { status: 500 }
    );
  }
}
