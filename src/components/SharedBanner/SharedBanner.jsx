import bannerImg1 from '../../assets/banner/bottomBg.png'
import bannerImg2 from '../../assets/banner/bottom.png'

const SharedBanner = ({pagination, title}) => {
    return (
        <div className="bg-[#07332F]" style={{ backgroundImage: `url(${bannerImg1})`, backgroundRepeat: 'no-repeat', backgroundSize: '200px', backgroundPosition: '6% 100%' }}>

            <div className="text-white h-96 mx-auto" style={{ backgroundImage: `url(${bannerImg2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100px', backgroundPosition: '80% 40%',  }} >
                <h2 className='text-white pt-40 ml-32'>{pagination}</h2>
                <h2 className='text-white text-5xl ml-32 font-bold'>{title}</h2>
            </div>

        </div>
    );
};

export default SharedBanner;