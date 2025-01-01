import useMenu from "./useMenu";


const useCategoryFood = () => {
    const [menu] = useMenu()

    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')


    return { offered, desserts, soups, salads, pizzas, drinks }
};

export default useCategoryFood;