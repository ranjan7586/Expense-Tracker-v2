// src/components/GlobalLoader.tsx
import React from 'react';

const GlobalLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4b6ded]/30 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-[#00e1c3] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default GlobalLoader;