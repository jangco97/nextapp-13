"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import KakaoMapCircle from "../KaKaoMapCircle";
const LocationComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [distance, setDistace] = useState(0.05);
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
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <h1>내 위치 정보</h1>
      <p>위도: {location.latitude}</p>
      <p>경도: {location.longitude}</p>
      <button onClick={getLocation}>위치 정보 가져오기</button>
      {distance && <p>{distance * 110}km 범위 내 검색</p>}
      {location?.latitude && location?.longitude && (
        <>
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
            검색하기
          </Link>
          <input
            type="range"
            min="0.05"
            max="0.15"
            step="0.01"
            value={distance}
            onChange={(e) => setDistace(Number(e.target.value))}
          />
          <div>
            <KakaoMapCircle
              latitude={Number(location?.latitude)}
              longitude={Number(location?.longitude)}
              distance={Number(distance)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LocationComponent;
