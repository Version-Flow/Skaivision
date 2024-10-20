
import { useEffect } from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import RootLayout from './layouts/RootLayout';
// import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AdminDashboard from './pages/admin/Dashboard';
import AdminLogs from './pages/admin/Logs';

// Importing student pages
import StudentDashboard from './pages/student/Dashboard';
import StudentProfile from './pages/student/Profile';
import StudentLogs from './pages/student/Logs';
import StudentSettings from './pages/student/Settings';
import StudentNotifications from './pages/student/Notifications';
import StudentResult from './pages/student/Result';
import StudentFees from './pages/student/Fees';
import StudentPaymentHistory from './pages/student/PaymentHistory';
import StudentAccountStatement from './pages/student/AccountStatement';
import StudentPayment from './pages/student/Payment';
import StudentSupport from './pages/student/Support';
import StudentTickets from './pages/student/Tickets';
import StudentChangePassword from './pages/student/ChangePassword';
import StudentTranscript from './pages/student/Transcript';
import StudentChildTranscript from './pages/student/ChildTranscript';
import StudentChildFees from './pages/student/ChildFees';
import StudentChildCourses from './pages/student/ChildCourses';
import StudentChildInformation from './pages/student/ChildInformation';
import StudentCommunityForum from './pages/student/CommunityForum';
import StudentPrivateForum from './pages/student/PrivateForum';
import StudentExeat from './pages/student/Exeat';


// Normal Staff
import StaffDashboard from './pages/staff/Dashboard';
import StaffCourseManager from './pages/staff/CourseManager';
import StaffResultEntry from './pages/staff/ResultEntry';
import StaffResultOverview from './pages/staff/ResultOverview';
import StaffTranscript from './pages/staff/StudentTranscript';
import StaffAttendance from './pages/staff/Attendance';
import StaffReportGeneration from './pages/staff/ReportGeneration';
import StaffProfile from './pages/staff/Profile';
import StaffNotifications from './pages/staff/Notifications';
import StaffMessaging from './pages/staff/Messaging';
import StaffSettings from './pages/staff/Settings';
import StaffLogs from './pages/staff/Logs';
import StaffSupport from './pages/staff/Support';
import StaffTickets from './pages/staff/Tickets';
import StaffCommunityForum from './pages/staff/CommunityForum';
import StaffPrivateForum from './pages/staff/PrivateForum';
import StaffEvents from './pages/staff/Events';

// HouseMaster
import HouseMaster from './pages/staff/HouseMaster';
import StudentsHouseMaster from './pages/staff/Students_hm';
import HouseDuesHouseMaster from './pages/staff/HouseDues_hm';
import DisciplinaryRecordsHouseMaster from './pages/staff/DisciplinaryRecords_hm';
import ActivityHouseMaster from './pages/staff/Activity_hm';
import HouseReportsHouseMaster from './pages/staff/HouseReports_hm';
import ExeatHouseMaster from './pages/staff/Exeat_hm';
import RequestHouseMaster from './pages/staff/Request_hm';

// Senior HouseMaster
import SeniorHouseMaster from './pages/staff/SeniorHouseMaster';
import HouseOverviewSeniorHouseMaster from './pages/staff/HouseOverview_shm';
import HouseReportsSeniorHouseMaster from './pages/staff/HouseReports_shm';
import DisciplinaryRecordsSeniorHouseMaster from './pages/staff/DisciplinaryRecords_shm';
import HouseMemberManagementSeniorHouseMaster from './pages/staff/HouseMemberManagement_shm';
import ExeatSeniorHouseMaster from './pages/staff/Exeat_shm';
import RequestSeniorHouseMaster from './pages/staff/Request_shm';
import DuesSeniorHouseMaster from './pages/staff/Dues_shm';

