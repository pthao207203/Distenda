import * as React from "react";
import StudentReviews from "./StudentReviews";
import StarRating from "./StarRating";

export default function CourseReviews(reviews) {
  const ratings = [5, 4, 3, 2, 1];
  const voteCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const voteTotal = Object.values(reviews).length;

  // Lặp qua từng review và đếm số lượt vote cho từng mức sao
  if (Array.isArray(Object.values(reviews))) {
    Object.values(reviews).forEach((review) => {
      if (voteCounts[review.Rate] !== undefined) {
        voteCounts[review.Rate]++;
      }
    });
  } else {
    console.error("Reviews is not an array");
  }
  console.log("vote", voteCounts, voteTotal);

  let totalVotes = 0; // Tổng số lượt vote
  let totalPoints = 0;
  for (const [star, count] of Object.entries(voteCounts)) {
    totalVotes += count; // Cộng dồn số lượt vote
    totalPoints += star * count; // Tính tổng điểm
  }
  const voteAve = totalVotes > 0 ? (totalPoints / totalVotes).toFixed(1) : 0;

  return (
    <section className="flex flex-col items-start self-start text-white w-full rounded-3xl ">
      <div className="flex flex-grow gap-10 items-start self-start px-8 py-5 whitespace-nowrap w-full">
        <div className="flex flex-col text-[4.5rem] font-bold w-[150px] py-3 max-lg:text-[42px]">
          <span className="text-center max-w-full w-full">{voteAve}</span>
          <StarRating className="w-full" rating={voteAve} />
        </div>
        <div className="flex flex-col justify-center text-[1.875rem] max-lg:text-[20px] font-medium w-full">
          {ratings.map((rating) => (
            <div
              key={rating}
              className="flex flex-wrap gap-3 items-center mt-3 first:mt-0"
            >
              <span className="self-stretch my-auto">{rating}</span>
              <div className="flex-grow h-[15px] bg-gray-200 rounded-[99px] overflow-hidden max-w-[800px]">
                <div
                  className={`h-full bg-[#CFF500] rounded-[99px] transition-all duration-300`}
                  style={{
                    width:
                      rating === 5
                        ? `${(voteCounts[5] * 100) / voteTotal}%`
                        : rating === 4
                        ? `${(voteCounts[4] * 100) / voteTotal}%`
                        : rating === 3
                        ? `${(voteCounts[3] * 100) / voteTotal}%`
                        : rating === 2
                        ? `${(voteCounts[2] * 100) / voteTotal}%`
                        : `${(voteCounts[1] * 100) / voteTotal}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <StudentReviews {...reviews} />
    </section>
  );
}
