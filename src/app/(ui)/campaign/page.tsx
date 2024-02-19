"use client";

import Pagination from "@/components/Pagenation";
import { getCampaign } from "@/lib/services/campaign";
import { CampaignKeyType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Campaign() {
  const searchParams = useSearchParams();
  const currnetPage = searchParams.get("page") ?? 1;
  const dataSize = searchParams.get("size") ?? 25;
  const { data } = useQuery<ICampaignResponse>({
    queryKey: ["campaign", currnetPage, dataSize],
    queryFn: () =>
      getCampaign({
        page: Number(currnetPage),
        size: Number(dataSize),
      }),
  });
  return (
    <div className="flex flex-col gap-2">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {Object.values(CampaignKeyType).map((key) => (
              <th key={key} className="border border-gray-400 p-2">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.content.map((campaign, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{campaign.id}</td>
              <td className="border border-gray-400 p-2">{campaign.name}</td>
              <td className="border border-gray-400 p-2">
                {campaign.enabled ? "Yes" : "No"}
              </td>
              <td className="border border-gray-400 p-2">
                {campaign.campaign_objective}
              </td>
              <td className="border border-gray-400 p-2">
                {campaign.impressions}
              </td>
              <td className="border border-gray-400 p-2">{campaign.clicks}</td>
              <td className="border border-gray-400 p-2">{campaign.ctr}</td>
              <td className="border border-gray-400 p-2">
                {campaign.video_views}
              </td>
              <td className="border border-gray-400 p-2">{campaign.vtr}</td>
            </tr>
          ))}
        </tbody>
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
