using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace GamerSource.Models.Domain.PandaScore
{
    public class Live
    {
        //public EndPoints endpoints { get; set; } - base req

        [JsonProperty ("event")]
        public string Event { get; set; }


        //public Match match { get; set; } - base req with nested models

    }
}
