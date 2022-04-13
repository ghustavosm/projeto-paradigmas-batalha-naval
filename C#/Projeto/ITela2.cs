using System.Collections.Generic;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace BatalhaNaval
{
    class ITela2 : IObjeto
    {
        private List<IObjeto> _objetos;
        public string Nome;

        public ITela2(Game1 gameUi)
        {
            ui = gameUi;
            Nome = "tela2";
            Textura = ui.Imagens["tela2"];
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
            if (ui.TelaAtual == "tela2")
            {
                foreach (IObjeto objeto in _objetos)
                    objeto.Update(gameTime);
            }
        }

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            if(ui.TelaAtual == "tela2")
            {
                spriteBatch.Draw(Textura, Vector2.Zero, Color.White);
                foreach (IObjeto objeto in _objetos)
                    objeto.Draw(spriteBatch, gameTime);

                int i = 0;
                int offset = 399;
                int altura = 23;
                foreach (KeyValuePair<string, int> item in ui.Score.Lista)
                {
                    spriteBatch.DrawString(ui.Fonts["UbuntuRegular13"], item.Key, new Vector2(213, offset + (i * altura)), Color.DimGray);
                    spriteBatch.DrawString(ui.Fonts["UbuntuRegular13"], item.Value.ToString(), new Vector2(741, offset + (i * altura)), Color.DimGray);
                    i++;
                }
            }
        }
    }
}