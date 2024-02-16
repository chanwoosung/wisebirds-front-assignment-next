"use client";
import AuthStore from "@/stores/authStore";
import { Auth, AuthKey } from "@/types";
import { observer } from "mobx-react-lite";

export default observer(function NavigationAuthSelect() {
  const handleAuthSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    AuthStore.setAuth(e.currentTarget.value as AuthKey);
  };

  return (
    <div className="flex justify-center flex-col p-4 box-content hover:bg-bgSelectBlue cursor-pointer">
      <select
        className="text-black"
        value={AuthStore.auth}
        onChange={handleAuthSelect}
      >
        {(Object.keys(Auth) as Array<keyof typeof Auth>).map((key) => {
          return (
            <option key={key} value={Auth[key]}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
});
