function Header() {
  return ( 
    <div className="flex border p-5 justify-between">
      <header className="text-3xl">
        <h1>Full Stack Engineer</h1>
      </header>
      <nav className="space-x-10">
          <a>Summary</a>
          <a>Experience</a>
          <a>Contact</a>
      </nav>
      <button className="">Download Resume</button>
    </div>
   );
}

export default Header;