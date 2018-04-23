using AngularForm.Api.Interfaces.Form;
using System;
using System.Collections.Generic;

namespace AngularForm.Api.Models
{
    public class Form : IResume
    {
        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifyDate { get; set; }

        //section 1
        public Person Person { get; set; }
        //section 2
        public Address Address { get; set; }
        //section 3
        public Education Education { get; set; }
        //section 4
        public IEnumerable<Employer> Employers { get; set; }
        //section 5
        public string Certifications { get; set; }
        //section 6 
        public IEnumerable<Reference> References { get; set; }
        //section 7
        public string Hobbies { get; set; }

    }
}