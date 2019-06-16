namespace GamerSource.Web.Models.Responses
{
    /// <summary>
    /// This class simply sets IsSuccesful to true by default.
    /// Many of the response classes will inherit from here since they should be returning IsSuccessful = true
    /// </summary>
    public class SuccessResponse : BaseResponse
    {
        public SuccessResponse()
        {
            this.IsSuccessful = true;
        }
    }
}