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
    console.log(req.body);
    // if (id === undefined)
    //   return NextResponse.json({ message: "id is null" }, { status: 400 });
    // if (id && campaignData.content[Number(id)] === undefined) {
    //   return NextResponse.json({ message: "id is null" }, { status: 404 });
    // }

    // return NextResponse.json(
    //   {
    //     id,
    //     result: true,
    //   },
    //   {
    //     status: 200,
    //   }
    // );
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export { GET, POST };
