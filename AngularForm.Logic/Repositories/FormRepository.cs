using AngularForm.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;

namespace AngularForm.Logic.Repositories
{
    public class FormRepository : RepositoryBase<Form>
    {

        #region CREATE
        
        public override void Create(Form entity)
        {
            entity.Id = GetNewId();
            entity.CreateDate = entity.ModifyDate = DateTime.Now;
            dbContext.Forms.Add(entity);
            Save();
        }

        #endregion

        #region DELETE

        public override void Delete(Guid id)
        {
            var form = Get(id);
            if (form == null)
                return;
            form.IsActive = false;
            dbContext.Entry(form).State = EntityState.Modified;
            Save();
        }

        #endregion

        #region SEARCH

        public override Form Get(Guid id)
        {
            return GetAll().SingleOrDefault(f => f.Id == id);
        }

        public override IEnumerable<Form> GetAll(Expression<Func<Form, bool>> filter = null)
        {
            return dbContext.Forms.Where(filter ?? (f => true));
        }

        #endregion

        #region UPDATE

        public override void Update(Guid id, Form entity)
        {
            var record = GetAll().SingleOrDefault(f => f.Id == id);
            if (record == null)
                return;

            record.Person = entity.Person;
            record.Address = entity.Address;
            record.Education = entity.Education;
            record.Employers = entity.Employers;
            record.MiscInformation = entity.MiscInformation;
            record.References = entity.References;
            record.ModifyDate = DateTime.Now;
            dbContext.Entry(record).State = EntityState.Modified;

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
                exists = GetAll().Any(f => f.Id == id);
            } while (exists);

            return id;
        }

        #endregion

    }
}
