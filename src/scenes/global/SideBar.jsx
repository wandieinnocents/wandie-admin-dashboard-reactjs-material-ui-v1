import { useState } from "react";
import { Sidebar, Menu, MenuItem , SubMenu} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Button from '@mui/material/Button';

import { useLocation,Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InventoryIcon from '@mui/icons-material/InventoryOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TransferWithinAStationOutlinedIcon from '@mui/icons-material/TransferWithinAStationOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
// import { makeStyles } from '@material-ui/core/styles';
import '../../index.css';





const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  

  

  

//  end of menu hover

  

  return (
    <Box >

    {/*  Start Sidebar */}

      <Sidebar 
      style={{ overflowY: "auto",
      maxHeight: "100vh",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column"}}
      collapsed={isCollapsed}>
      
        <Menu iconShape="square"
        style={{ backgroundColor: '#06114a', color:'#ffffff' }}
        
          menuItemStyles={{
              button: {
                    backgroundColor: '#06114a',
                    color:'#ffffff',
                    '&:hover': {
                      backgroundColor: '#2587da',
                      color:"#ffffff"
                    },
                   
                    
                },
            }} 
        
        >
        
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "0px 0 20px 0",
              color: "#ffffff",
              backgroundColor:"#06114a"
              
              
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                
                ml="15px"
              >
                <Typography variant="h3" color="#ffffff">
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ color:'#ffffff' }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px" >
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="70px"
                  height="70px"
                  src={`https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                
                  variant="h2"
                  color="#ffffff"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Wandie
                </Typography>
                <Typography variant="h5" color="#ffffff">
                  wandie@gmail.com
                </Typography>
              </Box>
            </Box>
          )}

          {/* Dashbord list items */}
          <Box paddingLeft={isCollapsed ? undefined : "0%"} >
            <MenuItem 
            
              icon={<HomeOutlinedIcon />}
              component={<Link to="/" />}
              selected={selected}
              activeClassName="active"
              
              setSelected={setSelected}
                > 
              Dashboard
          </MenuItem>

          {/* Branches  */}
          <SubMenu icon={<InventoryIcon />} label="Branches">

              <MenuItem 
              icon={<ArrowRightAltIcon />}
                component={<Link to="/add_branch" />}
                // selected={selected}
                // setSelected={setSelected}
                > Add Branch
                </MenuItem>

              <MenuItem 
              icon={<ArrowRightAltIcon />}
                component={<Link to="/view_branches" />}
                > Manage Branches
                </MenuItem>

              </SubMenu>

           {/* Brands  */}
           <SubMenu icon={<InventoryIcon />} label="Brands">

            <MenuItem 
            icon={<ArrowRightAltIcon />}
              component={<Link to="/add_brand" />}
              // selected={selected}
              // setSelected={setSelected}
              > Add Brand
              </MenuItem>

            <MenuItem 
            icon={<ArrowRightAltIcon />}
              component={<Link to="/view_brands" />}
              > Manage Brands
              </MenuItem>

            </SubMenu>

              {/* Units  */}
           <SubMenu icon={<InventoryIcon />} label="Units">

            <MenuItem 
            icon={<ArrowRightAltIcon />}
              component={<Link to="/add_unit" />}
              > Add Unit
              </MenuItem>

            <MenuItem 
            icon={<ArrowRightAltIcon />}
              component={<Link to="/view_units" />}
              > Manage Units
              </MenuItem>

            </SubMenu>

             {/* Suppliers  */}
           <SubMenu icon={<InventoryIcon />} label="Suppliers">

            <MenuItem 
            icon={<ArrowRightAltIcon />}
              component={<Link to="/add_supplier" />}
              > Add Supplier
              </MenuItem>

            <MenuItem 
            icon={<ArrowRightAltIcon />}
              component={<Link to="/view_suppliers" />}
              > Manage Suppliers
              </MenuItem>

            </SubMenu>





            {/* Products  */}
            <SubMenu icon={<InventoryIcon />} label="Products">

              <MenuItem 
              icon={<ArrowRightAltIcon />}
                component={<Link to="/add_parent_product_category" />}
                // selected={selected}
                // setSelected={setSelected}
                > Add Parent Category
                </MenuItem>

              <MenuItem 
              icon={<ArrowRightAltIcon />}
                component={<Link to="/view_parent_product_categories" />}
                // selected={selected}
                // setSelected={setSelected}
                > Parent Categories
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                    component={<Link to="/add_product_category" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Add Category
                    </MenuItem>

                    <MenuItem 
                  icon={<ArrowRightAltIcon />}
                    component={<Link to="/view_product_categories" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Manage Categories
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                    component={<Link to="/add_product" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Add Product
                    </MenuItem>

                    <MenuItem 
                  icon={<ArrowRightAltIcon />}
                    component={<Link to="/view_products" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Manage Products
                </MenuItem>

            </SubMenu>

        

             {/* Clients  */}
             <SubMenu icon={<PeopleAltOutlinedIcon />} label="Clients">

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/add_client" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Add Client
                  </MenuItem>

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/view_clients" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Manage Clients
                  </MenuItem>

             </SubMenu>

             {/* Sales  */}
             <SubMenu icon={<ShoppingCartCheckoutOutlinedIcon />} label="Sales">

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/add_sale" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Add Sale
                  </MenuItem>

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/view_sales" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Manage Sales
                  </MenuItem>

             </SubMenu>

             {/* Hosting Providers  */}
             {/* <SubMenu icon={<CloudUploadOutlinedIcon />} label="Hosting Providers">

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/add_hosting_provider" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Add Provider
                  </MenuItem>

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/view_hosting_providers" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Manage Providers
                  </MenuItem>

             </SubMenu> */}

             <SubMenu icon={<CloudUploadOutlinedIcon />} label="Expenses">

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/add_expense_category" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Add Expense Category
                  </MenuItem>

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/view_expense_categories" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Manage Categories
                  </MenuItem>

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/add_expense" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Add Expense
                  </MenuItem>

                  <MenuItem 
                    icon={<ArrowRightAltIcon />}
                    component={<Link to="/view_expenses" />}
                    // selected={selected}
                    // setSelected={setSelected}
                    > Manage Expenses
                  </MenuItem>

             </SubMenu>


              {/* Debtors  */}
              <SubMenu icon={<TransferWithinAStationOutlinedIcon />} label="Debtors">

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/add_debtor" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Add  Debtor
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/view_debtors" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Manage Debtors
                </MenuItem>

              </SubMenu>



               {/* Quotations  */}
               <SubMenu icon={<TransferWithinAStationOutlinedIcon />} label="Quotations">

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/add_quotation" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Add  Quotation
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/view_quotations" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Manage Quotations
                </MenuItem>

                </SubMenu>


              {/* Reports  */}
              <SubMenu icon={<FolderOpenOutlinedIcon />} label="Reports">

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/monthly_reports" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Monthly Reports
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/annual_reports" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Annual Reports
                </MenuItem>

              </SubMenu>

            


            {/* <Typography
              variant="h6"
              color="#ffffff"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Account
            </Typography> */}

             {/* Roles  */}
             <SubMenu icon={<AdminPanelSettingsOutlinedIcon />} label="Roles">

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/add_role" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Add Role
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/view_roles" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Manage Roles
                </MenuItem>

             </SubMenu>

              {/* Permissions  */}
              <SubMenu icon={<GroupAddOutlinedIcon />} label="Permissions">

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/add_permission" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Add Permission
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/view_permissions" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Manage Permissions
                </MenuItem>

              </SubMenu>

              {/* Users  */}
              <SubMenu icon={<SwitchAccountOutlinedIcon />} label="Users">

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/add_user" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Add User
                </MenuItem>

                <MenuItem 
                  icon={<ArrowRightAltIcon />}
                  component={<Link to="/view_users" />}
                  // selected={selected}
                  // setSelected={setSelected}
                  > Manage Users
                </MenuItem>

              </SubMenu>

           

          </Box>
        </Menu>
      </Sidebar>

      {/* End Sidebar */}
    </Box>
  );
};

export default SideBar;