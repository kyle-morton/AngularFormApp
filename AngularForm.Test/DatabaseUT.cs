using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MongoDB.Driver;

namespace AngularForm.Test
{
    [TestClass]
    public class DatabaseUT
    {

        private string ConnectionString = "";

        [TestMethod]
        public void Connect()
        {
            try
            {
                var client = new MongoClient("mongodb://test_user:user1234@kmnosql-shard-00-00-ln6px.mongodb.net:27017,kmnosql-shard-00-01-ln6px.mongodb.net:27017,kmnosql-shard-00-02-ln6px.mongodb.net:27017/test?ssl=true&replicaSet=KMNoSQL-shard-0&authSource=admin");
                var database = client.GetDatabase("test");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex);
            }
        }
    }
}
