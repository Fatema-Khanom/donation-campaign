import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationCard from "../Pages/DonationCard/DonationCard";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("/data.json"),
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/donation-details/:id",
                element:<DonationCard></DonationCard>,
                loader:() => fetch (`/data.json`)
            }
        ]
    }
])
export default myCreatedRoute;