import style from './styles/Cadastro.module.css'
import img from '../assets/img-cadastro.jpeg'

function Cadastro() {

    return (
        <div className={style.container}>

            <div className={style.img}>
                <img src={img} alt="Imagem de uma trilha" 
                width={600}/>
            </div>

            <div className={style.content}>
                <h1 className={style.title}>Cadastre uma nova trilha</h1>

                <form className={style.form}>
                    <div className={style.div1}>
                        <label>Nome da trilha</label>
                        <input type="text" placeholder="digite o nome da trilha" required />
                    </div>

                    <div className={style.columns}>
                        <div className={style.div2}>
                            <label>Duração estimada (min)</label>
                            <input type="number" min={1} placeholder="digite a duração em minutos" required />
                            <br />
                            <label>Cidade</label>
                            <input type="text" placeholder="digite o nome da cidade" required />
                            <br />
                            <label>Nome completo do usuário</label>
                            <input type="text" placeholder="digite o seu nome completo" required />
                        </div>

                        <div className={style.div3}>
                            <label>Trajeto (km)</label>
                            <input type="number" min={1} placeholder="digite a distância em km" required />
                            <br />
                            <label>Estado</label>
                            <input type="text" placeholder="SC" required />
                            <br />
                            <label>Dificuldade</label>
                            <select id="difficulty" name="difficulty" required>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Moderada">Moderada</option>
                                <option value="Avançada">Avançada</option>
                            </select>
                        </div>
                    </div>

                    <div className={style.div4}>
                        <label>Tipo de trilha</label>
                        <select id="typeTrail" name="typeTrail" required>
                            <option value="Hiking">Hiking</option>
                            <option value="Trekking">Trekking</option>
                            <option value="Ciclismo">Ciclismo</option>
                        </select>
                    </div>

                    <div className={style.div5}>
                        <label>URL imagem da trilha</label>
                        <input type="text" placeholder="insira o link de uma imagem da trilha" required />
                    </div>

                    <div className={style.btn}>
                        <button className={style.btnRegister} type="submit">Cadastrar</button>
                        <button className={style.btnBack} type="submit">Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;