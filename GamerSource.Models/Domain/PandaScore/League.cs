using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain.PandaScore
{
    public class League : BaseLeague
    {
        public List<BaseSerie> series { get; set; }
        public VideoGame videogame { get; set; }
    }
}
