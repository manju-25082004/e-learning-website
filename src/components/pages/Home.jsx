import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Learn Skills for Your Future</h1>
        <p>
          Discover top-quality courses taught by industry experts and advance your career with EducCart
        </p>
        <Link to="/courses" className="btn btn-secondary">
          Explore Courses
        </Link>
      </section>

      <section className="container">
        <h2 className="text-center">Why Choose EducCart?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <h3>Quality Content</h3>
            <p>
              All our courses are created by industry experts with years of experience in their fields.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-clock"></i>
            <h3>Learn at Your Pace</h3>
            <p>
              Access course materials anytime, anywhere and learn at your own convenience.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-certificate"></i>
            <h3>Get Certified</h3>
            <p>
              Earn certificates upon course completion to showcase your new skills to employers.
            </p>
          </div>
        </div>
      </section>

      <section className="container text-center">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of students already learning on EducCart</p>
        <Link to="/register" className="btn">
          Sign Up Now
        </Link>
      </section>
    </div>
  )
}

export default Home