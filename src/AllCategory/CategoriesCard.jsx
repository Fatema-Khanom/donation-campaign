

import { Link } from "react-router-dom";

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
    color: Text_button_bg_Color ,
  }

  return (
    <div>
      <Link to={`/donation-details/${id}`}>
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
          <h4 className="font-semibold inline-flex px-2 "style={categoryStyle} >
            {Category}
          </h4>
          <p className="mt-3 block font-sans font-bold leading-relaxed text-gray-700 antialiased " style={textStyle}>
            {Title}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CategoriesCard;

