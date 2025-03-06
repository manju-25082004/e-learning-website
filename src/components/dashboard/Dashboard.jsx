import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = ({ user }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }

    // This would normally fetch the user's enrolled courses
    // For now, we'll just simulate it with empty data
    setLoading(false)
  }, [user, navigate])

  if (loading) {
    return <div className="text-center">Loading dashboard...</div>
  }

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.name}</h2>
      
      <div className="dashboard-info">
        <p>Email: {user?.email}</p>
        <p>Account Type: {user?.role || 'Student'}</p>
      </div>
      
      <div className="dashboard-courses">
        <h3>Your Enrolled Courses</h3>
        
        {enrolledCourses.length === 0 ? (
          <div className="card">
            <p>You haven't enrolled in any courses yet.</p>
            <button 
              onClick={() => navigate('/courses')} 
              className="btn"
              style={{ marginTop: '10px' }}
            >
              Browse Courses
            </button>
          </div>
        ) : (
          enrolledCourses.map(course => (
            <div key={course._id} className="dashboard-course">
              <img src={course.imageUrl} alt={course.title} />
              <div className="dashboard-course-info">
                <h3>{course.title}</h3>
                <p>Instructor: {course.instructor.name}</p>
                <button 
                  onClick={() => navigate(`/courses/${course._id}`)}
                  className="btn btn-sm"
                >
                  Continue Learning
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Dashboard