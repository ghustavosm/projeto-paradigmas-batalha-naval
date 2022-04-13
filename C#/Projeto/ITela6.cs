using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Media;

namespace BatalhaNaval
{
    class ITela6 : IObjeto
    {
        private List<IObjeto> _objetos;
        private Dictionary<string, IObjeto> CampoJogador1;
        private Dictionary<string, IObjeto> CampoJogador2;
        private Dictionary<string, IObjeto> UnidadesJogador1;
        private Dictionary<string, IObjeto> UnidadesJogador2;
        private List<Unidade> OrdemUnidadesJogador1;
        private List<string> OrdemPosicionamentoUnidades;
        private string _tempoDisplay;
        public string Nome;
        public string Mensagem;
        public Color MensagemCor;
        IBotao btnOpcao1;
        IBotao btnOpcao2;
        IBotao btnContinuar;

        public BatalhaNavalGame game;

        public ITela6(Game1 gameUi)
        {
            ui = gameUi;
            game = ui.Game;
            Nome = "tela6";
            Textura = ui.Imagens["tela6"];
            _objetos = new List<IObjeto>();

            OrdemPosicionamentoUnidades = new List<string>() { "porta-avioes", "navio-tanque1", "navio-tanque2", "contratorpedeiro1", "contratorpedeiro2", "contratorpedeiro3", "submarino1", "submarino2", "submarino3", "submarino4" };

            IBotao btnVoltar = new IBotao(ui, ui.Imagens["voltar_menu"], new Vector2(25, 25));
            btnVoltar.Clique += VoltarClick;
            _objetos.Add(btnVoltar);

            btnOpcao1 = new IBotao(ui, ui.Imagens["botao2"], new Vector2(222, 232), "Posicionar Auto", new Color(Color.Black, 0.8f), ui.Fonts["UbuntuMedium12"]);
            btnOpcao1.Clique += TipoOpcao1Click;

            btnOpcao2 = new IBotao(ui, ui.Imagens["botao2"], new Vector2(362, 232), "Horizontal", new Color(Color.Black, 0.8f), ui.Fonts["UbuntuMedium12"]);
            btnOpcao2.Clique += TipoOpcao2Click;
            _objetos.Add(btnOpcao2);

            btnContinuar = new IBotao(ui, ui.Imagens["botao2"], new Vector2(847, 232), "Posicionar", new Color(Color.Black, 0.8f), ui.Fonts["UbuntuMedium12"]);
            btnContinuar.Clique += ContinuarClick;
            _objetos.Add(btnContinuar);
        }

        private void VoltarClick(object sender, System.EventArgs e)
        {
            ui.TelaAtual = "tela1";
            MediaPlayer.Play(ui.Content.Load<Song>("Sounds/theme"));
        }

