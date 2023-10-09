"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/Button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Container from "@/components/Container";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register", body);
      console.log(data);
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong!");
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
          <h1 className="text-2xl">Register</h1>
          <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="name"
            label="Name"
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
