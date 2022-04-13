using System.Collections.Generic;
using System.Linq;

public class Jogador
{
    public string nome { get; set; }
    public string tipo { get; set; }
    public CampoDeBatalha campo { get; set; }
    public int disparosRodada { get; set; }
    public int disparosEspeciais { get; set; }
    public int totalDisparos { get; set; }
    public int erros { get; set; }
    public int acertos { get; set; }
    public List<Disparo> disparos { get; set; }
    public Jogador? oponente { get; set; }

    public Jogador(string nome, string tipo, CampoDeBatalha campo)
	{
        this.nome = nome;
        this.tipo = tipo;
        this.campo = campo;
        this.campo.jogador = this;
        this.campo.criarUnidades();
        this.disparosRodada = 3;
        this.disparosEspeciais = 2;
        this.totalDisparos = 0;
        this.erros = 0;
        this.acertos = 0;
        this.disparos = new List<Disparo>();
        this.oponente = null;
    }

    public List<string>? dispararSimples(string[] codigosPosicoes)
    { // deve receber 3 posicoes
        List<string> acertos = new List<string>();
        foreach (string codigo in codigosPosicoes)
        {
            Posicao posicao = this.oponente.campo.getPosicao(codigo);
            if (posicao.disparo != null)
            {
                return null;
            }
            Disparo disparo = new Disparo(codigo, this);
            this.disparos.Add(disparo);
            if (this.oponente.campo.addDisparo(disparo))
            {
                acertos.Add(codigo);
            }
        }
        return acertos;
    }

    public (List<string>?, List<string>) dispararSimplesAuto()
    {
        List<string> possiveisDisparos = new List<string>();
        foreach (Disparo disparo in this.disparos)
        {
            if (disparo.acerto && !disparo.posicao.unidade.destruida)
            {
                possiveisDisparos = this.campo.removerDuplicados(possiveisDisparos.Concat(this.oponente.campo.getPossiveisDisparos(disparo.codigoPosicao)).ToArray()).ToList();
            }
        }

        List<string> disparos = new List<string>();
        if (possiveisDisparos.Count >= 3)
        {
            disparos = possiveisDisparos.GetRange(0, 3);
        }
        else
        {
            disparos = disparos.Concat(possiveisDisparos).ToList();
            while (disparos.Count < 3)
            {
                string codigoPosicao = this.campo.getPosicaoAleatoria().Substring(0, 3);
                if (!disparos.Contains(codigoPosicao) && this.oponente.campo.getPosicao(codigoPosicao).disparo == null)
                {
                    disparos.Add(codigoPosicao);
                }
            }
        }

        return (this.dispararSimples(disparos.ToArray()), disparos); // [acertos, disparos]
    }

    public List<Posicao> dispararEspecial(string codigoPosicao)
    {
        List<Posicao> posicoes = null;
        if (this.oponente.campo.getPosicao(codigoPosicao).disparo == null)
        {
            posicoes = this.oponente.campo.getVizinhanca(codigoPosicao);

            foreach (Posicao posicao in posicoes)
            {
                Disparo disparo = new Disparo(posicao.codigo, this);
                this.disparos.Add(disparo);
                this.oponente.campo.addDisparo(disparo);
            }
        }
        return posicoes;
    }

    public (string, List<Posicao>) dispararEspecialAuto()
    {
        string codigoPosicao = null;
        List<Posicao> posicoes = new List<Posicao>();

        while (posicoes.Count < 9)
        {
            codigoPosicao = this.campo.getPosicaoAleatoria().Substring(0, 3);
            posicoes = this.oponente.campo.getVizinhanca(codigoPosicao);
        }

        foreach (Posicao posicao in posicoes)
        {
            Disparo disparo = new Disparo(posicao.codigo, this);
            this.disparos.Add(disparo);
            this.oponente.campo.addDisparo(disparo);
        }

        return (codigoPosicao, posicoes);
    }

}
