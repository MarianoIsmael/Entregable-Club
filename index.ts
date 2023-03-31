import { Jugador } from './clases/Jugador';
import { GestorClub } from './clases/GestorClub';
import * as faker from 'faker';

const gestorClub = new GestorClub();

// Agregar socios de ejemplo
gestorClub.agregarSocio(new Jugador({ nombre: 'Juan', apellido: 'Pérez', direccion: 'Calle 123', telefono: '555-1234', edad: 25 }, 'fútbol'));
gestorClub.agregarSocio(new Jugador({ nombre: 'María', apellido: 'González', direccion: 'Avenida 456', telefono: '555-5678', edad: 30 }, 'tenis'));

// Generar socios aleatorios
gestorClub.socios = gestorClub.crearSocios();

// Guardar datos en el archivo socios.json
gestorClub.guardarSocios();
