using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Bson;

namespace AngularForm.Api.Utility
{
    public class BsonUtil
    {
        public string SerializeToBson(object obj)
        {
            string data = string.Empty;

            MemoryStream ms = new MemoryStream();
            using (BsonWriter writer = new BsonWriter(ms))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(writer, obj);
            }

            data = Convert.ToBase64String(ms.ToArray());

            return data;
        }
    }
}