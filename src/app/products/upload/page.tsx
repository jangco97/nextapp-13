"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ImageUpload from "@/components/ImageUpload";
import Input from "@/components/Input";
import CategoryInput from "@/components/categories/CategoryInput";
import { categories } from "@/components/categories/Categories";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
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
      category: "",
      latitude: 33.5563,
      longitude: 126.8,
      imageSrc: "",
      price: 1,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/products', data).then((response) => {
      router.push(`/products/${response.data.id}`)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {setIsLoading(false)})
  };
  const imageSrc = watch('imageSrc')
  const category = watch('category')
  const latitude = watch('latitude')
  const longitude = watch('longitude')
  const KakaoMap = dynamic(() => import('../../../components/KakaoMap'), {
    ssr: false
  })

  const setCustomValue = (id:string, value: any) => {
    setValue(id, value)
  }
  
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Product Upload" subtitle="Upload your product" center={false}/>
          <ImageUpload onChange={(value) => setCustomValue('imageSrc', value)} value={imageSrc}/>
          <Input
            id="title"
            label="Title"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="description"
            label="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="price"
            label="Price"
            formatPrice
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
            {categories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CategoryInput onClick={(category) => setCustomValue('category', category)} selected={category === item.path} label={item.label} icon={item.icon} path={item.path}/>
              </div>
            ))}
          </div>
          <hr />
          <KakaoMap setCustomValue={setCustomValue} latitude={latitude} longitude={longitude}/> 
          {/* 빌드타임이 아닌 런타임에 불러옴 */}
          <Button label="상품 업로드" />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
