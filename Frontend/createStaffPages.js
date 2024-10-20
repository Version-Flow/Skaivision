
import { existsSync, mkdirSync, writeFileSync } from 'fs';

const pages = [

  'Profile',
  'Notifications',
  'Messaging',
  'Settings',
  'Logs',
  'Support',
  'Tickets',
  'CommunityForum',
  'PrivateForum',
  'Events',

  
  // Normal Staff
  'Dashboard',
  'CourseManager',
  'ResultEntry',
  'ResultOverview',
  'StudentTranscript',
  'Attendance',
  'ReportGeneration',

  // HouseMaster
  'HouseMaster',
  'Students_hm',
  'HouseDues_hm',
  'DisciplinaryRecords_hm',
  'Activity_hm',
  'HouseReports_hm',
  'Exeat_hm',
  'Request_hm',

  // Senior HouseMaster Pages (shm)
  'SeniorHouseMaster',
  'HouseOverview_shm',
  'HouseReports_shm',
  'DisciplinaryRecords_shm',
  'HouseMemberManagement_shm',
  'Exeat_shm',
  'Request_shm',
  'Dues_shm',

  // Head of Department (HoD) Pages (hod)
  'HOD',
  'Staff_hod',
  'ResultApproval_hod',
  'DepartmentReports_hod',
  'Curriculum_hod',
  'Resources_hod',
  'Students_hod',
  'Course_hod',
  'StaffCourses_hod',
  'ResultApproval_hod',
  'ReportsAndAnalytics_hod',
  'Request_hod',
  'Overview_hod',

  // Head Academic Pages (hac)
  'HeadAcademic',
  'AcademicReports_hac',
  'ResultApproval_hac',
  'Semester_hac',
  'Curriculum_hac',
  'Attendance_hac',
  'Examination_hac',
  'ReportsAndAnalytics_hac',
  'Announcement_hac',
  'ResultOverview_hac',
  'StudentTranscript_hac',
  'Timetable_hac',
  'Course_hac',
  'Programme_hac',
  'HOD_hac',
  'Request_hac',

  // Head Administration Pages (had)
  'HeadAdminstration',
  'Staff_had',
  'Student_had',
  'Events_had',
  'Schedules_had',
  'Admission_had',
  'AdminReports_had',
  'Announcement_had',
  'Exeat_had',
  'Request_had',

  // Domestic Head Pages (dh)
  'Domestic',
  'Facilities_dh',
  'Request_dh',
  'Inventory_dh',
  'InventoryStockTracking_dh',
  'Procurement_dh',
  'InventoryRequests_dh',
  'InventoryReports_dh',
  'Menu_dh',
  'Vendors_dh',
  'Canteen_dh',
  'VendorsReport_dh',
  'Maintenance_dh',
  'MaintenanceRequests_dh',
  'MaintenanceSchedules_dh',
  'MaintenanceReports_dh',
  'CostTracking_dh',

  // Principal Pages (p)
  'Principal',
  'StaffOverview_p',
  'PrincipalReports_p',
  'DisciplinaryOverview_p',
  'SchoolPerformanceMetrics_p',
  'PrincipalMeetings_p',
  'Approvals_p',
  'Requests_p',
  'Concerns_p',
  'Analytics_p',


  // School Nurse (HMS)
  'Infirmary_hms',
  'Registration_hms',
  'Records_hms',
  'Consultation_hms',
  'Treatment_hms',
  'ReferralManager_hms',
  'MedicalRecords_hms',
  'InfirmaryReports_hms',
  'Pharmacy_hms',
  'Drug_hms',
  'Procurement_hms',
  'Dispensing_hms',
  'Billing_hms',
  'PharmacyReports_hms',

  // School Accountant Pages
  'Accountant',
  'Fees_acc',
  'FeePreparation_acc',
  'Disbursement_acc',
  'Purchasing_acc',
  'Expenses_acc',
  'AccountingReports_acc',
  'Students_acc',
  'Bills_acc',
  'Payment_acc',
  'PaymentHistory_acc',
  'Reports_acc',

  // School Store (Bursar) Pages
  'Bursar_bs',
  'Items_bs',
  'ItemRequests_bs',
  'Disbursement_bs',
  'StockTracking_bs',
  'StoreReports_bs',
  'Students_bs'







  // Normal Staff
  // HouseMaster
  // Senior HouseMaster
  // Head of Department
  // Head Academic
  // Head Administration
  // Domestic Head
  // Principal
  // School Nurse
  // Bursar
  // Accountant
];




const dir = 'src/pages/staff';
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

pages.forEach(page => {
  const filePath = `${dir}/${page}.jsx`;

  // Check if the file already exists
  if (!existsSync(filePath)) {
    const content = `import React from 'react';

const ${page} = () => {
  return (
    <div>
      <h1>${page} Which contains Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia voluptatibus ea cumque explicabo laborum quia maxime voluptatem ex optio beatae minus, deleniti provident consectetur architecto quaerat asperiores nisi quisquam!</h1>
    </div>
  );
};

export default ${page};
`;
    writeFileSync(filePath, content);
    console.log(`${page}.jsx created successfully!`);
  } else {
    console.log(`${page}.jsx already exists, skipping creation.`);
  }
});
