"use client";
import { User } from "@/types/services";
import { useState } from "react";

export default function MyInfo({ userInfo }: { userInfo: User }) {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div
        className="flex justify-center flex-col p-4 box-content hover:bg-bgSelectBlue cursor-pointer"
        onClick={handleToggle}
      >
        {userInfo.email}
      </div>
      <div
        className={
          toggle
            ? "flex flex-col gap-2 absolute translate-y-14 p-4 bg-slate-300 rounded-md"
            : "flex-col hidden p-4"
        }
      >
        <span>{userInfo.company.name}</span>
        <span>{userInfo.email}</span>
        <span>{userInfo.name} </span>
      </div>
    </>
  );
}
