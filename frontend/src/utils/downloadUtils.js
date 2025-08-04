import axios from 'axios';

export const downloadFile = async (url, filename) => {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'blob', // Important for binary files like PDFs
    });

    // Create a blob from the response data
    const blob = new Blob([response.data], { type: response.headers['content-type'] });
    
    // Create a URL for the blob
    const downloadUrl = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', filename);
    
    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    window.URL.revokeObjectURL(downloadUrl);
    document.body.removeChild(link);
    
    return true;
  } catch (error) {
    console.error('Error downloading file:', error);
    return false;
  }
};
