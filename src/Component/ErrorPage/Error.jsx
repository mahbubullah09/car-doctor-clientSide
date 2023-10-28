import { Link } from "react-router-dom";
import img from "../../assets/Frame.png";

const Error = () => {
  return (
    <div className=" ">
      <div className="text-center flex flex-col items-center justify-center">
        <img src={img} alt="" />

       <Link to={'/'}>
       <button className="bg-[#FF3811] py-2 px-4 rounded text-center text-white font-semibold">
          Back to Home
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Error;
