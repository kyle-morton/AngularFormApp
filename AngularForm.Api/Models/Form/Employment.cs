using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularForm.Api.Models
{
    public class Employment
    {
        public Employer CurrentEmployer { get; set; }
        public Employer FormerEmployer { get; set; }
        public string Certifications { get; set; }
        public IEnumerable<Reference> References { get; set; }
    }
}