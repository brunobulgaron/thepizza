import React from "react"
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa"

const Rating = ({ value, text }) => {
  const goldColor = "#f5b625"

  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FaStar color={goldColor} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt color={goldColor} />
        ) : (
          <FaRegStar color={goldColor} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar color={goldColor} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt color={goldColor} />
        ) : (
          <FaRegStar color={goldColor} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar color={goldColor} />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt color={goldColor} />
        ) : (
          <FaRegStar color={goldColor} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar color={goldColor} />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt color={goldColor} />
        ) : (
          <FaRegStar color={goldColor} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar color={goldColor} />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt color={goldColor} />
        ) : (
          <FaRegStar color={goldColor} />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  )
}

export default Rating
