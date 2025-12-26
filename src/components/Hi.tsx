// src/components/Hi.tsx
import React from "react";


interface HiProps {
  children: React.ReactNode;
}

const Hi: React.FC<HiProps> = ({ children }) => {
  const handleAlertDismiss = () => {
    alert("EC21033 - Ishini Senarathna clicked the close button!");
  };

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleAlertDismiss}
      ></button>
    </div>
  );
};

export default Hi;
