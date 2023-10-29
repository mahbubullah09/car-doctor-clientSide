import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {

    const [service,setService] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    console.log(service);


  return (
    <div>
    <div className="text-center space-y-2 mb-10 ">
    <h4 className=" text-lg font-bold text-[#FF3811]">Service</h4>
      <h2 className=" text-4xl font-bold text-black">Our Service Area</h2>
      <p className="w-1/2 mx-auto text-[#737373] ">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
    </div>

    <div className="grid grid-cols-3 gap-4">
        {
            service.map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
    </div>

    <div className="text-center my-4">
    <button className=" py-2 px-5 font-semibold rounded-md  border border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
    More Services
          </button>
    </div>





    </div>
  );
};

export default Services;
