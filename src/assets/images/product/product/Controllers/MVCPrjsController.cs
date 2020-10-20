using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProductDataAccessLib;
namespace product.Controllers
{
    public class MVCPrjsController : Controller
    {
        // GET: MVCPrjs

       

        [HttpPost]
        public ActionResult Addproduct(tbl_product p)
        {
            productDAL dal = new productDAL();
            var cid = dal.getcategoryid().ToList();
            ViewData.Add("cid", cid);
            if (ModelState.IsValid)
            {

                
                dal.addproduct(p);

                var message = "Record added successfully!";


                ViewData.Add("message", message);
            }
            
          return View();
        }
        public ActionResult viewproduct()
        {
            productDAL dal = new productDAL();
             var d=dal.Viewproduct();
            return View(d);
        }
        public ActionResult Showcategoryname(string id)
        {
            productDAL dal = new productDAL();
           var d = dal.getcategorynames(id);
            return View(d);

        }
    }
}