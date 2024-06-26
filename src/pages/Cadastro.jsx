import { useContext } from 'react'
import { TrilhasContext } from '../context/TrilhasContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import style from './styles/Cadastro.module.css'
import img from '../assets/img-cadastro.jpeg'

function Cadastro() {
    const { addTrilha } = useContext(TrilhasContext)
    const Navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()

    function onSubmit(formValue) {
        console.log("Formulário enviado", formValue)

        addTrilha({...formValue, duration: Number(formValue.duration), path: Number(formValue.path)})

        Navigate('/Lista')
    }

    return (
        <div className={style.container}>

            <div className={style.img}>
                <img src={img} alt="Imagem de uma trilha"
                    width={645} />
            </div>

            <div className={style.content}>
                <h1 className={style.title}>Cadastre uma nova trilha</h1>

                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>

                    <div className={style.nameTrail}>
                        <label htmlFor="nameTrail">Nome da trilha</label>
                        <input placeholder="digite o nome da trilha"
                            type="text"
                            {...register("nameTrail", {
                                required: "Por favor, insira o nome da trilha.",
                                minLength: { value: 3, message: "Insira um nome válido." },
                                maxLength: { value: 100, message: "Máximo 100 caracteres." },
                            })} />
                        {errors?.nameTrail && <p>{errors.nameTrail.message}</p>}
                    </div>

                    <div className={style.columns}>
                        <div className={style.sideOne}>

                            <div className={style.duration}>
                                <label htmlFor="duration">Duração estimada (min)</label>
                                <input placeholder="duração da trilha"
                                    type="number"
                                    {...register("duration", {
                                        required: "Por favor, insira a duração.",
                                        maxLength: { value: 4, message: "Máximo 4 caracteres." },
                                    })} />
                                {errors?.duration && <p>{errors.duration.message}</p>}
                            </div>

                            <div className={style.city}>
                                <label htmlFor="city">Cidade</label>
                                <input placeholder="digite o nome da cidade"
                                    type="text"
                                    {...register("city", {
                                        required: "Por favor, digite a cidade.",
                                        minLength: { value: 3, message: "Insira um nome válido." },
                                        maxLength: { value: 60, message: "Máximo 60 caracteres." },
                                    })} />
                                {errors?.city && <p>{errors.city.message}</p>}
                            </div>

                            <div className={style.nameUser}>
                                <label htmlFor="nameUser">Nome completo do usuário</label>
                                <input placeholder="digite o seu nome completo"
                                    type="text"
                                    {...register("nameUser", {
                                        maxLength: { value: 60, message: "Máximo 60 caracteres." },
                                    })} />
                                {errors?.nameUser && <p>{errors.nameUser.message}</p>}
                            </div>
                        </div>

                        <div className={style.sideTwo}>

                            <div className={style.path}>
                                <label htmlFor="path">Trajeto (km)</label>
                                <input placeholder="distância da trilha"
                                    type="number"
                                    step={0.01}
                                    {...register("path", {
                                        required: "Por favor, insira a distância.",
                                        maxLength: { value: 5, message: "Máximo 5 caracteres." },
                                    })} />
                                {errors?.path && <p>{errors.path.message}</p>}
                            </div>

                            <div className={style.state}>
                                <label htmlFor="state">Estado</label>
                                <select name="state" id="state"
                                    {...register("state", {
                                        required: "Por favor, selecione uma opção."
                                    })}>
                                    <option value="">selecione o estado</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                                {errors?.state && <p>{errors.state.message}</p>}
                            </div>

                            <div className={style.difficulty}>
                                <label htmlFor="difficulty">Dificuldade</label>
                                <select name="difficulty" id="difficulty"
                                    {...register("difficulty", {
                                        required: "Por favor, selecione uma opção."
                                    })}>
                                    <option value="">selecione a dificuldade</option>
                                    <option value="Fácil">Fácil</option>
                                    <option value="Moderada">Moderada</option>
                                    <option value="Difícil">Difícil</option>
                                </select>
                                {errors?.difficulty && <p>{errors.difficulty.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className={style.typeTrail}>
                        <label htmlFor="typeTrail">Tipo de trilha</label>
                        <select name="typeTrail" id="typeTrail"
                            {...register("typeTrail", {
                                required: "Por favor, selecione uma opção."
                            })}>
                            <option value="">selecione o tipo de trilha</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Trekking">Trekking</option>
                            <option value="Ciclismo">Ciclismo</option>
                        </select>
                        {errors?.typeTrail && <p>{errors.typeTrail.message}</p>}
                    </div>

                    <div className={style.urlImg}>
                        <label htmlFor="urlImg">URL imagem da trilha</label>
                        <input placeholder="insira o link da imagem"
                            type="text"
                            {...register("urlImg", {
                                maxLength: { value: 300, message: "Máximo 300 caracteres." },
                            })} />
                        {errors?.urlImg && <p>{errors.urlImg.message}</p>}
                    </div>

                    <div className={style.btn}>
                        <button className={style.btnRegister} type="submit">Cadastrar</button>
                        <a className={style.btnBack} href="/">Voltar</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;