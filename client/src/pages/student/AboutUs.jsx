import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-left">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">About Edemy LMS</h1>
      <p className="mb-4 text-gray-700">
        <strong>Edemy LMS</strong> is a modern, user-friendly Learning Management System designed to empower learners and educators worldwide. Our mission is to make high-quality education accessible to everyone, anytime, anywhere.
      </p>
      <p className="mb-4 text-gray-700">
        With Edemy, you can:
      </p>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Browse and enroll in a wide variety of courses across different domains.</li>
        <li>Learn at your own pace with interactive lessons, quizzes, and real-world projects.</li>
        <li>Track your progress and earn certificates upon course completion.</li>
        <li>Connect with top instructors and a supportive learning community.</li>
        <li>Access your courses from any device, anywhere in the world.</li>
      </ul>
      <p className="mb-4 text-gray-700">
        Whether you are a student looking to upskill, a professional seeking career advancement, or an educator wanting to share your expertise, Edemy LMS provides the tools and platform to help you succeed.
      </p>
      <p className="text-gray-700">
        Join us on our mission to transform education and unlock your full potential with Edemy LMS!
      </p>
    </div>
  );
};

export default AboutUs;
