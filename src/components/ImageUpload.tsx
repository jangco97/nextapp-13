import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

import { TbPhotoPlus } from "react-icons/tb";
interface ImageUploadProps {
  onChange: (value: string) => void;
  imageSrc: string[];
  disabled?: boolean;
  updateImageSrc: (value: string[]) => void;
}

const ImageUpload = ({ onChange, imageSrc, disabled, updateImageSrc }: ImageUploadProps) => {
  const handleUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
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
                className="relative mb-10 flex flex-col items-center justify-center overflow-hidden gap-4 h-[40vh] w-[50vw]  transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-300"
              >
                {<TbPhotoPlus size={50} />}

                <>
                  {imageSrc[0] && (
                    <div className="w-full h-full">
                      <Image fill src={imageSrc[0]} alt="image" />
                    </div>
                  )}
                </>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>
      <div className="flex-grow h-[300px] border-2 flex  items-center justify-evenly">
        {imageSrc.map((image, index) => (
          <div key={index} onClick={() => handleDelete(image)}>
            <Image width={150} height={150} src={image} alt={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUpload;
