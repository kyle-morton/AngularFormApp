using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using AngularForm.Api.Services;

namespace AngularForm.Api.Controllers
{

    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class FormController : ApiController
    {

        /// <summary>
        /// get all form - 
        /// http://localhost:61109/api/form/GetAll
        /// </summary>
        /// <returns></returns>
        public IEnumerable<IResume> GetAll()
        {
            return new FormRepository().GetForms().ToList();
        }

        public IResume Get(string guid)
        {
            return new FormRepository().GetForm(Guid.Parse(guid));
        }

        [HttpPost]
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

    }
}
