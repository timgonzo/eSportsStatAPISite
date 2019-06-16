using System;
using System.Collections.Generic;
using System.Text;

namespace GamerSource.Models.Domain.PandaScore
{
    public class BaseCSGOGame : Game
    {
        public string map { get; }

        //public List<Player> players { get; }  - swagger requirement

        //public List<Round> rounds { get; }  - swagger requirement

        //public List<CSGORoundsScore> rounds_score { get; }  - swagger requirement

        //public List<BaseTeam> teams { get; }  - swagger requirement

    }
}