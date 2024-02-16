import Menu from "./Menu";
import MyInfo from "./MyInfo/layout";
import NavigationAuthSelect from "./Select";

export default async function Navigation() {
  return (
    <>
      <div className="flex bg-bgSkyBlue h-14 box-content justify-between">
        <div className="flex">
          <Menu />
        </div>
        <div className="flex">
          <MyInfo />
          <NavigationAuthSelect />
        </div>
      </div>
    </>
  );
}
