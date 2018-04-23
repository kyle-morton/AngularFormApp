using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using AngularForm.Api.Interfaces;
using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using AngularForm.Data;
using AngularForm.Logic.Interfaces;
using Newtonsoft.Json;

namespace AngularForm.Logic.Repositories
{
    public class FormRepository : RepositoryBase<IResume>
    {

        #region CREATE
        
        public override void Create(IResume obj)
        {
            var id = GetNewId();
            var now = DateTime.Now;
            obj.Id = id;
            obj.CreateDate = obj.ModifyDate = now;
            var appForm = new ApplicationForm
            {
                Id = id,
                FormBody = JsonConvert.SerializeObject(obj)
            };
            dbContext.ApplicationForms.Add(appForm);
            Save();
        }

        #endregion

        #region DELETE

        public override void Delete(Guid id)
        {
            var form = new ApplicationForm {Id = id};
            dbContext.Entry(form).State = EntityState.Deleted;
            Save();
        }

        #endregion

        #region SEARCH

        public override IResume Get(Guid id)
        {
            return GetAll().SingleOrDefault(f => f.Id == id);
        }

        public override IEnumerable<IResume> GetAll()
        {
            var results = dbContext.ApplicationForms.ToList();
            return results.Select(f => 
                string.IsNullOrEmpty(f.FormBody) ? null : JsonConvert.DeserializeObject<Form>(f.FormBody));
        }

        #endregion

        #region UPDATE

        public override void Update(Guid id, IResume obj)
        {
            var record = dbContext.ApplicationForms.SingleOrDefault(f => f.Id == id);
            if (record == null)
                return;

            obj.ModifyDate = DateTime.Now;
            record.FormBody = JsonConvert.SerializeObject(obj);
            Save();
        }

        #endregion

        #region GET ID

        protected Guid GetNewId()
        {
            Guid id;
            bool exists;
            do
            {
                id = Guid.NewGuid();
                exists = dbContext.ApplicationForms.Any(f => f.Id == id);
            } while (exists);

            return id;
        }

        #endregion

    }
}
