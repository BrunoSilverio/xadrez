class Tabuleiro{
    constructor(){
        this._tabuleiro = new Array(8);
        for(var i = 0; i < 8; i++) {
            this._tabuleiro[i] = new Array(8);
            for(var j = 0; j < 8; j++)
                this._tabuleiro[i][j] = 0; // ID_1 = 0
        }
        this._tabuleiroPeca = new Array(8);
        for(var i = 0; i < 8; i++) {
            this._tabuleiroPeca[i] = new Array(8);
        }
    }

    addPeca(peca){
        this._tabuleiro[peca.posI][peca.posJ] = peca.id;
        this._tabuleiroPeca[peca.posI][peca.posJ] = peca;
    }

    rmPeca(i,j){
        this._tabuleiro[i][j] = 0;
        delete this._tabuleiroPeca[i][j];
    }

    getPeca(i,j){
        return this._tabuleiroPeca[i][j];
    }

    getPecaId(i,j){
        return this._tabuleiro[i][j];
    }

    getPbP(peca){
        for(var i = 0; i < 8; i++) {
            for(var j = 0; j < 8; j++){
                if(this._tabuleiroPeca[i][j] != undefined)
                    if(this._tabuleiroPeca[i][j].id == peca.id && this._tabuleiroPeca[i][j].tipo == peca.tipo) return false;
            }
        }
        return true;
    }

    getRepresentacao(){
        return this._tabuleiro;
    }

}