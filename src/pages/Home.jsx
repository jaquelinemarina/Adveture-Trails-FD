import style from './styles/Home.module.css'

function Home() {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.img}
                src='https://s3-alpha-sig.figma.com/img/d499/89ee/a6d23a7a9ffd6d136e430c855a72ebc0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCBgR7Pyqff8u8MSpH-UVgBRmgzDWPO89CvVWTUVK36oAJSDic0TFiF7MpDBbeQEgmTwR96kWtNSzFP2yEVfxEr6cKkR~I5g4vQ02vhX7lLrG0RYgiPsa8Nkv~1VCpK~C42quIejs4dZC7uZvGgPOe7y6A-SxuRsampbxZyfspUw3R372dO~GnpLnEfWoi44zMHxu~12qRqD3DiMCduubXZLxlpG1hDEsVuQc6F4TRB-XyV-vnlMj2iVsFx8-MIvocK2xE-jti4n~7r75dMhHLTVPy22FDNxcEiMZtxbJrQNXKIyagTyxYipldkopUnaY6~MGItO-Bdyipg~NBzatw__'
                alt='imagem home'>
            </div>
            <h1 className={style.title1}>Que tal aproveitar um tempo com a natureza?</h1>
            <p className={style.p1}>
                Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros.
                Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!
            </p>

            <button className={style.button1} onClick={Lista}>Explorar trilhas</button>

            <h1 className={style.title2}>Explore trilhas incríveis</h1>
            <p className={style.p2}>
                O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo.
                Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas.
                Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
            </p>

            <button className={style.button2} onClick={Lista}>Explorar trilhas</button>

            <h1 className={style.title3}>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
            <button className={style.button3} onClick={Cadastro}>Cadastrar novas trilhas</button>

            <div className={style.img2}
                src='https://s3-alpha-sig.figma.com/img/749a/d3cd/b59b552226c32b61fb8ba0ba617adccb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NGwjSnDaaKjKexnlWu1ilnUx6YJb1BX6YieK~FC2nlRpPiOasMRO~AP3FP45EnCtHAZ7p2I~2jTq3P1GvnJ0jouuxFzflK6SBchxsbYzVzfXKiNhhz6tE7ahAT8zig2kt9whVF5d0KEUyt5axCosM15nhnXy43DIBsY6sXhHtXyfFYaai1ucxjdWf2x3aBHsYkXV6PMLsmEbhdLR4Bt8dzoiPgywb63o5rgUFm7HitTMI9I0MlEnT-6piPXEvZm7YZfRen1kTsHf99~tSueQdaIpBOheAiufn4e3KVQoHaq8IZhpv~KGtJZ7tvIAXAcotvxenDlM7lKeK~uovykcYQ__'
                alt='imagem floresta'>
            </div>
            <Footer />
        </div>
    )
}

export default Home;