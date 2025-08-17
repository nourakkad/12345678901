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
          You must be 18 years or older to view this content. 
          Please confirm your age to continue.
        </p>
        <div className="age-verification-buttons">
          <button 
            className="age-verification-btn yes"
            onClick={() => onVerify(true)}
          >
            I am 18 or older
          </button>
          <button 
            className="age-verification-btn no"
            onClick={() => onVerify(false)}
          >
            I am under 18
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