function JogoXadrez() {
	var vez = 0; //0 para Branca, 1 para Preta
	
	const W_KING   = 1;  // "&#9812" ♔
	const W_QUEEN  = 2;  // "&#9813" ♕
	const W_ROOK   = 3;  // "&#9814" ♖
	const W_BISHOP = 4;  // "&#9815" ♗
	const W_KNIGHT = 5;  // "&#9816" ♘
	const W_PAWN   = 6;  // "&#9817" ♙
	const B_KING   = 7;  // "&#9818" ♚
	const B_QUEEN  = 8;  // "&#9819" ♛
	const B_ROOK   = 9;  // "&#9820" ♜
	const B_BISHOP = 10; // "&#9821" ♝
	const B_KNIGHT = 11; // "&#9822" ♞
	const B_PAWN   = 12; // "&#9823" ♟

	const pattern = [B_ROOK,B_KNIGHT,B_BISHOP,B_KING,B_QUEEN,B_BISHOP,B_KNIGHT,B_ROOK,
					B_PAWN,B_PAWN,B_PAWN,B_PAWN,B_PAWN,B_PAWN,B_PAWN,B_PAWN,
					0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,
					W_PAWN,W_PAWN,W_PAWN,W_PAWN,W_PAWN,W_PAWN,W_PAWN,W_PAWN,
					W_ROOK,W_KNIGHT,W_BISHOP,W_KING,W_QUEEN,W_BISHOP,W_KNIGHT,W_ROOK];

	// Esse é um código de exemplo
	// <<<<<<<
	var tab;
	// >>>>>>>

	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	this.getTabuleiro = function() {
		return tab.getRepresentacao();
	}

	this.getVez = function(){ 
		return vez; 
	}

	this.rodaVez = function(){
		vez == 0 ? vez = 1 : vez = 0;
	}

	// Esse método reinicia o jogo.
	/*this.reiniciar = function() {
		tab = new Tabuleiro();
		for(var i = 0; i < 8; i++) {
			for(var j = 0; j < 8; j++){
				var pecaIns;
				switch(pattern[(i*8)+j])
				{
					case W_KING:  // "&#9812" ♔
					pecaIns = new Rei(0,i,j,W_KING);
					break;
					case W_QUEEN:  // "&#9813" ♕
					pecaIns = new Dama(0,i,j,W_QUEEN);
					break;
					case W_ROOK:  // "&#9814" ♖
					pecaIns = new Torre(0,i,j,W_ROOK);
					break;
					case W_BISHOP:  // "&#9815" ♗
					pecaIns = new Bispo(0,i,j,W_BISHOP);
					break;
					case W_KNIGHT:  // "&#9816" ♘
					pecaIns = new Cavalo(0,i,j,W_KNIGHT);
					break;
					case W_PAWN:  // "&#9817" ♙
					pecaIns = new Peao(0,i,j,W_PAWN);
					break;
					case B_KING:  // "&#9818" ♚
					pecaIns = new Rei(1,i,j,B_KING);
					break;
					case B_QUEEN:  // "&#9819" ♛
					pecaIns = new Dama(1,i,j,B_QUEEN);
					break;
					case B_ROOK:  // "&#9820" ♜
					pecaIns = new Torre(1,i,j,B_ROOK);
					break;
					case B_BISHOP:  // "&#9821" ♝
					pecaIns = new Bispo(1,i,j,B_BISHOP);
					break;
					case B_KNIGHT:  // "&#9822" ♞
					pecaIns = new Cavalo(1,i,j,B_KNIGHT);
					break;
					case B_PAWN:  // "&#9823" ♟
					pecaIns = new Peao(1,i,j,B_PAWN);
					break;
				}
				tab.addPeca(pecaIns);
				 // ID_1 = 0
			}
		}
	}*/

	this.verificaEstados = function(){
		if(tab.getPbP({id : B_KING,tipo : 1})) return 2;
		if(tab.getPbP({id : W_KING,tipo : 0})) return 1;
	}
	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	// Se a posição não tiver uma peça pertencente ao jogador atual, esse método deve retornar null;
	this.getPecaId = function(i, j) {
		// Esse é um código de exemplo.
		// <<<<<<<
		if(tab.getPecaId(i,j)!=0)
		//if (i == peca.i && j == peca.j)
			return tab.getPecaId(i,j);
		// >>>>>>>
		return null;
	}

	this.getPeca = function(i, j) {
		// Esse é um código de exemplo.
		// <<<<<<<
		if(tab.getPeca(i,j)!=0)
		//if (i == peca.i && j == peca.j)
			return tab.getPeca(i,j);
		// >>>>>>>
		return null;
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	// Se o movimento não for possível, esse método deve retornar false. Caso contrário, deve retornar true;
	// Não é necessário se preocupar com a existência de outra peça. Caso a posição final da peça esteja ocupada por outra, a peça deverá ser substituída pela nova.
	// Sempre que esse método for executado com sucesso (retornando true) o turno deve ser atualizado, passando o controle para o outro jogador. 
	//Obs: não é permitido que o usuário mova uma peça de outro jogador.
	this.moverPeca = function(peca, i, j) {
		if (i > 7 || i < 0 || j > 7 || j < 0){ //VERIFICA PEÇA FORA DO TABULEIRO
			return false;
		} 	
		if (peca.i == i && peca.j == j){ //VERIFICA SE ESTA NO MESMO LUGAR
			return false;
		}
		if(peca.mover(tab,i,j)){
			return true;
		}

		return false;
	}
}