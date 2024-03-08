import React, { useState } from "react";

export const useDownload = (url: string, filename: string) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!downloaded) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = url;
      link.download = filename + '.mp3';
      link.click();
      setDownloaded(true);
    }
  };

  return handleDownload;
};