using AngularForm.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularForm.Api.Interfaces.Form
{
    public interface IPerson
    {

        string FirstName { get; set; }
        string LastName { get; set; }
        DateTime BirthDay { get; set; }
        Address Address { get; set; }

    }
}
