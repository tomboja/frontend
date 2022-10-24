import React from "react";
import SearchUser from "./SearchUser";

const AdminPage = () => {
  return <>
    <h3 className="searchMessage">Search Student, Faculty or other system users by id.</h3>
    <SearchUser />
    {/**
     * Render user detail below
     */}
  </>
}

export default AdminPage
