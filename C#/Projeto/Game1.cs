using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Media;
using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace BatalhaNaval
{
    public class Game1 : Game
    {
        private GraphicsDeviceManager _graphics;
        private SpriteBatch _spriteBatch;
        public BatalhaNavalGame Game { get; set; }
        public List<IObjeto> Telas;
        public string TelaAtual { get; set; }
        public Dictionary<string, SoundEffect> Sons { get; set; }
        public Dictionary<string, SpriteFont> Fonts { get; set; }
        public Dictionary<string, Texture2D> Imagens { get; set; }
        public double TempoDecorrido { get; set; }
        public int tamanhoCampo { get; set; }
        public int tamanhoPosicao { get; set; }
        public float escala { get; set; }
        public string Evento { get; set; }
        public bool UnidadePosicionada { get; set; }
        public string PosicaoSelecionada { get; set; }
        public string DirecaoUnidade { get; set; }
        public string ProximaUnidade { get; set; }
        public string AnteriorUnidade { get; set; }
        public bool MostrarBotaoDesfazer { get; set; }
        public List<string> PosicoesDisparo { get; set; }
        public Color CorBackground { get; set; }
        SoundEffectInstance Som;
        public string TipoOpcao { get; set; }
        public ScoreManager Score { get; set; }

        public Game1()
        {
            _graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
            IsMouseVisible = true;
            TelaAtual = "tela1";
            TempoDecorrido = 0f;
            CorBackground = Color.White;
            Telas = new List<IObjeto>();
            tamanhoCampo = 10;
            tamanhoPosicao = 42;
            escala = 1f;
            Evento = "posicionar";
            UnidadePosicionada = false;
            PosicaoSelecionada = null;
            DirecaoUnidade = "H";
            PosicoesDisparo = new List<string>();
            ProximaUnidade = "porta-avioes";
            AnteriorUnidade = null;
            MostrarBotaoDesfazer = true;
            Som = null;
            TipoOpcao = null;
            Score = new ScoreManager();
        }

        public void PararSom()
        {
            if(Som != null) {
                Som.Stop();
            }
        }

        public void TocarSom(string som, float volume = 1f)
        {
            PararSom();
            Som = Sons[som].CreateInstance();
            Som.Volume = volume;
            Som.Play();
        }

        protected override void Initialize()
        {
            // TODO: Add your initialization logic here
            Game = new BatalhaNavalGame();
            Score.CarregarScore();

            TargetElapsedTime = TimeSpan.FromSeconds(1d / 60d);
            IsFixedTimeStep = false;
            _graphics.SynchronizeWithVerticalRetrace = false;
            _graphics.PreferredBackBufferWidth = 1024;
            _graphics.PreferredBackBufferHeight = 768;
            _graphics.ApplyChanges();
            Window.Title = "Battleship - Batalha Naval";

            Sons = new Dictionary<string, SoundEffect>();
            Sons["clique"] = Content.Load<SoundEffect>("Sounds/click");
            Sons["tecla"] = Content.Load<SoundEffect>("Sounds/tecla");
            Sons["erro"] = Content.Load<SoundEffect>("Sounds/erro");
            Sons["agua"] = Content.Load<SoundEffect>("Sounds/agua");
            Sons["explosao"] = Content.Load<SoundEffect>("Sounds/explosao");

            Imagens = new Dictionary<string, Texture2D>();
            Imagens["tela1"] = Content.Load<Texture2D>("Images/tela1");
            Imagens["tela2"] = Content.Load<Texture2D>("Images/tela2");
            Imagens["tela3"] = Content.Load<Texture2D>("Images/tela3");
            Imagens["tela4"] = Content.Load<Texture2D>("Images/tela4");
            Imagens["tela6"] = Content.Load<Texture2D>("Images/tela6");
            Imagens["botao1"] = Content.Load<Texture2D>("Images/botao1");
            Imagens["botao2"] = Content.Load<Texture2D>("Images/botao2");
            Imagens["text_input"] = Content.Load<Texture2D>("Images/text_input");
            Imagens["voltar_menu"] = Content.Load<Texture2D>("Images/voltar_menu");
            Imagens["mute1"] = Content.Load<Texture2D>("Images/mute1");
            Imagens["mute2"] = Content.Load<Texture2D>("Images/mute2");
            Imagens["posicao1"] = Content.Load<Texture2D>("Images/posicao1");
            Imagens["posicao2"] = Content.Load<Texture2D>("Images/posicao2");
            Imagens["posicao3"] = Content.Load<Texture2D>("Images/posicao3");
            Imagens["posicao4"] = Content.Load<Texture2D>("Images/posicao4");
            Imagens["posicao5"] = Content.Load<Texture2D>("Images/posicao5");
            Imagens["porta-avioes"] = Content.Load<Texture2D>("Images/porta_avioes");
            Imagens["navio-tanque"] = Content.Load<Texture2D>("Images/navio_tanque");
            Imagens["contratorpedeiro"] = Content.Load<Texture2D>("Images/contratorpedeiro");
            Imagens["submarino"] = Content.Load<Texture2D>("Images/submarino");

            Fonts = new Dictionary<string, SpriteFont>();
            Fonts["UbuntuRegular10"] = Content.Load<SpriteFont>("Fonts/Font3");
            Fonts["UbuntuRegular13"] = Content.Load<SpriteFont>("Fonts/Font2");
            Fonts["UbuntuMedium11"] = Content.Load<SpriteFont>("Fonts/Font5");
            Fonts["UbuntuMedium12"] = Content.Load<SpriteFont>("Fonts/Font6");
            Fonts["UbuntuBold15"] = Content.Load<SpriteFont>("Fonts/Font4");
            Fonts["UbuntuBold17"] = Content.Load<SpriteFont>("Fonts/Font1");

            base.Initialize();
        }

        protected override void LoadContent()
        {
            _spriteBatch = new SpriteBatch(GraphicsDevice);

            // TODO: use this.Content to load your game content here
            MediaPlayer.Play(Content.Load<Song>("Sounds/theme"));
            MediaPlayer.IsRepeating = true;
            MediaPlayer.Volume = 0.15f;

            IBotao btnMute = new IBotao(this, Imagens["mute1"], Imagens["mute2"], new Vector2(990, 25));
            btnMute.Clique += MuteClique;

            Telas.Add(new ITela1(this));
            Telas.Add(new ITela2(this));
            Telas.Add(new ITela3(this));
            Telas.Add(new ITela4(this));
            Telas.Add(new ITela5(this));
            Telas.Add(new ITela6(this));
            Telas.Add(btnMute);
        }

        protected override void UnloadContent()
        {
            // TODO: Unload any non ContentManager content here
        }

        private void MuteClique(object sender, System.EventArgs e)
        {
            if (MediaPlayer.Volume == 0.15f)
            {
                MediaPlayer.Volume = 0f;
            }
            else
            {
                MediaPlayer.Volume = 0.15f;
            }

        }

        protected override void Update(GameTime gameTime)
        {
            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Escape))
                Exit();

            // TODO: Add your update logic here
            foreach (IObjeto tela in Telas)
                tela.Update(gameTime);

            base.Update(gameTime);
        }

        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(CorBackground);

            // TODO: Add your drawing code here
            _spriteBatch.Begin();

            foreach (IObjeto tela in Telas)
                tela.Draw(_spriteBatch, gameTime);

            _spriteBatch.End();

            base.Draw(gameTime);
        }
    }
}
