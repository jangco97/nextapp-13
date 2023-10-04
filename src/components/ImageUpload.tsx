import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React from "react";
import { TbPhotoPlus } from "react-icons/tb";
interface ImageUploadProps {
  onChange: (value: string) => void;
  imageSrc: string[];
  disabled?: boolean;
  updateImageSrc: (value: string[]) => void;
}

const ImageUpload = ({
  onChange,
  imageSrc,
  disabled,
  updateImageSrc,
}: ImageUploadProps) => {
  const handleUpload = (result: any) => {
    onChange(result.info.secure_url);
    console.log(result.info.secure_url, "imageTEST");
  };
  console.log(imageSrc, "localImageTEST");
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const handleDelete = (image: string) => {
    const currentIndex = imageSrc.indexOf(image);
    let newImages = [...imageSrc];
    newImages.splice(currentIndex, 1);
    updateImageSrc(newImages);
  };
  return (
    <>
      <div className="flex justify-center">
        <CldUploadWidget
          onUpload={handleUpload}
          uploadPreset={uploadPreset}
          options={{ maxFiles: 3 }}
        >
          {({ open }) => {
            return (
              <div
                onClick={() => open?.()}
                className="relative flex flex-col items-center justify-center overflow-hidden gap-4 h-[40vh] w-[30vw] p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-300"
              >
                <TbPhotoPlus size={50} />

                <>
                  {imageSrc[0] && (
                    <div className="w-full h-full">
                      <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={imageSrc[0]}
                        alt="1"
                      />
                    </div>
                  )}
                </>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>
      <div className="flex-grow h-[300px] border flex  items-center justify-center">
        {imageSrc.map((image, index) => (
          <div key={index} onClick={() => handleDelete(image)}>
            <Image width={300} height={300} src={image} alt={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUpload;