        private void TipoOpcao1Click(object sender, System.EventArgs e)
        {
            if (ui.Evento == "posicionar" && game.rodada == 0)
            {
                if (game.jogador1.campo.contarUnidades() == 0)
                {
                    ui.Evento = "vez_jogador1";
                    MensagemCor = Color.Gold;
                    Mensagem = "Vez do jogador: " + game.jogador1.nome;
                    btnOpcao2.Texto = "Disparo Simples";
                    ui.TipoOpcao = "simples";
                    btnContinuar.Texto = "Disparar";
                    btnOpcao1.Texto = "Desfazer";
                    game.posicionarUnidadesAuto(game.jogador1);
                    game.posicionarUnidadesAuto(game.jogador2);
                    RenderizarUnidades(game.jogador1, new Vector2(72, 300));
                    RenderizarUnidades(game.jogador2, new Vector2(557, 300));
                    ui.TempoDecorrido = 0;
                    game.rodada++;
                    if (ui.PosicaoSelecionada != null)
                    {
                        IPosicao posicao = (IPosicao)CampoJogador1[ui.PosicaoSelecionada];
                        posicao.FoiClicado = false;
                        ui.UnidadePosicionada = false;
                        ui.PosicaoSelecionada = null;
                    }
                } else if(game.jogador1.campo.contarUnidades() > 0)
                {
                    Unidade UltimaUnidade = OrdemUnidadesJogador1[OrdemUnidadesJogador1.Count - 1];
                    UnidadesJogador1.Remove(UltimaUnidade.codigoPosicaoInicial);
                    UltimaUnidade.desposicionar();
                    OrdemUnidadesJogador1.Remove(UltimaUnidade);
                    ui.ProximaUnidade = OrdemPosicionamentoUnidades[OrdemUnidadesJogador1.Count];
                    MensagemCor = Color.Gold;
                    Mensagem = "Posicione o " + game.jogador1.campo.unidades[ui.ProximaUnidade].nome + " (" + game.jogador1.campo.unidades[ui.ProximaUnidade].tamanho + " posicoes)";
                    if (UnidadesJogador1.Count == 0)
                    {
                        btnOpcao1.Texto = "Posicionar Auto";
                    }
                }
            } else if (ui.Evento == "vez_jogador1" && game.rodada == 1)
            {
                if (game.jogador1.campo.contarUnidades() == 10)
                {
                    game.deposicionarUnidades(game.jogador1);
                    game.deposicionarUnidades(game.jogador2);
                    UnidadesJogador1 = new Dictionary<string, IObjeto>();
                    OrdemUnidadesJogador1 = new List<Unidade>();
                    UnidadesJogador2 = new Dictionary<string, IObjeto>();
                    game.rodada = 0;
                    ui.TempoDecorrido = 0;
                    _tempoDisplay = "00:00:00";
                    ui.Evento = "posicionar";
                    btnOpcao1.Texto = "Posicionar Auto";
                    btnOpcao2.Texto = "Horizontal";
                    ui.TipoOpcao = "H";
                    ui.DirecaoUnidade = "H";
                    ui.UnidadePosicionada = false;
                    ui.ProximaUnidade = "porta-avioes";
                    btnContinuar.Texto = "Posicionar";
                    Mensagem = "Posicione o porta-avioes (5 posicoes)";
                    MensagemCor = Color.Gold;
                }
            }
        }

        private void TipoOpcao2Click(object sender, System.EventArgs e)
        {
            IBotao botao = (IBotao) sender;

            if(ui.Evento == "posicionar") {
                if (ui.TipoOpcao == "H")
                {
                    ui.TipoOpcao = "V";
                    botao.Texto = "Vertical";
                    ui.DirecaoUnidade = ui.TipoOpcao;
                }
                else
                {
                    ui.TipoOpcao = "H";
                    botao.Texto = "Horizontal";
                    ui.DirecaoUnidade = ui.TipoOpcao;
                }
            } else if (ui.Evento == "vez_jogador1") {
                if (ui.TipoOpcao == "simples")
                {
                    if(game.jogador1.disparosEspeciais > 0) {
                        ui.TipoOpcao = "especial";
                        botao.Texto = "Disparo Especial";
                        foreach (string codigo in ui.PosicoesDisparo)
                        {
                            IPosicao posicao = (IPosicao)CampoJogador2[codigo];
                            posicao.FoiClicado = false;
                        }
                        ui.PosicoesDisparo = new List<string>();
                        game.jogador1.disparosRodada = 3;
                    } else
                    {
                        ui.TocarSom("erro", 0.5f);
                    }
                }
                else
                {
                    if (game.rodada == 1)
                    {
                        game.jogador1.disparosEspeciais = 2;
                    }
                    else if (game.jogador1.disparosEspeciais == 0)
                    {
                        game.jogador1.disparosEspeciais++;
                    }
                    ui.TipoOpcao = "simples";
                    botao.Texto = "Disparo Simples";
                    if(ui.PosicaoSelecionada != null) { 
                        IPosicao posicao = (IPosicao)CampoJogador2[ui.PosicaoSelecionada];
                        posicao.FoiClicado = false;
                    }
                    ui.PosicaoSelecionada = null;
                }
            } else
            {
                ui.TocarSom("erro", 0.5f);
                MensagemCor = Color.Tomato;
            }
        }

