import { User } from "@/types/services";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/auth/me");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const MyInfo = async () => {
  const res = (await getData()) as User;
  return (
    <>
      <div className="flex justify-center flex-col p-4 box-content hover:bg-bgSelectBlue cursor-pointer">
        {res.email}
      </div>
      <div className="flex flex-col hidden">
        {res.company.name}
        {res.email}
        {res.name}
      </div>
    </>
  );
};

export default MyInfo;
