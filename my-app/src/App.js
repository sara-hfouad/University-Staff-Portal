
// import HRprofile from './HRprofile'
// import AssignCoordinator from './AssignCoordinator'
// import RemoveAssignedCourse from './RemoveAssignedCourse'
// import AssignCourse from './AssignCourse'
// import AssignSlot from './AssignSlot'
// import AddStaff from './AddStaff'
// import {BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom'
// import Home from './Home';
// import Nav from './Nav'




//NAHLA
// import React, { useState, useRef } from 'react'
// import {BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom'

// import Home from './mainComponents/Home';
// import Nav from './mainComponents/Nav';
// import SideNav from './mainComponents/SideNav'
// import Locations from './hrComponents/Locations';
// import Faculties from './hrComponents/Faculties'
// import AddStaff from './hrComponents/AddStaff'
// import Login from './mainComponents/Login'
// import Logout from './mainComponents/Logout';
// import HRprofile from './hrComponents/HRprofile'
// import Staffs from './hrComponents/Staffs';

// import './styling/App.css'
// import './styling/main.css'
// import addLocation from './hrComponents/AddLocation';
// import addDepartment from './hrComponents/AddDepartment';
// import addFaculty from './hrComponents/AddFaculty';
// import addCourse from './hrComponents/AddCourse';
// import StaffsMissingHours from './hrComponents/StaffsMissingHours';
// import StaffsMissingDays from './hrComponents/StaffsMissingDays';


// export default function App() {

//    return (
//    <Router>  
//    <div className='App'> 
//     <Route path='/' exact component={Login} />

//     <Nav/>
//     <SideNav/>
//     <Switch> 
//     <Route path='/hr/addStaff' component={AddStaff} />
//     <Route path='/hr/locations' component={Locations} />
//     <Route path='/hr/staffs' component={Staffs} />
//     <Route path='/hr/faculties' component={Faculties} />
//     <Route path='/logout' component={Logout} />
//     <Route path='/home' component={HRprofile} />
//     <Route path='/addLocation' component={addLocation} />
//     <Route path='/addDepartment' component={addDepartment} />
//     <Route path='/addFaculty' component={addFaculty} />
//     <Route path='/addCourse' component={addCourse} />
//     <Route path='/hr/viewMissingHours' component={StaffsMissingHours} />
//     <Route path='/hr/viewMissingDays' component={StaffsMissingDays} />



//     </Switch>
//      </div> 
//      </Router>   
//    )

//  }

 //end nahla





// 
//  =======
//    return (
//      <Router>  
//    <div className='App'> 
//    <Route path='/' exact component={Login} />
//    <h1> app page</h1>
//     <Nav/>
//     <Switch> 
//     <Route path='/hr/addStaff' component={AddStaff} />
//    <Route path='/home' component={Home} />

//     <Route component={HRprofile} exact path="/homeHR" />
//    </Switch>
//      </div> 
//      </Router>   
//    )

//  }



//startSaraAmjad
// import React, { useState, useRef } from 'react'
// import Login from './mainComponents/Login'
// import AddStaff from './hrComponents/AddStaff'
// import coordinatorProfile from './coordinatorComponents/coordinatorProfile'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import HRprofile from './hrComponents/HRprofile';
// import ManageSlots from './coordinatorComponents/ManageSlots'
// import AddSlots from './coordinatorComponents/AddSlots'
// import AssignSlot from './ciComponents/AssignSlot'
// import AssignCourse from './ciComponents/AssignCourse'
// import RemoveAssignedCourse from './ciComponents/RemoveAssignedCourse'
// import AssignCoordinator from './ciComponents/AssignCoordinator'
// import ViewSlots from './ciComponents/ViewSlots'
// import InstructorProfile from './ciComponents/InstructorProfile'
// import ViewDepartmentStaff from './ciComponents/ViewDepartmentStaff'
// import ViewCourseStaff from './ciComponents/ViewCourseStaff'
// import CourseCoverage from './ciComponents/CourseCoverage'
// import ViewProfile from './smComponent/ViewProfile'
// import StaffProfile from './smComponent/StaffProfile'
// import ViewAttendance from './smComponent/ViewAttendance'
// import ViewMissingDays from './smComponent/ViewMissingDays'
// import ViewMissingHours from './smComponent/ViewMissingHours'
// import ViewExtraHours from './smComponent/ViewExtraHours'
// import ResetPassword from './mainComponents/ResetPassword'
// import SideNav from './mainComponents/SideNav'

// export default function App() {

//   return (
//     <Router>
//       <div className='App'>
//         <h1> app page</h1>
//         <Route exact path='/' exact component={Login} />
//            <SideNav/>
//         <Switch>
//           {/* <Nav /> */}
//           <Route exact path='/hr/addStaff' component={AddStaff} />
//           <Route exact path='/HRProfile' component={HRprofile} />
//           <Route exact pa th='/coordinator/addSlot' component={AddSlots} />
//           <Route exact path='/coordinator/manageSlots' component={ManageSlots} />
//           <Route component={HRprofile} exact path="/homeHR" />
//           <Route component={coordinatorProfile} exact path="/coordinatorProfile" />
//           <Route exact path='/ci/assignSlots' component={AssignSlot} />
//           <Route exact path='/ci/updateAssignedCourse' component={AssignCourse} />
//           <Route exact path='/ci/removeAssignedCourse' component={RemoveAssignedCourse} />
//           <Route exact path='/ci/assignCourseCoordinator' component={AssignCoordinator} />
//           <Route exact path='/ci/viewSlots' component={ViewSlots} />
//           <Route exact path='/instructorProfile' component={InstructorProfile} />
//           <Route exact path='/ci/viewDepartmentStaff' component={ViewDepartmentStaff} />
//           <Route exact path='/ci/viewCourseStaff' component={ViewCourseStaff} />
//           <Route exact path='/ci/viewCoverage' component={CourseCoverage} />
//           <Route exact path='/viewProfile' component={ViewProfile} />
//           <Route exact path='/staffProfile' component={StaffProfile} />
//           <Route exact path='/viewAttendance' component={ViewAttendance} />
//           <Route exact path='/viewMissingDays' component={ViewMissingDays} />
//           <Route exact path='/viewMissingHours' component={ViewMissingHours} />
//           <Route exact path='/viewExtraHours' component={ViewExtraHours} />
//           <Route exact path='/resetPassword' component={ResetPassword} />
//         </Switch>
//       </div>
//     </Router>
//   )



