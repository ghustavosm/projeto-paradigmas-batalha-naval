using System.Collections.Generic;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace BatalhaNaval
{
    class ITela4 : IObjeto
    {
        private List<IObjeto> _objetos;
        public string Nome;

        public ITela4(Game1 gameUi)
        {
            ui = gameUi;
            Nome = "tela4";
            Textura = ui.Imagens["tela4"];
            _objetos = new List<IObjeto>();

            IBotao btnVoltar = new IBotao(ui, ui.Imagens["botao1"], new Vector2(370, 670), "Voltar");
            btnVoltar.Clique += VoltarClick;
            _objetos.Add(btnVoltar);
        }

        private void VoltarClick(object sender, System.EventArgs e)
        {
            ui.TelaAtual = "tela1";
        }

        public override void Update(GameTime gameTime)
        {
            if (ui.TelaAtual == "tela4")
            {
                foreach (IObjeto objeto in _objetos)
                    objeto.Update(gameTime);
            }
        }

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            if(ui.TelaAtual == "tela4")
            {
                spriteBatch.Draw(Textura, Vector2.Zero, Color.White);
                foreach (IObjeto objeto in _objetos)
                    objeto.Draw(spriteBatch, gameTime);
            }
        }
    }
}