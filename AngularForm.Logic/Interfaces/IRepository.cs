using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularForm.Logic.Interfaces
{
    public interface IRepository<T>
    {
        T Get(Guid id);
        IEnumerable<T> GetAll();
        void Create(T obj);
        void Update(Guid id, T obj);
        void Delete(Guid id);
    }
}
