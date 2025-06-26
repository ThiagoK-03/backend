import crypto from 'node:crypto';

export class Deidad{
    constructor(
        public nombre: string,
        public descripcion: string,
        public elemento: string,
        public id = crypto.randomUUID()
    ) {}
}