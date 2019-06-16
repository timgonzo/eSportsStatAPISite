using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace GamerSource.Models.Domain.PandaScore
{
    public class VideoGame
    {
        public string current_version { get; }

        public int id { get; }

        public string name { get; }

        public string slug { get; }
    }
}

