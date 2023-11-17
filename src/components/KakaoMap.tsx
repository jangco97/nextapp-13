import Link from "next/link";
import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  address?: string;
  latitude: number;
  longitude: number;
  setCustomValue?: (id: string, value: number) => void;
  detailPage?: boolean;
}

const KakaoMap = ({
  address,
  latitude,
  longitude,
  setCustomValue,
  detailPage = false,
}: KakaoMapProps) => {
  const [isBigger, setIsBigger] = useState(false);
  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    if (detailPage || isBigger) return;
    setCustomValue!("latitude", mouseEvent.latLng.getLat());
    setCustomValue!("longitude", mouseEvent.latLng.getLng());
  };

  const handleToggleSize = () => {
    setIsBigger(!isBigger);
  };

  const mapStyle = isBigger
    ? {
        width: "100%",
        height: "1024px",
      }
    : {
        width: "100%",
        height: "500px",
      };

  return (
    <div>
      {isBigger && (
        <button
          className="w-full sticky top-10 right-10 p-2 bg-gray-500 hover:bg-indigo-600/50"
          onClick={handleToggleSize}
        >
          X
        </button>
      )}

      <Map
        center={{ lat: latitude, lng: longitude }}
        style={mapStyle as any}
        onClick={(_, mouseEvent) => handleClick(mouseEvent)}
      >
        <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
      </Map>

      {!isBigger && (
        <button
          onClick={handleToggleSize}
          className=" w-4/12 p-2 mr-5 rounded-lg mt-10 bg-gray-500 hover:bg-indigo-600/50 text-gray-100 text-center"
        >
          지도확장
        </button>
      )}
      {address && (
        <button className=" w-4/12 p-2 rounded-lg mt-10 bg-gray-500 hover:bg-indigo-600/50 text-gray-100 text-center">
          <a
            href={`https://map.kakao.com/link/map/${address},${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            큰지도보기
          </a>
        </button>
      )}
    </div>
  );
};

export default KakaoMap;