        private void ContinuarClick(object sender, System.EventArgs e)
        {
            if (ui.Evento == "posicionar")
            {
                if (game.jogador1.campo.contarUnidades() < 10)
                {
                    if (!ui.UnidadePosicionada)
                    {
                        MensagemCor = Color.Tomato;
                        ui.TocarSom("erro", 0.5f);
                    }
                    else
                    {
                        btnOpcao1.Texto = "Desfazer";
                        CampoDeBatalha campo = game.jogador1.campo;
                        string posicaoInicial = ui.PosicaoSelecionada + ui.DirecaoUnidade;

                        if (ui.ProximaUnidade == "porta-avioes") {
                            PosicionarUnidade(campo, campo.unidades["porta-avioes"], posicaoInicial, "navio-tanque1");
                        }
                        else if(ui.ProximaUnidade == "navio-tanque1")
                        {
                            PosicionarUnidade(campo, campo.unidades["navio-tanque1"], posicaoInicial, "navio-tanque2");
                        }
                        else if (ui.ProximaUnidade == "navio-tanque2")
                        {
                            PosicionarUnidade(campo, campo.unidades["navio-tanque2"], posicaoInicial, "contratorpedeiro1");
                        }
                        else if (ui.ProximaUnidade == "contratorpedeiro1")
                        {
                            PosicionarUnidade(campo, campo.unidades["contratorpedeiro1"], posicaoInicial, "contratorpedeiro2");
                        }
                        else if (ui.ProximaUnidade == "contratorpedeiro2")
                        {
                            PosicionarUnidade(campo, campo.unidades["contratorpedeiro2"], posicaoInicial, "contratorpedeiro3");
                        }
                        else if (ui.ProximaUnidade == "contratorpedeiro3")
                        {
                            PosicionarUnidade(campo, campo.unidades["contratorpedeiro3"], posicaoInicial, "submarino1");
                        }
                        else if (ui.ProximaUnidade == "submarino1")
                        {
                            PosicionarUnidade(campo, campo.unidades["submarino1"], posicaoInicial, "submarino2");
                        }
                        else if (ui.ProximaUnidade == "submarino2")
                        {
                            PosicionarUnidade(campo, campo.unidades["submarino2"], posicaoInicial, "submarino3");
                        }
                        else if (ui.ProximaUnidade == "submarino3")
                        {
                            PosicionarUnidade(campo, campo.unidades["submarino3"], posicaoInicial, "submarino4");
                        }
                        else if (ui.ProximaUnidade == "submarino4")
                        {
                            if(PosicionarUnidade(campo, campo.unidades["submarino4"], posicaoInicial, null)) {
                                MensagemCor = Color.Gold;
                                Mensagem = "Vez do jogador: " + game.jogador1.nome;
                                ui.Evento = "vez_jogador1";
                                btnOpcao1.Texto = "Desfazer";
                                btnOpcao2.Texto = "Disparo Simples";
                                ui.TipoOpcao = "simples";
                                btnContinuar.Texto = "Disparar";
                                game.posicionarUnidadesAuto(game.jogador2);
                                RenderizarUnidades(game.jogador2, new Vector2(557, 300));
                                ui.TempoDecorrido = 0;
                                game.rodada++;
                            }
                        }
                        RenderizarUnidades(game.jogador1, new Vector2(72, 300));
                        IPosicao posicao = (IPosicao)CampoJogador1[ui.PosicaoSelecionada];
                        posicao.FoiClicado = false;
                        ui.UnidadePosicionada = false;
                        ui.PosicaoSelecionada = null;
                    }
                }
            }
            else if (ui.Evento == "vez_jogador1")
            {
                if(ui.TipoOpcao == "simples" && ui.PosicoesDisparo.Count == 3)
                {
                    game.jogador1.dispararSimples(ui.PosicoesDisparo.ToArray());
                    List<string> codigosDisparos = ui.PosicoesDisparo;
                    List<string> acertos = new List<string>();
                    foreach (string codigoDisparo in codigosDisparos)
                    {
                        if (game.jogador2.campo.getPosicao(codigoDisparo).unidade != null)
                        {
                            acertos.Add(codigoDisparo);
                        }
                    }

                    if (acertos.Count > 0)
                    {
                        foreach (string acerto in acertos)
                        {
                            Posicao posicao = game.jogador2.campo.getPosicao(acerto);
                            if (posicao.unidade.verificarDestruida())
                            {
                                IUnidade unidadeRender = (IUnidade) UnidadesJogador2[posicao.unidade.codigoPosicaoInicial];
                                unidadeRender.Cor = Color.White;
                            }
                        }
                        ui.TocarSom("explosao", 0.4f);
                    }
                    else
                    {
                        ui.TocarSom("agua", 0.2f);
                    }

                    List<Disparo> disparos = new List<Disparo>() {
                        game.jogador2.campo.getPosicao(codigosDisparos[0]).disparo,
                        game.jogador2.campo.getPosicao(codigosDisparos[1]).disparo,
                        game.jogador2.campo.getPosicao(codigosDisparos[2]).disparo
                    };

                    RenderizarDisparos(CampoJogador2, disparos);

                    foreach (string codigo in ui.PosicoesDisparo)
                    {
                        IPosicao posicao = (IPosicao)CampoJogador2[codigo];
                        posicao.FoiClicado = false;
                    }

                    ui.PosicoesDisparo = new List<string>();

                    Jogador vencedor = game.verificarVencedor();
                    if (vencedor == null)
                    {
                        ui.Evento = "vez_jogador2";
                        MensagemCor = Color.Gold;
                        Mensagem = "Vez do jogador: " + game.jogador2.nome;
                        btnContinuar.Texto = "Continuar";
                    }
                    else
                    {
                        ui.Evento = "fim_jogo";
                        MensagemCor = Color.Gold;
                        Mensagem = "Voce venceu! (Score: " + game.calcularScore() + ")";
                        btnContinuar.Texto = "Continuar";
                        MediaPlayer.Play(ui.Content.Load<Song>("Sounds/vitoria"));
                        ui.Score.AdicionarScore(game.jogador1.nome, game.calcularScore());
                        ui.Score.SalvarScore();
                    }
                } else if(ui.TipoOpcao == "especial" && ui.PosicaoSelecionada != null && game.jogador2.campo.getVizinhanca(ui.PosicaoSelecionada).Count == 9)
                {
                    List<Posicao> posicoes = game.jogador1.dispararEspecial(ui.PosicaoSelecionada);
                    List<Posicao> acertos = new List<Posicao>();
                    List<Disparo> disparos = new List<Disparo>();
                    foreach (Posicao posicao in posicoes)
                    {
                        if (posicao.unidade != null)
                        {
                            acertos.Add(posicao);
                        }
                        disparos.Add(posicao.disparo);
                    }

                    if (acertos.Count > 0)
                    {
                        foreach (Posicao posicao in acertos)
                        {
                            if (posicao.unidade.verificarDestruida())
                            {
                                IUnidade unidadeRender = (IUnidade)UnidadesJogador2[posicao.unidade.codigoPosicaoInicial];
                                unidadeRender.Cor = Color.White;
                            }
                        }
                        ui.TocarSom("explosao", 0.4f);
                    }
                    else
                    {
                        ui.TocarSom("agua", 0.2f);
                    }

                    RenderizarDisparos(CampoJogador2, disparos);

                    IPosicao iPosicao = (IPosicao) CampoJogador2[ui.PosicaoSelecionada];
                    iPosicao.FoiClicado = false;
                    ui.PosicaoSelecionada = null;

                    Jogador vencedor = game.verificarVencedor();
                    if (vencedor == null)
                    {
                        ui.Evento = "vez_jogador2";
                        MensagemCor = Color.Gold;
                        Mensagem = "Vez do jogador: " + game.jogador2.nome;
                        btnContinuar.Texto = "Continuar";
                        if(game.jogador1.disparosEspeciais == 0)
                        {
                            ui.TipoOpcao = "simples";
                            btnOpcao2.Texto = "Disparo Simples";
                        }
                    }
                    else
                    {
                        ui.Evento = "fim_jogo";
                        MensagemCor = Color.Gold;
                        Mensagem = "Voce venceu! (Score: " + game.calcularScore() + ")";
                        btnContinuar.Texto = "Continuar";
                        MediaPlayer.Play(ui.Content.Load<Song>("Sounds/vitoria"));
                        ui.Score.AdicionarScore(game.jogador1.nome, game.calcularScore());
                        ui.Score.SalvarScore();
                    }
                }
                else
                {
                    ui.TocarSom("erro", 0.5f);
                    MensagemCor = Color.Tomato;
                }
            }
            else if (ui.Evento == "vez_jogador2")
            {
                string tipoDisparo = "simples";
                if (game.jogador2.disparosEspeciais > 0)
                {
                    tipoDisparo = "especial";
                }

                List<string> acertos = new List<string>();
                List<Disparo> disparos = new List<Disparo>();
                if (tipoDisparo == "simples")
                {
                    (List<string> acertos, List<string> disparos) disparoSimplesAuto = game.jogador2.dispararSimplesAuto();
                    List<string> codigosDisparos = disparoSimplesAuto.disparos;
                    acertos = disparoSimplesAuto.acertos;
                    disparos = new List<Disparo>() {
                        game.jogador1.campo.getPosicao(codigosDisparos[0]).disparo,
                        game.jogador1.campo.getPosicao(codigosDisparos[1]).disparo,
                        game.jogador1.campo.getPosicao(codigosDisparos[2]).disparo
                    };
                }
                else
                {
                    (string codigoPosicao, List<Posicao> posicoes) disparoEspecialAuto = game.jogador2.dispararEspecialAuto();
                    List<Posicao> posicoes = disparoEspecialAuto.posicoes;
                    
                    foreach (Posicao posicao in posicoes)
                    {
                        if (posicao.unidade != null)
                        {
                            acertos.Add(posicao.codigo);
                        }
                        disparos.Add(posicao.disparo);
                    }
                }

                if (acertos.Count > 0)
                {
                    ui.TocarSom("explosao", 0.4f);
                }
                else
                {
                    ui.TocarSom("agua", 0.2f);
                }

                RenderizarDisparos(CampoJogador1, disparos);
                game.jogador2.disparosRodada = 3;

                Jogador vencedor = game.verificarVencedor();
                if (vencedor == null)
                {
                    if (tipoDisparo == "especial")
                    {
                        game.jogador2.disparosEspeciais--;
                    }
                    game.rodada++;
                    ui.Evento = "vez_jogador1";
                    MensagemCor = Color.Gold;
                    Mensagem = "Vez do jogador: " + game.jogador1.nome;
                    btnContinuar.Texto = "Disparar";
                    game.jogador1.disparosRodada = 3;
                    game.jogador2.disparosRodada = 3;
                }
                else
                {
                    ui.Evento = "fim_jogo";
                    MensagemCor = Color.Tomato;
                    Mensagem = "Voce foi derrotado pela maquina!";
                    btnContinuar.Texto = "Continuar";
                    MediaPlayer.Play(ui.Content.Load<Song>("Sounds/derrota"));

                    foreach (KeyValuePair<string, IObjeto> unidade in UnidadesJogador2)
                    {
                        unidade.Value.Cor = Color.White;
                    }
                }
            } else if(ui.Evento == "fim_jogo")
            {
                ui.TelaAtual = "tela1";
                MediaPlayer.Play(ui.Content.Load<Song>("Sounds/theme"));
            }
        }

