class Bispo extends Peca{
    constructor(tipo,posI,posJ,id){
        super(tipo, posI, posJ, id);  
    }

    mover(tabuleiro, i, j){
        if(tabuleiro.getPeca(i,j) != undefined){
            if(tabuleiro.getPeca(i,j).tipo == this.tipo) 
                return false;
        } 

        if(Math.abs(super.posJ-j) == Math.abs(super.posI-i)){ //Andar
            if(this.trajetoria(tabuleiro,i,j,this)) 
                return false;

            tabuleiro.rmPeca(super.posI,super.posJ);
            super.posI = i;
            super.posJ = j;
            tabuleiro.addPeca(this);
            
            return true;
        }
        return false;
    }

    trajetoria(tabuleiro, dest1D, dest2D, peca){
        var orientacao;
        var distant, xAt, yAt;
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
        
        switch(orientacao){
            case 'NE':
                while(distant > 1){
                    xAt--;
                    yAt++;
                    if(tabuleiro.getPecaId(xAt,yAt)) return true; 
                    distant--;
                }
            break;
            case 'NO':
                while(distant > 1){
                    xAt--;
                    yAt--;
                    if(tabuleiro.getPecaId(xAt,yAt)) return true; 
                    distant--;
                }
            break;
            case 'SE':
                distant*=-1;
                while(distant > 1){
                    xAt++;
                    yAt++;
                    if(tabuleiro.getPecaId(xAt,yAt)) return true; 
                    distant--;
                }
            break;
            case 'SO':
                    distant*=-1;
                while(distant > 1){
                    xAt++;
                    yAt--;
                    if(tabuleiro.getPecaId(xAt,yAt)) return true; 
                    distant--;
                }
            break;
        }
        return false;
    }
}