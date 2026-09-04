import React, { useEffect, useRef, useState } from 'react';
import { downloadFile } from '../utils/downloadUtils';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

const ResumeButton = ({ children, className = '', compact = false }) => {
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const resetTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  const handleDownload = async () => {
    if (status === 'loading') return;
    window.clearTimeout(resetTimerRef.current);
    setStatus('loading');
    setFeedback('');

    try {
      const result = await downloadFile(
        `${API_BASE_URL}/api/resume/download`,
        'Ayush-Raj-Resume.pdf'
      );
      setStatus('success');
      setFeedback(`Downloaded ${result.filename}`);
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'The resume could not be downloaded. Please try again.');
    } finally {
      resetTimerRef.current = window.setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 5000);
    }
  };

  const buttonContent = status === 'loading'
    ? (compact ? 'Preparing…' : 'Preparing resume…')
    : status === 'success'
      ? 'Downloaded'
      : status === 'error'
        ? (compact ? 'Retry Resume' : 'Resume unavailable — try again')
        : children;

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={handleDownload}
        disabled={status === 'loading'}
        aria-label={compact ? 'Download Ayush Raj resume' : undefined}
        aria-live="polite"
        title={status === 'error' ? feedback : undefined}
      >
        {buttonContent}
      </button>
      {feedback ? (
        <span
          className={`resume-feedback resume-feedback-${status}`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {feedback}
        </span>
      ) : null}
    </>
  );
};

export default ResumeButton;
