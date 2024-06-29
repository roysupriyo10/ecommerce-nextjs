"use client";

import { FC } from "react";

type ZoomableImageProps = {
  src: string;
  zoomLevel: number;
  zoom?: boolean;
  className?: string;
};

const ZoomableImage: FC<ZoomableImageProps> = ({
  zoom = false,
  src,
  zoomLevel,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        h-full
        ${className}
      `}
    >
      <div
        className="
          absolute
          top-0
          right-0
          left-0
          bottom-0
          z-10
          bg-center
          transition-all
          duration-200
          ease-in-out
        "
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onMouseOver={(event) => {
          if (!zoom) return;
          event.currentTarget.style.scale = zoomLevel.toString();
        }}
        onMouseMove={(event) => {
          if (!zoom) return;
          const x = event.clientX - event.currentTarget.offsetLeft;
          const y = event.clientY - event.currentTarget.offsetTop;

          const xPercentage = (x / event.currentTarget.clientWidth) * 100;
          const yPercentage = (y / event.currentTarget.clientHeight) * 100;

          event.currentTarget.style.transformOrigin = `${xPercentage}% ${yPercentage}%`;
        }}
        onMouseOut={(event) => {
          if (!zoom) return;
          event.currentTarget.style.scale = `1`;
        }}
      />
    </div>
  );
};

export default ZoomableImage;
