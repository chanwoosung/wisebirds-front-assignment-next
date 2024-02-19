export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex p-4 ">유저 관리</div>
      {children}
    </div>
  );
}
