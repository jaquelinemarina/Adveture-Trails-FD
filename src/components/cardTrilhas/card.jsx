import * as PropTypes from "prop-types"
import style from "./card.module.css"
import React from "react"

function CardTrilha({ trilhas }) {

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imgcontent}>
          <img
            className={style.img}
            width={200}
            src={trilhas.urlImg}
            alt="imagem trilha"
          />
        </div>

        <div className={style.textContent}>
          <h1 className={style.title}>{trilhas.nameTrail} - {trilhas.city} / {trilhas.state}</h1>
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
