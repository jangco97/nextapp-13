"use client";
import Input from "@/components/Input";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { dopaminecategories } from "@/components/categories/DopamineCategories";
import DopamineCategoryInput from "@/components/categories/DopamineCategoryInput";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Params {
  boardId?: string
}

const BoardModifyPage = async ({params}: {params: Params}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const boardId = params.boardId
  console.log(boardId)
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
    console.log(data)
      axios.put(`/api/boards/${boardId}`, data).then(() => {
        router.push(`/board/${boardId}`)
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
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/boards/${boardId}`);
      console.log(response)

      if (response) {
        // 데이터가 null이 아닌 경우에만 폼 필드에 설정
        setValue("title", response.data.title || "");
        setValue("description", response.data.description || "");
        setValue("category", response.data.category || "all");
      }
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (boardId) {
      fetchData();
    }
  }, [boardId]);

  return (
    <>
      <div className=" bg-blue-50">
        <div className="font-bold flex justify-center text-lg pt-10 pb-10">
          게시판 수정 페이지
        </div>
      </div>
      <Container>
      <div className="max-w-screen-lg mx-auto">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Heading title="게시판 수정하기" subtitle="Dopamine Detox" center={false}/>
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
          <Button label="글 수정하기" />
          </form>
      </div>
    </Container>
    </>
  );
};

export default BoardModifyPage;
