using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArchitectNow.Boilerplate.Angular2.Data.Models
{
    public class ValueModel : BaseModel 
    {
        public ValueModel()
        {

        }

        public string Name { get; set; }
        public string Description { get; set; }
    }
}
