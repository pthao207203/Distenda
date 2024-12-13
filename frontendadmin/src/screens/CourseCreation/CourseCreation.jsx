import React from 'react';
// import Header from './Header';
import NavigationBar from './NavigationBar';
import CourseForm from './CourseForm';

function CourseCreationPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-indigo-50">
      {/* <Header /> */}
      <NavigationBar />
      <CourseForm />
    </div>
  );
}

export default CourseCreationPage;