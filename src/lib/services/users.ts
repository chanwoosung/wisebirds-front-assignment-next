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

export const patchCampaign = async (id: number) => {
  return await fetch(`http://localhost:3000/api/campaign?id=${id}`, {
    method: "PATCH",
  });
};
