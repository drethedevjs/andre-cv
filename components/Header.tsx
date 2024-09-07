function Header() {
  return ( 
    <div className="flex flex-row-reverse p-5 m-5">
      <div>
        <a
          title="Feature coming soon!"
          className="btn-invert ml-3"
          href="/login"
        >
          Login
        </a>
      </div>
      <div>

      <a
        className="btn" 
        href="https://drive.google.com/file/d/1nwLRBIDH2DdHdd9qMDSnSge1UvkBzoo4/view?usp=sharing"
        target="_blank"
        >
        Download Resume
      </a>
        </div>
    </div>
   );
}

export default Header;