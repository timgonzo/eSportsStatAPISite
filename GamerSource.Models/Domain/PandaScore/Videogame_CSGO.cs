using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain.PandaScore
{
    public class Videogame_CSGO : VideoGame
    {
        public List<VideogameLeague> leagues { get; set; }
    }
}
