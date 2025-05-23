import staract from "../assets/star_active.png";
import starinact from "../assets/star_inactive.png";

function StarRating({ rating }) {
  const totalStars = 5;
  const stars = [];
  const ratings = Number(rating);

  for (let i = 1; i <= totalStars; i++) {
    if (i <= ratings) {
      stars.push(<img src={staract} alt="star" key={i} className="star" />);
    } else {
      stars.push(<img src={starinact} alt="star" key={i} className="star" />);
    }
  }
  return <div className="starcontainer">{stars}</div>;
}

export default StarRating;
