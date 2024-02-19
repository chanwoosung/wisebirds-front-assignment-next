export default function UserLayout(props: any) {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex p-4 ">유저 관리</div>
        {props.children}
      </div>
      {props.modal}
    </>
  );
}
