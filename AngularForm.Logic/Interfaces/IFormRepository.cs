using AngularForm.Api.Interfaces.Form;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AngularForm.Api.Interfaces
{
    public interface IFormRepository
    {
        IResume GetForm(Guid id);
        IEnumerable<IResume> GetForms();
        void Create(IResume form);
        void Update(Guid id, IResume form);
        void Delete(Guid id);
    }
}
