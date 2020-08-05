class Rei extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo, posI, posJ, id);
    }
    
    mover(tabuleiro, i, j){
        if(tabuleiro.getPeca(i,j) != undefined){
            if(tabuleiro.getPeca(i,j).tipo == this.tipo) 
                return false;
        } 

        if(super.posJ + 1 == j || super.posI + 1 == i || super.posJ - 1 == j || super.posI - 1 == i){ //Andar
            tabuleiro.rmPeca(super.posI,super.posJ);
            super.posI = i;
            super.posJ = j;
            tabuleiro.addPeca(this);
            
            return true;
        }
        return false;
    }
}