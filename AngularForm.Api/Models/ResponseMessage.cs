using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularForm.Api.Models
{
    public class ResponseMessage
    {
        public bool IsSuccess { get; set; }
        public string ErrorMessage { get; set; }
    }
}