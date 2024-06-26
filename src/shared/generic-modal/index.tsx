"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { ImgCloseIcon } from "@/icons";

type GenericModalProps = {
  isOpen: boolean;
  children: ReactNode;
  hasCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
  scrollIntoView?: any;
};

const GenericModal: FC<GenericModalProps> = ({
  onClose,
  hasCloseButton,
  children,
  scrollIntoView,
  isOpen = false,
  className = "",
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [scrollIntoView]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!modalRef.current) return;

    if (isModalOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isModalOpen]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (!modalRef.current) return;

    modalRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      if (!modalRef.current) return;

      modalRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleCloseModal = function () {
    if (onClose) onClose();

    document.body.style.overflow = "auto";

    setIsModalOpen(false);
  };

  return (
    <dialog
      ref={modalRef}
      className="
        generic-modal
        rounded-xl
      "
    >
      <section
        ref={sectionRef}
        className={`
          w-full
          py-6
          lg:px-10
          px-6
          relative
          ${className}
        `}
      >
        {hasCloseButton && (
          <button
            className="
              top-6
              self-end
              z-[9999]
              right-6
            "
            onClick={handleCloseModal}
          >
            <ImgCloseIcon fill="black" />
          </button>
        )}
        {children}
      </section>
    </dialog>
  );
};
export default GenericModal;
