using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Media;

namespace BatalhaNaval
{
    class ITela5 : IObjeto
    {
        private List<IObjeto> _objetos;
        private ITextInput _inputNome;
        public string Nome;
        public BatalhaNavalGame game { get; set; }

        public ITela5(Game1 gameUi)
        {
            ui = gameUi;
            game = ui.Game;
            Nome = "tela5";
            Textura = ui.Imagens["tela1"];
            _objetos = new List<IObjeto>();

            _inputNome = new ITextInput(ui, ui.Imagens["text_input"], new Vector2(370, 375), "Qual o seu nome?");
            _objetos.Add(_inputNome);

            IBotao btnTamanho = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 445), "Campo: 10x10");
            btnTamanho.Clique += TamanhoClick;
            _objetos.Add(btnTamanho);

            IBotao btnComecar = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 515), "Comecar");
            btnComecar.Clique += ComecarClick;
            _objetos.Add(btnComecar);

            IBotao btnVoltar = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 670), "Voltar");
            btnVoltar.Clique += VoltarClick;
            _objetos.Add(btnVoltar);
        }

        private void TamanhoClick(object sender, System.EventArgs e)
        {
            IBotao botao = (IBotao) sender;

            if (ui.tamanhoCampo == 14)
            {
                ui.tamanhoCampo = 10;
                botao.Texto = "Campo: 10x10";
            }
            else if (ui.tamanhoCampo == 10)
            {
                ui.tamanhoCampo = 12;
                botao.Texto = "Campo: 12x12";
            }
            else
            {
                ui.tamanhoCampo = 14;
                botao.Texto = "Campo: 14x14";
            }
        }

        private void ComecarClick(object sender, System.EventArgs e)
        {
            if(_inputNome.Texto != "" && _inputNome.Texto != "Qual o seu nome?") {
                game.criarJogo(_inputNome.Texto, ui.tamanhoCampo);
                ui.TelaAtual = "tela6";
                MediaPlayer.Play(ui.Content.Load<Song>("Sounds/game"));
                if (ui.tamanhoCampo == 10)
                {
                    ui.tamanhoPosicao = 42;
                    ui.escala = 1f;
                }
                else if (ui.tamanhoCampo == 12)
                {
                    ui.tamanhoPosicao = 35;
                    ui.escala = 35.0f / 42.0f;
                }
                else if (ui.tamanhoCampo == 14)
                {
                    ui.tamanhoPosicao = 30;
                    ui.escala = 30.0f / 42.0f;
                }
                
                ITela6 tela6 = (ITela6) ui.Telas[5];
                tela6.NovoJogo();
            }
            else
            {
                ui.TocarSom("erro", 0.5f);
            }
        }

        private void VoltarClick(object sender, System.EventArgs e)
        {
            ui.TelaAtual = "tela1";
        }

        public override void Update(GameTime gameTime)
        {
            if (ui.TelaAtual == "tela5")
            {
                foreach (IObjeto objeto in _objetos)
                    objeto.Update(gameTime);
            }
        }

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            if(ui.TelaAtual == "tela5")
            {
                spriteBatch.Draw(Textura, Vector2.Zero, Color.White);
                foreach (IObjeto objeto in _objetos)
                    objeto.Draw(spriteBatch, gameTime);
            }
        }
    }
}