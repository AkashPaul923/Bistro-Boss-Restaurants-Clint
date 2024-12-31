import PopularMenu from "../Components/HomeComponents/PopularMenu";
import Cover from "../Components/Shared/Cover";
import menuBg from "../assets/menu/banner3.jpg"


const OurMenu = () => {
    return (
        <div>
            <Cover img={menuBg} title='Our Menu' subTitle='WOULD YOU LICK TO TRY A DISH?'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuBg} title='Our Menu' subTitle='WOULD YOU LICK TO TRY A DISH?'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuBg} title='Our Menu' subTitle='WOULD YOU LICK TO TRY A DISH?'></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default OurMenu;