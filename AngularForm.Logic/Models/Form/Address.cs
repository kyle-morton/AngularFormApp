using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularForm.Api.Models
{
    public class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
    }
}