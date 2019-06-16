using System;

namespace GamerSource.Web.Models.Responses
{
    /// <summary>
    /// The Base class for all our Response models. If it is going out the door from our Api it must
    /// inherit fromm here.
    /// </summary>
    public abstract class BaseResponse
    {
        public bool IsSuccessful { get; set; }

        public string TransactionId { get; set; }

        public BaseResponse()
        {
            //This TxId is being faked to demonstrate its purpose
            this.TransactionId = Guid.NewGuid().ToString();
        }
    }
}