        public void NovoJogo()
        {
            CampoJogador1 = new Dictionary<string, IObjeto>();
            CampoJogador2 = new Dictionary<string, IObjeto>();
            UnidadesJogador1 = new Dictionary<string, IObjeto>();
            OrdemUnidadesJogador1 = new List<Unidade>();
            UnidadesJogador2 = new Dictionary<string, IObjeto>();
            game.rodada = 0;
            ui.TempoDecorrido = 0;
            _tempoDisplay = "00:00:00";
            ui.MostrarBotaoDesfazer = true;
            btnOpcao1.Texto = "Posicionar Auto";
            ui.Evento = "posicionar";
            btnOpcao2.Texto = "Horizontal";
            ui.TipoOpcao = "H";
            ui.UnidadePosicionada = false;
            ui.ProximaUnidade = "porta-avioes";
            btnContinuar.Texto = "Posicionar";
            Mensagem = "Posicione o porta-avioes (5 posicoes)";
            MensagemCor = Color.Gold;
            RenderizarUnidades(game.jogador1, new Vector2(72, 300));
            RenderizarUnidades(game.jogador2, new Vector2(557, 300));
            CriarCampo(CampoJogador1, "jogador1", new Vector2(72, 300));
            CriarCampo(CampoJogador2, "jogador2", new Vector2(557, 300));
        }

