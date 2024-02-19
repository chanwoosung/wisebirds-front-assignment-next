import { campaignData } from "@/mocks";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const size = Number(req.nextUrl.searchParams.get("size") ?? 25);

    const startIndex = (page - 1) * size;
    const endIndex = Math.min(startIndex + size, campaignData.content.length);

    const slicedData = campaignData.content.slice(startIndex, endIndex);
    console.log(startIndex, endIndex, slicedData);

    const paginatedData = {
      content: slicedData,
      size: size,
      total_elements: campaignData.total_elements,
      total_pages: Math.ceil(campaignData.total_elements / size),
    };

    return NextResponse.json(paginatedData);
  } catch (error) {
    return NextResponse.error();
  }
}
