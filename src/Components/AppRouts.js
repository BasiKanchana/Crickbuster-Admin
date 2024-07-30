import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Tournament from "./Tournament";
import Stadium from "./Stadium";
import StadiumForm from "./StadiumForm";
import AddTournament from "./AddTournament";
import PackagesTable from "./PackagesTable";
import AddPackages from "./AddPackages";
import TeamsTable from "./TeamsTable";
import TeamsForm from "./TeamsForm";
import AttractionsTable from "./AttractionsTable";
import AttractionsForm from "./AttractionsForm";
import Hotels from "./Hotels";
import AddHotel from "./AddHotel";
// import FlightsTable from './FlightsTable';
// import FlightstableForm from './FlightstableForm';
import IntercityTable from "./IntercityTable";
import TransportForm from "./TransportForm";
import CricbusterToursTable from "./CricbusterToursTable";
import CricbusterToursForm from "./CricbusterToursForm";
import ManageContent from "./ManageContent";
import AddBanner from "./AddBanner";
import AddNewMatchTable from "./AddNewMatchTable";
import AddDoubleHeader from "./AddDoubleHeader";
import LandingPageForm from "./LandingPageForm";
import Login from "./Login";
import ResetPasswordForm from "./ResetPasswordForm";
import InquiryTable from "./InquiryTable";
import InquiryForm from "./InquiryForm";
import OrdersTable from "./OrdersTable";
import OrdersForm from "./OrdersForm";
import AddNewMatchForm from "./AddNewMatchForm";
import PackagesPreviewForm from "./PackagesPreviewForm";
import Profile from "./Profile";
import NoPage from "../NoPage";
import LandingPageTable from "./LandingPageTable";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      window.location.pathname === "/" ? <Navigate to={"/Login"} /> : <Home />,
    children: [
      // {
      //   index: true,  // Set Dashboard as the index route
      //   element: <Dashboard />,
      // },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "InquiryList",
        element: <InquiryTable />,
      },
      {
        path: "InquiryForm",
        element: <InquiryForm />,
      },
      {
        path: "packages",
        element: <PackagesTable />,
      },
      {
        path: "PackagesForm",
        element: <AddPackages />,
      },
      {
        path: "PackagesViewForm",
        element: <PackagesPreviewForm />,
      },
      {
        path: "tournaments",
        element: <Tournament />,
      },
      {
        path: "TournamentForm",
        element: <AddTournament />,
      },
      {
        path: "stadiums",
        element: <Stadium />,
      },
      {
        path: "stadiumform",
        element: <StadiumForm />,
      },
      {
        path: "teamstable",
        element: <TeamsTable />,
      },
      {
        path: "TeamsForm",
        element: <TeamsForm />,
      },
      {
        path: "attractionsTable",
        element: <AttractionsTable />,
      },
      {
        path: "attractionsform",
        element: <AttractionsForm />,
      },
      {
        path: "HotelsTable",
        element: <Hotels />,
      },
      {
        path: "HotelsForm",
        element: <AddHotel />,
      },
      // {
      //   path:"Flightstable",
      //   element:<FlightsTable/>
      // },
      // {
      //   path:"FlightstableForm",
      //   element:<FlightstableForm/>
      // },
      {
        path: "intercity",
        element: <IntercityTable />,
      },
      {
        path: "intercityform",
        element: <TransportForm />,
      },
      {
        path: "crickbusterTours",
        element: <CricbusterToursTable />,
      },
      {
        path: "CrickbusterTourForm",
        element: <CricbusterToursForm />,
      },
      {
        path: "Managecontent",
        element: <ManageContent />,
      },
      {
        path: "landingpage",
        element: <LandingPageForm />,
      },
      {
        path: "addBannerForm",
        element: <LandingPageTable />,
      },
      {
        path: "Addbanner",
        element: <AddBanner />,
      },
      {
        path: "Adddoubleheader",
        element: <AddDoubleHeader />,
      },
      {
        path: "AddnewmatchTable",
        element: <AddNewMatchTable />,
      },
      {
        path: "AddNewMatchForm",
        element: <AddNewMatchForm />,
      },
      {
        path: "OrdersList",
        element: <OrdersTable />,
      },
      {
        path: "OrdersForm",
        element: <OrdersForm />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Forgotpassword",
    element: <ResetPasswordForm />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
