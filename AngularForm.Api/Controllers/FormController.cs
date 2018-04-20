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

        public IResume Get(string id)
        {
            return new FormRepository().GetForm(Guid.Parse(id));
        }

        [HttpPost]
        public ResponseMessage Submit([FromBody]ApplicationForm form)
        {
            try
            {
                new FormRepository().Create(form);
                return new ResponseMessage { IsSuccess = true };
            }
            catch (Exception ex)
            {
                return new ResponseMessage
                {
                    ErrorMessage = "Error occurred while submiting form"
                };
            }
        }

        [HttpPut]
        public void Update(int id, IResume form)
        {

        }

        [HttpDelete]
        public ResponseMessage Delete(string id)
        {
            try
            {
                new FormRepository().Delete(Guid.Parse(id));
                return new ResponseMessage {IsSuccess = true};
            }
            catch (Exception ex)
            {
                return new ResponseMessage
                {
                    ErrorMessage = "Error occurred while deleting this form"
                };
            }
        }

    }
}
