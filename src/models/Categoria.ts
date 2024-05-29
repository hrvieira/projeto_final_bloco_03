import Produtos from "./Produtos";

export default interface Categoria {
    id: number;
    nome: string;
    produto: Produtos | null;
}