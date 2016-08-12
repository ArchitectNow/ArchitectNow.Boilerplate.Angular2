using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArchitectNow.Boilerplate.Angular2.Data.Models
{
    public class BaseModel : IBaseModel
    {
        public Guid Id { get; set; }
    }
}
