using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace BatalhaNaval
{
    public class ScoreManager
    {
        private string _arquivo;
        public List<KeyValuePair<string, int>> Lista;

        public ScoreManager() {
            _arquivo = "Content/Data/score.xml";
            Lista = new List<KeyValuePair<string, int>>();
        }

        public void AdicionarScore(string nome, int score)
        {
            Lista.Add(new KeyValuePair<string, int>(nome, score));
        }

        public void SalvarScore()
        {

            Lista.Sort((pair1, pair2) => pair2.Value.CompareTo(pair1.Value));

            using (StreamWriter sw = File.CreateText(_arquivo))
            {
                int contador = 0;
                foreach (KeyValuePair<string, int> item in Lista)
                {
                    contador++;
                    sw.WriteLine(item.Key + "|" + item.Value);
                    if(contador >= 10)
                    {
                        break;
                    }
                }
            }

        }

        public void CarregarScore()
        {
            if (File.Exists(_arquivo))
            {
                using (StreamReader sr = File.OpenText(_arquivo))
                {
                    string linha = "";
                    while ((linha = sr.ReadLine()) != null)
                    {
                        string[] linhaArray = linha.Split("|");
                        string nome = linhaArray[0];
                        string score = linhaArray[1];
                        Lista.Add(new KeyValuePair<string, int>(nome, Int32.Parse(score)));
                    }
                }
            }
        }
    }
}