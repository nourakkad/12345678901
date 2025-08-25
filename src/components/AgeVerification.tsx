import React from 'react';
import './AgeVerification.css';

interface AgeVerificationProps {
  onVerify: (isOver18: boolean) => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  return (
    <div className="age-verification-overlay">
      <div className="age-verification-modal">
        <h1 className="age-verification-title">AGE VERIFICATION</h1>
        <p className="age-verification-subtitle">
        Ready to begin the journey ?
        if you are 18 or older, then click Yes.
        if you are under 18, then click No.
        </p>
        <div className="age-verification-buttons">
          <button 
            className="age-verification-btn yes"
            onClick={() => onVerify(true)}
          >
            Yes
          </button>
          <button 
            className="age-verification-btn no"
            onClick={() => onVerify(false)}
          >
            No
          </button>
        </div>
        <p className="age-verification-disclaimer">
          By entering this site, you acknowledge that you are of legal drinking age 
          and agree to our terms of service and privacy policy.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification; 