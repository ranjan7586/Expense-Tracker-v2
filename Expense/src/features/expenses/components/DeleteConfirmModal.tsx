import React from "react";
import Button from "@/components/ui/Button";
import { X, AlertTriangle } from "lucide-react";

type Props = {
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteConfirmModal: React.FC<Props>= ({ onConfirm, onCancel, title, message }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-gray-800/20 rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-lg">
        <div className="px-6 py-4">
          <div className="flex items-start">
            <div className="mr-4">
              <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="text-sm text-white/70 mt-1">{message}</p>
            </div>
            <Button
              variant="ghost"
              onClick={onCancel}
              className="p-2 -mt-2 -mr-2"
            >
              <X className="w-5 h-5 text-white/70" />
            </Button>
          </div>
        </div>
        <div className="px-6 py-4 bg-white/5 flex justify-end gap-3">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
