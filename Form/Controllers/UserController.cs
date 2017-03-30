using System.Collections.Generic;
using System.Web.Mvc;
using Form.Models;

namespace Form.Controllers
{
    public class UserController : Controller
    {
        public ActionResult Index()
        {
            UserModel model = new UserModel()
            {
                Id = 1103,
                FirstName = "Mihail",
                LastName = "Udot",
                Patronimic = "Borisovich",
                Orders = new List<Order>
                {
                    new Order
                    {
                        Id =  1,
                        Position = "Апельсины",
                        Amount = 10,
                        Price = 5
                    },
                      new Order
                    {
                        Id =  1,
                        Position = "Мандарины",
                        Amount = 20,
                        Price = 25
                    }
                }
            };
            return View("Index", model);
        }

        [HttpPost]
        public ActionResult Save(UserModel model)
        {
            return View("Index", model);
        }
    }
}