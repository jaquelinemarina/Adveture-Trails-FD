import style from './styles/Lista.module.css';
import CardTrilha from '../components/cardTrilhas/card';
import { TrilhasContext } from '../context/TrilhasContext';
import { useContext } from 'react';


export function Lista() {

    const { trilhas, isLoading } = useContext(TrilhasContext)

    return (
        <div className={style.container}>
            <div className={style.img}
                src='https://s3-alpha-sig.figma.com/img/d499/89ee/a6d23a7a9ffd6d136e430c855a72ebc0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCBgR7Pyqff8u8MSpH-UVgBRmgzDWPO89CvVWTUVK36oAJSDic0TFiF7MpDBbeQEgmTwR96kWtNSzFP2yEVfxEr6cKkR~I5g4vQ02vhX7lLrG0RYgiPsa8Nkv~1VCpK~C42quIejs4dZC7uZvGgPOe7y6A-SxuRsampbxZyfspUw3R372dO~GnpLnEfWoi44zMHxu~12qRqD3DiMCduubXZLxlpG1hDEsVuQc6F4TRB-XyV-vnlMj2iVsFx8-MIvocK2xE-jti4n~7r75dMhHLTVPy22FDNxcEiMZtxbJrQNXKIyagTyxYipldkopUnaY6~MGItO-Bdyipg~NBzatw__'
                alt='imagem trilhas'>
            </div>
            <h1 className={style.title}>Explore trilhas incríveis</h1>


            {Array.isArray(trilhas) && !isLoading ? (
                trilhas.map((trilhas, index) => (
                    <CardTrilha dadosTrilha={trilhas} key={index} />
                ))
            ) : (
                <p>Não há dados disponíveis</p>
            )
            }
            <CardTrilha />
        </div>
    );
}

export default Lista;