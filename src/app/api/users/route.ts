import { IRequestUserUpload } from "@/app/(ui)/user/@modal/upload/page";
import { paging } from "@/lib/paging";
import { userData } from "@/mocks/user";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  try {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const size = Number(req.nextUrl.searchParams.get("size") ?? 25);

    const slicedData = paging(page, size, userData.content);

    const paginatedData = {
      content: slicedData,
      size: size,
      total_elements: userData.total_elements,
      total_pages: Math.ceil(userData.total_elements / size),
    };

    return NextResponse.json(paginatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

async function POST(req: NextRequest) {
  try {
    const data: IRequestUserUpload = await req.json();
    const { result } = await fetch(`/api/users/${data.email}/exists`).then(
      (response) => response.json()
    );
    if (result)
      return NextResponse.json(
        { message: "이미 등록된 유저입니다." },
        { status: 409 }
      );
    const res = await fetch(`/api/users`).then((response) => response.json());
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export { GET, POST };
