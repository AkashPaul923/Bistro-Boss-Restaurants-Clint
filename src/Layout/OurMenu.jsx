import PopularMenu from "../Components/HomeComponents/PopularMenu";
import Cover from "../Components/Shared/Cover";
import menuBg from "../assets/menu/banner3.jpg"
import soupBg from "../assets/menu/soup-bg.jpg"
import dessertBg from "../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../assets/menu/pizza-bg.jpg"
import saladBg from "../assets/menu/salad-bg.jpg"
// import useMenu from "../Hooks/useMenu";
import MenuCategory from "../Components/MenuComponents/MenuCategory";
import SectionTitle from "../Components/Shared/SectionTitle";
import useCategoryFood from "../Hooks/useCategoryFood";


const OurMenu = () => {
    // const [menu] = useMenu()
    // const offered = menu.filter(item => item.category === 'offered')
    // const desserts = menu.filter(item => item.category === 'dessert')
    // const soups = menu.filter(item => item.category === 'soup')
    // const salads = menu.filter(item => item.category === 'salad')
    // const pizzas = menu.filter(item => item.category === 'pizza')

    const { offered, desserts, soups, salads, pizzas } = useCategoryFood()

    
    return (
        <div>
            <Cover img={menuBg} title='Our Menu' subTitle='WOULD YOU LICK TO TRY A DISH?'></Cover>
            <SectionTitle title='Todays Offer' subTitle="Don't Miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
             items={desserts} 
             coverImg={dessertBg} 
             coverTitle='Dessert' 
             coverSubTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cumque ipsa vel quo perferendis ex esse ratione repellendus repellat, iure rem sunt iusto, reprehenderit vitae alias animi. Quia, necessitatibus enim."
            >
            </MenuCategory>

            <MenuCategory
             items={pizzas} 
             coverImg={pizzaBg} 
             coverTitle='Pizza' 
             coverSubTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cumque ipsa vel quo perferendis ex esse ratione repellendus repellat, iure rem sunt iusto, reprehenderit vitae alias animi. Quia, necessitatibus enim."
            >
            </MenuCategory>

            <MenuCategory
             items={salads} 
             coverImg={saladBg} 
             coverTitle='Salad' 
             coverSubTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cumque ipsa vel quo perferendis ex esse ratione repellendus repellat, iure rem sunt iusto, reprehenderit vitae alias animi. Quia, necessitatibus enim."
            >
            </MenuCategory>

            <MenuCategory
             items={soups} 
             coverImg={soupBg} 
             coverTitle='Soup' 
             coverSubTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cumque ipsa vel quo perferendis ex esse ratione repellendus repellat, iure rem sunt iusto, reprehenderit vitae alias animi. Quia, necessitatibus enim."
            >
            </MenuCategory>
        </div>
    );
};

export default OurMenu;