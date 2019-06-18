using System.Collections.Generic;
using System.Linq;
using System.Net;
using HtmlAgilityPack;

namespace eSportsScraper
{
    class qq
    {
        static void Main(string[] args)
        {
            List<ResultsModel> resultsList = null;

            var webClient = new WebClient();
            var html = webClient.DownloadString("https://www.hltv.org/results?stars=5");
            var htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(html);

            var sublists = htmlDocument
                .DocumentNode
                .Descendants()
                .Where(sublist => sublist.Attributes["class"] != null && sublist.Attributes["class"].Value.Contains("results-sublist"));

            foreach(var sublist in sublists)
            {
                //This might be where I put the event Day/headline
                var matches = sublist.ChildNodes.Where(match => match.Attributes["class"] != null && match.Attributes["class"].Value.Contains("result-con"));
                
                foreach(var match in matches)
                {
                    var matchResult = new ResultsModel();

                    var team1Node = match.Descendants().Where(node => node.Attributes["class"].Value.Contains("team") && node.ParentNode.Attributes["class"].Value.Contains("line-align team1"));

                    var team1 = team1Node.InnerText;

                }


            }


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