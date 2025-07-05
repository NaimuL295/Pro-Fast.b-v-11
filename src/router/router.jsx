import {
  createBrowserRouter,

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
import PendingRiders from "../Page/Dashboard/PendingRiders/PendingRiders";
import ActiveRiders from "../Page/Dashboard/ActiveRiders/ActiveRiders";
import AdminManager from "../Page/Dashboard/AdminManager/AdminManager";
import AssignRider from "../Page/Dashboard/AssignRider/AssignRider";
import PendingDeliveries from "../Page/Dashboard/PendingDeliveries/PendingDeliveries";
import RiderRoutes from "./routes/RiderRoutes";
import CompleteDelivery from "../Page/Dashboard/CompleteDelivery/CompleteDelivery";
import MyEarning from "../Page/Dashboard/MyEarning/MyEarning";
import DashboardHome from "../Page/Dashboard/DashboardHome/DashboardHome";
import UpdateProfile from "../Page/UpdateProfile/UpdateProfile";
import Forbidden from "../Page/Forbidden/Forbidden";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./routes/PrivateRoutes";
import FoundError from "../Component/FoundError/FoundError";
import About from "../Page/About/About";
import Loading from "../Component/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
   children: [

{index:true,
  Component:Home},


{path:"coverage",
  loader:()=>fetch("../../public/serviceCenter.json"),
  Component:Coverage,
  hydrateFallbackElement:<Loading></Loading>,
},

 {path:"beRider",
  loader:()=>fetch("../../public/serviceCenter.json"),
  element: <PrivateRoutes><BeRider></BeRider></PrivateRoutes>,
  hydrateFallbackElement:<Loading></Loading>
  
 },
  {path:"sendParcel",
  element:<PrivateRoutes> <SendParcel></SendParcel>
    </PrivateRoutes>,
    loader:()=>fetch("../../public/serviceCenter.json"),
    hydrateFallbackElement:<Loading></Loading>,
  },
  {path:"forbidden",Component:Forbidden},
  {path:"about",Component:About},
   {path:"*/", Component:<FoundError></FoundError>}
]},
{path:"/",
  Component:AuthLayout,
  children:[
    {path:"login", Component:Login},

    {path:"register", Component:Register
    },
     {path:"*/", Component:<FoundError></FoundError>}
  ],
},


  {path:"dashboard", 
    element:<PrivateRoutes> <DashboardLayout></DashboardLayout></PrivateRoutes>
   ,
   children:[
    {index:true,
      Component:DashboardHome},
      
    {path:"myParcel",
      Component:MyParcel},

{path:"updateProfile",
  Component:UpdateProfile
},
       {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {path:"paymentHistory",
        Component:PaymentHistory},
        
        {path:"track",
          Component:TrackParcel},

       {path:"adminManager",
        element: <AdminRoute>  <AdminManager></AdminManager></AdminRoute>  },
      
// dashboard
// rider
  {path:"PendingDeliveries",
    element:  <PendingDeliveries></PendingDeliveries>},
  {path:"completeDelivery",
    element:<RiderRoutes>   <CompleteDelivery></CompleteDelivery></RiderRoutes>},
  {path:"myEarning",
    element:<RiderRoutes> <MyEarning></MyEarning>  </RiderRoutes>},


        {path:"assignRider" 
          , element:<AdminRoute> <AssignRider></AssignRider> </AdminRoute>
        },
     
          {path:"pendingRiders",
          element:<AdminRoute> <PendingRiders></PendingRiders></AdminRoute>},

        {path:"activeRiders",
          element:<AdminRoute> <ActiveRiders></ActiveRiders></AdminRoute>}, 
          {path:"*/", Component:<FoundError></FoundError>}
   ]
   },




















 ]);



