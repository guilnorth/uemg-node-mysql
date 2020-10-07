class Fornecedor {

    constructor(idfornecedor, nome_fornecedor, cnpj, contato, sobrenome){
        this._idfornecedor = idfornecedor;
        this._nome_fornecedor = nome_fornecedor;
        this._cnpj = cnpj;
        this._contato = contato;
    }

    returnObject(){
        return {
            idfornecedor: this._idfornecedor,
            nome_fornecedor: this._nome_fornecedor,
            cnpj: this._cnpj,
            contato: this._contato
        }
    }

}
module.exports = Fornecedor;