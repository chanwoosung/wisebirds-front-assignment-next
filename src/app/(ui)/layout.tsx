"use client";

import AuthStore from "@/stores/authStore";
import { observer } from "mobx-react-lite";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default observer(function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (AuthStore.auth !== "Admin") {
      if (pathname.startsWith("/user")) {
        router.replace("/");
      }
    }
  }, [AuthStore.auth, pathname]);
  return <>{children}</>;
});