        private bool PosicionarUnidade(CampoDeBatalha campo, Unidade unidade, string posicaoInicial, string proximaUnidade)
        {
            List<int[]> coordenadas = campo.validarPosicao(posicaoInicial, unidade);
            if (coordenadas != null)
            {
                unidade.posicionar(coordenadas, posicaoInicial);
                OrdemUnidadesJogador1.Add(unidade);
                ui.ProximaUnidade = proximaUnidade;
                if (proximaUnidade != null)
                {
                    MensagemCor = Color.Gold;
                    Mensagem = "Posicione o " + campo.unidades[ui.ProximaUnidade].nome + " (" + campo.unidades[ui.ProximaUnidade].tamanho + " posicoes)";
                }
                return true;
            }
            MensagemCor = Color.Tomato;
            ui.TocarSom("erro", 0.5f);
            return false;
        }

        public void RenderizarUnidades(Jogador jogador, Vector2 offset)
        {
            foreach (KeyValuePair<string, Unidade> item in jogador.campo.unidades) {
                Unidade unidade = item.Value;
                if (unidade.codigoPosicaoInicial != null)
                {
                    (int i, int j, string orientacao) coordenada = game.jogador1.campo.converterPosicao(unidade.codigoPosicaoInicial);

                    int i = coordenada.i;
                    int j = coordenada.j;
                    string orientacao = coordenada.orientacao;
                    float rotacao = 0f;
                    float offsetX = offset.X;
                    float offsetY = offset.Y;

                    if (orientacao == "V")
                    {
                        rotacao = (float) Math.PI / 2.0f;
                        offsetX += ui.tamanhoPosicao;
                    }

                    IUnidade unidadeRender = new IUnidade(ui, ui.Imagens[unidade.tipo], Color.White, new Vector2(offsetX + (j * ui.tamanhoPosicao), offsetY + (i * ui.tamanhoPosicao)), ui.escala, rotacao, unidade.codigoPosicaoInicial);

                    if(jogador.tipo == "humano")
                    {
                        UnidadesJogador1[unidade.codigoPosicaoInicial] = unidadeRender;
                    } else
                    {
                        unidadeRender.Cor = Color.Transparent;
                        UnidadesJogador2[unidade.codigoPosicaoInicial] = unidadeRender;
                    }
                }
            }
        }

