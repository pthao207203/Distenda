import React from "react";
import { BannerKhAHC } from "../../components/BannerKhAHC";
import { Footer } from "../../components/Footer";
import { TaskBar } from "../../components/TaskBar";
import { MaterialSymbolsLightSearch } from "../../icons/MaterialSymbolsLightSearch";
import "./style.css";

export const KhoaHocCuaToi = () => {
  return (
    <div className="KHOA-HOC-CUA-TOI">
      <div className="div-3">
        <div className="overlap-2">
          <img
            className="BG"
            alt="Bg"
            src="https://c.animaapp.com/QBGC6C4y/img/bg.png"
          />

          <div className="group-2">
            <TaskBar className="TASK-BAR-instance" to="/khoa-hoc-cua-toi" />
            <div className="frame-6">
              <div className="button-9">
                <MaterialSymbolsLightSearch
                  className="material-symbols-light-search"
                  color="white"
                />
                <div className="text-button-5">
                  <button className="button-10">Tìm kiếm</button>
                </div>
              </div>

              <div className="frame-7">
                <BannerKhAHC
                  ANH="https://c.animaapp.com/QBGC6C4y/img/anh-8@2x.png"
                  property1="mua"
                />
                <BannerKhAHC
                  ANH="https://c.animaapp.com/QBGC6C4y/img/anh-8@2x.png"
                  property1="mua"
                />
                <BannerKhAHC
                  ANH="https://c.animaapp.com/QBGC6C4y/img/anh-8@2x.png"
                  property1="mua"
                />
                <BannerKhAHC
                  ANH="https://c.animaapp.com/QBGC6C4y/img/anh-8@2x.png"
                  property1="mua"
                />
                <BannerKhAHC
                  ANH="https://c.animaapp.com/QBGC6C4y/img/anh-8@2x.png"
                  property1="mua"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer
          className="footer-instance"
          icon="https://c.animaapp.com/QBGC6C4y/img/icon-3.svg"
          img="https://c.animaapp.com/QBGC6C4y/img/line-1-3.svg"
          line="https://c.animaapp.com/QBGC6C4y/img/line-1-3.svg"
          overlapClassName="footer-2"
          rectangleClassName="design-component-instance-node"
          rectangleClassNameOverride="footer-3"
          shape="https://c.animaapp.com/QBGC6C4y/img/shape-1.svg"
          shapeClassName="footer-4"
        />
        <div className="navigation-2">
          <div className="web-name">
            <div className="text-button-5">
              <button className="button-11">DISTENDA</button>
            </div>
          </div>

          <div className="task-bar">
            <div className="BG-2" />

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-12">TRANG CHỦ</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">NOTEJS</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">JQUERY</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">JAVACRIPT</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">REACT</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">PHP</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">SQL</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">HTML</button>
              </div>
            </div>

            <div className="CSS">
              <div className="text-button-5">
                <button className="button-13">CSS</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">PYTHON</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">MYSQL</button>
              </div>
            </div>

            <div className="text-button-wrapper-2">
              <div className="text-button-5">
                <button className="button-13">C++</button>
              </div>
            </div>
          </div>

          <div className="NGI-DNG">
            <img
              className="image-2"
              alt="Image"
              src="https://c.animaapp.com/QBGC6C4y/img/image-2@2x.png"
            />

            <img
              className="polygon"
              alt="Polygon"
              src="https://c.animaapp.com/QBGC6C4y/img/polygon-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
