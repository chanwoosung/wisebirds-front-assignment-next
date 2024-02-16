import { getAuthme } from "@/lib/services";
import { User } from "@/types/services";
import MyInfo from ".";

export default async function MyInfoLayout() {
  const res = (await getAuthme()) as User;
  return (
    <>
      <MyInfo userInfo={res} />
    </>
  );
}
