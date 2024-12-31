import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import MenuCard from "./MenuCard";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(item => item.category === 'popular')
            setMenu(popular)
        })
    },[])

    return (
        <div className="max-w-7xl mx-auto my-20 px-5 md:px-10 lg:px-0">
            <SectionTitle title={'from our menu'} subTitle={'Check it out'}></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-10">
                {
                    menu.map(item =><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <p className="text-center my-5 uppercase border-black border-b-8 rounded-b-xl max-w-[180px] mx-auto pb-2">View Full Menu</p>
        </div>
    );
};

export default PopularMenu;