import './style.css';
import imageLogo from '../../../public/images/logo.png';
import imageFundo from '../../../public/images/fundo.png';
import imageIg from '../../../public/images/ig.png';
import imageFb from '../../../public/images/fb.png';
import imageTw from '../../../public/images/tw.png';

export const Rodape = () => {
    return (
        <footer className='rodapePage'>
            <div className='sociais'>
                <img src={imageIg} alt="Banner do site" />
                <img src={imageFb} alt="Banner do site" />
                <img src={imageTw} alt="Banner do site" />
            </div>
            <img src={imageLogo} />
            <div>
                <h2>Desenvolvido por Fabiano SSantos</h2>
            </div>
        </footer>
    )
}