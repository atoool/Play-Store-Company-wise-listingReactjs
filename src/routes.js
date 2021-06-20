/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Riafy from "views/Riafy";
import Rstream from "views/Rstream";

var routes = [
  {
    path: "/Riafy",
    name: "Riafy",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Riafy,
    layout: "/",
  },
  {
    path: "/Rstream",
    name: "Rstream",
    rtlName: "لوحة",
    icon: "tim-icons icon-chart-pie-36",
    component: Rstream,
    layout: "/",
  },
];
export default routes;
