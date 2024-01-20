"use client";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import KakaoMapCircle from "../services/KaKaoMapCircle";
import { Modal, Button } from "antd";
const LocationComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [distance, setDistace] = useState(0.05);
  const [isClicked, setIsCliked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useSearchParams();
  let currentQuery = {};
  if (params) {
    currentQuery = qs.parse(params?.toString()); //{'category' : 'interior', 'page' : '2'}
  }

  const showPosition = (position: any) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const showError = (error: any) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("사용자가 위치 공유를 거부했습니다.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("위치 정보를 사용할 수 없습니다.");
        break;
      case error.TIMEOUT:
        alert("위치 정보를 가져오는 데 시간이 초과되었습니다.");
        break;
      case error.UNKNOWN_ERROR:
        alert("알 수 없는 오류가 발생했습니다.");
        break;
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      return true;
    } else {
      alert("Geolocation is not supported by this browser.");
      return false;
    }
  };

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="flex gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => {
          const response = getLocation();
          if (response) {
            setIsModalOpen(true);
          }
        }}
      >
        <FaMapLocationDot />
        위치 정보기반 검색
      </button>
      {location?.latitude && location?.longitude && isModalOpen && (
        <Modal
          title="위치 정보기반 검색"
          open={true}
          onCancel={handleCancel}
          cancelText="취소"
          footer={[
            <Button key="back" onClick={handleCancel}>
              취소
            </Button>,
          ]}
        >
          <Link
            href={{
              query: {
                ...currentQuery,
                latitude: Number(location?.latitude),
                longitude: Number(location?.longitude),
                distance: Number(distance),
              },
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              검색하기
            </button>
            {distance && <p>{distance * 110}km 범위 내 검색</p>}
          </Link>
          <div>
            {" "}
            <div className="flex justify-between">
              <span>5.5km</span>
              <span>12.5km</span>
              <span>22km</span>
            </div>{" "}
            <input
              type="range"
              min="0.05"
              max="0.20"
              step="0.01"
              value={distance}
              className="w-full"
              onChange={(e) => setDistace(Number(e.target.value))}
            />
          </div>
          {isClicked ? (
            <button
              className="bgap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => setIsCliked(false)}
            >
              지도 닫기
            </button>
          ) : (
            <button
              className="gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={(prev) => setIsCliked(true)}
            >
              지도 켜기
            </button>
          )}{" "}
          <div className="w-full">
            <KakaoMapCircle
              latitude={Number(location?.latitude)}
              longitude={Number(location?.longitude)}
              distance={Number(distance)}
              isClicked={isClicked}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LocationComponent;
