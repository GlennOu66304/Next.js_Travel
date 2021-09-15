import heroSectionStyles from '../styles/HeroSection.module.css';
import {Button} from './Button';
const HeroSection = () => {
    return (
        <div className={heroSectionStyles.hero_container}>
            <video className={heroSectionStyles.video} src='../videos/video-1.mp4' autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p >What are you waitting for ?</p>
            <div className={heroSectionStyles.hero_btns}>
                <Button
                    className={heroSectionStyles.btns}
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

                <Button
                    className={heroSectionStyles.btns}
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>

        </div>

    )
}
export default HeroSection