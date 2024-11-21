import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const TaskBar = ({ className, to }) => {
  return (
    <div className={`TASK-BAR ${className}`}>
      <div className="ng-i-d-ng">
        <img
          className="image"
          alt="Image"
          src="https://c.animaapp.com/QBGC6C4y/img/image-1@2x.png"
        />

        <div className="tt-ng-i-d-ng">
          <button className="button">
            <div className="text-button">
              <button className="text-wrapper">Cá biết bay</button>
            </div>
          </button>

          <button className="button">
            <div className="text-button">
              <button className="div">Thành viên mới</button>
            </div>
          </button>
        </div>
      </div>

      <div className="KH-a-h-c">
        <Link to={to}>
          <button className="text-button-wrapper">
            <div className="text-button">
              <button className="button-2">Khóa học của tôi</button>
            </div>
          </button>
        </Link>

        <button className="div-wrapper">
          <div className="text-button">
            <button className="button-2">Đang học</button>
          </div>
        </button>

        <button className="text-button-wrapper">
          <div className="text-button">
            <button className="button-2">Đã hoàn thành</button>
          </div>
        </button>

        <button className="div-wrapper">
          <div className="text-button">
            <button className="button-2">Thi thử</button>
          </div>
        </button>

        <button className="text-button-wrapper">
          <div className="text-button">
            <button className="button-2">Bài tập</button>
          </div>
        </button>
      </div>
    </div>
  );
};

TaskBar.propTypes = {
  to: PropTypes.string,
};
