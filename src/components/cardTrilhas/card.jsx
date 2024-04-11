import * as PropTypes from "prop-types";
import "./card.css";

function CardTrilha() {
  return (
    <div className="card_container">
      <img
        className="card_imagem"
        width={200}
        src={trilhas.urlImagem}
        alt="imagem trilha"
      />
      <div className="text_container">
        <h1>{trilhas.nomeTrilha}</h1>
        <p>Trajeto: {trilhas.trajeto} km</p>
        <p>Duração: {trilhas.duracao} minutos</p>
        <p>Dificuldade: {trilhas.dificuldade}</p>
        <p>Tipo: {trilhas.tipo}</p>
      </div>
      <span>
        {trilhas.cidade} / {trilhas.estado}
      </span>
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
