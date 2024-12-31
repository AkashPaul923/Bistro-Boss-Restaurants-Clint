import { Parallax } from 'react-parallax';

const Cover = ({img, title, subTitle}) => {
    return (
        <Parallax blur={5} bgImage={img} bgImageAlt="bg image" strength={300}>
            <div  className="hero h-[400px] lg:h-[700px]">
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content w-5/6 md:w-3/4 text-white text-center bg-[#00000090]">
                    <div className="py-10 lg:py-20">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
        
    );
};

export default Cover;