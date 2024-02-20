"use client";

import { Input } from "@/components/Input";
import Modal from "@/components/Modal";
import { patchUsers } from "@/lib/services/users";
import { IUser, IUsersResponse } from "@/types/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export interface IRequestUserPatch {
  id: number;
  name: string;
  email: string;
}

export default function UserPatchModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userID = searchParams.get("id") ?? 1;
  const currnetPage = searchParams.get("page") ?? 1;
  const dataSize = searchParams.get("size") ?? 25;
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<IRequestUserPatch>();
  const { mutate } = useMutation({
    mutationFn: (params: IRequestUserPatch) => patchUsers(params),
    onSuccess: () => {
      alert("수정되었습니다.");
      handleGoBack();
    },
    onError: () => alert("에러가 발생했습니다."),
  });
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IUsersResponse>([
    "users",
    currnetPage,
    dataSize,
  ]);

  let targetData: IUser | undefined;
  if (data?.content) {
    targetData = data.content.find((elem) => elem.id === Number(userID));
  }

  const handleGoBack = () => router.back();
  const onSubmit = async (data: IRequestUserPatch) => {
    const isValid = await trigger();
    isValid &&
      mutate({
        name: data.name,
        email: targetData?.email ?? "",
        id: Number(userID),
      });
  };

  return (
    <Modal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 text-black"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span>아이디</span>
            <span>{targetData?.email}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>이름</span>
            <Input
              type="text"
              error={errors.name?.message}
              {...register("name", {
                required: {
                  message: "이름을 입력하세요.",
                  value: true,
                },
                validate: (value) => {
                  const regex = /^[a-zA-Z가-힣]{1,16}$/;
                  if (!regex.test(value)) {
                    return "이름을 올바르게 입력하세요. (숫자, 특수문자, 공백 입력 불가)";
                  }
                },
              })}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={handleGoBack}>취소</button>
          <button type="submit">확인</button>
        </div>
      </form>
    </Modal>
  );
}
