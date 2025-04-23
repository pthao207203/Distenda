import React, { useState, useEffect } from "react";
import BreadcrumbNav from "./Nav";
import TaskContent from "./Content";
import CodeEditor from "./Editor";
import { useNavigate, useParams } from "react-router-dom";
import {
  exerciseCheckController,
  exerciseSubmitController,
} from "../../../controllers/exercise.controller";
import Loading from "../../../components/Loading";
import ThankYouPage from "../../User/Payment/ThankYouPage";
import { exerciseController } from "../../../controllers/video.controller";

function CourseLayout() {
  const [data, setData] = useState();
  const [code, setCode] = useState();
  const [content, setContent] = useState();
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const { ExerciseSlug } = useParams();
  console.log(ExerciseSlug);

  useEffect(() => {
    async function fetchData(exerciseSlug) {
      // console.log("vao")
      const result = await exerciseController(setLoading, exerciseSlug);
      // console.log(result);
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
        setCode(result.ExerciseSample);
      }
    }

    if (ExerciseSlug) {
      fetchData(ExerciseSlug); // Gọi fetchData với CourseSlug
    }
  }, [ExerciseSlug]);

  if (loading) {
    return <Loading />;
  }
  console.log("exer => ", data);

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
  };

  const handleButton = async (actionType) => {
    if (actionType === "check") {
      const result = await exerciseCheckController(
        code,
        ExerciseSlug,
        data.course.CourseLanguage
      );
      console.log("result", result);
      if (result.code === 200) {
        console.log(result.passedTests);
      } else {
        console.log(result.error);
      }
      setContent(
        `Bạn làm đúng ${result?.passedTests ? result.passedTests : 0}/${
          result?.totalTests
        }`
      );
      setSubmit(true);
      setPopupVisible(true);
    } else if (actionType === "submit") {
      const result = await exerciseSubmitController(ExerciseSlug);
      if (result.code === 200) {
        console.log(result.testcase);
      } else {
        console.log(result.error);
      }
      setContent(`Nộp bài thành công!`);
      setPopupVisible(true);
      setTimeout(() => {
        navigate(`/courses/CoursePurchased/${data.course.CourseSlug}`);
      }, 2000);
    }
  };

  const handleCloseThank = () => {
    setPopupVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex flex-col self-start">
      <div className="flex relative flex-col lg:py-0.5 w-full max-md:max-w-full self-start">
        <BreadcrumbNav {...data} />
        <div className="flex overflow-hidden px-[20px] relative flex-wrap items-start mt-1 h-full">
          <TaskContent exercise={data} />
          <CodeEditor
            code={code}
            handleCodeChange={handleCodeChange}
            handleButton={handleButton}
            submit={submit}
          />
        </div>
        {popupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
            <ThankYouPage onClose={handleCloseThank} content={content} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseLayout;
