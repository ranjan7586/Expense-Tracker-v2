import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui";

type Props = {
  onClose: () => void;
  onApply: (startDate: string, endDate: string) => void;
};

const CustomDateRangeModal: React.FC<Props> = ({ onClose, onApply }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const handleApply = () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setError("Start date cannot be after end date.");
      return;
    }
    setError("");
    onApply(startDate, endDate);
  };

  return (
    <Modal title="Select Custom Range" onClose={onClose} bgColor="bg-black/60">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="block text-sm font-medium text-white/80 mb-2">
              Start Date
            </label>
            {/* Using style={{ colorScheme: 'dark' }} ensures the native calendar picker icon looks good on dark backgrounds */}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
              style={{ colorScheme: "dark" }}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-white/80 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
              style={{ colorScheme: "dark" }}
            />
          </div>
        </div>

        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}

        <div className="pt-4 border-t border-white/10 flex justify-end gap-4 mt-6">
          <Button
            variant="primary"
            className="bg-white/70 hover:bg-white"
            onClick={handleApply}
          >
            Apply Range
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomDateRangeModal;
