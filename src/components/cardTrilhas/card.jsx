import * as PropTypes from "prop-types"
import style from "./card.module.css"
import React from "react"
import { useContext } from "react"
import { TrilhasContext } from "../../context/TrilhasContext"

function CardTrilha({ trilhas }) {

  const {deleteTrilha} = useContext(TrilhasContext)

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imgContent}>
          <img
            className={style.img}
            src={trilhas.urlImg}
            alt="imagem trilha"
          />
        </div>

        <div className={style.textContent}>
        <button className={style.btnDelete} onClick={() => deleteTrilha(trilhas.id)}><i className={"fa-solid fa-trash-can"}></i></button>
          <h1 className={style.title}>{trilhas.nameTrail} </h1>
          <h1 className={style.subtitle}>{trilhas.city} / {trilhas.state}</h1>
          <h3 className={style.user}>Por: {trilhas.nameUser}</h3>

          <div className={style.info}>
            <p>Duração: {trilhas.duration} minutos</p>
            <p>Trajeto: {trilhas.path} km</p>
          </div>

          <div className={style.difficulty}>
            <p>Dificuldade: {trilhas.difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// configuração das props types
CardTrilha.propTypes = {
  trilhas: PropTypes.exact({
    nameTrail: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    path: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(["Fácil", "Moderada", "Difícil"]),
    typeTrail: PropTypes.oneOf(["Hiking", "Trekking", "Ciclismo"]),
    nameUser: PropTypes.string.isRequired,
    urlImg: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default CardTrilha
