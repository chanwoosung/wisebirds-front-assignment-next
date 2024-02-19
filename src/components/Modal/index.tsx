"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose?: () => void;
}) {
  const router = useRouter();

  const handleClose = () => {
    onClose?.();
    router.back();
  };

  if (typeof window === undefined) {
    return null;
  }

  return createPortal(
    <>
      <div
        className="left-1/2
                        max-w-90/100
                        fixed
                        top-1/2
                        transform
                        -translate-x-1/2
                        -translate-y-1/2
                        w-80
                        text-left
                        max-h-90vh
                        overflow-y-auto
                        flex
                        flex-col
                        z-[1000]
                        black
                        shadow-md
                        bg-white
                        p-4
                        rounded-lg"
      >
        {children}
      </div>
      <div
        className="fixed
                    top-0
                    left-0
                    right-0
                    bottom-0
                    bg-black/[0.4]
                    z-[999]"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClose();
        }}
      />
    </>,
    document.body
  );
}
