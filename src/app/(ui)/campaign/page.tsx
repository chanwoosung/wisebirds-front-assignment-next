"use client";

import Pagination from "@/components/Pagenation";
import Switch from "@/components/Switch";
import TableBody from "@/components/Table/Body";
import { TableHeader } from "@/components/Table/Header";
import { getCampaign, patchCampaign } from "@/lib/services/campaign";
import AuthStore from "@/stores/authStore";
import { CampaignKeyType } from "@/types";
import { ICampaign, ICampaignResponse } from "@/types/services";
import { useMutation, useQuery } from "@tanstack/react-query";
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

  const { mutate } = useMutation({
    mutationFn: (id: number) => patchCampaign(id),
    onError: (error) => {
      alert(error);
    },
  });

  const handleChangeSwitch = (id: number) => {
    mutate(id);
  };

  const callRenderer = (obj: ICampaign<String>, key: string) => {
    if (key === "enabled" && typeof obj[key] === "boolean") {
      return (
        <Switch
          defaultValue={obj[key]}
          isDisabled={AuthStore.auth === "Viewer"}
          onClick={() => handleChangeSwitch(obj.id)}
        />
      );
    } else {
      return obj[key as keyof ICampaign<String>];
    }
  };

  if (data === undefined) return null;

  return (
    <div className="flex flex-col gap-2">
      <table className="w-full border-collapse">
        <TableHeader enumObject={CampaignKeyType} />
        <TableBody data={data.content} cellRenderer={callRenderer} />
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
