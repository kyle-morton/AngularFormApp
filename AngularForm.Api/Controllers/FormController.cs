using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using AngularForm.Logic.Repositories;

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
            return new FormRepository().GetAll().ToList();
        }

        public IResume Get(string id)
        {
            Guid result;
            if (Guid.TryParse(id, out result))
            {
                return new FormRepository().Get(result);
            }

            return null;
        }

        [HttpPost]
        public ResponseMessage Submit([FromBody]Form form)
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
