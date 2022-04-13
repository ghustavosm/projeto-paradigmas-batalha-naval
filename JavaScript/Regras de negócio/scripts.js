class BatalhaNaval {
    constructor() {
        this.jogador1 = null;
        this.jogador2 = null;
        this.nomeJogador = 'Humano';
        this.tamanhoCampo = 10;
        this.rodada = 0;
        this.score = 0;
        this.timer = 0;
        this.fps = 30;
    }

    criarJogo(nomeJogador, tamanhoCampo) {
        this.nomeJogador = nomeJogador;
        this.tamanhoCampo = tamanhoCampo;
        this.jogador1 = new Jogador(this.nomeJogador, 'humano', new CampoDeBatalha(this.tamanhoCampo));
        this.jogador2 = new Jogador('Máquina', 'maquina', new CampoDeBatalha(this.tamanhoCampo));
        this.jogador1.oponente = this.jogador2;
        this.jogador2.oponente = this.jogador1;
        this.rodada = 0;
        this.score = 0;
        this.timer = 0;
    }

    posicionarUnidadesManual(jogador, posicoes) {
        let sucesso = true;
        let i = 0;
        let unidades = jogador.campo.unidades;
        for(let unidade in unidades) {
            unidade = unidades[unidade];
            let coordenadas = jogador.campo.validarPosicao(posicoes[i], unidade);
            if(coordenadas !== null) {
                unidade.posicionar(coordenadas, posicoes[i]);
            } else {
                sucesso = false;
                break;
            }
            i++;
        }
        return sucesso;
    }

    posicionarUnidadesAuto(jogador) {
        let unidades = jogador.campo.unidades;
        for (let unidade in unidades) {
            unidade = unidades[unidade];
            while(true) {
                let codigoPosicao = jogador.campo.getPosicaoAleatoria();
                let coordenadas = jogador.campo.validarPosicao(codigoPosicao, unidade);
                if(coordenadas !== null) {
                    unidade.posicionar(coordenadas, codigoPosicao);
                    break;
                }
            }
        }
    }

    desposicionarUnidades(jogador) {
        let unidades = jogador.campo.unidades;
        for (let unidade in unidades) {
            unidade = unidades[unidade];
            unidade.desposicionar();
        }
    }

    verificarVencedor() {
        let vencedor = null;
        if(this.jogador1.campo.contarUnidades() == 0) {
            vencedor = this.jogador2;
        } else if(this.jogador2.campo.contarUnidades() == 0) {
            vencedor = this.jogador1;
        }
        return vencedor;
    }

    getTempo() {
        let horas = parseInt((this.timer / (this.fps * 60 * 60)) % 24);
        let minutos = parseInt((this.timer / (this.fps * 60)) % 60);
        let segundos = parseInt((this.timer / this.fps) % 60);
        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;
        return [horas, minutos, segundos, horas + ':' + minutos + ':' + segundos];
    }

    calcularScore() {
        return parseInt( ( ( (1 / (this.timer / this.fps) ) * 1000 * 0.3 ) + (this.tamanhoCampo / 10) + ( ( (this.jogador1.acertos / (this.jogador1.erros + this.jogador1.acertos) ) + 1) * 1.7) ) * 1000 );
    }
}

class Jogador {
    constructor(nome, tipo, campo) {
        this.nome = nome;
        this.tipo = tipo;
        this.campo = campo;
        this.campo.jogador = this;
        this.campo.criarUnidades();
        this.disparosRodada = 0;
        this.disparosEspeciais = 0;
        this.totalDisparos = 0;
        this.erros = 0;
        this.acertos = 0;
        this.disparos = new Array();
        this.oponente = null;
    }

    dispararSimples(codigosPosicoes) { // deve receber 3 posicoes
        let acertos = new Array();
        for(let codigo of codigosPosicoes) {
            let posicao = this.oponente.campo.getPosicao(codigo);
            if(posicao.disparo !== null) {
                return false;
            }
            let disparo = new Disparo(codigo, this);
            this.disparos.push(disparo);
            
            if(this.oponente.campo.addDisparo(disparo)) {
                acertos.push(codigo);
            }
        }
        return acertos;
    }

