using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace AngularForm.Logic.Interfaces
{
    public interface IRepository<T>
    {
        T Get(Guid id);
        IEnumerable<T> GetAll(Expression<Func<T, bool>> filter = null);
        void Create(T entity);
        void Update(Guid id, T entity);
        void Delete(Guid id);
    }
}
