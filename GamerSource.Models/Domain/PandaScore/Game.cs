using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain.PandaScore
{
    public class Game
    {
        public string begin_at { get; }
        public string end_at { get; }
        public bool finished { get; }
        public bool forfeit { get; set; }

        public int id { get; }

        public string length { get; }

        public int match_id { get; set; }

        public int position { get; }

        public GameWinner winner { get; }

        public string winner_type { get; }


    }
}