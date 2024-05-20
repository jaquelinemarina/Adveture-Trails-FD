// ScrollToTopButton.js
import React from 'react'
import styles from './btnScroll.module.css'

const BtnScroll = () => {
    // Função que rola a página para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={styles.scrollToTop}
            onClick={scrollToTop}
            title="Voltar ao topo"
        >
            <i className="fa-solid fa-chevron-up"></i>
        </button>
    )
}

export default BtnScroll
