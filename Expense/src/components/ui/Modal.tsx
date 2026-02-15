import React from "react";
import clsx from "clsx";
import { X } from "lucide-react";
import Button from "./Button";

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  bgColor?: string;
  width?: string;
  padding?: string;
  title?: string;
};

const Modal = ({
  children,
  onClose,
  bgColor = "bg-white/10",
  width = "max-w-md",
  padding = "p-6",
  title,
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
          "rounded-2xl w-full shadow-2xl border border-white/20 backdrop-blur-lg",
          bgColor,
          width
        )}
      >
        {(title || onClose) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            {title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
            {onClose && (
              <Button variant="ghost" onClick={onClose} className="p-2">
                <X className="w-5 h-5 text-white" />
              </Button>
            )}
          </div>
        )}
        <div className={padding}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
