using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Form.Models
{
    public class Order
    {
        public long Id { get; set; }

        public string Position { get; set; }

        public int Amount { get; set; }

        public Decimal Price { get; set; }
    }
}