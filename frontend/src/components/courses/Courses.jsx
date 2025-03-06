import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses')
        setCourses(response.data)
      } catch (err) {
        setError('Failed to fetch courses')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <div className="text-center">Loading courses...</div>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  return (
    <div>
      <h1>Available Courses</h1>
      {courses.length === 0 ? (
        <p>No courses available at the moment.</p>
      ) : (
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course._id} className="course-card">
              <img src={course.imageUrl} alt={course.title} />
              <div className="course-card-body">
                <h3>{course.title}</h3>
                <p>{course.description.substring(0, 100)}...</p>
                <div className="price">${course.price.toFixed(2)}</div>
                <Link to={`/courses/${course._id}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Courses