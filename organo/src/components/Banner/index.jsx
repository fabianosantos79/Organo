import './style.css'
import imgBanner from '../../../public/images/banner.png'

const Banner = () => {

    return (
        <header className="banner" >
            <img src={imgBanner} alt="Banner do site" />
        </header>
    )
}

export default Banner