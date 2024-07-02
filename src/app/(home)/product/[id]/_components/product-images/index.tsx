"use client";

import { ZoomableImage } from "@/components";
import { ImgLeftArrowIcon, ImgRightArrowIcon } from "@/icons";
import Image from "next/image";
import { FC, ReactNode, useState } from "react";

type ProductImagesProps = {
  images: string[] | ReactNode[];
  altPrefix: string;
  className?: string;
  defaultIndex?: number;
};

const ProductImages: FC<ProductImagesProps> = ({
  className = "",
  altPrefix,
  defaultIndex = 0,
  images,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  return (
    <div
      className={`
        gap-x-8
        flex
        ${className}
      `}
    >
      <div
        className="
          flex-[1]
          flex
          max-sm:hidden
          flex-col
          grow
          overflow-y-auto
          scrollbar-hide
          gap-y-8
        "
      >
        {images.map((imageLocation, index) => {
          const active = index === activeIndex;

          return (
            <div
              onClick={() => {
                setActiveIndex(index);
              }}
              key={index}
              className={`
                relative
                ${
                  active
                    ? `
                    pointer-events-none
                  `
                    : `
                    cursor-pointer
                    `
                }
              `}
            >
              <div
                className={`
                  absolute
                  top-0
                  right-0
                  left-0
                  bottom-0
                  bg-black/50
                  transition-all
                  duration-200
                  ease-in-out
                  z-20
                  ${
                    active
                      ? `
                      opacity-100
                    `
                      : `
                    opacity-0
                    `
                  }
                `}
              />
              {
                typeof imageLocation === "string" ? (
              <Image
                priority
                alt={`${altPrefix}-${index}`}
                src={imageLocation}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
                ) : (
                imageLocation
                )
              }
            </div>
          );
        })}
      </div>
      <div
        className="
          flex-[3]
          relative
          max-sm:grow
          h-full
        "
      >
        {
          typeof images[activeIndex] === "string" ? (
        <ZoomableImage
          className="
            max-sm:grow
          "
          zoomLevel={1.1}
          src={images[activeIndex]}
        />
          ) : (
          images[activeIndex]
          )
        }
        <span
          onClick={() =>
            setActiveIndex(
              activeIndex === images.length - 1 ? 0 : activeIndex + 1,
            )
          }
          className="
            sm:hidden
            z-10
            absolute
            right-1
            rounded-full
            bg-white
            top-1/2
            p-1
            -translate-y-1/2
          "
        >
          <ImgRightArrowIcon fill="black" width={24} height={24} />
        </span>
        <span
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? images.length - 1 : activeIndex - 1,
            )
          }
          className="
            sm:hidden
            p-1
            rounded-full
            bg-white
            absolute
            z-10
            left-1
            top-1/2
            -translate-y-1/2
          "
        >
          <ImgLeftArrowIcon fill="black" width={24} height={24} />
        </span>
      </div>
    </div>
  );
};

export default ProductImages;
