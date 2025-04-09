import React from 'react';
// import Header from './Header';
import NavigationBar from './NavigationBar';
import CourseForm from './CourseForm';

function CourseCreationPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-[#EBF1F9]">
      {/* <Header /> */}
      {/* <NavigationBar /> */}
      <CourseForm />
    </div>
  );
}

export default CourseCreationPage;