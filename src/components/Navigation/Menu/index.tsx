"use client";
import AuthStore from "@/stores/authStore";
import { Router } from "@/types";
import { observer } from "mobx-react-lite";
import NavigationButton from "../Button";

export default observer(function Menu() {
  return (
    <>
      {Object.keys(Router).map((key) => {
        if (key === "사용자" && AuthStore.auth !== "Admin") return;
        return (
          <NavigationButton
            key={key}
            link={Router[key as keyof typeof Router]}
            name={key}
          />
        );
      })}
    </>
  );
});
