import * as PropTypes from "prop-types";
import style from "./card.module.css";

function CardTrilha() {
  return (
    <div className={style.container}>
      <img
        className={style.img}
        width={200}
        src={trilhas.urlImagem}
        alt="imagem trilha"
      />
      <div className={style.card - area}>
        <h1 className={style.title}>{trilhas.nomeTrilha} - {trilhas.cidade} / {trilhas.estado}</h1>
        <h3 className={style.user}>Por: {trilhas.nomeUsuario}</h3>
        <div className={style.info}>
          <p>Duração: {trilhas.duracao} minutos</p>
          <p>Trajeto: {trilhas.trajeto} km</p>
        </div>
        <div className={style.difficulty}>
          <p>Dificuldade: {trilhas.dificuldade}</p>
        </div>
      </div>
    </div>
  );
}

// configuração das props types
CardTrilha.propTypes = {
  trilhas: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(["Hiking", "Trekking", "Ciclismo"]),
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired,
  }),
};

export default CardTrilha;
