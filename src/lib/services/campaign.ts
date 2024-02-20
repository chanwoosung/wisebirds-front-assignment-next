export const getCampaign = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  const res = await fetch(
    `http://localhost:3000/api/campaign?page=${page}&size=${size}`
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
