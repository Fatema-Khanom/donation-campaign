
// import React from "react";
// const CategoriesCard = ({card}) => {
//     const {id,Picture,Category,Title,Category_bg_Color,Card_bg_Color,Text_button_bg_Color}= card || {}
//     const {
//         Category_bg_Color,
//         Card_bg_Color,
//         Text_button_bg_Color
//       } = colors || {};
//         const cardBgClass = `bg-${Card_bg_Color}`;
//         const categoryBgClass = `bg-${Category_bg_Color}`;
//         const textButtonBgClass = `bg-${Text_button_bg_Color}`;

//     return (
//         <div>
//             <div className={`relative flex max-w-[24rem] flex-col rounded-xl 
//              bg-clip-border text-gray-700 ${cardBgClass} h-72`}>
//                 <div className="relative m-0 overflow-hidden 
//                 rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
//                     <img className="h-[250px]"
//                     src={Picture}
//                     alt=""
//                     />
//                 </div>
//                 <div className="p-6">
//                     <h4 className="block font-sans  font-semibold
//                      leading-snug tracking-normal text-blue-gray-900 antialiased">
//                     {Category}
//                     </h4>
//                     <p className="mt-3 block font-sans font-normal
//                      leading-relaxed text-gray-700 antialiased">
//                     {Title}
//                     </p>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default CategoriesCard;

import React from "react";

const CategoriesCard = ({ card }) => {
  const {
    id,
    Picture,
    Category,
    Title,
    Category_bg_Color,
    Card_bg_Color,
    Text_button_bg_Color,
  } = card || {};

  
  const cardStyle = {
    backgroundColor: Card_bg_Color,
  };

  const categoryStyle = {
    backgroundColor: Category_bg_Color,
    color: Text_button_bg_Color,

  };
  const textStyle ={
    color: Text_button_bg_Color,
  }

  return (
    <div>
      <div
        className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 h-72"
        style={cardStyle} 
      >
        <div
          className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"
          
        >
          <img className="h-[250px]" src={Picture} alt="" />
        </div>
        <div className="p-6">
          <h4 className="block font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"style={categoryStyle} >
            {Category}
          </h4>
          <p className="mt-3 block font-sans font-normal leading-relaxed text-gray-700 antialiased" style={textStyle}>
            {Title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
