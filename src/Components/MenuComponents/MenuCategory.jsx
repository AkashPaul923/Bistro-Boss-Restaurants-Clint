import Cover from "../Shared/Cover";
import MenuCard from "../Shared/MenuCard";



const MenuCategory = ({items, coverImg , coverTitle, coverSubTitle}) => {
    return (
        <div>
            {coverImg && <Cover img={coverImg} title={coverTitle} subTitle={coverSubTitle}></Cover>}
            <div className="max-w-7xl mx-auto my-20 px-5 md:px-10 lg:px-0">
                <div className="grid lg:grid-cols-2 gap-10">
                    {
                        items.map(item =><MenuCard key={item._id} item={item}></MenuCard>)
                    }
                </div>
                <button className="btn btn-outline block my-5 border-0 border-b-4 mx-auto">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;