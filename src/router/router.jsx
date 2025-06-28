import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Page/Home/Home";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Login from "../Page/Authenticate/Login";
import Register from "../Page/Authenticate/Register";
import Coverage from "../Page/Coverage/Coverage";
import SendParcel from "../Page/SendParcel/SendParcel";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcel from "../Page/Dashboard/MyParcel/MyParcel";
import Payment from "../Page/Dashboard/Payment/Payment";
import PaymentHistory from "../Page/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../Page/Dashboard/TrackParcel/TrackParcel";
import BeRider from "../Page/Authenticate/BeRider/BeRider";





export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
   children: [
{index:true,Component:Home},
{path:"coverage",
  loader:()=>fetch("../../public/serviceCenter.json"),
  Component:Coverage},
 {path:"beRider",
  loader:()=>fetch("../../public/serviceCenter.json"),
  element:<BeRider></BeRider>
 },
  {path:"sendParcel",
    Component:SendParcel,
    loader:()=>fetch("../../public/serviceCenter.json"),
  },
]},
{path:"/",
  Component:AuthLayout,
  children:[
    {path: "login", Component:Login},
    {path: "register", Component:Register

    }
  ],
},


  {path:"dashboard", element:<DashboardLayout></DashboardLayout>
   ,
   children:[
    {path:"myParcel",Component:MyParcel},

       {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {path:"paymentHistory",
        
        Component:PaymentHistory},
        {path:"track",Component:TrackParcel}
   ]
   },





















 ]);



