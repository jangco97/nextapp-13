"use client";
import RegisterInput from "@/components/shared/RegisterInput";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Button from "@/components/shared/Button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Container from "@/components/shared/Container";
import { EMAIL_REGEX, PASSWORD_REGEX, NotSpecial_REGEX } from "@/constants";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register", body);
      toast.success("회원가입이 완료되었습니다.");
      router.push("/auth/login");
    } catch (error) {
      toast.error("회원가입에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <section className="grid h-[calc(100vh_-_56px)] place-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4 min-w-[350px]"
        >
          <h1 className="text-2xl">회원가입</h1>
          <RegisterInput
            label="Email"
            type="email"
            disabled={isLoading}
            register={register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: EMAIL_REGEX,
                message: "이메일 형식이 올바르지 않습니다.",
              },
            })}
          />
          <div className="text-red-500">
            {errors.email && errors.email.message?.toString()}
          </div>
          <RegisterInput
            label="Name"
            type="text"
            disabled={isLoading}
            register={register("name", {
              required: "이름을 입력해주세요.",
              pattern: {
                value: NotSpecial_REGEX,
                message: "특수문자를 포함할 수 없습니다.",
              },
              maxLength: {
                value: 10,
                message: "10자 이내로 입력해주세요.",
              },
            })}
          />
          <div className="text-red-500">
            {errors.name && errors.name.message?.toString()}
          </div>

          <RegisterInput
            label="Password"
            disabled={isLoading}
            type="password"
            register={register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: PASSWORD_REGEX,
                message: "특수문자를 포함 8자 이상 입력해주세요.",
              },
            })}
          />
          <div className="text-red-500">
            {errors.password && errors.password.message?.toString()}
          </div>
          <Button label="Register" />
          <div className="text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href={"/auth/login"}
                className=" text-blue-500 hover:underline"
              >
                login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default RegisterPage;
