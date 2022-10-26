import React from "react";
import { useSelector } from "react-redux";
import { SEARCH_MESSAGE } from "../../texts";
import CourseOfferings from "../courses/CourseOfferingsPage";
import SearchUser from "./SearchUser";
import UserDetailComponent from "./UserDetails";

const AdminPage = () => {
  const selectedUser = useSelector(state => state.selectedUser)
  console.log('Selected User: ', selectedUser)
  return <div className="container">
    <h3 className="searchMessage">{SEARCH_MESSAGE}</h3>
    <SearchUser />
    {selectedUser.userid
      ? <UserDetailComponent user={selectedUser} />
      : null}
  </div>
}

export default AdminPage
