using System.Collections.Generic;
using AngularForm.Api.Models;

namespace AngularForm.Api.Interfaces.Form
{
    public interface IEmployment
    {
        IEnumerable<Employer> Employers { get; set; }
        string Certifications { get; set; }
        IEnumerable<Reference> References { get; set; }
    }
}
