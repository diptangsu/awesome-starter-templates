using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace basic_CRUD_api_tests.TestBase
{
    public class TestBase
    {
        protected bool JsonSerializeAndCompare(object expected, object actual)
        {
            return JsonConvert.SerializeObject(expected).Equals(JsonConvert.SerializeObject(actual));
        }
    }
}
