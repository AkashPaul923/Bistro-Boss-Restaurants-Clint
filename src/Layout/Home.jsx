import Banner from "../Components/HomeComponents/Banner";
import Categories from "../Components/HomeComponents/Categories";
import Featured from "../Components/HomeComponents/Featured";
import PopularMenu from "../Components/HomeComponents/PopularMenu";
import Review from "../Components/HomeComponents/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;