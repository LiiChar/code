export default {
  downloadProgressBar(bar) {
    const onDownloadProgress = (progressEvent) => {
      const percent = Math.round(
        (progressEvent.loaded / progressEvent.total) * 100
      );
      bar.update(percent);
      if (percent === 100) {
        bar.stop();
      }
    };
    return{
        onDownloadProgress
    };
  },
  uploadProgressBar(bar) {
    const onUploadProgress = (progressEvent) => {
      const percent = Math.round(
        (progressEvent.loaded / progressEvent.total) * 100
      );
      bar.update(percent);
      if (percent === 100) {
        bar.stop();
      }
    };
    return {
        onUploadProgress
    };
  },
};