        public void RenderizarDisparos(Dictionary<string, IObjeto> posicoes, List<Disparo> disparos)
        {
            foreach (Disparo disparo in disparos)
            {
                IPosicao posicao = (IPosicao) posicoes[disparo.codigoPosicao];
                if (disparo.acerto)
                {
                    posicao.SetTextura("explosao");
                }
                else
                {
                    posicao.SetTextura("agua");
                }
            }
        }

        public void CriarCampo(Dictionary<string, IObjeto> campo, string jogador, Vector2 offset)
        {
            for (int i = 0; i < game.tamanhoCampo; i++)
            {
                string strLetra = game.jogador1.campo.letras[i];
                ICoordenada letra = new ICoordenada(ui, ui.Fonts["UbuntuBold15"], strLetra, Color.White, new Vector2(offset.X + (i * ui.tamanhoPosicao), offset.Y + (-ui.tamanhoPosicao)), ui.escala);
                campo[strLetra] = letra;

                string strNumero = (i + 1).ToString();
                ICoordenada numero = new ICoordenada(ui, ui.Fonts["UbuntuBold15"], strNumero, Color.White, new Vector2(offset.X + (-ui.tamanhoPosicao), offset.Y + (i * ui.tamanhoPosicao)), ui.escala);
                campo[strNumero] = numero;

                for (int j = 0; j < game.tamanhoCampo; j++)
                {
                    string codigo = game.jogador1.campo.converterCoordenada(new int[] { i, j });
                    IPosicao posicao = new IPosicao(ui, ui.Imagens["posicao1"], ui.Imagens["posicao2"], ui.Imagens["posicao3"], ui.Imagens["posicao4"], ui.Imagens["posicao5"], new Vector2(offset.X + (j * ui.tamanhoPosicao), offset.Y + (i * ui.tamanhoPosicao)), ui.escala, jogador, codigo);
                    campo[codigo] = posicao;
                }
            }
        }

