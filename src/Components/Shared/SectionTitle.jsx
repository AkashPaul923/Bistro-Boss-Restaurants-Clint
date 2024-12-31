

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="mx-auto text-center md:w-1/3 my-8 ">
            <p className="text-yellow-600 mb-3">--- {subTitle} ---</p>
            <h3 className="text-3xl border-y-4 uppercase py-4">{title}</h3>
        </div>
    );
};

export default SectionTitle;