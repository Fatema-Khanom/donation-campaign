import CategoriesCard from "./CategoriesCard";


const AllCategory = ({allCategory}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-10/12 m-auto my-24">
            {
                allCategory?.map (card => <CategoriesCard key={card} card={card} ></CategoriesCard>)
            }
        </div>
    );
};

export default AllCategory;