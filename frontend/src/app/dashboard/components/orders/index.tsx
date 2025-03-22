import styles from './style.module.scss'
import { RefreshCcw } from 'lucide-react'
import { OrderProps } from '@/lib/order.type'

interface Props {
    orders: OrderProps[]
}

export function Orders({ orders }: Props){
    return(
        <main className={styles.container}>

            <section className={styles.containerHeader}>
                <h1>Últimos pedidos</h1>
                <button>
                    <RefreshCcw size={24} color='#3fffa3'/> 
                </button>
            </section>

            <section className={styles.containerListOrders}>
                {orders.map((order) => (
                    <button key={order.id} className={styles.orderItem}>
                        <div className={styles.tag}></div>
                        <span>Mesa {order.table}</span>
                    </button>
                ))}
            </section>

        </main>
    )
}