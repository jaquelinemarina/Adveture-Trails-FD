import style from './styles/Home.module.css'
import { Lista } from './Lista'
import Cadastro from './Cadastro'



function Home() {
    return (
        <div className={style.container}>
            < div className={style.img}>
                <img
                    src='https://s3-alpha-sig.figma.com/img/d499/89ee/a6d23a7a9ffd6d136e430c855a72ebc0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCBgR7Pyqff8u8MSpH-UVgBRmgzDWPO89CvVWTUVK36oAJSDic0TFiF7MpDBbeQEgmTwR96kWtNSzFP2yEVfxEr6cKkR~I5g4vQ02vhX7lLrG0RYgiPsa8Nkv~1VCpK~C42quIejs4dZC7uZvGgPOe7y6A-SxuRsampbxZyfspUw3R372dO~GnpLnEfWoi44zMHxu~12qRqD3DiMCduubXZLxlpG1hDEsVuQc6F4TRB-XyV-vnlMj2iVsFx8-MIvocK2xE-jti4n~7r75dMhHLTVPy22FDNxcEiMZtxbJrQNXKIyagTyxYipldkopUnaY6~MGItO-Bdyipg~NBzatw__'
                    alt='imagem home' />
            </div>

            <div className={style.content1}>
                <h1 className={style.title1}>Que tal aproveitar um tempo em meio a natureza?</h1>
                <p className={style.p1}>
                    Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros.
                    Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails FD!
                </p>
                <a className={style.button1} href="./Lista">Explorar Trilhas</a>
            </div>

            <div className={style.content2}>
                <div className={style.explore}>
                    <h1 className={style.title2}>Explore trilhas incríveis</h1>
                    <p className={style.p2}>
                        O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo.
                        Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas.
                        Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
                    </p>
                    <a className={style.button2} href="./Lista">Explorar Trilhas</a>
                </div>

                <div className={style.register}>
                    <div className={style.text}>
                        <h1 className={style.title3}>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
                        <a className={style.button3} href="./Cadastro">Cadastrar Trilhas</a>
                    </div>

                    <img className={style.img2}
                        src='https://cdn.pixabay.com/photo/2020/10/02/13/38/sea-5621150_1280.jpg'
                        alt='imagem floresta'>
                    </img>
                </div>
            </div>
        </div >
    )
}

export default Home;