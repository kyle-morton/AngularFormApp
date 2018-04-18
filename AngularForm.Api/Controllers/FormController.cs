using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using AngularForm.Api.Services.Mock;
using System;
using System.Collections.Generic;
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
            return new AngularForm.Api.Services.FormRepository().GetForms();
        }

        public IResume Get(string guid)
        {
            return new FormRepository().GetForm(Guid.Parse(guid));
        }

        public void Submit([FromBody]ApplicationForm form)
        {
            new FormRepository().Create(form);
        }

        [HttpPut]
        public void Update(int id, IResume form)
        {

        }

        [HttpDelete]
        public void Delete(int id)
        {

        }

        [HttpPost]
        public string Test([FromBody]ApplicationForm form)
        {
            new AngularForm.Api.Services.FormRepository().Create(form);
            return "OK";
        }

    }
}
