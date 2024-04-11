import CardTrilha from '../components/cardTrilhas/card';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import useFetch from '../hooks/useFetch';
import style from './styles/Lista.module.css';


export function Json() {
    
    const [trilhas] = useFetch("/json/trilhas.json")
    
    return (
        <>
            {trilhas &&
                trilhas.map((trilhas) => (
                    <CardTrilha key={trilhas.nomeTrilha} />
                ))}
        </>
    )
}


 export function Lista() {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.img}
                src='https://s3-alpha-sig.figma.com/img/d499/89ee/a6d23a7a9ffd6d136e430c855a72ebc0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCBgR7Pyqff8u8MSpH-UVgBRmgzDWPO89CvVWTUVK36oAJSDic0TFiF7MpDBbeQEgmTwR96kWtNSzFP2yEVfxEr6cKkR~I5g4vQ02vhX7lLrG0RYgiPsa8Nkv~1VCpK~C42quIejs4dZC7uZvGgPOe7y6A-SxuRsampbxZyfspUw3R372dO~GnpLnEfWoi44zMHxu~12qRqD3DiMCduubXZLxlpG1hDEsVuQc6F4TRB-XyV-vnlMj2iVsFx8-MIvocK2xE-jti4n~7r75dMhHLTVPy22FDNxcEiMZtxbJrQNXKIyagTyxYipldkopUnaY6~MGItO-Bdyipg~NBzatw__'
                alt='imagem trilhas'>
            </div>
            <h1 className={style.title}>Explore trilhas incríveis</h1>
            <CardTrilha />
            <Footer />
        </div>
    );
}

export default Lista;