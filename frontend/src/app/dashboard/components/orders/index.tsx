import styles from './style.module.scss'
import { RefreshCcw } from 'lucide-react'

export function Orders(){
    return(
        <main className={styles.container}>

            <section className={styles.containerHeader}>
                <h1>Últimos pedidos</h1>
                <button>
                    <RefreshCcw size={24} color='#3fffa3'/> 
                </button>
            </section>

            <section className={styles.containerListOrders}>
                <button className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <span>Mesa 22</span>
                </button>
                <button className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <span>Mesa 12</span>
                </button>
            </section>

        </main>
    )
}