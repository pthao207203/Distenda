import React, { useState, useEffect } from "react";
import BreadcrumbNav from "./Nav";
import TaskContent from "./Content";
import CodeEditor from "./Editor";
import { useParams } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

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
  let contents = "";
  const handleButton = async (actionType) => {
    if (actionType === "check") {
      console.log("code", code);
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
      contents = `Bạn làm đúng ${
        result?.passedTests ? result.passedTests : 0
      }/${result?.totalTests}`;
      console.log(contents);
      setPopupVisible(true);
    } else if (actionType === "submit") {
      const result = await exerciseSubmitController(code, ExerciseSlug);
      if (result.code === 200) {
        console.log(result.testcase);
      } else {
        console.log(result.error);
      }
      setPopupVisible(true);
    }
  };

  const handleCloseTha