    dispararSimplesAuto() {
        let possiveisDisparos = new Array();
        for(let disparo of this.disparos) {
            if(disparo.acerto && !disparo.posicao.unidade.destruida) {
                possiveisDisparos = this.campo.removerDuplicados(possiveisDisparos.concat(this.oponente.campo.getPossiveisDisparos(disparo.codigoPosicao)));
            }
        }

        let disparos = new Array();
        if(possiveisDisparos.length >= 3) {
            disparos = possiveisDisparos.slice(0, 3);
        } else {
            disparos = disparos.concat(possiveisDisparos);
            while(disparos.length < 3) {
                let codigoPosicao = this.campo.getPosicaoAleatoria().substring(0, 3);
                if(!disparos.includes(codigoPosicao) && this.oponente.campo.getPosicao(codigoPosicao).disparo === null) {
                    disparos.push(codigoPosicao);
                }
            }
        }

        return [this.dispararSimples(disparos), disparos]; // [acertos, disparos]
    }

    dispararEspecial(codigoPosicao) {
        let posicoes = null;
        if (this.oponente.campo.getPosicao(codigoPosicao).disparo == null) {
            posicoes = this.oponente.campo.getVizinhanca(codigoPosicao);

            for (let posicao in posicoes) {
                posicao = posicoes[posicao];
                let disparo = new Disparo(posicao.codigo, this);
                this.disparos.push(disparo);
                this.oponente.campo.addDisparo(disparo);
            }
        }
        return posicoes;
    }

    dispararEspecialAuto() {
        let codigoPosicao = null;
        let posicoes = new Array();

        while (posicoes.length < 9)
        {
            codigoPosicao = this.campo.getPosicaoAleatoria().substring(0, 3);
            posicoes = this.oponente.campo.getVizinhanca(codigoPosicao);
        }

        for (let posicao in posicoes) {
            posicao = posicoes[posicao];
            let disparo = new Disparo(posicao.codigo, this);
            this.disparos.push(disparo);
            this.oponente.campo.addDisparo(disparo);
        }

        return [codigoPosicao, posicoes];
    }
}