// Head of Department (HOD)
import HOD from './pages/staff/HOD';
import StaffHOD from './pages/staff/Staff_hod';
import ResultApprovalHOD from './pages/staff/ResultApproval_hod';
import DepartmentReportsHOD from './pages/staff/DepartmentReports_hod';
import CurriculumHOD from './pages/staff/Curriculum_hod';
import ResourcesHOD from './pages/staff/Resources_hod';
import StudentsHOD from './pages/staff/Students_hod';
import CourseHOD from './pages/staff/Course_hod';
import StaffCoursesHOD from './pages/staff/StaffCourses_hod';
import ReportsAndAnalyticsHOD from './pages/staff/ReportsAndAnalytics_hod';
import RequestHOD from './pages/staff/Request_hod';
import OverviewHOD from './pages/staff/Overview_hod';

// Head Academic
import HeadAcademic from './pages/staff/HeadAcademic';
import AcademicReportsHeadAcademic from './pages/staff/AcademicReports_hac';
import ResultApprovalHeadAcademic from './pages/staff/ResultApproval_hac';
import SemesterHeadAcademic from './pages/staff/Semester_hac';
import CurriculumHeadAcademic from './pages/staff/Curriculum_hac';
import AttendanceHeadAcademic from './pages/staff/Attendance_hac';
import ExaminationHeadAcademic from './pages/staff/Examination_hac';
import ReportsAndAnalyticsHeadAcademic from './pages/staff/ReportsAndAnalytics_hac';
import AnnouncementHeadAcademic from './pages/staff/Announcement_hac';
import ResultOverviewHeadAcademic from './pages/staff/ResultOverview_hac';
import StudentTranscriptHeadAcademic from './pages/staff/StudentTranscript_hac';
import TimetableHeadAcademic from './pages/staff/Timetable_hac';
import CourseHeadAcademic from './pages/staff/Course_hac';
import ProgrammeHeadAcademic from './pages/staff/Programme_hac';
import HODHeadAcademic from './pages/staff/HOD_hac';
import RequestHeadAcademic from './pages/staff/Request_hac';

// Head Administration
import HeadAdministration from './pages/staff/HeadAdminstration';
import StaffHeadAdministration from './pages/staff/Staff_had';
import StudentHeadAdministration from './pages/staff/Student_had';
import EventsHeadAdministration from './pages/staff/Events_had';
import SchedulesHeadAdministration from './pages/staff/Schedules_had';
import AdmissionHeadAdministration from './pages/staff/Admission_had';
import AdminReportsHeadAdministration from './pages/staff/AdminReports_had';
import AnnouncementHeadAdministration from './pages/staff/Announcement_had';
import ExeatHeadAdministration from './pages/staff/Exeat_had';
import RequestHeadAdministration from './pages/staff/Request_had';

// Domestic Head
import Domestic from './pages/staff/Domestic';
import FacilitiesDomestic from './pages/staff/Facilities_dh';
import RequestDomestic from './pages/staff/Request_dh';
import InventoryDomestic from './pages/staff/Inventory_dh';
import InventoryStockTrackingDomestic from './pages/staff/InventoryStockTracking_dh';
import ProcurementDomestic from './pages/staff/Procurement_dh';
import InventoryRequestsDomestic from './pages/staff/InventoryRequests_dh';
import InventoryReportsDomestic from './pages/staff/InventoryReports_dh';
import MenuDomestic from './pages/staff/Menu_dh';
import VendorsDomestic from './pages/staff/Vendors_dh';
import CanteenDomestic from './pages/staff/Canteen_dh';
import VendorsReportDomestic from './pages/staff/VendorsReport_dh';
import MaintenanceDomestic from './pages/staff/Maintenance_dh';
import MaintenanceRequestsDomestic from './pages/staff/MaintenanceRequests_dh';
import MaintenanceSchedulesDomestic from './pages/staff/MaintenanceSchedules_dh';
import MaintenanceReportsDomestic from './pages/staff/MaintenanceReports_dh';
import CostTrackingDomestic from './pages/staff/CostTracking_dh';

