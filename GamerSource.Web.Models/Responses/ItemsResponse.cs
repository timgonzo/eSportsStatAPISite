using System.Collections.Generic;

namespace GamerSource.Web.Models.Responses
{
    /// <summary>
    /// This is a Generic class
    /// </summary>
    ///<typeparam name="T"></typeparam>
    public class ItemsResponse<T> : SuccessResponse
    {
        public List<T> Items { get; set; }
    }
}