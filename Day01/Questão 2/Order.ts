import Costumer, { Maria } from "./Costumer";
import Item, { item1, item2, item3 } from "./Item";

class Order {
  costumer: Costumer;
  item: Item[];
  payment: string;
  discount?: number;
  
  constructor(costumer: Costumer, item: Item[], payment: string, discount?: number) {
    this.costumer = costumer;
    this.item = item;
    this.payment = payment;
    this.discount = discount;
  }

  sumItems(): number {
    const sum = this.item.reduce((total, item) => total + item.price, 0);
    return sum;
  }

  avgItemsWithDiscount(): number {
    const total = this.sumItems() * (this.discount ?? 0);;
    return total;
  }
}

const order1 = new Order(Maria, [item1, item2, item3], 'dinheiro');
const order2 = new Order(Maria, [item1, item2, item3], 'dinheiro', 0.1);
console.log(order1.sumItems());
console.log(order1.avgItemsWithDiscount());
console.log(order2.avgItemsWithDiscount());



export default Order;