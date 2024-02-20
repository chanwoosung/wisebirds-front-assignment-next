"use client";

import Pagination from "@/components/Pagenation";
import TableBody from "@/components/Table/Body";
import { TableHeader } from "@/components/Table/Header";
import { getUsers } from "@/lib/services/users";
import { IUser, IUsersResponse, UserTableHeader } from "@/types/services";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function User() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currnetPage = searchParams.get("page") ?? 1;
  const dataSize = searchParams.get("size") ?? 25;

  const { data } = useQuery<IUsersResponse>({
    queryKey: ["users", currnetPage, dataSize],
    queryFn: () =>
      getUsers({
        page: Number(currnetPage),
        size: Number(dataSize),
      }),
  });

  const callRenderer = (obj: IUser, key: string) => {
    if (key === "edit") {
      return (
        <div className="w-full flex justify-center">
          <Link
            href={`${pathname}/patch?id=${obj.id}&currnetPage=${currnetPage}&dataSize=${dataSize}`}
            className="w-fit border-2 p-4 border-gray-100"
          >
            수정
          </Link>
        </div>
      );
    }
    return <span>{obj[key as keyof IUser].toString()}</span>;
  };

  if (data === undefined) return null;

  return (
    <>
      <div className="flex flex-col gap-2">
        <Link
          href={`${pathname}/upload`}
          className="w-fit border-2 p-4 border-gray-100"
        >
          등록
        </Link>
        <div className="flex flex-col gap-2">
          <table className="w-full border-collapse">
            <TableHeader enumObject={UserTableHeader} />
            <TableBody data={data.content} cellRenderer={callRenderer} />
          </table>
          <div>
            <Pagination
              currentPage={Number(currnetPage)}
              totalPages={data?.total_pages}
            />
          </div>
        </div>
      </div>
    </>
  );
}
