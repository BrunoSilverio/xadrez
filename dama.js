class Dama extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j){
        if(tabuleiro.getPeca(i,j) != undefined){
            if(tabuleiro.getPeca(i,j).tipo == this.tipo) 
                return false;
        } 
        if((super.posJ == j && super.posI != i) || //anda em X
           (super.posJ != j && super.posI == i) || //anda em Y
           (Math.abs(super.posJ-j) == Math.abs(super.posI-i))){ //Andar
            if(super.posJ == j && this.trajetoria(tabuleiro,i,-1,'X',this)) 
                return false;
            else if(super.posI == i && this.trajetoria(tabuleiro,j,-1,'Y',this)) 
                return false;
            else if(Math.abs(super.posJ-j) == Math.abs(super.posI-i) && this.trajetoria(tabuleiro,i,j,'XY',this)) 
                return false;

            tabuleiro.rmPeca(super.posI,super.posJ);
            super.posI = i;
            super.posJ = j;
            tabuleiro.addPeca(this);

            return true;
        }
        return false;
    }
    
    trajetoria(tabuleiro, dest1D, dest2D, coord, peca){
        var orientacao;
        var distant, xAt, yAt;
        if(coord == 'X'){
            if(peca.posI - dest1D > 0) orientacao = 'N';
            else orientacao = 'S';
        }
        else if(coord == 'Y'){
            if(peca.posJ - dest1D > 0) orientacao = 'O';
            else orientacao = 'L';
        }
        else if(coord == 'XY'){
            distant = peca.posI - dest1D;
            xAt = peca.posI;
            yAt = peca.posJ;

            if(peca.posI - dest1D > 0 && peca.posJ - dest2D > 0) 
                orientacao = 'NO';
            else if(peca.posI - dest1D < 0 && peca.posJ - dest2D > 0) 
                orientacao = 'SO';
            else if(peca.posI - dest1D > 0 && peca.posJ - dest2D < 0) 
                orientacao = 'NE';
            else if(peca.posI - dest1D < 0 && peca.posJ - dest2D < 0) 
                orientacao = 'SE';
        }
        switch(orientacao){
            case 'N':
            for(var y = peca.posI - 1; y > dest1D; y--){
                if(tabuleiro.getPecaId(y,peca.posJ)) 
                    return true;                    
            }
            break;
            case 'S':
                for(var y = peca.posI + 1; y < dest1D; y++){
                    if(tabuleiro.getPecaId(y,peca.posJ)) 
                        return true;                    
                }
            break;
            case 'L':
                for(var x = peca.posJ + 1; x < dest1D; x++){
                    if(tabuleiro.getPecaId(peca.posI,x)) 
                        return true;                    
                }
            break;
            case 'O':
                for(var x = peca.posJ - 1; x > dest1D; x--){
                    if(tabuleiro.getPecaId(peca.posI,x)) 
                        return true;                    
                }
            break;
            case 'NE':
                while(distant > 1){
                    xAt--;
                    yAt++;
                    if(tabuleiro.getPecaId(xAt,yAt)) 
                        return true; 
                    
                    distant--;
                }
            break;
            case 'NO':
                while(distant > 1){
                    xAt--;
                    yAt--;
                    if(tabuleiro.getPecaId(xAt,yAt)) 
                        return true; 
                    
                    distant--;
                }
            break;
            case 'SE':
                    distant*=-1;
                while(distant > 1){
                    xAt++;
                    yAt++;
                    if(tabuleiro.getPecaId(xAt,yAt)) 
                        return true; 
                    
                    distant--;
                }
            break;
            case 'SO':
                    distant*=-1;
                while(distant > 1){
                    xAt++;
                    yAt--;
                    if(tabuleiro.getPecaId(xAt,yAt)) 
                        return true; 
                    
                    distant--;
                }
            break;
        }
        return false;
    }
}