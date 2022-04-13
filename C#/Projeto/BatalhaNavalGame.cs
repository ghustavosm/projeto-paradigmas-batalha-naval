using System.Collections.Generic;

public class BatalhaNavalGame
{
    public Jogador? jogador1 { get; set; }
    public Jogador? jogador2 { get; set; }
    public string nomeJogador { get; set; }
    public int tamanhoCampo { get; set; }
    public int rodada { get; set; }
    public int score { get; set; }
    public int timer { get; set; }


public BatalhaNavalGame()
	{
        this.jogador1 = null;
        this.jogador2 = null;
        this.nomeJogador = "Humano";
        this.tamanhoCampo = 10;
        this.rodada = 0;
        this.score = 0;
        this.timer = 0;
    }

    public void criarJogo(string nomeJogador, int tamanhoCampo)
    {
        this.nomeJogador = nomeJogador;
        this.tamanhoCampo = tamanhoCampo;
        this.jogador1 = new Jogador(this.nomeJogador, "humano", new CampoDeBatalha(this.tamanhoCampo));
        this.jogador2 = new Jogador("Maquina", "maquina", new CampoDeBatalha(this.tamanhoCampo));
        this.jogador1.oponente = this.jogador2;
        this.jogador2.oponente = this.jogador1;
        this.rodada = 0;
        this.score = 0;
        this.timer = 0;
    }

    public bool posicionarUnidadesManual(Jogador jogador, string[] posicoes)
    {
        bool sucesso = true;
        int i = 0;
        Dictionary<string, Unidade> unidades = jogador.campo.unidades;
        foreach (KeyValuePair<string, Unidade> item in unidades)
        {
            Unidade unidade = item.Value;
            List<int[]> coordenadas = jogador.campo.validarPosicao(posicoes[i], unidade);
            if (coordenadas != null)
            {
                unidade.posicionar(coordenadas, posicoes[i]);
            }
            else
            {
                sucesso = false;
                break;
            }
            i++;
        }
        return sucesso;
    }

    public void posicionarUnidadesAuto(Jogador jogador)
    {
        Dictionary<string, Unidade> unidades = jogador.campo.unidades;
        foreach (KeyValuePair<string, Unidade> item in unidades)
        {
            Unidade unidade = item.Value;
            while (true)
            {
                string codigoPosicao = jogador.campo.getPosicaoAleatoria();
                List<int[]> coordenadas = jogador.campo.validarPosicao(codigoPosicao, unidade);
                if (coordenadas != null)
                {
                    unidade.posicionar(coordenadas, codigoPosicao);
                    break;
                }
            }
        }
    }

    public void deposicionarUnidades(Jogador jogador)
    {
        Dictionary<string, Unidade> unidades = jogador.campo.unidades;
        foreach (KeyValuePair<string, Unidade> item in unidades)
        {
            item.Value.desposicionar();
        }
    }

    public Jogador? verificarVencedor()
    {
        Jogador? vencedor = null;
        if (this.jogador1.campo.contarUnidades() == 0)
        {
            vencedor = this.jogador2;
        }
        else if (this.jogador2.campo.contarUnidades() == 0)
        {
            vencedor = this.jogador1;
        }
        return vencedor;
    }

    public (int, int, int, string) getTempo()
    {
        int horas = (this.timer / (60 * 60)) % 24;
        int minutos = (this.timer / 60) % 60;
        int segundos = this.timer % 60;
        string strHoras = horas < 10 ? "0" + horas.ToString() : horas.ToString();
        string strMinutos = minutos < 10 ? "0" + minutos : minutos.ToString();
        string strSegundos = segundos < 10 ? "0" + segundos : segundos.ToString();
        return (horas, minutos, segundos, strHoras + ":" + strMinutos + ":" + strSegundos);
    }

    public int calcularScore()
    {
        return (int) ((((1 / ((float)this.timer)) * 1000f * 0.3f) + ((float)this.tamanhoCampo / 10f) + ((((float)this.jogador1.acertos / ((float)this.jogador1.erros + (float)this.jogador1.acertos)) + 1f) * 1.7f)) * 1000f);
    }

}
