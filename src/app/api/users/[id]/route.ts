import { IRequestUserPatch } from "@/app/(ui)/user/@modal/patch/page";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const data: IRequestUserPatch = await req.json();

    const res = await fetch(`/api/users/${data.id}`);
    return NextResponse.json(res, { status: res.status });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
