import React from 'react';

const CardStore = ({ card }) => {
    const {
        id,
        Picture,
        Category,
        Title,
        Category_bg_Color,
        Card_bg_Color,
        Text_button_bg_Color,
        Price,

      } = card || {};

      
        const cardStyle = {
            backgroundColor: Card_bg_Color,
            
        };

        const categoryStyle = {
            backgroundColor: Category_bg_Color,
            color: Text_button_bg_Color,
            
            

        };
        const textStyle ={
            color: Text_button_bg_Color ,
        }
        const bg ={
            backgroundColor: Text_button_bg_Color ,
        }

    return (
        <div>
           <div className='flex gap-6 rounded'style={cardStyle}>
            <div>
                <img src={Picture} alt="" className='rounded ' />
            </div>
                <div className=' mt-8 items-center'>
                <h1 className='inline-flex px-2' style={categoryStyle}>{Category}</h1>
                <h1 className='font-bold'>{Title}</h1>
                <p className='font-semibold' style={textStyle}>{Price}</p>
                <button className=' text-white py-[4px] px-2 rounded mt-4' style={bg}>View Details</button>
                </div>
            <div>

            </div>
           </div>
        </div>
    );
};

export default CardStore;