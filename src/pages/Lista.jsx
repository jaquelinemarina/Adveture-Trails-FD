import style from './styles/Lista.module.css';
import CardTrilha from '../components/cardTrilhas/card';
import { TrilhasContext } from '../context/TrilhasContext';
import { useContext } from 'react';
import img from '../assets/img-background.jpg'


export function Lista() {

    const { trilhas } = useContext(TrilhasContext)

    return (
        <div className={style.container}>

            <img className={style.img}
                src={img}
                alt='imagem com pinheiros em primeiro plano e montanhas com neve ao fundo'>
            </img>

            <div className={style.content}>
                <h1 className={style.title}>Explore trilhas incríveis</h1>

                {!!trilhas && Array.isArray(trilhas) && trilhas.map((trilha) => (
                    <CardTrilha key={trilha.id} trilhas={trilha} />
                ))}
            </div>
        </div>
    );
}

export default Lista;