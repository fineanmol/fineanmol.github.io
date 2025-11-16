import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

export function Modal({ content, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="modal-header">
          <span className="modal-day">Day {content.day}</span>
          <h2 className="modal-title">{content.title}</h2>
          <p className="modal-description">{content.description}</p>
        </div>

        <div className="code-block">
          <div className="code-header">
            <span className="code-language">{content.language}</span>
            <button
              onClick={handleCopy}
              className="copy-button"
              aria-label="Copy code"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="code-content">
            <code>{content.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

