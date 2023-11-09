import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// charts
import BarChart from '../../components/Charts/BarChart';
import PieChart from '../../components/Charts/PieChart';
import LineChart from '../../components/Charts/LineChart';
import { mockTransactions } from '../../data/mockData';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from '@mui/material/Divider';

// icons
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="30px">
      
      <Box>
      <Header title="DASHBOARD" 
       buttonTitle={"ADD PRODUCT CATEGORY"}
       buttonURL={`/add_product_category/`}
        />
      {/* divider */}
      
      {/* dashboard content */}

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
              }}
      >
        {/* ROW 1 */}

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#06114a"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#06114a"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#06114a"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#06114a"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

         {/* END OF ROW 1 */}

       {/* ROW 1 */}

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#2587da"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#2587da"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#2587da"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* item */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#2587da"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Packages"
            // progress="0.5"
            icon_details={
              <ArrowRightAltIcon sx={{ color: "white", fontSize: "26px" }}  />
            }
            icon={
              <EmailIcon
                sx={{ color: "white", fontSize: "26px" }}
              />
            }
          />
        </Box>

         {/* END OF ROW 1 */}

        {/* ROW 2 */}

        {/* item */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={"#ffffff"}
          sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
              }}
          
        >

        
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={"black"}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={"blue"}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "blue" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* item */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"#ffffff "}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${"black"}`}
            colors={"black"}
            p="15px"
          >
            <Typography color={"black"} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${"black"}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={"blue"}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={"black"}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={"black"}>{transaction.date}</Box>
              <Box
                backgroundColor={"#2587da"}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        {/* item */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={"#ffffff"}
          p="10px"
          sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
              }}
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            height="100%"
          >
            <PieChart />
          </Box>
        </Box>

        
        {/* item */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={"#ffffff"}
          padding="10px"
          sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
              }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            // sx={{ marginBottom: "15px" }}
            
          >
            Geography Based Traffic
          </Typography>
          <Box height="100%">
             <PieChart />
          </Box>
        </Box>

      </Box>


      


      {/* end dashboard content */}
      
      {/* bar chart */}
      
      <Box height="60vh">
        <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginTop: "25px" ,}}
            >
              Geography Based Traffic
            </Typography>
        <BarChart />
      </Box>

      {/* line chart */}
      
      <Box height="60vh">
        <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginTop: "25px" ,}}
            >
              Line chart statistics
            </Typography>
        <LineChart />
      </Box>

      </Box>
    </Box>
  );
}

export default Dashboard;
