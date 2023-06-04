import { ICar } from "./Interfaces/Interfaces";

export default class Car implements ICar {
  drive(): void { console.log('Drive a car'); }
}