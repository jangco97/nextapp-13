"use client";
import React, { useState } from "react";
import Input from "@/components/shared/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Container from "@/components/shared/Container";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    signIn("credentials", {
      redirect: false,
      email: body.email,
      password: body.password,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error("로그인 실패!");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("로그인 성공!");
          router.push("/");
          router.refresh();
        }
      })
      .finally(() => setIsLoading(false));
  };
  // const handleSocialLogin = async (action: string) => {
  //   setIsLoading(true);
  //   signIn(action, { redirect: false })
  //     .then((callback) => {
  //       if (callback?.error) {
  //         toast.error("Invalid credentials");
  //       }
  //       if (callback?.ok && !callback?.error) {
  //         toast.success("Login success");
  //         router.push("/");
  //       }
  //     })
  //     .finally(() => setIsLoading(false));
  // };
  return (
    <Container>
      <section className="grid h-[calc(100vh_-_56px)] place-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4 min-w-[350px]"
        >
          <h1 className="text-2xl">로그인</h1>
          <Input
            id="email"
            type="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Button label="Login" />
          <hr />
          <div className="text-center">
            <p className="text-gray-400">
              You do not have an account?{" "}
              <Link
                href={"/auth/register"}
                className=" text-blue-500 hover:underline"
              >
                register
              </Link>
            </p>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default LoginPage;
