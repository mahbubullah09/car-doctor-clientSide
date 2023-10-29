import { BiDollar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <div>
      <img
        src={img}
        alt="Product"
        className="h-60 w-full object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <p className="text-lg font-bold text-black truncate block capitalize">
          {title}
        </p>
        <div className="flex justify-between ite items-center text-[#FF3811]">
          <p className="text-lg font-semibold cursor-auto my-3 flex items-center">
            Price: <BiDollar /> {price}
          </p>

          <BsArrowRight />
        </div>

        <Link to={`/checkout/${_id}`} >
          <button className="bg-[#FF3811] text-white font-semibold py-2 px-4 rounded">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
