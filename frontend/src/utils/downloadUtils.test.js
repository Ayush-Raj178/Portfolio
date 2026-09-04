import axios from 'axios';
import { downloadFile, extractDownloadFilename } from './downloadUtils';

jest.mock('axios', () => ({ get: jest.fn() }));

describe('resume download utilities', () => {
  const anchorClick = jest.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

  beforeEach(() => {
    jest.useFakeTimers();
    axios.get.mockReset();
    anchorClick.mockClear();
    Object.defineProperty(window.URL, 'createObjectURL', {
      configurable: true,
      value: jest.fn(() => 'blob:resume'),
    });
    Object.defineProperty(window.URL, 'revokeObjectURL', {
      configurable: true,
      value: jest.fn(),
    });
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  afterAll(() => anchorClick.mockRestore());

  it('extracts standard and encoded filenames with a safe fallback', () => {
    expect(extractDownloadFilename('attachment; filename="Ayush-Raj-Resume.pdf"', 'resume.pdf'))
      .toBe('Ayush-Raj-Resume.pdf');
    expect(extractDownloadFilename("attachment; filename*=UTF-8''Ayush%20Raj.pdf", 'resume.pdf'))
      .toBe('Ayush Raj.pdf');
    expect(extractDownloadFilename(null, 'resume.pdf')).toBe('resume.pdf');
  });

  it('creates, clicks, removes, and revokes a temporary download link', async () => {
    axios.get.mockResolvedValue({
      data: new Blob(['%PDF-1.7'], { type: 'application/pdf' }),
      headers: {
        'content-type': 'application/pdf',
        'content-disposition': 'attachment; filename="Ayush-Raj-Resume.pdf"',
      },
      status: 200,
    });

    const result = await downloadFile('http://localhost:8080/api/resume/download', 'resume.pdf');

    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:8080/api/resume/download',
      { responseType: 'blob', timeout: 15000 }
    );
    expect(result).toMatchObject({
      filename: 'Ayush-Raj-Resume.pdf',
      status: 200,
      contentType: 'application/pdf',
    });
    expect(window.URL.createObjectURL).toHaveBeenCalledTimes(1);
    expect(anchorClick).toHaveBeenCalledTimes(1);
    expect(document.querySelector('a[download]')).toBeNull();

    jest.runOnlyPendingTimers();
    expect(window.URL.revokeObjectURL).toHaveBeenCalledWith('blob:resume');
  });

  it('returns a useful error when the backend is unavailable', async () => {
    axios.get.mockRejectedValue({ code: 'ERR_NETWORK' });

    await expect(downloadFile('http://localhost:8080/api/resume/download', 'resume.pdf'))
      .rejects.toThrow('The resume service is unavailable. Please try again shortly.');
    expect(anchorClick).not.toHaveBeenCalled();
  });
});
