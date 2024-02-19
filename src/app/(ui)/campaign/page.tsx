"use client";

import Pagination from "@/components/Pagenation";
import TableBody from "@/components/Table/Body";
import { TableHeader } from "@/components/Table/Header";
import { getCampaign } from "@/lib/services/campaign";
import { CampaignKeyType } from "@/types";
import { ICampaignResponse } from "@/types/services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Campaign() {
  const searchParams = useSearchParams();
  const currnetPage = searchParams.get("page") ?? 1;
  const dataSize = searchParams.get("size") ?? 25;
  const { data } = useQuery<ICampaignResponse<String>>({
    queryKey: ["campaign", currnetPage, dataSize],
    queryFn: () =>
      getCampaign({
        page: Number(currnetPage),
        size: Number(dataSize),
      }),
  });
  if (data === undefined) return null;
  return (
    <div className="flex flex-col gap-2">
      <table className="w-full border-collapse">
        <TableHeader enumObject={CampaignKeyType} />

        <TableBody data={data.content} />
      </table>
      <div>
        <Pagination
          currentPage={Number(currnetPage)}
          totalPages={data?.total_pages}
        />
      </div>
    </div>
  );
}
