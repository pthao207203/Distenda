import * as React from "react";
import StudentReviews from "./StudentReviews";
import StarRating from "./StarRating";

export default function CourseReviews(reviews) {
  const ratings = [5, 4, 3, 2, 1];
  const voteCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const voteTotal = Object.values(reviews).length

  // Lặp qua từng review và đếm số lượt vote cho từng mức sao
  if (Array.isArray(Object.values(reviews))) {
    Object.values(reviews).forEach(review => {
      if (voteCounts[review.Rate] !== undefined) {
        voteCounts[review.Rate]++;
      }
    });
  } else {
    console.error('Reviews is not an array');
  }
  // console.log("vote", voteCounts, voteTotal);

  let totalVotes = 0; // Tổng số lượt vote
  let totalPoints = 0;
  for (const [star, count] of Object.entries(voteCounts)) {
    totalVotes += count; // Cộng dồn số lượt vote
    totalPoints += star * count; // Tính tổng điểm
  }
  const voteAve = totalVotes > 0 ? (totalPoints / totalVotes).toFixed(1) : 0;

  return (
    <section className="flex flex-col items-start self-start text-white w-full rounded-3xl ">
      <div className="flex flex-wrap gap-10 items-start self-start px-8 py-5 whitespace-nowrap">
        <div className="flex flex-col text-7xl font-bold w-[150px] py-3 max-md:text-4xl">
          <span className="text-center max-w-full w-full">{voteAve}</span>
          <StarRating className="w-full" rating={voteAve} />
        </div>
        <div className="flex flex-col justify-center text-3xl font-medium ">
          {ratings.map((rating) => (
            <div key={rating} className="flex flex-wrap gap-3 items-center mt-3 first:mt-0">
              <span className="self-stretch my-auto w-5">{rating}</span>
              <div className={`flex shrink self-stretch my-auto bg-[#CFF500] h-[21px] rounded-[99px] 
                ${rating === 5 ? `w-[${(voteCounts[5] / voteTotal) * 800}px]` :
                  rating === 4 ? `w-[${(voteCounts[4] / voteTotal) * 800}px]` :
                    rating === 3 ? `w-[${(voteCounts[3] / voteTotal) * 800}px]` :
                      rating === 2 ? `w-[${(voteCounts[2] / voteTotal) * 800}px]` :
                        `w-[${(voteCounts[1] / voteTotal) * 800}px]`
                }`} />
            </div>
          ))}
        </div>
      </div>
      <StudentReviews {...reviews} />
    </section>
  );
}