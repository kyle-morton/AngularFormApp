using AngularForm.Data;
using AngularForm.Logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace AngularForm.Logic.Repositories
{
    public abstract class RepositoryBase<T> : IRepository<T>, IDisposable
    {
        protected AngularForm.Data.FormEntities dbContext;

        protected RepositoryBase()
        {
            dbContext = new FormEntities();
        }

        public abstract T Get(Guid id);

        public abstract IEnumerable<T> GetAll(Expression<Func<T, bool>> filter = null);

        public abstract void Create(T entity);

        public abstract void Update(Guid id, T entity);

        public abstract void Delete(Guid id);

        protected void Save()
        {
            dbContext.SaveChanges();
        }

        public void Dispose()
        {
            dbContext?.Dispose();
        }
    }
}
