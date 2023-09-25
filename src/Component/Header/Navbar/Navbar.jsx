import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="flex justify-between">
            <img className="h-10" src="https://i.ibb.co/GxDc65F/Logo.png" alt="" />
           
           <ul className="flex justify-between gap-6">
            <li>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-semibold underline" : ""}
                >Home</NavLink>
            </li>
            <li>
            <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-semibold underline" : ""}
                >Donation</NavLink>
            </li>
            <li>
            <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-semibold underline" : ""}
                >Statistics</NavLink>
            </li>
           </ul>
            
        </div>
    );
};

export default Navbar;