using System;
using System.Text;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace BatalhaNaval
{
    public class ITextInput : IObjeto
    {
        private SpriteFont _fonte;
        private bool _estaSobre;
        private bool _estaPressionado;
        private bool _emFoco;
        private static GameWindow _gameWindow;
        private MouseState _atualEstadoMouse;
        private MouseState _anteriorEstadoMouse;
        public event EventHandler Clique;
        public string Texto { get; set; }
        public StringBuilder InputTexto = new StringBuilder();
        public Color CorTexto { get; set; }
        public Rectangle Rectangulo
        {
            get
            {
                return new Rectangle((int) Posicao.X, (int) Posicao.Y, Textura.Width, Textura.Height);
            }
        }

        public ITextInput(Game1 game, Texture2D textura, Vector2 posicao, string texto)
        {
            ui = game;
            Textura = textura;
            Posicao = posicao;
            Texto = texto;
            CorTexto = Color.DimGray;
            Clique += InputClique;
            _gameWindow = game.Window;
            _fonte = ui.Fonts["UbuntuBold17"];
        }

        public bool ValidarChar(char c)
        {
            if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
            {
                return true;
            }
            return false;
        }

        public static void RegisterTextInput(System.EventHandler<TextInputEventArgs> method)
        {
            _gameWindow.TextInput += method;
        }

        public static void UnregisterTextInput(System.EventHandler<TextInputEventArgs> method)
        {
            _gameWindow.TextInput -= method;
        }

        public void OnInput(object sender, TextInputEventArgs e)
        {
            Keys key = e.Key;

            char inputChar = e.Character;

            if (ValidarChar(inputChar) && InputTexto.Length < 10)
            {
                InputTexto.Append(inputChar);
                ui.TocarSom("tecla");
            }
            else if(inputChar == '\b' && InputTexto.Length > 0)
            {
                InputTexto.Remove(InputTexto.Length - 1, 1);
                ui.TocarSom("tecla");
            }
            else
            {
                ui.TocarSom("erro", 0.5f);
            }

            Texto = InputTexto.ToString();
        }

        private void InputClique(object sender, System.EventArgs e)
        {
            ITextInput input = (ITextInput) sender;
            if(input.Texto == "Qual o seu nome?")
            {
                input.Texto = "";
            }
            ui.TocarSom("clique");
        }

        public override void Update(GameTime gameTime)
        {
            _anteriorEstadoMouse = _atualEstadoMouse;
            _atualEstadoMouse = Mouse.GetState();

            Rectangle mouseRectangulo = new Rectangle(_atualEstadoMouse.X, _atualEstadoMouse.Y, 1, 1);

            _estaSobre = false;
            _estaPressionado = false;

            if (mouseRectangulo.Intersects(Rectangulo))
            {
                _estaSobre = true;

                if (_anteriorEstadoMouse.LeftButton == ButtonState.Pressed)
                {
                    _estaPressionado = true;
                }

                if (_atualEstadoMouse.LeftButton == ButtonState.Released && _anteriorEstadoMouse.LeftButton == ButtonState.Pressed)
                {
                    _emFoco = true;
                    Clique?.Invoke(this, new EventArgs());
                }
            }
            else
            {
                if (_atualEstadoMouse.LeftButton == ButtonState.Released && _anteriorEstadoMouse.LeftButton == ButtonState.Pressed)
                {
                    if (Texto == "")
                    {
                        Texto = "Qual o seu nome?";
                    }
                    _emFoco = false;
                }
            }
        }

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            Color cor = Color.White;
            UnregisterTextInput(OnInput);

            if (_estaSobre)
            {
                cor = Color.LightGray;
            }

            if (_emFoco)
            {
                RegisterTextInput(OnInput);
                cor = Color.LightGray;
            }

            spriteBatch.Draw(Textura, Rectangulo, cor);

            if (!string.IsNullOrEmpty(Texto))
            {
                float x = (Rectangulo.X + (Rectangulo.Width / 2)) - (_fonte.MeasureString(Texto).X / 2);
                float y = (Rectangulo.Y + (Rectangulo.Height / 2)) - (_fonte.MeasureString(Texto).Y / 2);

                spriteBatch.DrawString(_fonte, Texto, new Vector2(x, y), CorTexto);
            }
        }

    }
}