class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

export const item1 = new Item('Batata Frita', 5.0);
export const item2 = new Item('Nuggets', 6.0);
export const item3 = new Item('Sundae', 3.5);

export default Item;