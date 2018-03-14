using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ITOps.Composition;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MovieDetails.Web.Controllers
{
    [Route("api/Data")]
    public class DataController : Controller
    {
        RequestComposer composer;

        public DataController(RequestComposer composer)
        {
            this.composer = composer;
        }

        [HttpGet]
        public async Task<dynamic> Get()
        {
            return await composer.ServiceRequest(Request.HttpContext);
        }
    }
}