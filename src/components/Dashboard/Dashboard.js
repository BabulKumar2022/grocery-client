import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content   ">
      {/* <!-- Page content here --> */}
      <h2 className="text-4xl text-center my-5 text-blue-400">Dashboard</h2>
        <Outlet></Outlet>
    
    
    </div> 
    <div class="drawer-side  ">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 my-4 overflow-y-auto w-60 bg-blue-200 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><Link to="/dashboard" >Add product</Link></li>
        <li><Link to="/dashboard/manage">Manage product</Link></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;
