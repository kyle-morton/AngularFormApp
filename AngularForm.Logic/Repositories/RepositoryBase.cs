using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngularForm.Data;
using AngularForm.Logic.Interfaces;

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

        public abstract IEnumerable<T> GetAll();

        public abstract void Create(T obj);

        public abstract void Update(Guid id, T obj);

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
