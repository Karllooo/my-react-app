import profilePic from '../assets/profile.jpg';

function BodyContent() {
  return (
    <section className="body-content" id="about">
      <div className="about-container">
        <div className="about-picture">
          <img src={profilePic} alt="Karl Ryan Espiritu" />
        </div>

        <div className="about-info">
          <div className="about-box">
            <h3>About Me</h3>
            <p>
              My name is <strong>Karl Ryan Espiritu</strong>, a 3rd year
              <strong> BSIT student</strong> at <strong>Asian College</strong>.
            </p>
            <p>
              I am passionate about web development and enjoy working with modern
              technologies such as HTML, CSS, JavaScript, and React.
            </p>
            <p>
              My goal is to improve my skills by building projects that showcase
              my creativity and problem-solving abilities.
            </p>
          </div>

          <div className="about-box">
            <h3>About This Website</h3>
            <p>
              This is a simple React one-page template featuring a hero banner,
              body content, FAQs, and a footer.
            </p>
            <p>
              It is designed to be clean, responsive, and easy to customize. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BodyContent