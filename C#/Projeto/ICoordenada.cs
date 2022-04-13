using System;
using System.Diagnostics;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace BatalhaNaval
{
    public class ICoordenada : IObjeto
    {
        public string Texto { get; set; }
        public Color CorTexto { get; set; }
        public SpriteFont Fonte { get; set; }
        public Rectangle Retangulo
        {
            get
            {
                return new Rectangle((int) Posicao.X, (int) Posicao.Y, ui.tamanhoPosicao, ui.tamanhoPosicao);
            }
        }

        public ICoordenada(Game1 gameUi, SpriteFont fonte, string texto, Color corTexto, Vector2 posicao, float escala)
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
            float x = (Retangulo.X + (Retangulo.Width / 2)) - (Fonte.MeasureString(Texto).X / 2);
            float y = (Retangulo.Y + (Retangulo.Height / 2)) - (Fonte.MeasureString(Texto).Y / 2);
            spriteBatch.DrawString(Fonte, Texto, new Vector2(x, y), CorTexto, 0f, Vector2.Zero, Escala, SpriteEffects.None, 0);
        }

    }
}