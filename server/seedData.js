import mongoose from 'mongoose';
import Course from './models/Course.js';
import 'dotenv/config';

const seedCourses = [
  {
    courseTitle: "Complete JavaScript Course 2024",
    courseDescription: "Learn JavaScript from scratch to advanced concepts",
    courseThumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
    coursePrice: 49.99,
    discount: 10,
    isPublished: true,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "JavaScript Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to JavaScript",
            lectureDuration: 15,
            lectureUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            isPreviewFree: true,
            lectureOrder: 1
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Variables and Data Types",
            lectureDuration: 20,
            lectureUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            isPreviewFree: false,
            lectureOrder: 2
          }
        ]
      }
    ],
    educator: "test_educator_1",
    courseRatings: [
      { userId: "user1", rating: 5 },
      { userId: "user2", rating: 4 }
    ],
    enrolledStudents: []
  },
  {
    courseTitle: "React.js Masterclass",
    courseDescription: "Build modern web applications with React",
    courseThumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    coursePrice: 79.99,
    discount: 15,
    isPublished: true,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "React Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is React?",
            lectureDuration: 12,
            lectureUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            isPreviewFree: true,
            lectureOrder: 1
          }
        ]
      }
    ],
    educator: "test_educator_2",
    courseRatings: [
      { userId: "user3", rating: 5 }
    ],
    enrolledStudents: []
  },
  {
    courseTitle: "Node.js Backend Development",
    courseDescription: "Learn server-side development with Node.js",
    courseThumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
    coursePrice: 59.99,
    discount: 0,
    isPublished: true,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Node.js Introduction",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Setting up Node.js",
            lectureDuration: 18,
            lectureUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            isPreviewFree: true,
            lectureOrder: 1
          }
        ]
      }
    ],
    educator: "test_educator_1",
    courseRatings: [],
    enrolledStudents: []
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing courses
    await Course.deleteMany({});
    console.log('Cleared existing courses');

    // Insert seed courses
    const insertedCourses = await Course.insertMany(seedCourses);
    console.log(`Inserted ${insertedCourses.length} courses`);

    // Log the courses
    const allCourses = await Course.find({});
    console.log('All courses in database:', allCourses.map(c => ({ title: c.courseTitle, published: c.isPublished })));

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 