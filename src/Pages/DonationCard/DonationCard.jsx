import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cards from '../../AllCategory/Cards';

const DonationCard = () => {
    const [donationCard, setDonationCard]= useState()
    
    const {id} = useParams()
    const   donationCards = useLoaderData()
    useEffect(()=>{
        const findDonationCard = donationCards?.find(donationCard=> donationCard.id===id)
        setDonationCard(findDonationCard)
    },[id,donationCards])
    
    return (
        <div className=''>
           <Cards donationCard={donationCard}></Cards>
            
        </div>
    );
};

export default DonationCard;