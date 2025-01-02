import { useParams } from "react-router-dom";
import OrderTab from "../Components/OrderFoodComponents/OrderTab";
import Cover from "../Components/Shared/Cover";
import useCategoryFood from "../Hooks/useCategoryFood";
import orderCoverImg from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";


const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const { desserts, soups, salads, pizzas, drinks } = useCategoryFood()
    const [tabIndex, setTabIndex] = useState(initialIndex)


    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food" subTitle="Would you like to try a dish?"></Cover>
            <div className="max-w-7xl mx-auto my-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALADS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;