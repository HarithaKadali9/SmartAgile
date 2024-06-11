import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Login from './components/Login';
import EmployeeDashboard from './dashboards/EmployeeDBComponent/EmployeeDashboard';
import GroupDashboard from './dashboards/GroupDBComponent/GroupDashboard';
import SprintDashboard from './dashboards/SprintDBComponents/SprintDashboard';
import EmployeeProfiles from './components/EmployeeProfiles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/loging" element={<Login />} />
      <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
      <Route path="/group/dashboard" element={<GroupDashboard />} />
      <Route path="/admin/sprint-dashboard" element={<SprintDashboard />} />
      <Route path="/admin/employee-profiles" element={<EmployeeProfiles />} />
    </Routes>
  );
}

export default App;
