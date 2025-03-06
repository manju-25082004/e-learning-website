import Course from '../models/Course.js';

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({})
      .populate('instructor', 'name')
      .select('title description price imageUrl category');
    
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get course by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name email')
      .populate('ratings.user', 'name');
    
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { title, description, price, category, imageUrl, lessons } = req.body;
    
    const course = new Course({
      title,
      description,
      instructor: req.user._id,
      price,
      category,
      imageUrl: imageUrl || 'https://via.placeholder.com/300x200?text=Course+Image',
      lessons: lessons || []
    });
    
    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};