"use client";
import { FC, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { IconButton, Typography } from "@mui/material";
import { Box as MuiBox, BoxProps, Theme } from "@mui/material";
import { SystemProps } from "@mui/system";


import { useTheme } from "next-themes";
import "react-pro-sidebar/dist/css/styles.css";
import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIosIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  BarChartOutlinedIcon,
  MapOutlinedIcon,
  GroupsIcon,
  OndemandVideoIcon,
  VideoCallIcon,
  WysiwygIcon,
  ManageHistoryIcon,
  ExitToAppIcon,
  QuizIcon,
  WebIcon,
} from "./Icon";


import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";


interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] !font-Poppins">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};
export interface CustomBoxProps extends SystemProps<Theme> {
  sx?: BoxProps["sx"];
  className?:any;
  children?: React.ReactNode;
  id?: string;
}

export function Box(props: CustomBoxProps) {
  return <MuiBox component="div" {...props} />;
}

export function Main(props: CustomBoxProps) {
  return <MuiBox component="main" {...props} />;
}
const AdminSidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setlogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setlogout(true);
  };
 
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${
            theme === "dark" ? "#111C43 !important" : "#fff !important"
          }`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          opacity: 1,
        },
        "& .pro-menu-item": {
          color: `${theme !== "dark" && "#000"}`,
        },
      }}
      className="!bg-white dark:bg-[#111C43]"
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex:99999999999999,
          width: isCollapsed ? "0%" : "16%",
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
               <Link href="/" className="block">
               <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                  QualityVeda
                </h3>
               </Link>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block">
                  <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  width={100}
                  height={100}
                  src={user.avatar ? user.avatar.url : "/assests/avatar.png"}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "3px solid #5b6fe6",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-[20px] text-black dark:text-[#ffffffc1]"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ m: "10px 0 0 0" }}
                  className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize"
                >
                  - {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px" }}
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
            >
              {!isCollapsed && "Data"}
            </Typography>
            <Item
              title="Users"
              to="/admin/users"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices"
              to="/admin/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="NABL Queries"
              to="/admin/nabl"
              icon={<WebIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Content"}
            </Typography>
            <Item
              title="Create Course"
              to="/admin/create-course"
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Active Courses"
              to="/admin/courses"
              icon={<OndemandVideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Create Live Course"
              to="/admin/live-create-course"
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Live Active Courses"
              to="/admin/live-courses"
              icon={<OndemandVideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Customization"}
            </Typography>
            
            <Item
              title="Hero"
              to="/admin/hero"
              icon={<WebIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/admin/faq"
              icon={<QuizIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Categories"
              to="/admin/categories"
              icon={<WysiwygIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          
            
           

            <Typography
              variant="h5"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Controllers"}
            </Typography>
            <Item
              title="Manage Admins"
              to="/admin/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Create Testimonial"
              to="/admin/create-testimonial"
              icon={<WebIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Current Testimonial"
              to="/admin/testimonials"
              icon={<QuizIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Labs"
              to="/admin/create-lab"
              icon={<WebIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Current Labs"
              to="/admin/labs"
              icon={<QuizIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Doctors"
              to="/admin/create-doctor"
              icon={<WebIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Current Doctors"
              to="/admin/doctors"
              icon={<QuizIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Team Member"
              to="/admin/create-team"
              icon={<WebIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Current Team"
              to="/admin/teams"
              icon={<QuizIcon className="text-black dark:text-white" />}
              selected={selected}
              setSelected={setSelected}
            />
            

            <Typography
              variant="h6"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title="Courses Analytics"
              to="/admin/courses-analytics"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Orders Analytics"
              to="/admin/orders-analytics"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Users Analytics"
              to="/admin/users-analytics"
              icon={<ManageHistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Extras"}
            </Typography>
            <div onClick={logoutHandler}>
              <Item
                title="Logout"
                to="/"
                icon={<ExitToAppIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default AdminSidebar;