        public override void Update(GameTime gameTime)
        {
            if (ui.TelaAtual == "tela6")
            {
                if(ui.TempoDecorrido == 0f)
                {
                    ui.TempoDecorrido = (int) gameTime.TotalGameTime.TotalSeconds;
                }

                if (ui.MostrarBotaoDesfazer)
                {
                    btnOpcao1.Update(gameTime);
                }

                foreach (IObjeto objeto in _objetos)
                    objeto.Update(gameTime);

                foreach (KeyValuePair<string, IObjeto> unidade in UnidadesJogador1)
                    unidade.Value.Update(gameTime);

                foreach (KeyValuePair<string, IObjeto> unidade in UnidadesJogador2)
                    unidade.Value.Update(gameTime);

                foreach (KeyValuePair<string, IObjeto> posicao in CampoJogador1)
                    posicao.Value.Update(gameTime);

                foreach (KeyValuePair<string, IObjeto> posicao in CampoJogador2)
                    posicao.Value.Update(gameTime);

                if(ui.Evento == "vez_jogador1" | ui.Evento == "vez_jogador2") {
                    game.timer = (int) (gameTime.TotalGameTime.TotalSeconds - ui.TempoDecorrido);
                    (int hora, int minuto, int segundo, string display) tempo = game.getTempo();
                    _tempoDisplay = tempo.display;
                }
            }
        }

        public override void Draw(SpriteBatch spriteBatch, GameTime gameTime)
        {
            if(ui.TelaAtual == "tela6")
            {
                spriteBatch.Draw(Textura, Vector2.Zero, Color.White);

                if(ui.MostrarBotaoDesfazer)
                {
                    btnOpcao1.Draw(spriteBatch, gameTime);
                }

                foreach (IObjeto objeto in _objetos)
                    objeto.Draw(spriteBatch, gameTime);

                foreach (KeyValuePair<string, IObjeto> unidade in UnidadesJogador1)
                    unidade.Value.Draw(spriteBatch, gameTime);

                foreach (KeyValuePair<string, IObjeto> unidade in UnidadesJogador2)
                    unidade.Value.Draw(spriteBatch, gameTime);

                foreach (KeyValuePair<string, IObjeto> posicao in CampoJogador1)
                    posicao.Value.Draw(spriteBatch, gameTime);

                foreach (KeyValuePair<string, IObjeto> posicao in CampoJogador2)
                    posicao.Value.Draw(spriteBatch, gameTime);

                spriteBatch.DrawString(ui.Fonts["UbuntuBold15"], "Rodada: " + game.rodada, new Vector2(558, 23), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuBold15"], _tempoDisplay, new Vector2(906, 23), Color.White);

                spriteBatch.DrawString(ui.Fonts["UbuntuBold15"], game.jogador1.nome, new Vector2(569, 71), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Disparos Rodada:", new Vector2(569, 96), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Disparos Especiais:", new Vector2(569, 115), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Total Disparos:", new Vector2(569, 134), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Erros:", new Vector2(569, 153), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Acertos:", new Vector2(569, 172), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Unidades Restantes:", new Vector2(569, 191), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador1.disparosRodada.ToString(), new Vector2(739, 96), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador1.disparosEspeciais.ToString(), new Vector2(739, 115), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador1.totalDisparos.ToString(), new Vector2(739, 134), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador1.erros.ToString(), new Vector2(739, 153), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador1.acertos.ToString(), new Vector2(739, 172), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador1.campo.contarUnidades().ToString(), new Vector2(739, 191), Color.White); // criar atributo

                spriteBatch.DrawString(ui.Fonts["UbuntuBold15"], "Maquina", new Vector2(781, 71), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Disparos Rodada:", new Vector2(781, 96), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Disparos Especiais:", new Vector2(781, 115), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Total Disparos:", new Vector2(781, 134), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Erros:", new Vector2(781, 153), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Acertos:", new Vector2(781, 172), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], "Unidades Restantes:", new Vector2(781, 191), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador2.disparosRodada.ToString(), new Vector2(950, 96), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador2.disparosEspeciais.ToString(), new Vector2(950, 115), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador2.totalDisparos.ToString(), new Vector2(950, 134), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador2.erros.ToString(), new Vector2(950, 153), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador2.acertos.ToString(), new Vector2(950, 172), Color.White);
                spriteBatch.DrawString(ui.Fonts["UbuntuMedium11"], game.jogador2.campo.contarUnidades().ToString(), new Vector2(950, 191), Color.White); // criar atributo

                spriteBatch.DrawString(ui.Fonts["UbuntuRegular10"], Mensagem, new Vector2(569, 240), MensagemCor);
            }
        }
    }
}