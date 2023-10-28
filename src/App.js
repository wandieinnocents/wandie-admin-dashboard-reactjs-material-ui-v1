import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import AddClient from "./pages/Clients/AddClient";
import ViewClients from "./pages/Clients/ViewClients";
import AddProductCategory from "./pages/ProductCategories/AddProductCategory";
import ViewProductCategories from "./pages/ProductCategories/ViewProductCategories";
import AddPackage from "./pages/Packages/AddPackage";
import ViewPackages from "./pages/Packages/ViewPackages";
import AddSale from "./pages/Sales/AddSale";
import ViewSales from "./pages/Sales/ViewSales";

// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";






function App() {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return ( 
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />


    <div className="app"> 

      {/* Side bar */}
      <SideBar />
      
      {/* Main content */}
      <main className="content">
        <TopBar />
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add_product_category" element={<AddProductCategory />} />
        <Route path="/view_product_categories" element={<ViewProductCategories />} />
        <Route path="/add_package" element={<AddPackage />} />
        <Route path="/view_packages" element={<ViewPackages />} />
        <Route path="/add_client" element={<AddClient/>} />
        <Route path="/view_clients" element={<ViewClients/>} />
        <Route path="/add_sale" element={<AddSale/>} />
        <Route path="/view_sales" element={<ViewSales/>} />




        {/* <Route path="/clients" element={<Contacts />} /> */}
        {/* <Route path="/invoices" element={<Invoices />} /> */}
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/bar" element={<Bar />} /> */}
        {/* <Route path="/pie" element={<Pie />} /> */}
        {/* <Route path="/line" element={<Line />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/calendar" element={<Calendar />} /> */}
        {/* <Route path="/geography" element={<Geography />} /> */}
          
        </Routes>


      </main>

      {/* End main content */}
    
    </div>
    </ThemeProvider>
    
    </ColorModeContext.Provider>
  );
}

export default App;
