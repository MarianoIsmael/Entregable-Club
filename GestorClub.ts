
import * as fs from 'fs';
import * as readlineSync from 'readline-sync';
import { Jugador, Deporte } from './Jugador';

export class GestorClub {
  private socios: Jugador[] = [];
  private readonly archivo: string = './socios.json';

  constructor() {
    const archivoExiste = fs.existsSync(this.archivo);
    if (archivoExiste) {
      const contenidoArchivo = fs.readFileSync(this.archivo, { encoding: 'utf8' });
      this.socios = JSON.parse(contenidoArchivo).map((socio: any) => new Jugador(socio, socio.deporte));
    } else {
      this.socios = this.crearSocios();
      this.guardarSocios();
    }
  }

  private crearSocios(): Jugador[] {
    const socios: Jugador[] = [];
    for (let i = 1; i <= 10; i++) {
      const nombre = readlineSync.question(`Ingrese el nombre del socio ${i}: `);
      const apellido = readlineSync.question(`Ingrese el apellido del socio ${i}: `);
      const fechaNacimiento = readlineSync.question(`Ingrese la fecha de nacimiento del socio ${i} (DD/MM/YYYY): `);
      const documento = readlineSync.question(`Ingrese el número de documento del socio ${i}: `);
      const telefono = readlineSync.question(`Ingrese el número de teléfono del socio ${i}: `);
      const miembroDesde = new Date().toLocaleDateString();
      const deporte = readlineSync.question(`Ingrese el deporte del socio ${i} (${Object.keys(Deporte)}): `);
      socios.push(new Jugador({
        nombre,
        apellido,
        fechaNacimiento,
        documento,
        telefono,
      }, Deporte[deporte as keyof typeof Deporte]));
    }
    return socios;
  }

  private guardarSocios(): void {
    fs.writeFileSync(this.archivo, JSON.stringify(this.socios));
  }

  public buscarPorNombre(nombre: string): Jugador[] {
    return this.socios.filter((socio) => socio.nombre === nombre);
  }

  public buscarPorDeporte(deporte: Deporte): Jugador[] {
    return this.socios.filter((socio) => socio.deporte === deporte);
  }

  public buscarPorDocumento(documento: number): Jugador[] {
    return this.socios.filter((socio) => socio.documento === documento);
  }

  public buscar