class CampoDeBatalha {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.jogador = null;
        this.totalPosicoes = 0;
        this.matriz = new Array(tamanho).fill(null).map(x => Array(tamanho).fill(null));
        this.unidades = new Object();
        this.maximoUnidades = 10;
        this.unidadesCriadas = 0;
        this.disparos = new Array();
        this.unidadesDestruidas = 0;
        this.letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'].slice(0, tamanho);
        this.criarPosicoes();
    }

    converterPosicao(codigo) {
        let i = parseInt(codigo.substring(1, 3)) - 1;
        let j = this.letras.indexOf(codigo.substring(0, 1));

        if(codigo.length > 3) {
            let orientacao = codigo.substring(3, 4);
            return [i, j, orientacao];
        }
        return [i, j];
    }

    converterCoordenada([i, j]) {
        let letra = this.letras[j];
        let numero = '0' + (i + 1);
        return letra + numero.substring(numero.length - 2);
    }

    criarPosicoes() {
        for(let i = 0; i < this.tamanho; i++) {
            for(let j = 0; j < this.tamanho; j++) {
                let coordenada = [i, j];
                this.matriz[i][j] = new Posicao(this.converterCoordenada(coordenada), coordenada, this);
            }
        }
    }

    getPosicao(codigo) {
        let [i, j] = this.converterPosicao(codigo);
        return this.matriz[i][j];
    }

    getPosicaoAleatoria() {
        let letras = this.letras;
        let letra = letras[Math.floor(Math.random() * letras.length)];
        let numero = '0' + (Math.floor(Math.random() * this.tamanho) + 1);
        numero = numero.substring(numero.length - 2);
        let orientacao = ['H', 'V'][Math.floor(Math.random() * 2)];
        return letra + numero + orientacao;
    }

    getVizinhanca(codigoPosicao) {
        let [i, j] = this.converterPosicao(codigoPosicao);
        let coordenadas = [
            [i-1, j-1], [i-1, j], [i-1, j+1],
            [i  , j-1], [i  , j], [i  , j+1],
            [i+1, j-1], [i+1, j], [i+1, j+1]
        ];

        let posicoes = new Array();

        for(let [i, j] of coordenadas) {
            if(i >= 0 && i < this.tamanho && j >= 0 && j < this.tamanho) {
				let posicao = this.matriz[i][j];
				if (posicao.disparo == null) {
					posicoes.push(posicao);
				}
            }
        }
        return posicoes;
    }

    getPossiveisDisparos(codigoPosicao) {
        let [i, j] = this.converterPosicao(codigoPosicao);
        let coordenadasAdjacentes = [ [i-1, j], [i, j+1], [i+1, j], [i, j-1] ];
        let codigosPosicoes = new Array();

        let acertoAdjacente = false;
        for(let [i, j] of coordenadasAdjacentes) {
            if(i >= 0 && i < this.tamanho && j >= 0 && j < this.tamanho) {
                let disparo = this.matriz[i][j].disparo;
                if(disparo === null) {
                    codigosPosicoes.push(this.matriz[i][j].codigo);
                } else if(disparo !== null && disparo.acerto == true) {
                    acertoAdjacente = true;
                }
            }
        }

        if(acertoAdjacente) { // se existir acertos adjacentes, explora as direções
            codigosPosicoes = new Array();
            let direcoes = {
                'esquerda': [ [i, j-1], [i, j-2], [i, j-3], [i, j-4] ],
                'direita': [ [i, j+1], [i, j+2], [i, j+3], [i, j+4] ],
                'cima': [ [i-1, j], [i-2, j], [i-3, j], [i-4, j] ],
                'baixo': [ [i+1, j], [i+2, j], [i+3, j], [i+4, j] ],
            };
            let disparos = {
                'esquerda': new Array(),
                'direita': new Array(),
                'cima': new Array(),
                'baixo': new Array()
            }

            for(let direcao in direcoes) {
                let coordenadas = direcoes[direcao];
                for(let [i, j] of coordenadas) {
                    if(i >= 0 && i < this.tamanho && j >= 0 && j < this.tamanho) { // se a posição está dentro dos limites do campo
                        let posicao = this.matriz[i][j];
                        if(posicao.disparo !== null) { // se a posição tem um disparo
                            if(posicao.disparo.acerto) { // se o disparo acertou
                                if(!posicao.unidade.destruida) { // se a unidade não está destruida
                                    continue;
                                } else { // se a unidade está destruida
                                    break;
                                }
                            } else if(!posicao.disparo.acerto) { // se o disparo não acertou (disparo na agua)
                                break;
                            }
                        }
                        if(direcao == 'esquerda') {
                            disparos['esquerda'].push(this.matriz[i][j].codigo);
                        } else if(direcao == 'direita') {
                            disparos['direita'].push(this.matriz[i][j].codigo);
                        } else if(direcao == 'cima') {
                            disparos['cima'].push(this.matriz[i][j].codigo);
                        } else {
                            disparos['baixo'].push(this.matriz[i][j].codigo);
                        }
                    } else {
                        break;
                    }
                }
            }

            let tamanhosArraysDisparos = this.removerDuplicados([ disparos['esquerda'].length, disparos['direita'].length, disparos['cima'].length, disparos['baixo'].length ]);
            tamanhosArraysDisparos.sort();
			for(let tamanho of tamanhosArraysDisparos) {
				for(let direcao in disparos) {
					let coordenadas = disparos[direcao];
					if(tamanho > 0 && coordenadas.length == tamanho) {
						codigosPosicoes = codigosPosicoes.concat(coordenadas);
					}
				}
			}
        }
        return codigosPosicoes;
    }

    removerDuplicados(array) {
        let arrayAux = new Array();
        for(let i = 0; i < array.length; i++) {
            if(!arrayAux.includes(array[i])) {
                arrayAux.push(array[i]);
            }
        }
        return arrayAux;
    }

    criarUnidades() {
        this.unidades.portaAvioes = new Unidade(++this.unidadesCriadas, "porta-avioes", 'porta-avioes', this.jogador, this);
        this.unidades.navioTanque1 = new Unidade(++this.unidadesCriadas, "navio-tanque 1", 'navio-tanque', this.jogador, this);
        this.unidades.navioTanque2 = new Unidade(++this.unidadesCriadas, "navio-tanque 2", 'navio-tanque', this.jogador, this);
        this.unidades.contratorpedeiro1 = new Unidade(++this.unidadesCriadas, "contratorpedeiro 1", 'contratorpedeiro', this.jogador, this);
        this.unidades.contratorpedeiro2 = new Unidade(++this.unidadesCriadas, "contratorpedeiro 2", 'contratorpedeiro', this.jogador, this);
        this.unidades.contratorpedeiro3 = new Unidade(++this.unidadesCriadas, "contratorpedeiro 3", 'contratorpedeiro', this.jogador, this);
        this.unidades.submarino1 = new Unidade(++this.unidadesCriadas, "submarino 1", 'submarino', this.jogador, this);
        this.unidades.submarino2 = new Unidade(++this.unidadesCriadas, "submarino 2", 'submarino', this.jogador, this);
        this.unidades.submarino3 = new Unidade(++this.unidadesCriadas, "submarino 3", 'submarino', this.jogador, this);
        this.unidades.submarino4 = new Unidade(++this.unidadesCriadas, "submarino 4", 'submarino', this.jogador, this);
    }

    contarUnidades() {
        let contador = 0;
        for (let unidade in this.unidades) {
            unidade = this.unidades[unidade];
            if(!unidade.destruida && unidade.codigoPosicaoInicial !== null) {
                contador++;
            }
        }
        return contador;
    }

    addDisparo(disparo) {
        this.disparos.push(disparo);
        let [i, j] = disparo.coordenada;
        let posicao = this.matriz[i][j];
        posicao.disparo = disparo;

        if(posicao.unidade !== null) {
            disparo.acerto = true;
            disparo.jogador.acertos++;
            posicao.unidade.verificarDestruida();
        } else {
            disparo.jogador.erros++;
        }

        disparo.jogador.totalDisparos++;
        return disparo.acerto;
    }

    validarPosicao(codigo, unidade) {
        let [i, j, orientacao] = this.converterPosicao(codigo);
        let coordenadas = new Array();
        let validacao = true;
		
        if(orientacao == 'H') {
            for(let n = 0; n < unidade.tamanho; n++) {
                if(i > this.tamanho -1 || j > this.tamanho -1 || this.matriz[i][j].unidade !== null) {
                    validacao = false;
                    break;
                } else {
                    coordenadas.push([i, j++]);
                }
            }
        } else if(orientacao == 'V') {
            for(let n = 0; n < unidade.tamanho; n++) {
                if(i > this.tamanho -1 || j > this.tamanho -1 || this.matriz[i][j].unidade !== null) {
                    validacao = false;
                    break;
                } else {
                    coordenadas.push([i++, j]);
                }
            }
        }

        if(!validacao) {
            return null;
        }
        return coordenadas;
    }

    mostrar() {
        console.log('    ' + this.letras.join(''));
        let linha;
        for(let i = 0; i < this.tamanho; i++) {
            let numero = ' ' + (i + 1);
            linha = numero.substring(numero.length - 2) + ' [';
            for(let j = 0; j < this.tamanho; j++) {
                let caractere = this.converterCaractere(this.matriz[i][j]);
                linha += caractere;
            }
            linha += ']';
            console.log(linha);
        }
    }

    converterCaractere(posicao) {
        if(posicao.disparo !== null) {
            return posicao.disparo.acerto ? this.letras[posicao.unidade.id - 1].toLowerCase() : '.';
        } else if(posicao.unidade !== null) {
            return this.letras[posicao.unidade.id - 1];
        }
        return ' ';
    }
}

