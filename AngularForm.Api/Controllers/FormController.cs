using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using AngularForm.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularForm.Api.Controllers
{

    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class FormController : ApiController
    {

        /// <summary>
        /// get a form (testing only) - 
        /// http://localhost:61109/api/form/GetAll
        /// </summary>
        /// <returns></returns>
        public IEnumerable<IResume> GetAll()
        {
            return new FormRepository().GetForms();
        }

        public IResume Get(string guid)
        {
            return new FormRepository().GetForm(Guid.Parse(guid));
        }

        public void Submit([FromBody]ApplicationForm form)
        {
            new FormRepository().Create(form);
        }

        public void Update(int id, IResume form)
        {

        }

        public void Delete(int id)
        {

        }

    }
}
