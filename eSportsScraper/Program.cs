using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using HtmlAgilityPack;

namespace eSportsScraper
{
    class Program
    {
        static void Main(string[] args)
        {
            List<ResultsModel> resultsList = null;

            //var url = @"https://www.hltv.org/results?stars=5";
            //HtmlWeb web = new HtmlWeb();
            //var htmlDoc = new HtmlDocument();
            //htmlDoc.LoadHtml(url);

            var webClient = new WebClient();
            var html = webClient.DownloadString("https://www.hltv.org/results?stars=5");
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(html);

            var resultsHolder = htmlDoc.QuerySelectorAll(".results-all");

            var listofSublists = resultsHolder[1].QuerySelectorAll(".results-sublist");
            var newListofSublists = resultsHolder[1].Elements("div");
            //This is where I stopped, newList is all of the match days at headline div

            var subList = listofSublists[0].ChildNodes;

            var subListDateHeadline = subList[0].FirstChild.InnerText;
            Console.WriteLine(subListDateHeadline);

            var matchesInDay = subList.QuerySelectorAll(".result-con");

            var matchResult = matchesInDay[0].QuerySelectorAll(".result");

            var team1Node = matchResult[0].ChildNodes[1].ChildNodes[1].QuerySelector(".line-align .team1").SelectSingleNode("//div[contains(@class, 'team')]").ChildNodes.QuerySelectorAll("div");
            var team1Name = team1Node[0].InnerText;
            var scoreWon = matchResult[0].ChildNodes[1].QuerySelector(".result-score").SelectSingleNode("//span[contains(@class, 'score-won')]").InnerText;
            Console.WriteLine(team1Name + " " + scoreWon);

            var team2Node = matchResult[0].ChildNodes[1].ChildNodes[1].QuerySelector(".line-align .team2").SelectSingleNode("//div[contains(@class, 'team')]").ChildNodes.QuerySelectorAll("div");
            var team2Name = team2Node[0].InnerText;
            var scoreLost = matchResult[0].ChildNodes[1].ChildNodes[1].QuerySelector(".result-score").SelectSingleNode("//span[contains(@class, 'score-lost')]").InnerText;
            Console.WriteLine(team2Name + " " + scoreLost);

            var EventName = matchResult[0].ChildNodes[1].ChildNodes[1].QuerySelector(".result-score").SelectSingleNode("//span[contains(@class, 'event-name')]").InnerText;
            Console.WriteLine(EventName);
            Console.ReadLine();

        }
    }
}
        //    var sublists = htmlDocument
        //        .DocumentNode
        //        .Descendants()
        //        .Where(sublist => sublist.Attributes["class"] != null && sublist.Attributes["class"].Value.Contains("results-sublist"));

        //    foreach (var sublist in sublists)
        //    {
        //        //This might be where I put the event Day/headline
        //        var matches = sublist.ChildNodes.Where(match => match.Attributes["class"] != null && match.Attributes["class"].Value.Contains("result-con"));

        //        foreach (var match in matches)
        //        {
        //            var matchResult = new ResultsModel();

        //            var team1Node = match.Descendants().Where(node => node.Attributes["class"].Value.Contains("team"));
        //            // && node.ParentNode.Attributes["class"].Value.Contains("line-align team1"));

        //            //var team1 = team1Node.InnerText;
        //            Console.WriteLine(matchResult);
        //            Console.WriteLine(team1Node);
        //        }

        //    }

        //    Console.ReadLine();


//#V2
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using HtmlAgilityPack;

//namespace eSportsScraper
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            List<ResultsModel> resultsList = null;

//            var webClient = new WebClient();
//            var html = webClient.DownloadString("https://www.hltv.org/results?stars=5");
//            var htmlDocument = new HtmlDocument();
//            htmlDocument.LoadHtml(html);

//            var sublists = htmlDocument
//                .DocumentNode
//                .Descendants()
//                .Where(sublist => sublist.Attributes["class"] != null && sublist.Attributes["class"].Value.Contains("results-sublist"));

//            foreach (var sublist in sublists)
//            {
//                //This might be where I put the event Day/headline
//                var matches = sublist.ChildNodes.Where(match => match.Attributes["class"] != null && match.Attributes["class"].Value.Contains("result-con"));

//                foreach (var match in matches)
//                {
//                    var matchResult = new ResultsModel();

//                    var team1Node = match.Descendants().Where(node => node.Attributes["class"].Value.Contains("team"));
//                    // && node.ParentNode.Attributes["class"].Value.Contains("line-align team1"));

//                    //var team1 = team1Node.InnerText;
//                    Console.WriteLine(matchResult);
//                    Console.WriteLine(team1Node);
//                }

//            }

//            Console.ReadLine();
//        }
//    }
//}


//#V1
//namespace eSportsScraper
//{
//    class Scraper
//    {
//        static void Main(string[] args)
//        {
//            List<ResultsModel> resultsList = null;

//            var webClient = new WebClient();qq
//            var html = webClient.DownloadString("https://www.hltv.org/results?stars=5");
//            var htmlDocument = new HtmlDocument();
//            htmlDocument.LoadHtml(html);

//            var headlines = htmlDocument
//                .DocumentNode
//                .Descendants()
//                .Where(headline => headline.Attributes["class"] != null &&
//                headline.Attributes["class"].Value.Contains("results-sublist"));

//            if (resultsList == null)
//            {
//                resultsList = new List<ResultsModel>();

//                foreach (var headline in headlines)
//                {
//                    var resultsModel = new ResultsModel();

//                    resultsModel.ResultsHeadline = headline.InnerText;





//                    resultsList.Add(resultsModel);
//                }

//            }


//            Console.ReadLine();
//        }
//    }
//}