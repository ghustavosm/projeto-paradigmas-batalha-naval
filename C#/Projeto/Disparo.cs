public class Disparo
{
    public string codigoPosicao { get; set; }
    public Posicao? posicao { get; set; }
    public Jogador jogador { get; set; }
    public int[] coordenada { get; set; }
    public bool acerto { get; set; }

    public Disparo(string codigoPosicao, Jogador jogador)
	{
        this.codigoPosicao = codigoPosicao;
        this.posicao = jogador.oponente.campo.getPosicao(codigoPosicao);
        this.jogador = jogador;
        (int i, int j, string orientacao) coordenadas = jogador.campo.converterPosicao(codigoPosicao);
        this.coordenada = new int[] { coordenadas.i, coordenadas.j };
        this.acerto = false;
    }
}