import React, { useState, useRef, useEffect } from "react";

type DropdownMenuProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={handleToggle}>{trigger}</div>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-60 bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 z-50">
          <div className="p-2 space-y-1">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
