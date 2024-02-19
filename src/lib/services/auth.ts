export const getAuthme = async () => {
  const res = await fetch("http://localhost:3000/api/auth/me");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
