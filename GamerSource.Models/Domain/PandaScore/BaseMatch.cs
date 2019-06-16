using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain.PandaScore
{
    public class BaseMatch
    {
        public string begin_at { get; set; }

        public bool draw { get; set; }

        public string end_at { get; set; }

        public bool forfeit { get; set; }

        public int id { get; set; }

        public Live live { get; set; }
        //Live model needs to be completed with models it inherits from

        public string match_type { get; set; }

        public string modified_at { get; set; }

        public string name { get; set; }

        public int number_of_games { get; set; }

        public string slug { get; set; }

        public string status { get; set; }

        public int tournament_id { get; set; }

        public Nullable<int> winner_id { get; set; }

    }
}

