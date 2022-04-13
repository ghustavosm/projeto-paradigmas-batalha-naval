public class Posicao
{
    public CampoDeBatalha campo { get; set; }
    public string codigo { get; set; }
    public int[] coordenada { get; set; }
    public Unidade? unidade { get; set; }
    public Disparo? disparo { get; set; }

    public Posicao(string codigo, int[] coordenada, CampoDeBatalha campo)
	{
        this.campo = campo;
        this.codigo = codigo;
        this.coordenada = coordenada;
        this.unidade = null;
        this.disparo = null;
    }

}
