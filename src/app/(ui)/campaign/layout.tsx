export default function CampaignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex p-4 ">캠페인 관리</div>
      {children}
    </div>
  );
}
