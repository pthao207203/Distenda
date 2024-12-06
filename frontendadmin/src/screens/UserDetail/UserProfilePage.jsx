import React from 'react';
import UserHeader from './components/UserHeader';
import PersonalInfo from './components/PersonalInfo';
import CourseTable from './components/CourseTable';

function UserProfile() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <UserHeader />
      <PersonalInfo />
      <CourseTable />
    </div>
  );
}

export default UserProfile;