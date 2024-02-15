"use client";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import ImageUpload from "@/components/ImageUpload";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import dynamic from "next/dynamic";
import { MouseEvent, useState } from "react";
import { Address } from "@/types";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Input from "@/components/shared/Input";
import CategoryInput from "@/components/categories/CategoryInput";
import { mainCategories, subCategories } from "@/constants";
import axios from "axios";
import { Product } from "prisma/generated/client";

interface ProductEditOrUploadProps {
  productId?: string;
  productData?: Product | null;
}

export default function ProductEditOrUpload({ productId, productData }: ProductEditOrUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: productData?.title || "",
      description: productData?.description || "",
      categories: productData?.categories || [],
      latitude: productData?.latitude || 33.5563,
      longitude: productData?.longitude || 126.8,
      address: productData?.address || "",
      addressDetail: productData?.addressDetail || "",
      imageSrc: productData?.imageSrc || [],
      price: productData?.price || 1,
    },
  });
  const onSubmitEdit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .put(`/api/products/${productId}`, data)
      .then((response) => {
        toast.success("상품이 수정되었습니다.");
        router.push(`/products/${response.data.id}`);
      })
      .catch((err) => {
        console.error("상품 수정 중 오류 발생:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/products", data)
      .then((response) => {
        toast.success("상품이 등록되었습니다.");
        router.push(`/products/${response.data.id}`);
      })
      .catch((err) => {
        toast.error("상품 등록에 실패했습니다.");
        console.error("상품 등록 중 오류 발생:", err);
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
  const KakaoMap = dynamic(() => import("@/components/services/KakaoMap"), {
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
  const FirstCategory = mainCategories.find((element) => element.categoryId === categories[0]);
  const SecondCategory = subCategories.find((element) => element.categoryId === categories[1]);

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
  const getLatLng = async (address: string) => {
    const data = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
      {
        headers: {
          Authorization: `KakaoAK 23ee4bf9ccd8241e7a44f29dbd9e80f3`,
        },
      },
    );
    const latitude = parseFloat(data.data.documents[0].y);
    const longitude = parseFloat(data.data.documents[0].x);
    if (!latitude || !longitude) return;
    setValue("latitude", latitude);
    setValue("longitude", longitude);
  };
  const onCompleteAddressSearch = (data: Address) => {
    setValue("address", data.address);
    getLatLng(data.address);
    setIsModalOpen(false);
  };

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
      <div className="mx-auto">
        <form
          className="flex flex-col gap-8"
          onSubmit={productData?.id ? handleSubmit(onSubmitEdit) : handleSubmit(onSubmit)}
        >
          <Heading
            title="상품 업로드"
            subtitle="판매하고 싶은 상품을 업로드 해주세요."
            center={false}
          />
          <ImageUpload
            onChange={(value: string) => setImageSrc([value])}
            imageSrc={imageSrc}
            disabled={imageSrc.length >= 3}
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
          {/* <input type="" /> */}
          <hr />
          <div>
            {categories[0] && FirstCategory?.label} {categories[1] && ">" + SecondCategory?.label}
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
            <input className="w-full h-34 mt-3 pl-3 border" readOnly value={address} />
            <input
              id="addressDetail"
              className="w-full h-34 mt-3 pl-3 border"
              placeholder="상세주소를 입력해주세요."
              {...register("addressDetail", { required: true })}
            />
          </div>
          <hr />
          <KakaoMap setCustomValue={setCustomValue} latitude={latitude} longitude={longitude} />
          {/* 빌드타임이 아닌 런타임에 불러옴 */}

          <Button htmlType="submit">{productData?.id ? "상품 수정" : "상품 업로드"}</Button>
        </form>
      </div>
    </Container>
  );
}
