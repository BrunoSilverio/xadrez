class Peca{
    constructor(tipo,posI,posJ,id){
        this._tipo = tipo; //determina se a peca  ́e branca ou preta.
        this._posI = posI; //determina a posicao i da pe ̧ca no tabuleiro.
        this._posJ = posJ; //determina a posicao j da pe ̧ca no tabuleiro.
        this._id = id;     //determina o identificador da peca.
    }

    set tipo(tipo){
        this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
    }

    set posI(posI){
        this._posI = posI;
    }
    get posI(){
        return this._posI;
    }

    set posJ(posJ){
        this._posJ = posJ;
    }
    get posJ(){
        return this._posJ;
    }

    set id(id){
        this._id = id;
    }
    get id(){
        return this._id;
    }
}