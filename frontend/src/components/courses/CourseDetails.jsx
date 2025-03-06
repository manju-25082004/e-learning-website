import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CourseDetails = ({ user }) => {
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${id}`)
        setCourse(response.data)
      } catch (err) {
        setError('Failed to fetch course details')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [id])

  const enrollCourse = () => {
    if (!user) {
      navigate('/login')
      return
    }
    
    // Enrollment logic would go here
    alert('Enrollment feature will be implemented soon!')
  }

  if (loading) {
    return <div className="text-center">Loading course details...</div>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  if (!course) {
    return <div className="alert alert-danger">Course not found</div>
  }

  return (
    <div className="course-details">
      <img src={course.imageUrl} alt={course.title} />
      <h2>{course.title}</h2>
      <p className="instructor">Instructor: {course.instructor.name}</p>
      <div className="price">${course.price.toFixed(2)}</div>
      <div className="description">{course.description}</div>
      
      <button onClick={enrollCourse} className="btn">
        Enroll Now
      </button>
      
      {course.lessons && course.lessons.length > 0 && (
        <div className="lessons" style={{ marginTop: '30px' }}>
          <h3>Course Content</h3>
          <ul style={{ marginTop: '15px' }}>
            {course.lessons.map((lesson, index) => (
              <li key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <h4>{lesson.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CourseDetails