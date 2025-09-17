import { useState } from 'react';

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copyToClipboard = (text: string) => {
    if (copied) return;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        setCopyError(true);
        setTimeout(() => setCopyError(false), 2000);
      });
  };

  return { copied, copyToClipboard, copyError };
};

export default useCopyToClipboard;
