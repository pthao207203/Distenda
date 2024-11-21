import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const BannerKhAHC = ({
  property1,
  ANH = "https://c.animaapp.com/QBGC6C4y/img/anh-3@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "ch-a-mua",
  });

  return (
    <div
      className={`banner-kh-a-h-c ${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img
        className="ANH"
        alt="Anh"
        src={
          state.property1 === "ch-a-mua"
            ? "https://c.animaapp.com/QBGC6C4y/img/anh@2x.png"
            : ANH
        }
      />

      {state.property1 === "ch-a-mua" && (
        <>
          <div className="GIA-TIEN">
            <div className="GIA-TIEN-2">
              <div className="button-wrapper">
                <button className="button-3">10.000.000</button>
              </div>
            </div>

            <div className="GIA-TIEN-3">
              <div className="text-button-2">
                <button className="button-4">12.300.000</button>
              </div>
            </div>
          </div>

          <button className="button-5">
            <div className="text-button-3">
              <button className="button-6">Đăng ký ngay</button>
            </div>
          </button>
        </>
      )}

      <div className="THONG-TIN">
        {["CHUA-MUA-2", "chua-mua-2-hover", "mua"].includes(
          state.property1,
        ) && (
          <div className="t-n">
            <div className="text-button-4">
              <p className="p">Chuyên viên thiết kế đồ họa &amp; web</p>
            </div>
          </div>
        )}

        <div className="div-2">
          <div className="thoi-gian">
            {["CHUA-MUA-2", "chua-mua-2-hover", "mua"].includes(
              state.property1,
            ) && <>Thoi gian</>}

            {state.property1 === "ch-a-mua" && <>Chương</>}
          </div>

          <div className="element-tieng">
            {state.property1 === "mua" && <>85 tieng</>}

            {["CHUA-MUA-2", "chua-mua-2-hover"].includes(state.property1) && (
              <>60 tieng</>
            )}

            {state.property1 === "ch-a-mua" && <>10</>}
          </div>
        </div>

        <div className="div-2">
          <div className="b-i-gi-ng">
            {["CHUA-MUA-2", "ch-a-mua", "chua-mua-2-hover"].includes(
              state.property1,
            ) && <>Bài giảng</>}

            {state.property1 === "mua" && <>Tien do</>}
          </div>

          <div className="element">
            {state.property1 === "ch-a-mua" && <>100</>}

            {state.property1 === "mua" && <>50%</>}

            {["CHUA-MUA-2", "chua-mua-2-hover"].includes(state.property1) && (
              <>30</>
            )}
          </div>
        </div>

        <div className="frame">
          <div className="th-i-l-ng">
            {state.property1 === "ch-a-mua" && <>Thời lượng</>}

            {["CHUA-MUA-2", "chua-mua-2-hover", "mua"].includes(
              state.property1,
            ) && <>Giảng viên</>}
          </div>

          <div className="element-ph-t">
            {state.property1 === "ch-a-mua" && <>300 phút</>}

            {["CHUA-MUA-2", "chua-mua-2-hover", "mua"].includes(
              state.property1,
            ) && <>Xuyến Nguyễn</>}
          </div>
        </div>

        {state.property1 === "ch-a-mua" && (
          <>
            <div className="div-2">
              <div className="text-wrapper-2">Tài liệu</div>

              <div className="text-wrapper-3">5</div>
            </div>

            <div className="frame-2">
              <div className="text-wrapper-2">Giảng viên</div>

              <div className="text-wrapper-3">Xuyến Nguyễn</div>
            </div>
          </>
        )}
      </div>

      {["CHUA-MUA-2", "chua-mua-2-hover", "mua"].includes(state.property1) && (
        <button className="button-7">
          <div className="text-button-3">
            <button className="button-6">Xem chi tiết</button>
          </div>
        </button>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "chua-mua-2-hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "CHUA-MUA-2",
      };
  }

  return state;
}

BannerKhAHC.propTypes = {
  property1: PropTypes.oneOf([
    "mua",
    "chua-mua-2-hover",
    "ch-a-mua",
    "CHUA-MUA-2",
  ]),
  ANH: PropTypes.string,
};
