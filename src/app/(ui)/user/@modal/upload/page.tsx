"use client";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal";
import { postUsers } from "@/lib/services/users";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export interface IRequestUserUpload {
  name: string;
  email: string;
  password: string;
  repeat_password: string;
}

export default function UserUploadModal() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
  } = useForm<IRequestUserUpload>();
  console.log(errors, isValid, watch("email"));

  const handleGoBack = () => router.back();

  const { mutate } = useMutation({
    mutationFn: (params: IRequestUserUpload) => postUsers(params),
    onSuccess: () => handleGoBack(),
    onError: () =>
      setError("email", {
        message: "이미 사용중인 이메일입니다. 다른 이메일을 입력하세요.",
      }),
  });

  const onSubmit = (data: IRequestUserUpload) => {
    console.log(data);
    mutate(data);
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
            <Input
              type="text"
              error={errors.email?.message}
              {...register("email", {
                required: {
                  message: "아이디(이메일)을 입력하세요",
                  value: true,
                },
                minLength: {
                  message: "올바른 이메일 주소를 입력하세요.",
                  value: 9,
                },
                maxLength: {
                  message: "올바른 이메일 주소를 입력하세요.",
                  value: 50,
                },
                validate: (value) => {
                  const regex =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (!regex.test(value?.toString() ?? "")) {
                    return "올바른 이메일 주소를 입력하세요.";
                  }
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span>비밀번호</span>
            <Input
              type="password"
              error={errors.password?.message}
              placeholder="비밀번호를 입력하세요."
              {...register("password", {
                validate: (value) => {
                  const regex =
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
                  if (!regex.test(value)) {
                    return "8~15자 영문, 숫자, 특수문자를 사용하세요.";
                  }
                },
                required: {
                  message: "비밀번호를 입력하세요.",
                  value: true,
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span>비밀번호 확인</span>
            <Input
              type="password"
              error={errors.repeat_password?.message}
              placeholder="비밀번호를 입력하세요."
              {...register("repeat_password", {
                validate: (value) => {
                  if (value !== watch("password"))
                    return "비밀번호가 일치하지 않습니다.";
                },
                required: {
                  message: "비밀번호를 입력하세요.",
                  value: true,
                },
              })}
            />
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
                  const regex = /^[a-zA-Z0-9!@#$%^&*()-_+=]{1,16}$/;
                  if (!regex.test(value?.toString() ?? "")) {
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
