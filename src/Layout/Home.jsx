import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";
import Review from "../Components/Review";


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