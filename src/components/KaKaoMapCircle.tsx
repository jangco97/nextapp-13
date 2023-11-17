import React, { useState, useRef } from "react";
import { Map, MapMarker, Circle } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  distance: number;
  latitude: number;
  longitude: number;
}

const KakaoMapCircle = ({ distance, latitude, longitude }: KakaoMapProps) => {
  const mapRef = useRef<kakao.maps.Map>(null);
  const defaultLevel = 3;
  const [level, setLevel] = useState(defaultLevel);
  const handleLevel = (type: "increase" | "decrease") => {
    const map = mapRef.current;
    if (!map) return;

    if (type === "increase") {
      map.setLevel(map.getLevel() + 1);
      setLevel(map.getLevel());
    } else {
      type === "decrease";
      map.setLevel(map.getLevel() - 1);
      setLevel(map.getLevel());
    }
  };
  return (
    <div className="flex justify-center">
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{
          // 지도의 크기
          width: "80%",
          height: "600px",
        }}
        level={defaultLevel} // 지도의 확대 레벨
        zoomable={true}
        ref={mapRef}
      >
        <Circle
          center={{
            lat: latitude,
            lng: longitude,
          }}
          radius={distance * 110000}
          strokeWeight={5} // 선의 두께입니다
          strokeColor={"#75B8FA"} // 선의 색깔입니다
          strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"dash"} // 선의 스타일 입니다
          fillColor={"#CFE7FF"} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />
        <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
        <p>
          <button onClick={() => handleLevel("decrease")}>지도레벨 - 1</button>{" "}
          <button onClick={() => handleLevel("increase")}>지도레벨 + 1</button>{" "}
          <span id="maplevel">현재 지도 레벨은 {level} 레벨 입니다.</span>
        </p>
      </Map>
    </div>
  );
};

export default KakaoMapCircle;
