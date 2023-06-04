import { IAirPlane } from "./Interfaces/Interfaces";


export default class AirPlane implements IAirPlane {
  fly(): void { console.log('Fly a airplane'); }
}