using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularForm.Api.Interfaces;
using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using AngularForm.Api.Utility;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using JsonConvert = Newtonsoft.Json.JsonConvert;

namespace AngularForm.Api.Services
{
    public class FormRepository : IFormRepository
    {

        private readonly string ConnectionString = "mongodb://test_user:user1234@kmnosql-shard-00-00-ln6px.mongodb.net:27017,kmnosql-shard-00-01-ln6px.mongodb.net:27017,kmnosql-shard-00-02-ln6px.mongodb.net:27017/admin?replicaSet=KMNoSQL-shard-0&ssl=true";

        #region CRUD

        public void Create(IResume form)
        {
            try
            {
                form.Id = Guid.NewGuid();
                var client = new MongoClient(ConnectionString);
                var database = client.GetDatabase("Forms");
                var collection = database.GetCollection<IResume>("Forms");

                collection.InsertOne(form);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex);
                throw ex;
            }
        }

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public IResume GetForm(Guid id)
        {
            //return GetForms(f => f.Id == id).SingleOrDefault();
            throw new NotImplementedException();
        }

        public IEnumerable<IResume> GetForms(Func<IResume, bool> filter = null)
        {
            IEnumerable<IResume> forms = null;
            try
            {
                var client = new MongoClient(ConnectionString);
                var database = client.GetDatabase("Forms");
                var collection = database.GetCollection<ApplicationForm>("Forms")
                    .AsQueryable().Where(filter ?? (x => true)).ToList();
                forms = collection;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex);
            }

            return forms;
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
                Id = Guid.NewGuid(),
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