// Principal
import Principal from './pages/staff/Principal';
import StaffOverviewPrincipal from './pages/staff/StaffOverview_p';
import PrincipalReports from './pages/staff/PrincipalReports_p';
import DisciplinaryOverviewPrincipal from './pages/staff/DisciplinaryOverview_p';
import SchoolPerformanceMetricsPrincipal from './pages/staff/SchoolPerformanceMetrics_p';
import PrincipalMeetings from './pages/staff/PrincipalMeetings_p';
import PirincipalApproval from './pages/staff/Approvals_p';
import PrincipalRequest from './pages/staff/Requests_p';
import PrincipalConcern from './pages/staff/Concerns_p';
import PrincipalAnalytics from './pages/staff/Analytics_p';


// School Nurse (HMS)
import InfirmaryNurse from './pages/staff/Infirmary_hms';
import RegistrationNurse from './pages/staff/Registration_hms';
import RecordsNurse from './pages/staff/Records_hms';
import ConsultationNurse from './pages/staff/Consultation_hms';
import TreatmentNurse from './pages/staff/Treatment_hms';
import ReferralManagerNurse from './pages/staff/ReferralManager_hms';
import MedicalRecordsNurse from './pages/staff/MedicalRecords_hms';
import InfirmaryReportsNurse from './pages/staff/InfirmaryReports_hms';
import PharmacyNurse from './pages/staff/Pharmacy_hms';
import DrugNurse from './pages/staff/Drug_hms';
import ProcurementNurse from './pages/staff/Procurement_hms';
import DispensingNurse from './pages/staff/Dispensing_hms';
import BillingNurse from './pages/staff/Billing_hms';
import PharmacyReportsNurse from './pages/staff/PharmacyReports_hms';

// Accountant
import Accountant from './pages/staff/Accountant';
import FeesAccountant from './pages/staff/Fees_acc';
import FeePreparationAccountant from './pages/staff/FeePreparation_acc';
import DisbursementAccountant from './pages/staff/Disbursement_acc';
import PurchasingAccountant from './pages/staff/Purchasing_acc';
import ExpensesAccountant from './pages/staff/Expenses_acc';
import AccountingReportsAccountant from './pages/staff/AccountingReports_acc';
import StudentsAccountant from './pages/staff/Students_acc';
import BillsAccountant from './pages/staff/Bills_acc';
import PaymentAccountant from './pages/staff/Payment_acc';
import PaymentHistoryAccountant from './pages/staff/PaymentHistory_acc';
import ReportsAccountant from './pages/staff/Reports_acc';

// Bursar
import Bursar from './pages/staff/Bursar_bs';
import ItemsBursar from './pages/staff/Items_bs';
import ItemRequestsBursar from './pages/staff/ItemRequests_bs';
import DisbursementBursar from './pages/staff/Disbursement_bs';
import StockTrackingBursar from './pages/staff/StockTracking_bs';
import StoreReportsBursar from './pages/staff/StoreReports_bs';
import StudentsBursar from './pages/staff/Students_bs';


// Authention things
import AuthLayout from "./layouts/AuthLayout";
import AuthLogin from "./pages/auth/Login";
import AuthRecoverPassword from "./pages/auth/RecoverPassword";
import AuthVerifyToken from "./pages/auth/VerifyToken";
import AuthLockScreen from "./pages/auth/LockScreen";
import AuthLogOut from "./pages/auth/LogOut";
import AuthChangePassword from "./pages/auth/ChangePassword";


import SetUpLayout from "./layouts/SetUpLayout";
import AuthCreateAccount from "./pages/auth/CreateAccount";
import AuthSetUpPayment from "./pages/auth/SetupPayment";
import TempStudentDashboard from "./pages/temp/StudentDashboard";
import TempAdmissionStatus from "./pages/temp/AdmissionStatus";


import VoucherLayout from "./layouts/VoucherLayout";
import VoucherAdmissionEntrance from "./pages/voucher/AdmissionEntrance";
import VoucherFormSelection from "./pages/voucher/FormSelection";
import VoucherVerifyPosting from "./pages/voucher/VerifyPosting";
import VoucherContinueAdmssion from "./pages/voucher/ContnueAdmssion";
import VoucherApplicationForms from "./pages/voucher/AppplicationForms";
import VoucherApplicationPayment from "./pages/voucher/ApplicationPayment";
import VoucherAdmissionFormsBS from "./pages/voucher/AdmissionFormsBS";
import VoucherAdmissionFormSHS from "./pages/voucher/AdmissionFormSHS";
import VoucherAdmissionMessage from "./pages/voucher/AdmissionMessage";


