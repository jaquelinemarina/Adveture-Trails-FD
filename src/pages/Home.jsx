import style from './styles/Home.module.css'
import img from '../assets/img-background.jpg'
import img2 from '../assets/img2.jpg' 
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className={style.container}>
            < div className={style.img}>
                <img
                    src={img}
                    alt='imagem com pinheiros em primeiro plano e montanhas com neve ao fundo'
                    width={1400} />
            </div>

            <div className={style.content1}>
                <h1 className={style.title1}>Que tal aproveitar um tempo em meio a natureza?</h1>
                <p className={style.p1}>
                    Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros.
                    Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails FD
                </p>
                <Link to="/Lista" className={style.listHome}>Explorar Trilhas</Link>
            </div>

            <div className={style.content2}>
                <div className={style.explore}>
                    <h1 className={style.title2}>Explore trilhas incríveis</h1>
                    <p className={style.p2}>
                        O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para hiking, trekking e ciclismo ao redor do mundo.
                        Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas.
                        Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
                    </p>
                    <Link to="/Lista" className={style.listHome2}>Explorar Trilhas</Link>
                </div>

                <div className={style.register}>
                    <div className={style.text}>
                        <h1 className={style.title3}>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
                        <Link to="/Cadastro" className={style.registerHome}>Cadastrar Trilhas</Link>
                    </div>

                    <img className={style.img2}
                        src={img2}
                        alt='imagem floresta'>
                    </img>
                </div>
            </div>
        </div >
    )
}

export default Home;