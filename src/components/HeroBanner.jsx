function HeroBanner() {
  return (
    <section className="hero" id="home">
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
      </div>
    </section>
  )
}

export default HeroBanner