import { campaignData } from "@/mocks";
import { ICampaign } from "@/types/services";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  try {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const size = Number(req.nextUrl.searchParams.get("size") ?? 25);

    const startIndex = (page - 1) * size;
    const endIndex = Math.min(startIndex + size, campaignData.content.length);

    const slicedData = campaignData.content.slice(startIndex, endIndex);

    const newData: ICampaign<string>[] = slicedData.map((data) => {
      const modifiedData: any = { ...data };
      modifiedData.impressions =
        typeof modifiedData.impressions === "number"
          ? modifiedData.impressions.toLocaleString()
          : modifiedData.impressions;
      modifiedData.clicks =
        typeof modifiedData.clicks === "number"
          ? modifiedData.clicks.toLocaleString()
          : modifiedData.clicks;
      modifiedData.ctr =
        typeof modifiedData.ctr === "number"
          ? modifiedData.ctr.toLocaleString() + "%"
          : modifiedData.ctr;
      modifiedData.video_views =
        typeof modifiedData.video_views === "number"
          ? modifiedData.video_views.toLocaleString()
          : modifiedData.video_views;
      modifiedData.vtr =
        typeof modifiedData.vtr === "number"
          ? modifiedData.vtr.toLocaleString() + "%"
          : modifiedData.vtr;
      return modifiedData;
    });

    const paginatedData = {
      content: newData,
      size: size,
      total_elements: campaignData.total_elements,
      total_pages: Math.ceil(campaignData.total_elements / size),
    };

    return NextResponse.json(paginatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

async function PATCH(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    console.log(id);
    if (id === undefined)
      return NextResponse.json({ message: "id is null" }, { status: 400 });
    if (id && campaignData.content[Number(id)] === undefined) {
      return NextResponse.json({ message: "id is null" }, { status: 404 });
    }

    return NextResponse.json(
      {
        id,
        result: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export { GET, PATCH };