class Posicao {
    constructor(codigo, coordenada, campo) {
        this.campo = campo;
        this.codigo = codigo;
        this.coordenada = coordenada;
        this.unidade = null;
        this.disparo = null;
    }
}

class Unidade {
    constructor(id, nome, tipo, jogador, campo) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.jogador = jogador;
        this.campo = campo;
        this.tamanho = this.getTamanho();
        this.codigoPosicaoInicial = null;
        this.posicoes = null;
        this.destruida = false;
    }

    getTamanho() {
        let tamanhos = {
            'porta-avioes': 5,
            'navio-tanque': 4,
            'contratorpedeiro': 3,
            'submarino': 2
        };
        return tamanhos[this.tipo];
    }

    posicionar(coordenadas, codigoPosicaoInicial) {
        let posicoes = new Array();
        for(let n = 0; n < this.tamanho; n++) {
            let [i, j] = coordenadas[n];
            this.campo.matriz[i][j].unidade = this;
            this.codigoPosicaoInicial = codigoPosicaoInicial;
            posicoes.push(this.campo.matriz[i][j]);
        }
        this.posicoes = posicoes;
    }

    desposicionar() {
        let posicoes = this.posicoes;
        for (let posicao in posicoes) {
            posicao = posicoes[posicao];
			let [i, j] = posicao.coordenada;
            this.campo.matriz[i][j].unidade = null;
            this.codigoPosicaoInicial = null;
        }
        posicoes = null;
    }

    verificarDestruida() {
        let destruida = true;
        for (let posicao in this.posicoes) {
            posicao = this.posicoes[posicao];
            if(posicao.disparo === null || !posicao.disparo.acerto) {
                destruida = false;
            }
        }
        this.destruida = destruida;
        return destruida;
    }
}

