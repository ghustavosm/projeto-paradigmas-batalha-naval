using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

public class CampoDeBatalha
{
    public int tamanho { get; set; }
    public Jogador? jogador { get; set; }
    public int totalPosicoes { get; set; }
    public List<List<Posicao>> matriz { get; set; }
    public Dictionary<string, Unidade> unidades { get; set; }
    public int maximoUnidades { get; set; }
    public int unidadesCriadas { get; set; }
    public List<Disparo> disparos { get; set; }
    public int unidadesDestruidas { get; set; }
    public string[]? letras { get; set; }

    public CampoDeBatalha(int tamanho)
	{
        this.tamanho = tamanho;
        this.jogador = null;
        this.totalPosicoes = 0;
        this.matriz = new List<List<Posicao>>();
        this.unidades = new Dictionary<string, Unidade>();
        this.maximoUnidades = 10;
        this.unidadesCriadas = 0;
        this.disparos = new List<Disparo>();
        this.unidadesDestruidas = 0;
        this.letras = (new string[] { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N" }).ToList().GetRange(0, tamanho).ToArray();
        this.criarPosicoes();
    }

    public (int, int, string) converterPosicao(string codigo)
    {
        int i = Int32.Parse(codigo.Substring(1, 2)) - 1;
        int j = Array.IndexOf(this.letras, codigo.Substring(0, 1));

        string orientacao;
        if (codigo.Length > 3)
        {
            orientacao = codigo.Substring(3, 1);
        } else
        {
            orientacao = "";
        }

        return (i, j, orientacao);
    }

    public string converterCoordenada(int[] coordenada)
    {
        string letra = this.letras[coordenada[1]];
        string numero = "0" + (coordenada[0] + 1);
        return letra + numero.Substring(numero.Length - 2);
    }

    public void criarPosicoes()
    {
        List<Posicao> linha;

        for (int i = 0; i < this.tamanho; i++)
        {
            linha = new List<Posicao>();
            for (int j = 0; j < this.tamanho; j++)
            {
                int[] coordenada = new int[] {i, j};
                linha.Add(new Posicao(this.converterCoordenada(coordenada), coordenada, this));
            }
            this.matriz.Add(linha);
        }
    }

    public Posicao getPosicao(string codigo) { 
        (int i, int j , string orientacao) coordenada = this.converterPosicao(codigo);
        return this.matriz[coordenada.i][coordenada.j];
    }

    public string getPosicaoAleatoria()
    {
        Random random = new Random();
        string[] letras = this.letras;
        string letra = letras[random.Next(0, letras.Length)];
        string numero = "0" + random.Next(1, this.tamanho);
        numero = numero.Substring(numero.Length - 2);
        string orientacao = new string[] { "H", "V" }[random.Next(0, 2)];
        return letra + numero + orientacao;
    }

    public List<Posicao> getVizinhanca(string codigoPosicao)
    {
        (int i, int j, string orientacao) conversao = this.converterPosicao(codigoPosicao);

        int i = conversao.i;
        int j = conversao.j;

        int[][] coordenadas = new int[][] {
            new int[] {i -1, j -1}, new int[] {i -1, j}, new int[] {i -1, j +1},
            new int[] {i   , j -1}, new int[] {i   , j}, new int[] {i   , j +1},
            new int[] {i +1, j -1}, new int[] {i +1, j}, new int[] {i +1, j +1}
        };

        List<Posicao> posicoes = new List<Posicao>();

        for (int k = 0; k < coordenadas.Length; k++)
        {
            int m = coordenadas[k][0];
            int n = coordenadas[k][1];

            if (m >= 0 && m < this.tamanho && n >= 0 && n < this.tamanho)
            {
                Posicao posicao = this.matriz[m][n];
                if (posicao.disparo == null) {
                    posicoes.Add(posicao);
                }
            }
        }

        return posicoes;
    }

    public string[] getPossiveisDisparos(string codigoPosicao) {
        (int i, int j, string orientacao) conversao = this.converterPosicao(codigoPosicao);

        int i = conversao.i;
        int j = conversao.j;

        int[][] coordenadasAdjacentes = new int[][] { new int[] { i - 1, j }, new int[] { i, j + 1 }, new int[] { i + 1, j }, new int[] { i, j - 1 } };
        List<string> codigosPosicoes = new List<string>();

        bool acertoAdjacente = false;
        foreach(int[] coordenada in coordenadasAdjacentes) {
            int m = coordenada[0];
            int n = coordenada[1];
            if (m >= 0 && m < this.tamanho && n >= 0 && n < this.tamanho) {
                Disparo disparo = this.matriz[m][n].disparo;
                if(disparo == null) {
                    codigosPosicoes.Add(this.matriz[m][n].codigo);
                } else if(disparo != null && disparo.acerto == true) {
                    acertoAdjacente = true;
                }
            }
        }

        if(acertoAdjacente) { // se existir acertos adjacentes, explora as direções
            codigosPosicoes = new List<string>();
            Dictionary<string, int[][]> direcoes = new Dictionary<string, int[][]>();
            direcoes["esquerda"] = new int[][] { new int[] { i, j - 1 }, new int[] { i, j - 2 }, new int[] { i, j - 3 }, new int[] { i, j - 4 } };
            direcoes["direita"] = new int[][] { new int[] { i, j + 1 }, new int[] { i, j + 2 }, new int[] { i, j + 3 }, new int[] { i, j + 4 } };
            direcoes["cima"] = new int[][] { new int[] { i - 1, j }, new int[] { i - 2, j }, new int[] { i - 3, j }, new int[] { i - 4, j } };
            direcoes["baixo"] = new int[][] { new int[] { i + 1, j }, new int[] { i + 2, j }, new int[] { i + 3, j }, new int[] { i + 4, j } };

            Dictionary<string, List<string>> disparos = new Dictionary<string, List<string>>();
            disparos["esquerda"] = new List<string>();
            disparos["direita"] = new List<string>();
            disparos["cima"] = new List<string>();
            disparos["baixo"] = new List<string>();

            foreach(KeyValuePair<string, int[][]> item in direcoes) {
                string direcao = item.Key;
                int[][] coordenadas = item.Value;
                foreach(int[] coordenada in coordenadas) {
                    int m = coordenada[0];
                    int n = coordenada[1];
                    if (m >= 0 && m < this.tamanho && n >= 0 && n < this.tamanho) { // se a posição está dentro dos limites do campo
                        Posicao posicao = this.matriz[m][n];
                        if(posicao.disparo != null) { // se a posição tem um disparo
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
                        if(direcao == "esquerda") {
                            disparos["esquerda"].Add(this.matriz[m][n].codigo);
                        } else if(direcao == "direita") {
                            disparos["direita"].Add(this.matriz[m][n].codigo);
                        } else if(direcao == "cima") {
                            disparos["cima"].Add(this.matriz[m][n].codigo);
                        } else {
                            disparos["baixo"].Add(this.matriz[m][n].codigo);
                        }
                    } else {
                        break;
                    }
                }
            }

            int[] tamanhosArraysDisparos = this.removerDuplicados( new int[] { disparos["esquerda"].Count, disparos["direita"].Count, disparos["cima"].Count, disparos["baixo"].Count });
            Array.Sort(tamanhosArraysDisparos);
			foreach(int tamanho in tamanhosArraysDisparos) {
                foreach (KeyValuePair<string, List<string>> item in disparos)
                {
                    string direcao = item.Key;
                    List<string> coordenadas = item.Value;
					if(tamanho > 0 && coordenadas.Count == tamanho) {
						codigosPosicoes = codigosPosicoes.Concat(coordenadas).ToList();
					}
				}
			}
        }
        return codigosPosicoes.ToArray();
    }

    public T[] removerDuplicados<T>(T[] array)
    {
        List<T> arrayAux = new List<T>();
        for (int i = 0; i < array.Length; i++)
        {
            if (!arrayAux.Contains(array[i]))
            {
                arrayAux.Add(array[i]);
            }
        }
        return arrayAux.ToArray();
    }

    public void criarUnidades()
    {
        this.unidades["porta-avioes"] = new Unidade(++this.unidadesCriadas, "porta-avioes", "porta-avioes", this.jogador, this);
        this.unidades["navio-tanque1"] = new Unidade(++this.unidadesCriadas, "navio-tanque 1", "navio-tanque", this.jogador, this);
        this.unidades["navio-tanque2"] = new Unidade(++this.unidadesCriadas, "navio-tanque 2", "navio-tanque", this.jogador, this);
        this.unidades["contratorpedeiro1"] = new Unidade(++this.unidadesCriadas, "contratorpedeiro 1", "contratorpedeiro", this.jogador, this);
        this.unidades["contratorpedeiro2"] = new Unidade(++this.unidadesCriadas, "contratorpedeiro 2", "contratorpedeiro", this.jogador, this);
        this.unidades["contratorpedeiro3"] = new Unidade(++this.unidadesCriadas, "contratorpedeiro 3", "contratorpedeiro", this.jogador, this);
        this.unidades["submarino1"] = new Unidade(++this.unidadesCriadas, "submarino 1", "submarino", this.jogador, this);
        this.unidades["submarino2"] = new Unidade(++this.unidadesCriadas, "submarino 2", "submarino", this.jogador, this);
        this.unidades["submarino3"] = new Unidade(++this.unidadesCriadas, "submarino 3", "submarino", this.jogador, this);
        this.unidades["submarino4"] = new Unidade(++this.unidadesCriadas, "submarino 4", "submarino", this.jogador, this);
    }

    public int contarUnidades()
    {
        int contador = 0;
        foreach (KeyValuePair<string, Unidade> item in this.unidades)
        {
            Unidade unidade = item.Value;
            if (!unidade.destruida && unidade.codigoPosicaoInicial != null)
            {
                contador++;
            }
        }
        return contador;
    }

    public bool addDisparo(Disparo disparo)
    {
        this.disparos.Add(disparo);
        int i = disparo.coordenada[0];
        int j = disparo.coordenada[1];
        Posicao posicao = this.matriz[i][j];
        posicao.disparo = disparo;

        if (posicao.unidade != null)
        {
            disparo.acerto = true;
            disparo.jogador.acertos++;
            posicao.unidade.verificarDestruida();
        }
        else
        {
            disparo.jogador.erros++;
        }
        disparo.jogador.totalDisparos++;
        return disparo.acerto;
    }

    public List<int[]>? validarPosicao(string codigo, Unidade unidade)
    {
        (int i, int j, string orientacao) conversao = this.converterPosicao(codigo);

        int i = conversao.i;
        int j = conversao.j;
        string orientacao = conversao.orientacao;

        List<int[]> coordenadas = new List<int[]>();
        bool validacao = true;

        if (orientacao == "H")
        {
            for (int n = 0; n < unidade.tamanho; n++)
            {
                if (i > this.tamanho - 1 || j > this.tamanho - 1 || this.matriz[i][j].unidade != null)
                {
                    validacao = false;
                    break;
                }
                else
                {
                    coordenadas.Add(new int[] { i, j++ });
                }
            }
        }
        else if (orientacao == "V")
        {
            for (int n = 0; n < unidade.tamanho; n++)
            {
                if (i > this.tamanho - 1 || j > this.tamanho - 1 || this.matriz[i][j].unidade != null)
                {
                    validacao = false;
                    break;
                }
                else
                {
                    coordenadas.Add(new int[] { i++, j });
                }
            }
        }

        if (!validacao)
        {
            return null;
        }

        return coordenadas;
    }

    public void mostrar()
    {
        Debug.WriteLine("    " + String.Join("", this.letras));
        string linha;
        for (int i = 0; i < this.tamanho; i++)
        {
            string numero = " " + (i + 1);
            linha = numero.Substring(numero.Length - 2) + " [";
            for (int j = 0; j < this.tamanho; j++)
            {
                string caractere = this.converterCaractere(this.matriz[i][j]);
                linha += caractere;
            }
            linha += "]";
            Debug.WriteLine(linha);
        }
    }

    public string converterCaractere(Posicao posicao)
    {
        if (posicao.disparo != null)
        {
            return posicao.disparo.acerto ? this.letras[posicao.unidade.id - 1].ToLower() : ".";
        }
        else if (posicao.unidade != null)
        {
            return this.letras[posicao.unidade.id - 1];
        }
        return " ";
    }

}