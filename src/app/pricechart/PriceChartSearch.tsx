"use client";
import axios from "axios";
import { watch } from "fs";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
const PriceChartSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [average, setAverage] = useState(0);
  const [highprice, setHighprice] = useState(0);
  const [lowprice, setLowprice] = useState(0);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      chartsearch: "",
    },
  });
  const chartsearch = watch("chartsearch");
  const router = useRouter();
  // const searchdata = async (data: any) => {
  //   setIsLoading(true);
  //   const response = await axios.post("/api/productschart", data);
  //   console.log(data);
  //   console.log(response);
  //   setIsLoading(false);
  // };
  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   setIsLoading(true);
  //   await searchdata(data);
  //   console.log(data);
  //   setIsLoading(false);
  // };
  // const { data } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => searchdata(chartsearch),
  //   enabled: false,
  // });
  const mutation = useMutation({
    mutationFn: (_chartsearch) => {
      return axios({
        method: "post",
        url: "/api/productschart",
        data: {
          chartsearch: _chartsearch,
          Headers: {
            "Content-Type": "application/json",
          },
        },
      }).then((res) => res.data);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      if (data.length > 0) {
        let sum = 0;
        data.map((item: any) => {
          sum += item.price;
        });
        setAverage(sum / data.length);
      }
    },
  });

  return (
    <>
      <div className="flex justify-center">
        <input
          id="chartsearch"
          {...register("chartsearch", { required: true })}
          className="p-[5px] md:p-[10px] border-s-gray-50 text-sm rounded-l-full bg-purple-300/50"
          placeholder="Search"
          disabled={isLoading}
        />
        <button
          className="hover:bg-purple-500 bg-gray-500  border-s-gray-50 cursor-pointer h-[40px] w-[40px] rounded-r-full flex justify-center items-center"
          disabled={isLoading}
          onClick={() => {
            mutation.mutate(chartsearch);
          }}
        >
          <HiMagnifyingGlass className="text-md text-purple-300" />
        </button>
      </div>
      <div className="text-center text-xl text-gray-400 mt-10 ">
        {average > 0 && (
          <>
            <div className="text-2xl text-gray-500">
              {chartsearch}의 평균시세는
            </div>
            <div className="text-3xl text-gray-500">{average}원</div>
          </>
        )}
      </div>
      <div>
        {average > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
            {mutation.data?.map((item: any) => {
              return (
                <div key={item.id}>
                  <div
                    onClick={() => router.push(`/products/${item.id}`)}
                    className="cursor-pointer group"
                  >
                    <div className="w-full gap-2">
                      <div className="relative w-full overflow-hidden aspect-square border-2 border-red-300 rounded-xl ">
                        {" "}
                        <Image
                          src={item.imageSrc[0]}
                          fill
                          sizes="auto"
                          className="object-cover w-full h-full trangition group-hover:scale-110 group-hover:ease-out duration-300"
                          alt="product"
                        />
                      </div>
                      <div className="text-lg font-semibold ">{item.title}</div>
                      <div className="font-light text-neutral-500">{}</div>
                      <div className="flex flex-row justify-between items-center gap-1">
                        <div>
                          {item.price} <span className="font-light">원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default PriceChartSearch;