class Disparo {
    constructor(codigoPosicao, jogador) {
        this.codigoPosicao = codigoPosicao;
        this.posicao = jogador.oponente.campo.getPosicao(codigoPosicao);
        this.jogador = jogador;
        this.coordenada = jogador.campo.converterPosicao(codigoPosicao);
        this.acerto = false;
    }
}

var game = new BatalhaNaval();

game.criarJogo('Gustavo', 10);
//game.posicionarUnidadesManual(game.jogador1, ['A01H', 'A02H', 'A03H', 'A04H', 'A05H', 'A06H', 'A07H', 'A08H', 'A09H', 'A10H']);
game.posicionarUnidadesAuto(game.jogador1);
game.posicionarUnidadesAuto(game.jogador2);
//game.jogador1.dispararSimples(['A01', 'A02', 'A03']);
//game.jogador1.dispararEspecial('G04');
console.log(game.jogador1.dispararSimplesAuto());
console.log(game.jogador1.dispararSimplesAuto());
console.log(game.jogador1.dispararSimplesAuto());
console.log(game.jogador1.dispararSimplesAuto());
console.log(game.jogador1.dispararSimplesAuto());
console.log(game.jogador1.dispararSimplesAuto());
console.log(game.jogador1.dispararSimplesAuto());
console.log(game.jogador1.dispararSimplesAuto());
//game.jogador2.dispararSimples(['A01', 'B01', 'C01']);
//game.jogador2.dispararEspecial('C07');
console.log(game.jogador2.dispararSimplesAuto());
console.log(game.jogador2.dispararSimplesAuto());
console.log(game.jogador2.dispararSimplesAuto());
console.log(game.jogador2.dispararSimplesAuto());
console.log(game.jogador2.dispararSimplesAuto());
console.log(game.jogador2.dispararSimplesAuto());
console.log(game.jogador2.dispararSimplesAuto());
console.log(game.jogador2.dispararSimplesAuto());
game.jogador1.campo.mostrar();
game.jogador2.campo.mostrar();