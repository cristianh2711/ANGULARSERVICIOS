import { Departamento } from './Departamento';

export interface Ciudad{
    idCiudad: number;
    nombre: string;
    departamento: Departamento;
}
