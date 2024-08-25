import styles from './styles.module.scss'
import {X} from 'lucide-react'


export function Modalorder(){
    return(
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogBack}>
                    <X size={40} color="#FF3f4b"/>
                </button>

            <article className={styles.container}>
                <h2>Detalhes do pedido</h2>

                <span className={styles.table}>
                    Mesa <b>36</b>
                </span>

                <section className={styles.item}>
                    <span>1 - <b> uma pizza 4 queijos</b></span>
                    <span className={styles.description}>Pizza Portuguesa</span>
                </section>
                
                <section className={styles.item}>
                    <span>1 - <b> uma pizza calabreza</b></span>
                    <span className={styles.description}>Pizza Portuguesa</span>
                </section>

                <button className={styles.buttonOrder}>
                    Concluir pedido
                </button>

            </article>
            
            </section>
        </dialog>
    )
}