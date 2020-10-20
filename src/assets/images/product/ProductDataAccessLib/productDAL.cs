using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductDataAccessLib
{
    public class productDAL
    {
        public void addproduct(tbl_product p)
        {
            nikhilEntities n = new nikhilEntities();
            n.tbl_product.Add(p);
            n.SaveChanges();
           

        }
        public List<tbl_product> Viewproduct()
       {
            nikhilEntities n = new nikhilEntities();

            var p = n.tbl_product.ToList();

            return p;     
        }
        public List<string> getcategoryid()
        {
            nikhilEntities n = new nikhilEntities();
            var d = n.tbl_category.Select(o => o.categoryid).ToList();
            return d;
        }
        public tbl_category  getcategorynames(string id)
        {
            nikhilEntities n = new nikhilEntities();
            var result = n.tbl_category.Where(o => o.categoryid == id).SingleOrDefault();
                         
            return result;
        }
      
    }
}
