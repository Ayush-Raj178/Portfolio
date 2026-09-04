import axios from 'axios';

const DOWNLOAD_TIMEOUT_MS = 15000;

const sanitizeFilename = (filename, fallbackFilename) => {
  const safeFilename = filename?.trim().replace(/^['"]|['"]$/g, '').split(/[\\/]/).pop();
  return safeFilename || fallbackFilename;
};

export const extractDownloadFilename = (contentDisposition, fallbackFilename) => {
  if (!contentDisposition) return fallbackFilename;

  const encodedMatch = contentDisposition.match(/filename\*\s*=\s*(?:UTF-8'')?([^;]+)/i);
  if (encodedMatch?.[1]) {
    try {
      return sanitizeFilename(decodeURIComponent(encodedMatch[1].trim()), fallbackFilename);
    } catch (error) {
      return sanitizeFilename(encodedMatch[1], fallbackFilename);
    }
  }

  const filenameMatch = contentDisposition.match(/filename\s*=\s*("[^"]+"|'[^']+'|[^;]+)/i);
  return sanitizeFilename(filenameMatch?.[1], fallbackFilename);
};

const getDownloadErrorMessage = (error) => {
  if (error.code === 'ECONNABORTED') {
    return 'The resume service timed out. Please try again.';
  }
  if (!error.response) {
    return 'The resume service is unavailable. Please try again shortly.';
  }
  return `The resume could not be downloaded (HTTP ${error.response.status}). Please try again.`;
};

export const downloadFile = async (url, fallbackFilename) => {
  let downloadUrl;
  let link;

  try {
    const response = await axios.get(url, {
      responseType: 'blob',
      timeout: DOWNLOAD_TIMEOUT_MS,
    });

    const contentType = response.headers['content-type'] || response.data?.type || 'application/pdf';
    const blob = response.data instanceof Blob
      ? response.data
      : new Blob([response.data], { type: contentType });

    if (!blob.size) {
      throw new Error('The resume service returned an empty file.');
    }

    const filename = extractDownloadFilename(
      response.headers['content-disposition'],
      fallbackFilename
    );

    downloadUrl = window.URL.createObjectURL(blob);
    link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    return {
      filename,
      size: blob.size,
      status: response.status,
      contentType,
    };
  } catch (error) {
    if (error.message === 'The resume service returned an empty file.') throw error;
    throw new Error(getDownloadErrorMessage(error), { cause: error });
  } finally {
    link?.remove();
    if (downloadUrl) {
      window.setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 1000);
    }
  }
};
