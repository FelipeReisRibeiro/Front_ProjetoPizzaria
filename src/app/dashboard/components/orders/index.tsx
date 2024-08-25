"use client"

import { use } from 'react'
import styles from './styles.module.scss'
import { RefreshCw } from 'lucide-react'
import { OrderProps } from '@/lib/order.type'
import {Modalorder} from '@/app/dashboard/components/modal'
import { OrderContext} from '@/providers/order'

interface Props{
    orders: OrderProps[]
}

export function Orders({ orders }: Props){
    const{isOpen, onRequestOpen} = use(OrderContext)

    return(
        <>

        <main className={styles.container}>
         
        <section className={styles.containerHeader}>
            <h1>Últimos podeidos</h1>
            <button>
                <RefreshCw size={24} color="#3fffa3"/>
            </button>

        </section>

        <section className={styles.listOrders}>
            {orders.map( order => (
                 <button
                 key={order.id} 
                 className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <span>Mesa {order.table}</span>
                 </button>
            ))}        
        </section>
        </main>
    
      {isOpen && <Modalorder/>}
    </>

    )
}