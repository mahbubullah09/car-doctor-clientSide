import { useContext } from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {

    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;