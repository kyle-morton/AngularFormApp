using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularForm.Api.Models
{
    public class Employer
    {
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}