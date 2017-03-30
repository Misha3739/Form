using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Form.Models
{
    public class UserModel
    {
        public long? Id { get; set; }

        public  string FirstName { get; set; }

        public string LastName { get; set; }

        public string Patronimic { get; set; }

        public List<Order> Orders { get; set; }
    }
}