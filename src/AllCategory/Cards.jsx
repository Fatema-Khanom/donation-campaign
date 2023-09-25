import React from 'react';

const Cards = ({donationCard}) => {
    const {
        id,
        Picture,
        Category,
        Title,
        Category_bg_Color,
        Card_bg_Color,
        Text_button_bg_Color,
        Price,
        Description,
      } = donationCard || {};
      const textStyle ={
        background: Text_button_bg_Color ,
      }
    return (
        <div>
             <div className="relative flex w-10/12 m-auto   flex-col  bg-white my-20 ">
            <div className="">
                <img
                className='w-full'
                src={Picture}
                alt="ui/ux review check"
                />
                <button onClick=
                 className='relative -top-16 text-white text-xl 
                font-semibold left-16 py-2 px-4 rounded'style={textStyle}>Donate {Price}</button>
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {Title}
                </h4>
                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                {Description}
                </p>
            </div>
            
            </div>
        </div>
    );
};

export default Cards;