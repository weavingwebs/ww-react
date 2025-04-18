import { useState } from 'react';

// IMPORTANT: Always just copy an existing string as a result of a click, never do anything in between (e.g. a query).
export const useCopyToClipboard = () => {
  const [hasCopiedToClipboard, setHasCopiedToClipboard] = useState(false);

  const _handleCopy = async (text: string) => {
    if (typeof navigator.clipboard === 'undefined') {
      throw new Error(
        'Your browser does not support this action. Please upgrade to a modern browser before trying again.'
      );
    }
    return navigator.clipboard.writeText(text);
  };

  const copyToClipboard = (text: string) => {
    _handleCopy(text)
      .then(() => setHasCopiedToClipboard(true))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        // eslint-disable-next-line no-alert
        alert(
          `Sorry, this action has failed. ${err.message}.\nAttempting to copy: ${text}`
        );
      });
  };

  const resetCopiedStatus = () => setHasCopiedToClipboard(false);

  return {
    hasCopiedToClipboard,
    copyToClipboard,
    resetCopiedStatus,
  };
};
