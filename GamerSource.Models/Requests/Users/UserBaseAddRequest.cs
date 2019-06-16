﻿using System.Collections.Generic;

namespace GamerSource.Models.Requests
{
    public class UserBaseAddRequest
    {

        public string Name
        {
            get; set;
        }

        public IEnumerable<string> Roles
        {
            get; set;
        }

        public object TenantId
        {
            get; set;
        }
    }
}