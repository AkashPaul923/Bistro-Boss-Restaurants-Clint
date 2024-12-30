import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;