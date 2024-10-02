import { useState } from "react";

export function useCopyMessage() {
  const [copySuccess, setCopySuccess] = useState('');

  function showMessage(message, duration = 3000) {
    setCopySuccess(message);
    setTimeout(() => {
      setCopySuccess('');
    }, duration);
  }

  return { copySuccess, showMessage };
}