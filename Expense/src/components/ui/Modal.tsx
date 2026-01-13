import React from "react";
import clsx from "clsx";

type Props = {
  width?: string;
  padding?: string;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal = ({
  children,
  onClose,
  width = "max-w-md",
  padding = "p-6",
}: Props) => {
  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div
        className={clsx(
          "bg-white/10 rounded-2xl w-full shadow-2xl border border-white/20 backdrop-blur-lg",
          width,
          padding
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
