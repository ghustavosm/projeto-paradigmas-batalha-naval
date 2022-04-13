using System.Collections.Generic;

public class Unidade
{
    public int id { get; set; }
    public string nome { get; set; }
    public string tipo { get; set; }
    public Jogador jogador { get; set; }
    public CampoDeBatalha campo { get; set; }
    public int tamanho { get; set; }
    public string? codigoPosicaoInicial { get; set; }
    public List<Posicao> posicoes { get; set; }
    public bool destruida { get; set; }

    public Unidade(int id, string nome, string tipo, Jogador jogador, CampoDeBatalha campo)
	{
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.jogador = jogador;
        this.campo = campo;
        this.tamanho = this.getTamanho();
        this.codigoPosicaoInicial = null;
        this.posicoes = new List<Posicao>();
        this.destruida = false;
    }

    public int getTamanho()
    {
        Dictionary<string, int> tamanhos = new Dictionary<string, int> {
            {"porta-avioes", 5},
            {"navio-tanque", 4},
            {"contratorpedeiro", 3},
            {"submarino", 2}
        };

        int tamanho;
        if (!tamanhos.TryGetValue(this.tipo, out tamanho))
        {
            tamanho = 0;
        }

        return tamanho;
    }

    public void posicionar(List<int[]> coordenadas, string codigoPosicaoInicial)
    {
        List<Posicao> posicoes = new List<Posicao>();
        foreach (int[] coordenada in coordenadas)
        {
            int i = coordenada[0];
            int j = coordenada[1];
            this.campo.matriz[i][j].unidade = this;
            this.codigoPosicaoInicial = codigoPosicaoInicial;
            posicoes.Add(this.campo.matriz[i][j]);
        }
        this.posicoes = posicoes;
    }

    public void desposicionar()
    {
        List<Posicao> posicoes = this.posicoes;
        foreach (Posicao posicao in posicoes)
        {
            int i = posicao.coordenada[0];
            int j = posicao.coordenada[1];
            this.campo.matriz[i][j].unidade = null;
            this.codigoPosicaoInicial = null;
        }
        posicoes = new List<Posicao>();
    }

    public bool verificarDestruida()
    {
        bool destruida = true;
        foreach (Posicao posicao in this.posicoes)
        {
            if (posicao.disparo == null || !posicao.disparo.acerto)
            {
                destruida = false;
            }
        }
        this.destruida = destruida;
        return destruida;
    }

}