// }
//END SaraAmjad
// //startSaraAmjad
// import React, { useState, useRef } from 'react'
// import Login from './mainComponents/Login'
// import AddStaff from './hrComponents/AddStaff'
// import coordinatorProfile from './coordinatorComponents/coordinatorProfile'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import HRprofile from './hrComponents/HRprofile';
// import ManageSlots from './coordinatorComponents/ManageSlots';
// import AddSlots from './coordinatorComponents/AddSlots';
// import SideNav from './mainComponents/SideNav'
// import Nav from './mainComponents/Nav';
// export default function App() {

//   return (
//     <Router>
//       <div className='App'>
//         <h1> app page</h1>
//         <Route exact path='/' exact component={Login} />
//         <Nav />
//         <SideNav />
//         <Switch>
          
//           {/* {/* <Nav /> */}

//           <Route exact path='/hr/addStaff' component={AddStaff} />
//           <Route exact path='/HRProfile' component={HRprofile} />
//           <Route exact path='/coordinator/addSlot' component={AddSlots} />
//           <Route exact path='/coordinator/manageSlots' component={ManageSlots} />
//           <Route component={HRprofile} exact path="/homeHR" />
//           <Route component={coordinatorProfile} exact path="/coordinatorProfile" />

//         </Switch>
//       </div>
//     </Router>
//   )

// }
//END SaraAmjad


// //Start Sofia
// import React, { useState, useRef } from 'react'
// import Login from './mainComponents/Login'
// import AddStaff from './hrComponents/AddStaff'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import HRprofile from './hrComponents/HRprofile';
// import AssignSlot from './ciComponents/AssignSlot'
// import AssignCourse from './ciComponents/AssignCourse'
// import RemoveAssignedCourse from './ciComponents/RemoveAssignedCourse'
// import AssignCoordinator from './ciComponents/AssignCoordinator'
// import ViewSlots from './ciComponents/ViewSlots'
// import InstructorProfile from './ciComponents/InstructorProfile'
// import ViewDepartmentStaff from './ciComponents/ViewDepartmentStaff'
// import ViewCourseStaff from './ciComponents/ViewCourseStaff'
// import CourseCoverage from './ciComponents/CourseCoverage'
// import ViewProfile from './smComponent/ViewProfile'
// import StaffProfile from './smComponent/StaffProfile'
// import ViewAttendance from './smComponent/ViewAttendance'
// import ViewMissingDays from './smComponent/ViewMissingDays'
// import ViewMissingHours from './smComponent/ViewMissingHours'
// import ViewExtraHours from './smComponent/ViewExtraHours'
// import ResetPassword from './mainComponents/ResetPassword'
// import SideNav from './mainComponents/SideNav'
// import CourseStaff from './ciComponents/CourseStaff';
// import MonthAttendance from './smComponent/MonthAttendance';
// import viewMonthAttendance from './smComponent/ViewMonthAttendance';
// import ViewMonthAttendance from './smComponent/ViewMonthAttendance';

// export default function App() {

//   return (
//     <Router>
//       <div className='App'>
//         <h1> app page</h1>
//         <Switch>
//         <Route exact path='/' exact component={Login} />
//           <Route exact path='/hr/addStaff' component={AddStaff} />
//           <Route exact path='/HRProfile' component={HRprofile} />
//           <Route exact path='/ci/assignSlots' component={AssignSlot} />
//           <Route exact path='/ci/updateAssignedCourse' component={AssignCourse} />
//           <Route exact path='/ci/removeAssignedCourse' component={RemoveAssignedCourse} />
//           <Route exact path='/ci/assignCourseCoordinator' component={AssignCoordinator} />
//           <Route exact path='/ci/viewSlots' component={ViewSlots} />
//           <Route exact path='/instructorProfile' component={InstructorProfile} />
//           <Route exact path='/ci/viewDepartmentStaff' component={ViewDepartmentStaff} />
//           <Route exact path='/ci/viewCourseStaff' component={ViewCourseStaff} />
//           <Route exact path='/ci/viewCoverage' component={CourseCoverage} />
//           <Route exact path='/viewProfile' component={ViewProfile} />
//           <Route exact path='/staffProfile' component={StaffProfile} />
//           <Route exact path='/viewAttendance' component={ViewAttendance} />
//           <Route exact path='/viewMissingDays' component={ViewMissingDays} />
//           <Route exact path='/viewMissingHours' component={ViewMissingHours} />
//           <Route exact path='/viewExtraHours' component={ViewExtraHours} />
//           <Route exact path='/resetPassword' component={ResetPassword} />
//           <Route exact path='/ci/courseStaff' component={CourseStaff} />
//           <Route exact path='/monthAttendance' component={MonthAttendance} />
//           <Route exact path='/viewMonthAttendance' component={ViewMonthAttendance} />
//         </Switch>
//       </div>
//     </Router>
//   )


// }
// //End Sofia