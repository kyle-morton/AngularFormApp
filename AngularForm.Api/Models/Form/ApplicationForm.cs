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
        public Person Person { get; set; }
        //section 2
        public Address Address { get; set; }
        //section 3
        public Education Education { get; set; }
        //section 4
        public Employment Employment { get; set; }
    }
}