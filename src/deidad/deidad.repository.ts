import { Repository } from "../shared/repository.js";
import { Deidad } from "./deidad.entity.js";

const deidades = [
    new Deidad(
        "Thor",
        "Dios del Trueno",
        "Rayo",
        'a01-a02-a03-a04-a05'
    ),
]



export class DeidadRepository implements Repository<Deidad> {
    private deidades: Deidad[] = [];

    public findAll(): Deidad[] | undefined {
        return this.deidades.length > 0 ? this.deidades : undefined;
    }

    public findOne(item: { id: string }): Deidad | undefined {
        return this.deidades.find(deidad => deidad.id === item.id);
    }

    public add(item: Deidad): Deidad | undefined {
        this.deidades.push(item);
        return item;
    }

    public update(item: Deidad): Deidad | undefined {
        const index = this.deidades.findIndex(deidad => deidad.id === item.id);
        if (index !== -1) {
            this.deidades[index] = {...this.deidades[index], ...item};
            return item;
        }
        return undefined;
    }

    public delete(item: { id: string }): Deidad | undefined {
        const index = this.deidades.findIndex(deidad => deidad.id === item.id);
        if (index !== -1) {
            const deletedCharacters = this.deidades[index];
            this.deidades.splice(index, 1);
            return deletedCharacters;
        }
        return undefined;
    }
}