import './Footer.css';

/** Small footer with a home link and current year. */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a className="brand footer-brand" href="#home" aria-label="Back to Anjor Rane home">
          <span className="brand-mark">AR</span>
          <span className="brand-copy">ANJOR RANE<small>Built with intention.</small></span>
        </a>
        <span className="footer-copyright">© {new Date().getFullYear()} Anjor Rane</span>
        <a className="footer-top" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
