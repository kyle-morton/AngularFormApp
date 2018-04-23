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

        Person Person { get; set; }
        Address Address { get; set; }

    }
}
