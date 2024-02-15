import { userData } from "@/mocks";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.error();
  }
}
