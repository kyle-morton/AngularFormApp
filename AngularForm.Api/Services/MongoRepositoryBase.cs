using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using AngularForm.Api.Interfaces.Form;
using MongoDB.Driver;

namespace AngularForm.Api.Services
{
    public abstract class MongoRepositoryBase
    {

        protected readonly string ConnectionString = ConfigurationManager.AppSettings["MongoDB"];

        protected virtual IMongoDatabase GetDatabase(string name)
        {
            var client = new MongoClient(ConnectionString);
            return client.GetDatabase(name);
        }

        #region GET COLLECTION

        protected virtual IMongoCollection<T> GetCollection<T>(string databaseName, string collectionName)
        {
            return GetCollection<T>(GetDatabase(databaseName), collectionName);
        }

        protected virtual IMongoCollection<T> GetCollection<T>(IMongoDatabase database, string collectionName)
        {
            return database.GetCollection<T>(collectionName);
        }

        #endregion

        #region GET FORM



        #endregion





    }
}