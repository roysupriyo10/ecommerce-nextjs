import { FC } from "react";

type RatingProps = {
  stars: number;
};

const Rating: FC<RatingProps> = ({ stars }) => {
  return <div>{stars}</div>;
};

export default Rating;
