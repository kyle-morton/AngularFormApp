using AngularForm.Api.Interfaces;
using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Linq.Expressions;
using MongoDB.Bson;

namespace AngularForm.Api.Services
{
    public class FormRepository : MongoRepositoryBase, IFormRepository
    {
        
        #region CREATE

        public void Create(IResume form)
        {
            try
            {
                var collection = GetCollection<IResume>(
                    Properties.Settings.Default.DatabaseName, 
                    Properties.Settings.Default.CollectionName
                );

                //form.Id = GetNewId(collection);

                BsonDefaults.GuidRepresentation = GuidRepresentation.Standard;
                form.Id = Guid.NewGuid();
                collection.InsertOne(form);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex);
                throw ex;
            }
        }

        #endregion

        #region DELETE

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region GET

        public IResume GetForm(Guid id)
        {
            return GetForms(f => f.Id == id).SingleOrDefault();
        }

        public IEnumerable<IResume> GetForms(Expression<Func<IResume, bool>> filter = null)
        {
            IEnumerable<IResume> forms = null;
            try
            {
                var collection = GetCollection<IResume>(
                        Properties.Settings.Default.DatabaseName,
                        Properties.Settings.Default.CollectionName
                    )
                    .Find(filter ?? (x => true))
                    .ToEnumerable();
                forms = collection;
            } catch (Exception ex) {
                Console.WriteLine("Exception: " + ex);
            }

            return forms;
        }

        #endregion

        #region UPDATE

        public void Update(Guid id, IResume form)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region GET ID

        private Guid GetNewId(IMongoCollection<IResume> collection)
        {
            Guid newId;
            bool exists;
            do
            {
                newId = Guid.NewGuid();
                var filter = Builders<IResume>.Filter.Eq("id", ObjectId.Parse(newId.ToString()));
                var entity = collection.Find(filter).FirstOrDefault();
                exists = entity != null;
            } while (exists);

            return newId;
        }

        #endregion

    }
}