import SystemRoles from "./pages/admin/settings/Roles";
import SystemPermission from "./pages/admin/settings/Permission";
import SystemSchoolType from "./pages/admin/settings/SchoolType";
import SystemSchoolStatus from "./pages/admin/settings/SchoolStatus";
import SystemCountry from "./pages/admin/settings/Country";
import SystemRegion from "./pages/admin/settings/Region";
import SystemDistrict from "./pages/admin/settings/District";
import SystemSchool from "./pages/admin/settings/School";
import SystemClass from "./pages/admin/settings/Class";
import SystemAccreditationBody from "./pages/admin/settings/AccreditationBody";
import SystemPackages from "./pages/admin/settings/Packages";
import SystemRelationship from "./pages/admin/settings/Relationship";
import SystemEthnicity from "./pages/admin/settings/Ethnicity";
import SystemReligion from "./pages/admin/settings/Religion";


const App = () => {

  const location = useLocation();

  // Define the routes that should have a horizontal layout
  const horizontalRoutes = [
    "/acc/setup-account",
    "/temp/applicant-dashboard",
    "/temp/admission-status",
    "/temp/change-password"
  ];

  // Dynamically update the body attribute based on the route
  useEffect(() => {
    if (horizontalRoutes.includes(location.pathname)) {
      document.body.setAttribute("data-layout", "horizontal");
    } else {
      document.body.removeAttribute("data-layout");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  

  return (

    <Routes>


      <Route element={<AuthLayout />}>

        {/* Grouped Auth Routes */}
        <Route path="/" element={<AuthLogin />} />
        <Route path="/auth">
          <Route path="login" element={<AuthLogin />} />
          <Route path="reset-password" element={<AuthLogin />} />
          <Route path="recover-password" element={<AuthRecoverPassword />} />
          <Route path="verify-token" element={<AuthVerifyToken />} />
          <Route path="lock-screen" element={<AuthLockScreen />} />
          <Route path="logout" element={<AuthLogOut />} />      
        </Route>
      </Route>

        {/* SETTING UP ACCOUNT */}
      <Route element={<SetUpLayout />}>
        <Route path="/acc">
          <Route path="setup-account" element={<AuthCreateAccount />} />
          <Route path="make-payment" element={<AuthSetUpPayment />} />
        </Route>   

        <Route path="/temp">
          <Route path="applicant-dashboard" element={<TempStudentDashboard />} />
          <Route path="admission-status" element={<TempAdmissionStatus />} />
          <Route path="change-password" element={<AuthChangePassword />} />
        </Route>       
      </Route>

      {/* ONLINE ADMISSION VOUCHER */}
      <Route element={<VoucherLayout />}>
        <Route path="/school">
          <Route path="find-admission" element={<VoucherAdmissionEntrance />} />
          <Route path="selection" element={<VoucherFormSelection />} />
          <Route path="verify-posting" element={<VoucherVerifyPosting />} />
          <Route path="continue-admission" element={<VoucherContinueAdmssion />} />
          <Route path="application-forms" element={<VoucherApplicationForms />} />
          <Route path="purchase-forms" element={<VoucherApplicationPayment />} />
          <Route path="admission-basic" element={<VoucherAdmissionFormsBS />} />
          <Route path="admission-secondary" element={<VoucherAdmissionFormSHS />} />
          <Route path="admission-message" element={<VoucherAdmissionMessage />} />
        </Route>       
      </Route>


      <Route element={<RootLayout />}>

        {/* Fallback Route */}
        <Route path="*" element={<ErrorPage />} />



        {/* Grouped Admin Routes */}
        <Route path="/admin">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="logs" element={<AdminLogs />} />
        </Route>


        {/* Grouped Student Routes */}
        <Route path="/student">
          {  /*  // Account Routes */}
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="logs" element={<StudentLogs />} />
          <Route path="tickets" element={<StudentTickets />} />
          {/* // Fees Routes */}
          <Route path="fees" element={<StudentFees />} />
          <Route path="payment-history" element={<StudentPaymentHistory />} />
          <Route path="account-statement" element={<StudentAccountStatement />} />
          <Route path="payment" element={<StudentPayment />} />
          <Route path="child-fees" element={<StudentChildFees />} />
          {/* // Academic Routes */}
          <Route path="result" element={<StudentResult />} />
          <Route path="transcript" element={<StudentTranscript />} />
          <Route path="child-transcript" element={<StudentChildTranscript />} />
          <Route path="child-courses" element={<StudentChildCourses />} />
          <Route path="child-information" element={<StudentChildInformation />} />
          {/* // General Routes */}
          <Route path="settings" element={<StudentSettings />} />
          <Route path="notifications" element={<StudentNotifications />} />
          <Route path="support" element={<StudentSupport />} />
          <Route path="change-password" element={<StudentChangePassword />} />
          <Route path="community-forum" element={<StudentCommunityForum />} />
          <Route path="private-forum" element={<StudentPrivateForum />} />
          <Route path="exeat" element={<StudentExeat />} />
        </Route>


        {/* Geeral Routes for all the staff */}
        <Route path="/shared">
          <Route path="profile" element={<StaffProfile />} />
          <Route path="notifications" element={<StaffNotifications />} />
          <Route path="messaging" element={<StaffMessaging />} />
          <Route path="settings" element={<StaffSettings />} />
          <Route path="logs" element={<StaffLogs />} />
          <Route path="support" element={<StaffSupport />} />
          <Route path="tickets" element={<StaffTickets />} />
          <Route path="community-forum" element={<StaffCommunityForum />} />
          <Route path="private-forum" element={<StaffPrivateForum />} />
          <Route path="events" element={<StaffEvents />} />
        </Route>

        {/* Grouped Normal Staff Routes */}
        <Route path="/staff">
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="course-manager" element={<StaffCourseManager />} />
          <Route path="result-entry" element={<StaffResultEntry />} />
          <Route path="result-overview" element={<StaffResultOverview />} />
          <Route path="student-transcript" element={<StaffTranscript />} />
          <Route path="attendance" element={<StaffAttendance />} />
          <Route path="report-generation" element={<StaffReportGeneration />} />
        </Route>

        {/* Grouped HouseMaster Routes */}
        <Route path="/hm">
          <Route path="dashboard" element={<HouseMaster />} />
          <Route path="students" element={<StudentsHouseMaster />} />
          <Route path="house-dues" element={<HouseDuesHouseMaster />} />
          <Route path="disciplinary-records" element={<DisciplinaryRecordsHouseMaster />} />
          <Route path="activity" element={<ActivityHouseMaster />} />
          <Route path="house-reports" element={<HouseReportsHouseMaster />} />
          <Route path="exeat" element={<ExeatHouseMaster />} />
          <Route path="request" element={<RequestHouseMaster />} />
        </Route>

        {/* Grouped Senior HouseMaster Routes */}
        <Route path="/shm">
          <Route path="dashboard" element={<SeniorHouseMaster />} />
          <Route path="house-overview" element={<HouseOverviewSeniorHouseMaster />} />
          <Route path="house-reports" element={<HouseReportsSeniorHouseMaster />} />
          <Route path="disciplinary-records" element={<DisciplinaryRecordsSeniorHouseMaster />} />
          <Route path="house-members" element={<HouseMemberManagementSeniorHouseMaster />} />
          <Route path="exeat" element={<ExeatSeniorHouseMaster />} />
          <Route path="request" element={<RequestSeniorHouseMaster />} />
          <Route path="dues" element={<DuesSeniorHouseMaster />} />
        </Route>

        {/* Grouped Head of Department Routes */}
        <Route path="/hod">
          <Route path="dashboard" element={<HOD />} />
          <Route path="staff" element={<StaffHOD />} />
          <Route path="result-approval" element={<ResultApprovalHOD />} />
          <Route path="department-reports" element={<DepartmentReportsHOD />} />
          <Route path="curriculum" element={<CurriculumHOD />} />
          <Route path="resources" element={<ResourcesHOD />} />
          <Route path="students" element={<StudentsHOD />} />
          <Route path="course" element={<CourseHOD />} />
          <Route path="staff-courses" element={<StaffCoursesHOD />} />
          <Route path="reports-analytics" element={<ReportsAndAnalyticsHOD />} />
          <Route path="request" element={<RequestHOD />} />
          <Route path="overview" element={<OverviewHOD />} />
        </Route>

        {/* Grouped Head Academic Routes */}
        <Route path="/hac">
          <Route path="dashboard" element={<HeadAcademic />} />
          <Route path="academic-reports" element={<AcademicReportsHeadAcademic />} />
          <Route path="result-approval" element={<ResultApprovalHeadAcademic />} />
          <Route path="semester" element={<SemesterHeadAcademic />} />
          <Route path="curriculum" element={<CurriculumHeadAcademic />} />
          <Route path="attendance" element={<AttendanceHeadAcademic />} />
          <Route path="examination" element={<ExaminationHeadAcademic />} />
          <Route path="reports-analytics" element={<ReportsAndAnalyticsHeadAcademic />} />
          <Route path="announcement" element={<AnnouncementHeadAcademic />} />
          <Route path="result-overview" element={<ResultOverviewHeadAcademic />} />
          <Route path="student-transcript" element={<StudentTranscriptHeadAcademic />} />
          <Route path="timetable" element={<TimetableHeadAcademic />} />
          <Route path="course" element={<CourseHeadAcademic />} />
          <Route path="programme" element={<ProgrammeHeadAcademic />} />
          <Route path="hod" element={<HODHeadAcademic />} />
          <Route path="request" element={<RequestHeadAcademic />} />
        </Route>

        {/* Grouped Head Administration Routes */}
        <Route path="/had">
          <Route path="dashboard" element={<HeadAdministration />} />
          <Route path="staff" element={<StaffHeadAdministration />} />
          <Route path="student" element={<StudentHeadAdministration />} />
          <Route path="events" element={<EventsHeadAdministration />} />
          <Route path="schedules" element={<SchedulesHeadAdministration />} />
          <Route path="admission" element={<AdmissionHeadAdministration />} />
          <Route path="admin-reports" element={<AdminReportsHeadAdministration />} />
          <Route path="announcement" element={<AnnouncementHeadAdministration />} />
          <Route path="exeat" element={<ExeatHeadAdministration />} />
          <Route path="request" element={<RequestHeadAdministration />} />
        </Route>

        {/* Grouped Domestic Head Routes */}
        <Route path="/domestic">
          <Route path="dashboard" element={<Domestic />} />
          <Route path="facilities" element={<FacilitiesDomestic />} />
          <Route path="request" element={<RequestDomestic />} />
          <Route path="inventory" element={<InventoryDomestic />} />
          <Route path="inventory-stock-tracking" element={<InventoryStockTrackingDomestic />} />
          <Route path="procurement" element={<ProcurementDomestic />} />
          <Route path="inventory-requests" element={<InventoryRequestsDomestic />} />
          <Route path="inventory-reports" element={<InventoryReportsDomestic />} />
          <Route path="menu" element={<MenuDomestic />} />
          <Route path="vendors" element={<VendorsDomestic />} />
          <Route path="canteen" element={<CanteenDomestic />} />
          <Route path="vendors-report" element={<VendorsReportDomestic />} />
          <Route path="maintenance" element={<MaintenanceDomestic />} />
          <Route path="maintenance-requests" element={<MaintenanceRequestsDomestic />} />
          <Route path="maintenance-schedules" element={<MaintenanceSchedulesDomestic />} />
          <Route path="maintenance-reports" element={<MaintenanceReportsDomestic />} />
          <Route path="cost-tracking" element={<CostTrackingDomestic />} />
        </Route>

        {/* Grouped Principal Routes */}
        <Route path="/head">
          <Route path="dashboard" element={<Principal />} />
          <Route path="staff-overview" element={<StaffOverviewPrincipal />} />
          <Route path="principal-reports" element={<PrincipalReports />} />
          <Route path="disciplinary-overview" element={<DisciplinaryOverviewPrincipal />} />
          <Route path="school-performance-metrics" element={<SchoolPerformanceMetricsPrincipal />} />
          <Route path="principal-meetings" element={<PrincipalMeetings />} />
          <Route path="approvals" element={<PirincipalApproval />} />
          <Route path="requests" element={<PrincipalRequest />} />
          <Route path="concerns" element={<PrincipalConcern />} />
          <Route path="analytics" element={<PrincipalAnalytics />} />
        </Route>

        {/* Grouped School Nurse Routes */}
        <Route path="/nurse">
          <Route path="infirmary" element={<InfirmaryNurse />} />
          <Route path="registration" element={<RegistrationNurse />} />
          <Route path="records" element={<RecordsNurse />} />
          <Route path="consultation" element={<ConsultationNurse />} />
          <Route path="treatment" element={<TreatmentNurse />} />
          <Route path="referral-manager" element={<ReferralManagerNurse />} />
          <Route path="medical-records" element={<MedicalRecordsNurse />} />
          <Route path="infirmary-reports" element={<InfirmaryReportsNurse />} />
          <Route path="pharmacy" element={<PharmacyNurse />} />
          <Route path="drug" element={<DrugNurse />} />
          <Route path="procurement" element={<ProcurementNurse />} />
          <Route path="dispensing" element={<DispensingNurse />} />
          <Route path="billing" element={<BillingNurse />} />
          <Route path="pharmacy-reports" element={<PharmacyReportsNurse />} />
        </Route>

        {/* Grouped Accountant Routes */}
        <Route path="/accountant">
          <Route path="dashboard" element={<Accountant />} />
          <Route path="fees" element={<FeesAccountant />} />
          <Route path="fee-preparation" element={<FeePreparationAccountant />} />
          <Route path="disbursement" element={<DisbursementAccountant />} />
          <Route path="purchasing" element={<PurchasingAccountant />} />
          <Route path="expenses" element={<ExpensesAccountant />} />
          <Route path="accounting-reports" element={<AccountingReportsAccountant />} />
          <Route path="students" element={<StudentsAccountant />} />
          <Route path="bills" element={<BillsAccountant />} />
          <Route path="payment" element={<PaymentAccountant />} />
          <Route path="payment-history" element={<PaymentHistoryAccountant />} />
          <Route path="reports" element={<ReportsAccountant />} />
        </Route>

        {/* Grouped Bursar Routes */}
        <Route path="/bursar">
          <Route path="dashboard" element={<Bursar />} />
          <Route path="items" element={<ItemsBursar />} />
          <Route path="item-requests" element={<ItemRequestsBursar />} />
          <Route path="disbursement" element={<DisbursementBursar />} />
          <Route path="stock-tracking" element={<StockTrackingBursar />} />
          <Route path="store-reports" element={<StoreReportsBursar />} />
          <Route path="students" element={<StudentsBursar />} />
        </Route>

        {/* System Settings */}
        <Route path="/settings">
          <Route path="system-roles" element={<SystemRoles />} />
          <Route path="system-permission" element={<SystemPermission />} />
          <Route path="system-school_type" element={<SystemSchoolType />} />
          <Route path="system-school_status" element={<SystemSchoolStatus />} />
          <Route path="system-country" element={<SystemCountry />} />
          <Route path="system-region" element={<SystemRegion />} />
          <Route path="system-district" element={<SystemDistrict />} />
          <Route path="system-institution" element={<SystemSchool />} />
          <Route path="system-class" element={<SystemClass />} />
          <Route path="system-accreditation_body" element={<SystemAccreditationBody />} />       
          <Route path="system-relationship" element={<SystemRelationship />} />
          <Route path="system-ethnicity" element={<SystemEthnicity />} />
          <Route path="system-religion" element={<SystemReligion />} />

          <Route path="app-package" element={<SystemPackages />} />
        </Route>

      </Route>
      
    </Routes>

  );
};

export default App;
