import * as PropTypes from "prop-types";
import "./card.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div className="card_container">
      <img
        className="card_imagem"
        width={200}
        src={dadosTrilha.urlImagem}
        alt="imagem trilha"
      />
        <div className="text_container">
      <h1>{dadosTrilha.nomeTrilha}</h1>
        <p>Trajeto: {dadosTrilha.trajeto} km</p>
        <p>Duração: {dadosTrilha.duracao} minutos</p>
        <p>Dificuldade: {dadosTrilha.dificuldade}</p>
        <p>Tipo: {dadosTrilha.tipo}</p>
      </div>
      <span>
        {dadosTrilha.cidade} / {dadosTrilha.estado}
      </span>
    </div>
  );
}

// configuração das props types
CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
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
