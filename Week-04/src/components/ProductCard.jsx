import EmptyStar from "../assets/icons/EmptyStar.svg";
import Star from "../assets/icons/Star.svg";
import Bookmark from "../assets/icons/Bookmark.svg";
import Bookmarked from "../assets/icons/Bookmarked.svg";
import { useState } from "react";

const ProductCard = ({ title, price, category, image }) => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-start shadow-xl rounded-xl transition-transform duration-300 cursor-pointer ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-[222px] relative">
        <div className="flex justify-center h-[222px] rounded-xl">
          <img
            src={image}
            alt={title}
            className="object-contain w-auto h-full"
          />
        </div>
        <div
          className="absolute bottom-1 left-4 flex py-1.5 px-4 bg-neutral-200/50 border border-white backdrop-blur-sm cursor-pointer rounded-4xl"
          onClick={() => setBookmarked((prev) => !prev)}
        >
          {bookmarked ? (
            <img src={Bookmarked} alt="Bookmarked icon" />
          ) : (
            <img src={Bookmark} alt="Bookmark icon" />
          )}
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 px-6 py-4 h-full justify-between">
        <div className="flex flex-col w-full gap-2">
          <span className="text-sm text-[#969696]">{category}</span>
          <h3 className="text-lg line-clamp-2" title={title}>
            {title}
          </h3>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
            </div>
            <span className="text-sm text-[#969696]">(47)</span>
          </div>
        </div>
        <h2 className="font-semibold text-2xl">${price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
