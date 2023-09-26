import { useEffect, useState } from "react";
import Cards from "../../AllCategory/Cards";
import CardStore from "../CardStore/CardStore";


const Donation = () => {
    const [donation,setDonation] =useState([])
    const [noFound,setNoFound]=useState(false)
    const [isShow,setIsShow]=useState(false)
    useEffect(()=>{
        const donationItem=JSON.parse(localStorage.getItem("donation"))
        if(donationItem){
            setDonation(donationItem)
        }
        else{
            setNoFound('No data found !!!')
        }
    },[])
    const handleRemove =()=>{
        localStorage.clear()
        setDonation([])
        setNoFound("No data found !!!")
    }
    return <div>{noFound?<p className="h-[80vh] flex justify-center items-center text-3xl font-bold text-red-700">{noFound}</p>
    :
    <div>
        {
            donation.length>0 && <button onClick={handleRemove} 
            className="px-5 bg-white shadow-lg py-2 md:-mt-10 rounded text-gray-400 hover:text-xl  block mx-auto">Delete All Donation</button>
        }
        <div className="grid grid-cols-1  md:grid-cols-2 w-10/12 m-auto gap-6 my-10">
            {
            isShow?donation.map(card=>(<CardStore key={card.id} card={card}></CardStore>)):
            donation.slice(0,4).map(card=>(<CardStore key={card.id} card={card}></CardStore>))
            
            }
        </div>
        <button onClick={()=>setIsShow(!isShow)} className="py-2 px-4 rounded mb-10 text-white  bg-green-400  block mx-auto">{isShow?"See Less":"See All"}</button>
    </div>}</div>
    
};

export default Donation;