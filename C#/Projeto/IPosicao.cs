using System;
using System.Diagnostics;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace BatalhaNaval
{
    public class IPosicao : IObjeto
    {
        private bool _estaSobre;
        private bool _estaPressionado;
        private MouseState _atualEstadoMouse;
        private MouseState _anteriorEstadoMouse;
        public event EventHandler Clique;
        public bool FoiClicado { get; set; }
        public Texture2D Textura1 { get; set; }
        public Texture2D Textura2 { get; set; }
        public Texture2D Textura3 { get; set; }
        public Texture2D Textura4 { get; set; }
        public Texture2D Textura5 { get; set; }
        string Jogador { get; set; }
        public string Codigo { get; set; }
        public Rectangle Retangulo
        {
            get
            {
                return new Rectangle((int) Posicao.X + 1, (int) Posicao.Y + 1, (int) ((Textura.Width - 2) * ui.escala), (int) ((Textura.Height -2 ) * ui.escala));
            }
        }

        public BatalhaNavalGame game;

        public IPosicao(Game1 gameUi, Texture2D textura1, Texture2D textura2, Texture2D textura3, Texture2D textura4, Texture2D textura5, Vector2 posicao, float escala, string jogador, string codigo)
        {
            ui = gameUi;
            game = ui.Game;
            Textura = textura1;
            Textura1 = textura1;
            Textura2 = textura2;
            Textura3 = textura3;
            Textura4 = textura4;
            Textura5 = textura5;
            Jogador = jogador;
            Codigo = codigo;
            Escala = escala;
            FoiClicado = false;
            Posicao = posicao;
            Clique += PosicaoClick;
        }

        public void SetTextura(string textura)
        {
            if(textura == "agua")
            {
                Textura = Textura3;
            } else
            {
                Textura = Textura2;
            }
        }

        public void PosicaoClick(object sender, System.EventArgs e)
        {
            IPosicao posicao = (IPosicao) sender;

            if(ui.Evento == "posicionar")
            {
                if (posicao.Jogador == "jogador1")
                {
                    if (FoiClicado)
                    {
                        if (ui.UnidadePosicionada)
                        {
                            ui.UnidadePosicionada = false;
                            FoiClicado = false;
                            ui.PosicaoSelecionada = null;
                            ui.TocarSom("clique");
                        }
                    }
                    else
                    {
                        if (!ui.UnidadePosicionada)
                        {
                            ui.UnidadePosicionada = true;
                            FoiClicado = true;
                            ui.PosicaoSelecionada = posicao.Codigo;
                            ui.TocarSom("clique");
                        }
                    }
                }
            }
            else if (ui.Evento == "vez_jogador1")
            {
                if (posicao.Jogador == "jogador2")
                {
                    if (ui.TipoOpcao == "simples") {
                        if (FoiClicado)
                        {
                            if (game.jogador1.disparosRodada >= 0 && game.jogador1.disparosRodada < 3 && game.jogador2.campo.getPosicao(posicao.Codigo).disparo == null)
                            {
                                ui.PosicoesDisparo.Remove(posicao.Codigo);
                                game.jogador1.disparosRodada++;
                                FoiClicado = false;
                                ui.TocarSom("clique");
                            }
                        }
                        else
                        {
                            if (game.jogador1.disparosRodada > 0 && game.jogador2.campo.getPosicao(posicao.Codigo).disparo == null)
                            {
                                ui.PosicoesDisparo.Add(posicao.Codigo);
                                game.jogador1.disparosRodada--;
                                FoiClicado = true;
                                ui.MostrarBotaoDesfazer = false;
                                ui.TocarSom("clique");
                            }
                            else
                            {
                                ui.TocarSom("erro", 0.5f);
                            }
                        }
                    } else if(ui.TipoOpcao == "especial")
                    {
                        if (FoiClicado)
                        {
                            if (ui.PosicaoSelecionada != null && game.jogador1.disparosEspeciais >= 0 && game.jogador2.campo.getPosicao(posicao.Codigo).disparo == null)
                            {
                                game.jogador1.disparosEspeciais++;
                                FoiClicado = false;
                                ui.PosicaoSelecionada = null;
                                ui.TocarSom("clique");
                            }
                        }
                        else
                        {
                            if (ui.PosicaoSelecionada == null && game.jogador1.disparosEspeciais > 0 && game.jogador2.campo.getPosicao(posicao.Codigo).disparo == null)
                            {
                                game.jogador1.disparosEspeciais--;
                                FoiClicado = true;
                                ui.PosicaoSelecionada = posicao.Codigo;
                                ui.MostrarBotaoDesfazer = false;
                                ui.TocarSom("clique");
                            } else
                            {
                                ui.TocarSom("erro", 0.5f);
                            }
                        }
                    }
                }
            }
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
            if (FoiClicado)
            {
                spriteBatch.Draw(Textura5, Posicao, null, Color.White, 0f, Vector2.Zero, Escala, SpriteEffects.None, 0);
            }

            if (_estaSobre)
            {
                spriteBatch.Draw(Textura4, Posicao, null, Color.White, 0f, Vector2.Zero, Escala, SpriteEffects.None, 0);
            }

            spriteBatch.Draw(Textura, Posicao, null, Color.White, 0f, Vector2.Zero, Escala, SpriteEffects.None, 0);
        }

    }
}