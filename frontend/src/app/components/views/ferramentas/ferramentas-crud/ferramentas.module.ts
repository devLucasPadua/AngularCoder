export interface FerramentaCreate {
    id?: number;
    codigo: string
    descricao: string
    quantidadeTotal: number
    valorCompra: number
    localizacao: string
    numeroPatrimonial: string
    fabricante: string
    categoriaID?: string
}
