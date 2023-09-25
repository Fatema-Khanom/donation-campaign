import { useLoaderData } from "react-router-dom";
import AllCategory from "../../AllCategory/AllCategory";
import Bannar from "../../Component/Header/Bannar/Bannar";


const Home = () => {
    const allCategory = useLoaderData();

    return (
        <div>
            <Bannar></Bannar> 
            <AllCategory allCategory=  {allCategory} ></AllCategory>
        </div>
    );
};

export default Home;