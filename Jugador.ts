import { MiembroClub } from './AbstractMiembroClub';

export enum Deporte {
  Futbol = 'futbol',
  Basket = 'basket',
  Zumba = 'zumba',
  Voley = 'voley',
  Natacion = 'natacion',
  Gym = 'gym',
}

export class Jugador extends MiembroClub {
  deporte: Deporte;

  constructor(persona: MiembroClub, deporte: Deporte) {
    super(persona, persona.miembroDesde);
    this.deporte = deporte;
  }
}
