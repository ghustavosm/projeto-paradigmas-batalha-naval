using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace BatalhaNaval
{
    public class IObjeto
    {
        public Game1 ui { get; set; }
        public Texture2D Textura { get; set; }
        public Vector2 Posicao { get; set; }        
        public Color Cor { get; set; }

        public float Escala { get; set; }
        public float Rotacao { get; set; }

        public IObjeto() : this(null, null) {}

        public IObjeto(Game1 gameUi) : this(gameUi, null) {}

        public IObjeto(Game1 gameUi, Texture2D textura) : this(gameUi, textura, Vector2.Zero, 1f, 0f) { }

        public IObjeto(Game1 gameUi, Texture2D textura, Vector2 posicao, float escala, float rotacao)
        {
            ui = gameUi;
            Posicao = posicao;
            Textura = textura;
            Cor = Color.White;
            Escala = escala;
            Rotacao = rotacao;
        }

        public virtual void Update(GameTime gameTime) {}

        public virtual void Draw(SpriteBatch spriteBatch, GameTime gameTime) {
            spriteBatch.Draw(Textura, Posicao, null, Cor, Rotacao, Vector2.Zero, Escala, SpriteEffects.None, 0);
        }
    }
}