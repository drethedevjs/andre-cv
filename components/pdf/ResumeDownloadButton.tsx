const RESUME_URL =
  "https://drive.google.com/file/d/1o8rjzXbeQ3gqAuTVmjdiTmRF4yqXfML-/view?usp=sharing"; // paste your Google Drive share link here

export default function ResumeDownloadButton() {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="header-link font-semibold text-primary"
    >
      Download Resume
    </a>
  );
}
