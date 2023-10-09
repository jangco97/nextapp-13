"use client";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ImageUpload from "@/components/ImageUpload";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import Input from "@/components/Input";
import CategoryInput from "@/components/categories/CategoryInput";
import { mainCategories } from "@/components/categories/Categories";
import { subCategories } from "@/components/categories/Categories";
import dynamic from "next/dynamic";
import React, { MouseEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getSession } from "next-auth/react";
const session = getSession();
console.log(session, "session");
export interface Address {
  address: string;
  zonecode: string;
}
const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      categories: [],
      latitude: 33,
      longitude: 126,
      address: "",
      addressDetail: "",
      imageSrc: [],
      price: 1,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/products", data)
      .then((response) => {
        router.push(`/products/${response.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const imageSrc = watch("imageSrc");
  const categories = watch("categories");
  const latitude = watch("latitude");
  const longitude = watch("longitude");
  const address = watch("address");
  const KakaoMap = dynamic(() => import("../../../components/KakaoMap"), {
    ssr: false,
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value);
  };
  const setCategory = (value: [string, string]) => {
    setValue("categories", [...value]);
  };
  const setImageSrc = (value: [string]) => {
    setValue("imageSrc", [...value, ...imageSrc]);
  };
  const updateImageSrc = (value: string[]) => {
    setValue("imageSrc", [...value]);
  };
  const FirstCategory = mainCategories.find(
    (element) => element.categoryId === categories[0]
  );
  const SecondCategory = subCategories.find(
    (element) => element.categoryId === categories[1]
  );

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleOk = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
  };
  const onCompleteAddressSearch = (data: Address) => {
    setValue("address", data.address);
    getLatLng(data.address);
    setIsModalOpen(false);
  };
  const getLatLng = async (address: string) => {
    const data = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
      {
        headers: {
          Authorization: `KakaoAK 23ee4bf9ccd8241e7a44f29dbd9e80f3`,
        },
      }
    );
    const latitude = parseFloat(data.data.documents[0].y);
    const longitude = parseFloat(data.data.documents[0].x);
    if (!latitude || !longitude) return;
    setValue("latitude", latitude);
    setValue("longitude", longitude);
    console.log(latitude, longitude);
  };
  const isOver = imageSrc.length >= 3;
  return (
    <Container>
      {isModalOpen && (
        <Modal
          title="대한민국 주소"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="확인"
          cancelText="취소"
          footer={[
            <Button key="back" onClick={handleCancel}>
              취소
            </Button>,
            <Button key="submit" onClick={handleOk}>
              확인
            </Button>,
          ]}
        >
          <DaumPostcode onComplete={onCompleteAddressSearch} />
        </Modal>
      )}
      <div className="max-w-screen-lg mx-auto">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Heading
            title="Product Upload"
            subtitle="Upload your product"
            center={false}
          />
          <ImageUpload
            onChange={(value: string) => setImageSrc([value])}
            imageSrc={imageSrc}
            disabled={isOver}
            updateImageSrc={(value: string[]) => updateImageSrc(value)}
          />
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
          <div>
            {categories[0] && FirstCategory?.label}{" "}
            {categories[1] && ">" + SecondCategory?.label}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
            {mainCategories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CategoryInput
                  onClick={(a: string, b: string) => setCategory([a, b])}
                  label={item.label}
                  categoryId={item.categoryId}
                  secondCategory={item.secondCategory}
                />
              </div>
            ))}
          </div>
          <hr />
          <div className="mt-4">
            <label>주소</label>
            <div className="flex ">
              <Button onClick={showModal}>우편번호 검색</Button>
            </div>
            <input
              className="w-full h-34 mt-3 pl-3 border"
              readOnly
              value={address}
            />
            <input
              id="addressDetail"
              className="w-full h-34 mt-3 pl-3 border"
              placeholder="상세주소를 입력해주세요."
              {...register("addressDetail", { required: true })}
            />
          </div>
          <hr />
          <KakaoMap
            setCustomValue={setCustomValue}
            latitude={latitude}
            longitude={longitude}
          />
          {/* 빌드타임이 아닌 런타임에 불러옴 */}
          <Button htmlType="submit">상품 업로드</Button>
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
