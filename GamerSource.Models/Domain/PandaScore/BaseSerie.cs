using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain.PandaScore
{
    public class BaseSerie
    {
        public string begin_at { get; }

        public string description { get; }

        public string end_at { get; }

        public string full_name { get; }

        public int id { get; }

        //public BaseLeague league { get; } (for getting serie by ID)

        public int league_id { get; }

        public string modified_at { get; }

        public string name { get; }

        public string prizepool { get; }

        public string season { get; }

        public string slug {get; }

        public int? winner_id { get; }

        public string winner_type { get; }

        public int year { get; }

    }
}