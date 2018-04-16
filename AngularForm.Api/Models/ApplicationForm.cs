using AngularForm.Api.Interfaces;
using AngularForm.Api.Interfaces.Form;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularForm.Api.Models
{
    public class ApplicationForm : IResume
    {
        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifyDate { get; set; }

        //section 1
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateOfBirth { get; set; }
        //section 2
        public Address Address { get; set; }
        //section 3
        public string HighSchool { get; set; }
        public string College { get; set; }
        public string Degree { get; set; }
        //section 4
        public Employer CurrentEmployer { get; set; }
        public Employer FormerEmployer { get; set; }
        //section 5
        public string Certifications { get; set; }
        public IEnumerable<Reference> References { get; set; }
    }
}