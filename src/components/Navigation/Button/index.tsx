import { INavButtonProps } from "@/types";
import Link from "next/link";

export default function NavigationButton({ link, name }: INavButtonProps) {
  return (
    <>
      <Link
        href={link}
        prefetch
        className="flex justify-center flex-col p-4 box-content hover:bg-bgSelectBlue"
      >
        {name}
      </Link>
    </>
  );
}
