import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="flex  my-16">

           <div>
           <div className="flex-1 relative">
                <img className="w-3/4" src={person} alt="" />
           
                <img className=" p-2 w-1/2 absolute -bottom-20   right-10 bg-white " src={parts} alt="" />
                

            </div>

           </div>
            <div className=" flex-1 space-y-4">

                <h6 className="text-[#FF3811] font-bold">About Us</h6>
                <h2 className="text-black font-bold text-5xl w-96">We are qualified & of experience in this field</h2>
                <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> 
                <button className="bg-[#FF3811] py-2 px-4 rounded text-white">
            Discover More
            </button>

            </div>
            
        </div>
    );
};

export default About;