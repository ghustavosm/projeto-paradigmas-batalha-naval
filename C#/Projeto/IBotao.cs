using System;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace BatalhaNaval
{
    public class IBotao : IObjeto
    {
        private SpriteFont _fonte;
        private bool _estaSobre;
        private bool _estaPressionado;
        private bool _foiClicado;
        private MouseState _atualEstadoMouse;
        private MouseState _anteriorEstadoMouse;
        public event EventHandler Clique;
        public string Texto { get; set; }
        public Color CorTexto { get; set; }
        public Vector2 PosicaoCima;
        public Vector2 PosicaoBaixo;
        public Texture2D Textura1 { get; set; }
        public Texture2D Textura2 { get; set; }
        public Rectangle Retangulo
        {
            get
            {
                return new Rectangle((int) Posicao.X, (int) Posicao.Y, Textura.Width, Textura.Height);
            }
        }

        public IBotao(Game1 gameUi, Texture2D textura, Vector2 posicao) : this(gameUi, textura, posicao, null, Color.White, null) { }

        public IBotao(Game1 gameUi, Texture2D textura, Vector2 posicao, string text) : this(gameUi, textura, posicao, text, Color.White, null) {}

        public IBotao(Game1 gameUi, Texture2D textura1, Texture2D textura2, Vector2 posicao) : this(gameUi, textura1, posicao, null, Color.White, null)
        {
            Textura1 = textura1;
            Textura2 = textura2;
        }

        public IBotao(Game1 gameUi, Texture2D textura, Vector2 posicao, string texto, Color corTexto, SpriteFont fonte)
        {
            ui = gameUi;
            Textura = textura;
            Textura1 = null;
            Textura2 = null;
            _foiClicado = false;
            Posicao = posicao;
            PosicaoCima = posicao;
            PosicaoBaixo = posicao + new Vector2(1, 1);
            Texto = texto;
            if(fonte == null) {
                _fonte = ui.Fonts["UbuntuBold17"];
            } else
            {
                _fonte = fonte;
            }
            CorTexto = corTexto;
            Clique += BotaoClick;
        }

        public void BotaoClick(object sender, System.EventArgs e)
        {
            IBotao botao = (IBotao) sender;
            if(Textura2 != null) { 
                if(_foiClicado)
                {
                    Textura = Textura1;
                    _foiClicado = false;
                } else
                {
                    Textura = Textura2;
                    _foiClicado = true;
                }
            }
            ui.TocarSom("clique");
        }

        public override void Update(GameTime gameTime)
        {
            _anteriorEstadoMouse = _atualEstadoMouse;
            _atualEstadoMouse = Mouse.GetState();

            Rectangle mouseRectangle = new Rectangle(_atualEstadoMouse.X, _atualEstadoMouse.Y, 1, 1);

            _estaSobre = false;
            _estaPressionado = false;

            if (mouseRectangle.Intersects(Retangulo))
            {
                _estaSobre = true;

                if (_anteriorEstadoMouse.LeftButton == ButtonState.Pressed)
                {
                    _estaPressionado = true;
                }

                if (_atualEstadoMouse.LeftButton == ButtonState.Released && _anteriorEstadoMouse.LeftButton == ButtonState.Pressed)
                {
                    Clique?.Invoke(this, new EventArgs());
                }
            }
        }

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            Color cor = Color.White;

            if (_estaSobre)
            {
                cor = Color.LightGray;
            }

            if (_estaPressionado)
            {
                Posicao = PosicaoBaixo;
            } else
            {
                Posicao = PosicaoCima;
            }

            spriteBatch.Draw(Textura, Retangulo, cor);

            if (!string.IsNullOrEmpty(Texto))
            {
                float x = (Retangulo.X + (Retangulo.Width / 2)) - (_fonte.MeasureString(Texto).X / 2);
                float y = (Retangulo.Y + (Retangulo.Height / 2)) - (_fonte.MeasureString(Texto).Y / 2) - 1;

                spriteBatch.DrawString(_fonte, Texto, new Vector2(x, y), CorTexto);
            }
        }

    }
}