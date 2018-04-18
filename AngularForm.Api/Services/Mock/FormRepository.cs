using AngularForm.Api.Interfaces;
using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace AngularForm.Api.Services.Mock
{
    public class FormRepository : IFormRepository
    {

        #region CRUD

        public void Create(IResume form)
        {
            Forms.Add(form);
        }

        public void Delete(Guid id)
        {
            Forms.Remove(GetForm(id));
        }

        public IResume GetForm(Guid id)
        {
            return GetForms(f => f.Id == id).SingleOrDefault();
        }

        public IEnumerable<IResume> GetForms(Func<IResume, bool> filter = null)
        {
            return filter != null
                ? Forms.Where(filter)
                : Forms;
        }

        public void Update(Guid id, IResume form)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region FORMS

        private static List<IResume> Forms = new List<IResume>
        {
            new ApplicationForm
            {
                Id = new Guid("a71b30a1-c5a8-4ff6-b809-a9d54dc268e1"),
                CreateDate = DateTime.Now.AddDays(-5),
                ModifyDate = DateTime.Now.AddDays(-1),
                FirstName = "Kyle",
                LastName = "Morton",
                DateOfBirth = "07/22/1991",
                Address = new Address
                {
                    Street = "123 Main Street",
                    City = "Little Rock",
                    State = "AR",
                    Zip = "72211"
                },
                HighSchool = "Paragould High School",
                College = "Arkansas State University",
                Degree = "Computer Science",
                CurrentEmployer = new Employer
                {
                    Name = "DFJ",
                    StartDate = DateTime.Parse("6/5/2017")
                },
                FormerEmployer = new Employer
                {
                    Name = "WEHCO Media, Inc.",
                    StartDate = DateTime.Parse("8/25/2015"),
                    EndDate = DateTime.Parse("6/2/2017")
                },
                Certifications = "C#, Html",
                References = new List<Reference>
                {
                    new Reference
                    {
                        Name = "Aaron Dixon",
                        Relationship = "Co-Worker",
                        PhoneNumber = "555-555-5555"
                    },
                    new Reference
                    {
                        Name = "Hank Chadwick",
                        Relationship = "Co-Worker",
                        PhoneNumber = "555-555-5555"
                    },
                    new Reference
                    {
                        Name = "Ashley Lawrence",
                        Relationship = "Co-Worker",
                        PhoneNumber = "555-555-5555"
                    }
                }
            }
    };

        #endregion
    }

    
}