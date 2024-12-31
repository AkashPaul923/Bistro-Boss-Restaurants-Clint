import SectionTitle from "../Shared/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'


const Featured = () => {
    return (
    <div className="bg-center bg-fixed" style={{backgroundImage: `url(${featuredImg})`}}>
        <div className=" py-28 px-5 lg:px-0 backdrop-brightness-50  text-white">
            <SectionTitle title={'From Our Menu'} subTitle={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto ">
                <img src={featuredImg} alt="" className="w-full flex-1" />
                <div className="my-auto space-y-4 ">
                    <p className="text-2xl">Aug 28, 2024</p>
                    <p className="uppercase text-2xl">Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium quae nemo molestiae dolorem amet praesentium, placeat aut assumenda asperiores sunt, explicabo blanditiis mollitia impedit reprehenderit enim quis repellat sit! Magni voluptatibus illum vero exercitationem quis pariatur reiciendis atque ducimus itaque inventore. Nostrum natus quam perspiciatis voluptatibus dicta, amet quo.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Featured;