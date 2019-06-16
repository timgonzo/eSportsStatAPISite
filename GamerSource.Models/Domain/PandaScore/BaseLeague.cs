using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain.PandaScore
{
    public class BaseLeague
    {
        public int id { get; }

        public string image_url { get; }

        public bool live_supported { get; }

        public string modified_at { get; }

        public string name { get; }

        public string slug { get; }

        public string url { get; }
    }
}
