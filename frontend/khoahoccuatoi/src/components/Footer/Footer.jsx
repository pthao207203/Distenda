import PropTypes from "prop-types";
import React from "react";
import { Component } from "../Component";
import "./style.css";

export const Footer = ({
  className,
  line = "https://c.animaapp.com/QBGC6C4y/img/line-1-1.svg",
  img = "https://c.animaapp.com/QBGC6C4y/img/line-1-1.svg",
  rectangleClassName,
  icon = "https://c.animaapp.com/QBGC6C4y/img/icon.svg",
  overlapClassName,
  rectangleClassNameOverride,
  shapeClassName,
  shape = "https://c.animaapp.com/QBGC6C4y/img/shape.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="frame-wrapper">
        <div className="frame-3">
          <button className="button-8">DISCENDA</button>
        </div>
      </div>

      <div className="frame-4">
        <div className="text-wrapper-4">Điện thoại: 0912227225</div>

        <div className="text-wrapper-5">Email: 22521212@gmail.com</div>

        <p className="text-wrapper-6">
          Địa chỉ: Số 123, đường số 8, KP. Linh Trung, Thủ Đức, TP. Hồ Chí Minh
        </p>
      </div>

      <div className="footer-resources">
        <div className="navigation">RESOURCE</div>

        <Component
          className="component-25"
          divClassName="component-instance"
          label="Chính sách bảo mật"
          property1="frame-65"
        />
        <Component
          className="component-25"
          divClassName="component-instance"
          label="Hỗ trợ"
          property1="frame-65"
        />
      </div>

      <div className="footer-resources-2">
        <div className="navigation">VỀ CHÚNG TÔI</div>

        <Component
          className="component-25"
          divClassName="component-instance"
          label="Giới thiệu"
          property1="frame-65"
        />
        <Component
          className="component-25"
          divClassName="component-instance"
          label="Tuyển dụng"
          property1="frame-65"
        />
      </div>

      <div className="frame-5">
        <p className="text-wrapper-7">© 2024 DORA. All Rights Reserved.</p>
      </div>

      <img className="line" alt="Line" src={line} />

      <img
        className="img"
        alt="Line"
        src="https://c.animaapp.com/QBGC6C4y/img/line-2-1.svg"
      />

      <img className="line-2" alt="Line" src={img} />

      <div className="social">
        <div className="twitter-icon">
          <div className="overlap-group">
            <div className={`rectangle ${rectangleClassName}`} />

            <img className="icon" alt="Icon" src={icon} />
          </div>
        </div>

        <img
          className="group"
          alt="Group"
          src="https://c.animaapp.com/QBGC6C4y/img/group-1@2x.png"
        />

        <div className="facebook-icon">
          <div className={`overlap ${overlapClassName}`}>
            <div className={`rectangle-2 ${rectangleClassNameOverride}`} />

            <img
              className={`shape ${shapeClassName}`}
              alt="Shape"
              src={shape}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  line: PropTypes.string,
  img: PropTypes.string,
  icon: PropTypes.string,
  shape: PropTypes.string,
};
