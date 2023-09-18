"use client";
import Input from "@/components/Input";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { dopaminecategories } from "@/components/categories/DopamineCategories";
import { useRouter } from "next/navigation";
import axios from "axios";
import DopamineCategoryInput from "@/components/categories/DopamineCategoryInput";
import Button from "@/components/Button";
const BoardUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "all"
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/boards', data).then(() => {
      router.push('/board')
      //나중에 상세페이지 만들어서 이동 경로 만들어주기
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {setIsLoading(false)})
  };
  const category = watch('category');
  const setCustomValue = (id:string, value: any) => {
    setValue(id, value);
  };

  return (
    <>
      <div className=" bg-blue-50">
        <div className="font-bold flex justify-center text-lg pt-10 pb-10">
          게시판 글쓰기 페이지
        </div>
      </div>
      <Container>
      <div className="max-w-screen-lg mx-auto">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Heading title="게시판 글쓰기" subtitle="Dopamine Detox" center={false}/>
        <Input 
        id="title" 
        label="Title" 
        disabled={isLoading} 
        register={register}
        errors={errors}
        required
        />

        <hr/>
        <Input 
        id="description" 
        label="Description" 
        disabled={isLoading} 
        register={register}
        errors={errors}
        required
        />
        <hr/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
            {dopaminecategories.map((item) => (
              <div key={item.label} className="col-span-1">
                <DopamineCategoryInput onClick={(category) => setCustomValue('category', category)} selected={category === item.path} label={item.label} icon={item.icon} path={item.path}/>
              </div>
            ))}
          </div>
          <Button label="글 게시하기" />
          </form>
      </div>
    </Container>
    </>
  );
};

export default BoardUploadPage;
