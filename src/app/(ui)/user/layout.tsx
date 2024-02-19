export default function UserLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex p-4 ">유저 관리</div>
        {children}
      </div>
      {modal}
    </>
  );
}
