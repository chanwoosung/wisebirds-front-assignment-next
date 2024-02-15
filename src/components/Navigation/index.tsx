import { Router } from "@/types";
import NavigationButton from "./Button";
import MyInfo from "./MyInfo";

export default function Navigation() {
  return (
    <>
      <div className="flex bg-bgSkyBlue h-14 box-content justify-between">
        <div className="flex">
          {Object.keys(Router).map((key) => {
            return (
              <NavigationButton
                link={Router[key as keyof typeof Router]}
                name={key}
              />
            );
          })}
        </div>
        <div className="flex">
          <MyInfo />
        </div>
      </div>
    </>
  );
}
