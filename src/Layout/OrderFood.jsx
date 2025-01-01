import Cover from "../Components/Shared/Cover";
import useCategoryFood from "../Hooks/useCategoryFood";
import orderCoverImg from '../assets/shop/banner2.jpg'


const OrderFood = () => {
    const { desserts, soups, salads, pizzas, drinks } = useCategoryFood()


    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food" subTitle="Would you like to try a dish?"></Cover>
            <div className="max-w-7xl mx-auto">

            </div>
        </div>
    );
};

export default OrderFood;