

const MenuCard = ({item}) => {

    const {name, image, price, recipe} = item

    return (
        <div className="flex gap-3">
            <img className="rounded-b-[200px] rounded-r-[200px] w-[118px] h-[104px] object-cover" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuCard;