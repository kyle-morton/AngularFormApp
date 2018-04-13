using AngularForm.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularForm.Api.Interfaces.Form
{
    public interface IEmployment
    {
        Employer CurrentEmployer { get; set; }
        Employer FormerEmployer { get; set; }
        string Certifications { get; set; }
        IEnumerable<Reference> References { get; set; }
    }
}
