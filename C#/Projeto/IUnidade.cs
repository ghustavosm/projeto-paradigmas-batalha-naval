using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace BatalhaNaval
{
    public class IUnidade : IObjeto
    {
        public string CodigoPosicaoInicial { get; set; }
        public IUnidade(Game1 gameUi, Texture2D textura, Color cor, Vector2 posicao, float escala, float rotacao, string codigo)
        {
            ui = gameUi;
            Posicao = posicao;
            Textura = textura;
            Cor = Color.White;
            Escala = escala;
            Rotacao = rotacao;
            CodigoPosicaoInicial = codigo;
        }

        public override void Update(GameTime gameTime) {}

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime) {
            spriteBatch.Draw(Textura, Posicao, null, Cor, Rotacao, Vector2.Zero, Escala, SpriteEffects.None, 0);
        }
    }
}