/* eslint-disable react/prop-types */
const StarRating = ({ rating,numReview }) => {
  // Round the rating to the nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Create an array of stars based on the rating
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<span key={i} className="text-warning star full">&#9733;</span>);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<span key={i} className="text-warning star half">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
  }
  // console.log(roundedRating);

  return (
    <div className="rating">
      <div className="stars">{stars}</div>
      <div className="num-reviews">&#40;{numReview}&#41;</div>
    </div>
  );
};

export default StarRating;
