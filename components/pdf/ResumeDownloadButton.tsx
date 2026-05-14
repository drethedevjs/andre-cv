const RESUME_URL =
  "https://drive.google.com/file/d/1BMS-A5KQr9SFZEOjUdNXHi87AvkMERC1/view?usp=drive_link"; // paste your Google Drive share link here

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
