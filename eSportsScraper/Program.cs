using System;
using System.Linq;
using System.Net.Http;
using System.Web;
using HtmlAgilityPack;

namespace eSportsScraper
{
    class Program
    {
        static void Main(string[] args)
        {
            GetHtmlAsync();


            Console.ReadLine();
        }

        private static async void GetHtmlAsync()
        {

            var url = "https://www.hltv.org/results?stars=5";

            var httpClient = new HttpClient();
            var html = await httpClient.GetStringAsync(url);

            var htmlDocument = new HtmlDocument();

            htmlDocument.LoadHtml(html);

            var ResultsList = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'results-all']");

            //var ResultsSublist = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'results-sublist']");

            //var ResultsHeadLine = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'standard-headline']");

            foreach(var subList in ResultsList)
            {
                var day = HttpUtility.HtmlDecode(subList.SelectSingleNode(".//div[@class='results-sublist']").InnerText);

                Console.WriteLine();
            }

            //foreach(var result in ResultsSublist)
            //{
            //    var resultDay = HttpUtility.HtmlDecode(resultsSublist.SelectSingleNode(".//div[@class= '']"))
            //}

            var ScoreWon = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'score-won']");

            var ScoreLost = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'score-lost']");

            var Team1 = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'team team-won']");

            //var Team1Img = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'standard-headline']");

            var Team2 = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'team ']");

            //var Team2Img = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'standard-headline']");

            var EventName = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'event']");

            var EventImg = htmlDocument.DocumentNode.SelectNodes("//*[@class = 'event-logo smartphone-only']");


            Console.WriteLine();

        }
    }
}
//results-all