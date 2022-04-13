using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace BatalhaNaval
{
    class ITela1 : IObjeto
    {
        private List<IObjeto> _objetos;
        public string Nome;

        public ITela1(Game1 gameUi)
        {
            ui = gameUi;
            Nome = "tela1";
            Textura = ui.Imagens["tela1"];
            _objetos = new List<IObjeto>();

            IBotao btnNovoJogo = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 375), "Novo Jogo");
            btnNovoJogo.Clique += NovoJogoClick;
            _objetos.Add(btnNovoJogo);

            IBotao btnRanking = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 445), "Ranking");
            btnRanking.Clique += RakingClick;
            _objetos.Add(btnRanking);

            IBotao btnAjuda = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 515), "Ajuda");
            btnAjuda.Clique += AjudaClick;
            _objetos.Add(btnAjuda);

            IBotao btnSobre = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 585), "Sobre");
            btnSobre.Clique += SobreClick;
            _objetos.Add(btnSobre);

            IBotao btnSair = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 655), "Sair");
            btnSair.Clique += SairClick;
            _objetos.Add(btnSair);
        }

        private void SairClick(object sender, System.EventArgs e)
        {
            ui.Exit();
        }

        private void NovoJogoClick(object sender, System.EventArgs e)
        {
            ui.TelaAtual = "tela5";
        }

        private void RakingClick(object sender, System.EventArgs e)
        {
            ui.TelaAtual = "tela2";
        }

        private void AjudaClick(object sender, System.EventArgs e)
        {
            ui.TelaAtual = "tela3";
        }

        private void SobreClick(object sender, System.EventArgs e)
        {
            ui.TelaAtual = "tela4";
        }

        public override void Update(GameTime gameTime)
        {
            if (ui.TelaAtual == "tela1")
            {
                foreach (IObjeto objeto in _objetos)
                    objeto.Update(gameTime);
            }
        }

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            if(ui.TelaAtual == "tela1")
            {
                spriteBatch.Draw(Textura, Vector2.Zero, Color.White);
                foreach (IObjeto objeto in _objetos)
                    objeto.Draw(spriteBatch, gameTime);
            }
        }
    }
}