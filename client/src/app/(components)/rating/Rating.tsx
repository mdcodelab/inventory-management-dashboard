import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((index) => (
        index <= rating ? <FaStar key={index} style={{ color: "gold", width: "1rem", height: "1rem" }} /> : <CiStar key={index} style={{ color: "lightgray", width: "1rem", height: "1rem" }} />
      ))}
    </>
  );
};

export default Rating;
