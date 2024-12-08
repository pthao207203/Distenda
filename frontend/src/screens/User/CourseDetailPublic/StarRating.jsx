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
        <span key={`filled-${index}`} className="text-yellow-500 text-xl">
          ★
        </span>
      ))}
      {/* Ngôi sao nửa */}
      {halfStar && (
        <span className="text-yellow-500 text-xl">⯨</span> // Biểu tượng nửa ngôi sao
      )}
      {/* Ngôi sao trống */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-400 text-xl">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
