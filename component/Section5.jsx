import React from "react";
import Review from "./blocks/Review";
const babyGeneratorReviews = [
  {
    name: "Sarah Thompson",
    userImage: "./assets/reviews/user-3.png",
    reviewImage: "./assets/reviews/review3.png",
    date: "15 March 2023",
    review:
      "I currently have a 3 year old. I added a picture of my and her mother to OurBabyPicAI.com and it was pretty close 🤯",
  },
  {
    name: "Alex Rodriguez",
    userImage: "./assets/reviews/user-4.png",
    reviewImage: "./assets/reviews/review4.png",
    date: "20 June 2023",
    review:
      "As an expecting father, I decided to explore the AI baby generator on ourbabypicai.com. The generated baby image was adorable and captured the essence of both my wife and me. Ourbabypicai.com made the entire process easy and enjoyable.",
  },
  {
    name: "Emily Chang",
    userImage: "./assets/reviews/user-1.png",
    reviewImage: "./assets/reviews/review1-img.png",
    date: "5 October 2023",
    review:
      "The AI baby generator on ourbabypicai.com is truly impressive! It created a baby picture that seamlessly combined my features with my husband's. The attention to detail is remarkable, and ourbabypicai.com provides a user-friendly experience.",
  },
  {
    name: "Ryan Patel",
    userImage: "/assets/reviews/user-2.png",
    reviewImage: "/assets/reviews/review-2.png",
    date: "12 December 2023",
    review:
      "Using ourbabypicai.com was a joy! The AI baby generator produced a charming baby picture by blending mine and my partner's features seamlessly. The results were beyond our expectations, and the process on ourbabypicai.com was quick and user-friendly.",
  },
  // Add more reviews as needed
];
let reviewScroll = 0;

function scrollLeft() {
  var scrollingDiv = document.querySelector(".reviews");
  scrollingDiv.scrollLeft = reviewScroll -= 300;
  if (reviewScroll <= 0) reviewScroll = 0;
}
function scrollRight() {
  var scrollingDiv = document.querySelector(".reviews");
  scrollingDiv.scrollLeft = reviewScroll += 300;
  if (reviewScroll >= 1200) {
    reviewScroll = 0;
    scrollingDiv.scrollLeft = 0;
  }
}

function Section5() {
  return (
    <div className="section section-5">
      <h2 className="heading">
        Happy Couples Love <span>Our Baby pic</span>
      </h2>
      <div>
        Don't just take our words for it. Hear what our customers have to say.
      </div>
      <div className="review-container">
        <div className="left" onClick={scrollLeft}>
          <img src="./assets/icons/arrow-left.png" alt="" />
        </div>
        <div className="reviews">
          {babyGeneratorReviews.map((review, index) => (
            <Review
              name={review.name}
              userImage={review.userImage}
              reviewImage={review.reviewImage}
              date={review.date}
              review={review.review}
              key={index}
            ></Review>
          ))}
        </div>
        <div className="right" onClick={scrollRight}>
          <img src="./assets/icons/arrow-right.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section5;
