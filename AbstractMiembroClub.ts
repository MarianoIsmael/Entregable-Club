import { Persona } from './PersonaInterface';

export abstract class MiembroClub implements Persona {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  documento: number;
  telefono: number;
  miembroDesde: string;

  constructor(persona: Persona, miembroDesde: string) {
    this.nombre = persona.nombre;
    this.apellido = persona.apellido;
    this.fechaNacimiento = persona.fechaNacimiento;
    this.documento = persona.documento;
    this.telefono = persona.telefono;
    this.miembroDesde = miembroDesde;
  }
}
