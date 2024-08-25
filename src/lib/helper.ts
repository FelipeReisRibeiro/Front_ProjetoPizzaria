import { OrderItemProps } from "@/providers/order";

export function calculatetotalOrder(orders: OrderItemProps[]){
   return orders.reduce((total, item) => {
    const itemTotal = parseFloat(item.product.price) * item.amount;
    return total + itemTotal
   }, 0)
}