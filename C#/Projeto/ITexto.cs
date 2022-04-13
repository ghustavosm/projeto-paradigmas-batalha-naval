using System;
using System.Diagnostics;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace BatalhaNaval
{
    public class ITexto : IObjeto
    {
        public string Texto { get; set; }
        public Color CorTexto { get; set; }
        public SpriteFont Fonte { get; set; }

        public ITexto(Game1 gameUi, SpriteFont fonte, string texto, Color corTexto, Vector2 posicao, float escala)
        {
            ui = gameUi;
            Fonte = fonte;
            Escala = escala;
            Posicao = posicao;
            Texto = texto;
            CorTexto = corTexto;
        }

        public override void Update(GameTime gameTime) {}

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            spriteBatch.DrawString(Fonte, Texto, Posicao, CorTexto, 0f, Vector2.Zero, Escala, SpriteEffects.None, 0);
        }

    }
}