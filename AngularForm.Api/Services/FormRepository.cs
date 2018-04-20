using AngularForm.Api.Interfaces;
using AngularForm.Api.Interfaces.Form;
using AngularForm.Api.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace AngularForm.Api.Services
{
    public class FormRepository : MongoRepositoryBase //, IFormRepository
    {

        //TODO: optimize queries to use mongoDB driver (instead of getting entire collection into memory and then searching)
        
        #region CREATE

        public void Create(IResume form)
        {
            try
            {
                var collection = GetCollection<IResume>(
                    Properties.Settings.Default.DatabaseName, 
                    Properties.Settings.Default.CollectionName
                );

                form.Id = GetNewId(collection);
                form.CreateDate = DateTime.Now;
                form.ModifyDate = DateTime.Now;
                collection.InsertOne(form);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex);
                throw ex;
            }
        }

        #endregion

        #region GET

        public IResume GetForm(Guid id)
        {
            return GetForms().ToList().SingleOrDefault(f => f.Id == id);
        }

        public IEnumerable<IResume> GetForms()
        {
            IEnumerable<IResume> forms = null;
            try
            {
                forms = GetCollection<ApplicationForm>(
                    Properties.Settings.Default.DatabaseName,
                    Properties.Settings.Default.CollectionName
                ).AsQueryable();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex);
            }

            return forms;
        }

        public async Task GetAllForms()
        {
            IMongoCollection<BsonDocument> collection = 
        }

        #endregion

        #region DELETE

        public void Delete(Guid id)
        {
            try
            {
                var collection = GetCollection<IResume>(
                    Properties.Settings.Default.DatabaseName,
                    Properties.Settings.Default.CollectionName
                );

                //collection.DeleteOne(Builders<BsonDocument>.Filter.eq);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex);
                throw ex;
            }
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
                var form = GetForm(newId);
                exists = form != null;
            } while (exists);

            return newId;
        }

        #endregion

    }
}