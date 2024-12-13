import * as React from "react";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/NavigationBar";
import { CourseForm } from "./components/CourseForm";

export default function CourseBuilder() {
  return (
    <main className="flex overflow-hidden flex-col leading-none bg-indigo-50">
      {/* <Header /> */}
      <NavigationBar />
      <CourseForm />
    </main>
  );
}