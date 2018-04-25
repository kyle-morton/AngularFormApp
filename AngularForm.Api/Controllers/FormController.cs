using AngularForm.Api.Models;
using AngularForm.Data;
using AngularForm.Logic.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

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
        public IEnumerable<Form> GetAll()
        {
            return new FormRepository().GetAll().ToList();
        }

        /// <summary>
        /// get all form - 
        /// http://localhost:61109/api/form/GetActive
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Form> GetActive()
        {
            return new FormRepository().GetAll(f => f.IsActive).ToList();
        }

        public Form Get(string id)
        {
            Guid result;
            return Guid.TryParse(id, out result) 
                ? new FormRepository().Get(result) 
                : null;
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
        public void Update(int id, Form form)
        {

        }

        [HttpDelete]
        public ResponseMessage Delete(string id)
        {
            try
            {
                if (Guid.TryParse(id, out var guid))
                    new FormRepository().Delete(guid);
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
