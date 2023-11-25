import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import AddClient from "./pages/Clients/AddClient";
import ViewClients from "./pages/Clients/ViewClients";
import AddProductCategory from "./pages/ProductCategories/AddProductCategory";
import ViewProductCategories from "./pages/ProductCategories/ViewProductCategories";
import EditProductCategory from "./pages/ProductCategories/EditProductCategory";
import ShowProductCategory from "./pages/ProductCategories/ShowProductCategory";

import AddPackage from "./pages/Packages/AddPackage";
import ViewPackages from "./pages/Packages/ViewPackages";
import AddSale from "./pages/Sales/AddSale";
import ViewSales from "./pages/Sales/ViewSales";
import AddHostingProvider from "./pages/HostingProviders/AddHostingProvider";
import ViewHostingProviders from "./pages/HostingProviders/ViewHostingProviders";
import AddEmailReminder from "./pages/EmailReminders/AddEmailReminder";
import ViewEmailReminders from "./pages/EmailReminders/ViewEmailReminders";
import AddPayment from "./pages/Payments/AddPayment";
import ViewPayments from "./pages/Payments/ViewPayments";
import AddInvoice from "./pages/Documentation/AddInvoice";
import ViewInvoices from "./pages/Documentation/ViewInvoices";
import AddQuotation from "./pages/Documentation/AddQuotation";
import ViewQuotations from "./pages/Documentation/ViewQuotations";
import AddDebtor from "./pages/Debtors/AddDebtor";
import ViewDebtors from "./pages/Debtors/ViewDebtors";
import AnnualReports from "./pages/Reports/AnnualReports";
import MonthlyReports from "./pages/Reports/MonthlyReports";
import AddRole from "./pages/Roles/AddRole";
import ViewRoles from "./pages/Roles/ViewRoles";
import AddPermission from "./pages/Permissions/AddPermission";
import ViewPermissions from "./pages/Permissions/ViewPermissions";
import AddUser from "./pages/Users/AddUser";
import ViewUsers from "./pages/Users/ViewUsers";
import AddExpense from "./pages/Expenses/AddExpense";
import ViewExpenses from "./pages/Expenses/ViewExpenses";
import AddExpenseCategory from "./pages/ExpenseCategory/AddExpenseCategory";
import ViewExpenseCategories from "./pages/ExpenseCategory/ViewExpenseCategories";

import AddBrand from "./pages/Brands/AddBrand";
import ViewBrands from "./pages/Brands/ViewBrands";
import ShowBrand from "./pages/Brands/ShowBrand";

import AddUnit from "./pages/Units/AddUnit";
import ViewUnits from "./pages/Units/ViewUnits";
import AddSupplier from "./pages/Suppliers/AddSupplier";
import ViewSuppliers from "./pages/Suppliers/ViewSuppliers";

// parent product categories
import AddParentProductCategory from "./pages/ParentProductCategories/AddParentProductCategory";
import ViewParentProductCategories from "./pages/ParentProductCategories/ViewParentProductCategories";
import ShowParentProductCategory from "./pages/ParentProductCategories/ShowParentProductCategory";
import EditParentProductCategory from "./pages/ParentProductCategories/EditParentProductCategory";

// styling











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


    <div className="app" > 

      {/* Side bar */}
      <SideBar />
      
      {/* Main content */}
      <main className="content"  
      style={{
      overflowY: "auto",
      maxHeight: "800px",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column"
      }}>
        <TopBar />
        <Routes>

       {/* brands */}
        <Route path="/add_brand" element={<AddBrand />} />
        <Route path="/view_brands" element={<ViewBrands />} />
        {/* <Route path="/edit_product_category/:id" element={<EditProductCategory />} /> */}
        <Route path="/show_brand/:id" element={<ShowBrand />} />

        {/* units */}
        <Route path="/add_unit" element={<AddUnit />} />
        <Route path="/view_units" element={<ViewUnits />} />

        {/* suppliers */}
        <Route path="/add_supplier" element={<AddSupplier />} />
        <Route path="/view_suppliers" element={<ViewSuppliers />} />

        {/* dashboard */}
        <Route path="/" element={<Dashboard />} activeStyle={{backgroundColor: "red"}} />

        {/* parent product category */}
        <Route path="/add_parent_product_category" element={<AddParentProductCategory />} />
        <Route path="/view_parent_product_categories" element={<ViewParentProductCategories />} />
        <Route path="/edit_parent_product_category/:id" element={<EditParentProductCategory />} />
        <Route path="/show_parent_product_category/:id" element={<ShowParentProductCategory />} />
        
        {/* product categories */}
        <Route path="/add_product_category" element={<AddProductCategory />} />
        <Route path="/view_product_categories" element={<ViewProductCategories />} />
        <Route path="/edit_product_category/:id" element={<EditProductCategory />} />
        <Route path="/show_product_category/:id" element={<ShowProductCategory />} />

        <Route path="/add_package" element={<AddPackage />} />
        <Route path="/view_packages" element={<ViewPackages />} />
        <Route path="/add_client" element={<AddClient/>} />
        <Route path="/view_clients" element={<ViewClients/>} />
        <Route path="/add_sale" element={<AddSale/>} />
        <Route path="/view_sales" element={<ViewSales/>} />
        <Route path="/add_hosting_provider" element={<AddHostingProvider/>} />
        <Route path="/view_hosting_providers" element={<ViewHostingProviders/>} />
        <Route path="/add_email_reminder" element={<AddEmailReminder/>} />
        <Route path="/view_email_reminders" element={<ViewEmailReminders/>} />
        <Route path="/add_payment" element={<AddPayment/>} />
        <Route path="/view_payments" element={<ViewPayments/>} />
        <Route path="/add_invoice" element={<AddInvoice/>} />
        <Route path="/view_invoices" element={<ViewInvoices/>} />
        <Route path="/add_quotation" element={<AddQuotation/>} />
        <Route path="/view_quotations" element={<ViewQuotations/>} />
        <Route path="/add_debtor" element={<AddDebtor/>} />
        <Route path="/view_debtors" element={<ViewDebtors/>} />
        <Route path="/monthly_reports" element={<MonthlyReports/>} />
        <Route path="/annual_reports" element={<AnnualReports/>} />
        <Route path="/add_role" element={<AddRole/>} />
        <Route path="/view_roles" element={<ViewRoles/>} />
        <Route path="/add_permission" element={<AddPermission/>} />
        <Route path="/view_permissions" element={<ViewPermissions/>} />
        <Route path="/add_user" element={<AddUser/>} />
        <Route path="/view_users" element={<ViewUsers/>} />
        <Route path="/add_expense" element={<AddExpense/>} />
        <Route path="/view_expenses" element={<ViewExpenses/>} />
        <Route path="/add_expense_category" element={<AddExpenseCategory/>} />
        <Route path="/view_expense_categories" element={<ViewExpenseCategories/>} />






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
