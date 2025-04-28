import React from "react";

const StarRating = ({ rating }) => {
  const maxStars = 5; // Số lượng ngôi sao tối đa
  const filledStars = Math.floor(rating); // Ngôi sao được tô đầy
  const halfStar = rating % 1 >= 0.5; // Có ngôi sao nửa hay không
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0); // Số ngôi sao trống

  return (
    <div className="flex justify-around">
      {/* Ngôi sao đầy */}
      {Array.from({ length: filledStars }).map((_, index) => (
        <div key={`have-${index}`} className="text-yellow-500 text-xl">
          <img
            src="/Icon/star1.svg"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      ))}
      {/* Ngôi sao nửa */}
      {halfStar && (
        <span className="text-yellow-500 text-xl">
          <img
            src="/Icon/star2.svg"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </span>
      )}
      {/* Ngôi sao trống */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <div key={`empty-${index}`} className="text-gray-400 text-xl">
          <img
            src="/Icon/star3.svg"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
