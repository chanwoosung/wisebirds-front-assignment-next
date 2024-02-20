import { IRequestUserPatch } from "@/app/(ui)/user/@modal/patch/page";
import { IRequestUserUpload } from "@/app/(ui)/user/@modal/upload/page";

export const getUsers = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  console.log("page:", page, size);
  const res = await fetch(
    `http://localhost:3000/api/users?page=${page}&size=${size}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const postUsers = async (params: IRequestUserUpload) => {
  return await fetch(`http://localhost:3000/api/users`, {
    method: "POST",
    body: JSON.stringify(params),
  });
};

export const patchUsers = async (params: IRequestUserPatch) => {
  return await fetch(`http://localhost:3000/api/users/${params.id}`, {
    method: "PATCH",
    body: JSON.stringify(params),
  });
};
