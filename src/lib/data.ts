import { ProjectData, SectionData } from './types';

export const sampleProjectData: ProjectData = {
  projectName: "Grand Residences",
  building: "Tower A",
  flatUnitNo: "1202",
  customerName: "John Smith",
  salesOrderNo: "SO-12345",
  
  // Financial Details
  considerationValue: 8500000,
  gstPercentage: 5,
  gstAmount: 425000,
  invoicedPercentUnit: 75,
  invoicedUnit: 6375000,
  invoicedGST: 318750,
  invoiced: 6693750,
  paidPercentUnit: 60,
  paidUnit: 5100000,
  paidGST: 255000,
  paidTDS: 51000,
  paid: 5406000,
  balanceUnit: 3400000,
  balanceGST: 170000,
  balance: 3570000,
  
  // Unit Value Details
  baseRate: 12000,
  baseValue: 7800000,
  carParkingValue: 700000,
  pmcPMRDA: 150000,
  mseb: 75000,
  midc: 0,
  clubCharges: 150000,
  exclusiveClubCharges: 0,
  provisionalCharges: 50000,
  evPointCharges: 25000,
  considerationRate: 13500,
  otherCharges: 100000,
  gstOtherAmount: 5000,
  gstOtherPercentage: 5,
  allInclusiveRate: 14000,
  allInclusiveValue: 9100000,
  
  // Partner and Additional Charges
  channelPartnerPercentage: 2,
  channelPartnerCharges: 170000,
  interestCharges: 0,
  interestGST: 0,
  holdingCharges: 0,
  holdingGST: 0,
  transferCharges: 0,
  transferGST: 0,
  customisationCharges: 200000,
  customisationGST: 10000,
  
  // Dates
  applicationDate: "2023-01-15",
  holdDate: "",
  handedToCRMDate: "2023-01-20",
  crmReceivedDate: "2023-01-22",
  confirmationDate: "2023-02-01",
  agreementDate: "2023-02-15",
  registrationDate: "2023-03-01",
  registrationNo: "REG-89765",
  haveliNo: "HV-5432",
  proportionatePrice: 8500000,
  possessionDate: "2024-06-30",
  maintenanceStartDate: "2024-07-01",
  warrantyStartDate: "2024-07-01",
  warrantyEndDate: "2027-07-01",
  customerApplicationStatus: "Approved",
  status: "Active",
  cancellationDate: "",
  
  // CRM and Loan Details
  crmUserID: "CRM-456",
  loanNOCDate: "2023-02-10",
  loanSanctionDate: "2023-02-20",
  loanSanctionAmount: 6000000,
  optedForGCS: true,
  mldConnect: false,
  disbursementDate: "2023-03-15",
  gcsCode: "GCS-789",
  bankForGCS: "HDFC Bank",
  bankForMLD: "",
  loanBank: "HDFC Bank",
  loanManager: "Jane Wilson",
  loanManagerMobile: "9876543210",
  loanManagerEmail: "jane.wilson@hdfcbank.com",
  holdY: false,
  warrantyExtended: false,
  warrantyExtendedAt: "",
  
  // Duty and Registration
  stampDutyRegistrationAmount: 510000,
  stampDutyRegistrationReceived: 510000,
  stampDutyBalance: 0,
  
  // Property and Scheme Details
  typology: "3 BHK",
  specialPayment: "No",
  scheme: "Early Bird",
  schemeStart: "2022-12-01",
  schemeEnd: "2023-01-31",
  schemeCost: 100000,
  salesManager: "Robert Brown",
  channelPartnerName: "Realty Experts",
  virtualAccount: "VA98765432",
  taxVirtualAccount: "TVA98765432",
  
  // Contact Information
  mobilePrimary: "9876543210",
  emailPrimary: "john.smith@example.com",
  mobileAlternate1: "9876543211",
  emailAlternate1: "js.work@example.com",
  mobileAlternate2: "",
  emailAlternate2: "",
  mobileAlternate3: "",
  emailAlternate3: "",
  customerGSTIN: "22AAAAA0000A1Z5",
  
  // Customer Details
  customerNo: "CUST-7890",
  customerCountry: "United States",
  customerState: "California",
  customerCity: "San Francisco",
  customerMobile: "9876543210",
  customerMobile2: "9876543211",
  customerEmail: "john.smith@example.com",
  customerAddress: "123 Market Street, San Francisco, CA 94103",
  customerPAN: "ABCPD1234E",
  customerAadhar: "1234 5678 9012",
  customerDOB: "1985-06-15",
  customerAge: 38,
  customerOccupation: "Software Engineer",
  maritalStatus: "Married",
  anniversary: "2015-10-25",
  haveChildren: true,
  noOfChild: 2,
  child1Name: "Emma Smith",
  child1DOB: "2016-03-12",
  child1Academy: "Bright Future School",
  child1Gender: "Female",
  child2Name: "Noah Smith",
  child2DOB: "2019-05-08",
  child2Academy: "Little Stars Preschool",
  child2Gender: "Male",
  child3Name: "",
  child3DOB: "",
  child3Academy: "",
  child3Gender: "",
  vvip: false,
  hni: true,
  salaried: true,
  vip: false,
  vipReason: "",
  specificComm: "",
  commMode: "Email",
  referByPromoter: "",
  customisation: true,
  customisationNature: "Kitchen Upgrades",
  emailedPDD: true,
  terms: "Standard",
  otherDetails: "",
  hardToDeal: false,
  antagonised: false,
  specificCondition: false,
  condition: "",
  purchaseReason: "Investment",
  specialConcession: "",
  ethnicity: "",
  industry: "Technology",
  organisation: "Tech Solutions Inc.",
  designation: "Senior Developer",
  workPlace: "Downtown Office",
  cibilScore: 780,
  
  // Banking Details
  accountHolder: "John Smith",
  accountNumber: "123456789012",
  bankName: "Global Bank",
  bankAddress: "456 Financial Street, San Francisco, CA 94104",
  ifsc: "GLBK0001234",
  
  // Co-Applicant 1 Details
  coApp1No: "COAPP-001",
  coApp1PartnerNo: "",
  coApp1Name: "Sarah Smith",
  coApp1Mobile: "9876543212",
  coApp1Mobile2: "",
  coApp1Email: "sarah.smith@example.com",
  coApp1Address: "123 Market Street, San Francisco, CA 94103",
  coApp1PAN: "DEFGH5678F",
  coApp1Aadhar: "2345 6789 0123",
  coApp1DOB: "1987-08-20",
  coApp1Age: 36,
  coApp1Occupation: "UI/UX Designer",
  
  // Co-Applicant 2 Details
  coApp2No: "",
  coApp2PartnerNo: "",
  coApp2Name: "",
  coApp2Mobile: "",
  coApp2Mobile2: "",
  coApp2Email: "",
  coApp2Address: "",
  coApp2PAN: "",
  coApp2Aadhar: "",
  coApp2DOB: "",
  coApp2Age: 0,
  coApp2Occupation: "",
  
  // Co-Applicant 3 Details
  coApp3No: "",
  coApp3PartnerNo: "",
  coApp3Name: "",
  coApp3Mobile: "",
  coApp3Mobile2: "",
  coApp3Email: "",
  coApp3Address: "",
  coApp3PAN: "",
  coApp3Aadhar: "",
  coApp3DOB: "",
  coApp3Age: 0,
  coApp3Occupation: "",
  
  // Property Details
  property: "3 BHK Apartment",
  floor: "12",
  propertyType: "Residential",
  saleableArea: 1200,
  carpetArea: 950,
  partnerNo: "PART-1234",
  unitMaterialNo: "UM-5678",
  parkingMaterialNo: "PM-9012",
  parkingType: "Covered",
  
  // Financial and Approval Details
  reckonerRate: 12500,
  dueInterest: 0,
  waivedInterest: 0,
  paidInterest: 0,
  balanceInterest: 0,
  terminationApprNo: "",
  warrantyApprNo: "",
  handoverApprNo: "",
  registrationDelayApprNo: "",
  applicantApprNo: "APP-4567",
  cashbackEligible: true,
  selfFund: false
};

export const projectSections: SectionData[] = [
  {
    title: "Basic Information",
    fields: [
      { key: "projectName", label: "Project Name", type: "text" },
      { key: "building", label: "Building", type: "text" },
      { key: "flatUnitNo", label: "Flat/Unit No.", type: "text" },
      { key: "customerName", label: "Customer Name", type: "text" },
      { key: "salesOrderNo", label: "Sales Order No.", type: "text" },
      { key: "property", label: "Property", type: "text" },
      { key: "typology", label: "Typology", type: "text" },
      { key: "floor", label: "Floor", type: "text" },
      { key: "saleableArea", label: "Saleable Area", type: "number" },
      { key: "carpetArea", label: "Carpet Area", type: "number" },
    ]
  },
  {
    title: "Financial Overview",
    fields: [
      { key: "considerationValue", label: "Consideration Value", type: "currency" },
      { key: "gstPercentage", label: "GST %", type: "percentage" },
      { key: "gstAmount", label: "GST Amount", type: "currency" },
      { key: "invoicedPercentUnit", label: "Invoiced % (Unit)", type: "percentage" },
      { key: "invoicedUnit", label: "Invoiced (Unit)", type: "currency" },
      { key: "invoicedGST", label: "Invoiced (GST)", type: "currency" },
      { key: "invoiced", label: "Invoiced", type: "currency" },
      { key: "paidPercentUnit", label: "Paid % (Unit)", type: "percentage" },
      { key: "paidUnit", label: "Paid (Unit)", type: "currency" },
      { key: "paidGST", label: "Paid (GST)", type: "currency" },
      { key: "paidTDS", label: "Paid (TDS)", type: "currency" },
      { key: "paid", label: "Paid", type: "currency" },
      { key: "balanceUnit", label: "Balance (Unit)", type: "currency" },
      { key: "balanceGST", label: "Balance (GST)", type: "currency" },
      { key: "balance", label: "Balance", type: "currency" },
    ]
  },
  {
    title: "Unit Value Details",
    fields: [
      { key: "baseRate", label: "Base Rate", type: "currency" },
      { key: "baseValue", label: "Base Value", type: "currency" },
      { key: "carParkingValue", label: "Car Parking Value", type: "currency" },
      { key: "pmcPMRDA", label: "PMC/PMRDA", type: "currency" },
      { key: "mseb", label: "MSEB", type: "currency" },
      { key: "midc", label: "MIDC", type: "currency" },
      { key: "clubCharges", label: "Club Charges", type: "currency" },
      { key: "exclusiveClubCharges", label: "Exclusive Club Charges", type: "currency" },
      { key: "provisionalCharges", label: "Provisional Charges", type: "currency" },
      { key: "evPointCharges", label: "EV Point Charges", type: "currency" },
      { key: "considerationRate", label: "Consideration Rate", type: "currency" },
      { key: "otherCharges", label: "Other Charges", type: "currency" },
      { key: "gstOtherAmount", label: "GST Other Amount", type: "currency" },
      { key: "gstOtherPercentage", label: "GST Other %", type: "percentage" },
      { key: "allInclusiveRate", label: "All Inclusive Rate", type: "currency" },
      { key: "allInclusiveValue", label: "All Inclusive Value", type: "currency" },
    ]
  },
  {
    title: "Partner and Additional Charges",
    fields: [
      { key: "channelPartnerPercentage", label: "Channel Partner %", type: "percentage" },
      { key: "channelPartnerCharges", label: "Channel Partner Charges", type: "currency" },
      { key: "interestCharges", label: "Interest Charges", type: "currency" },
      { key: "interestGST", label: "Interest GST", type: "currency" },
      { key: "holdingCharges", label: "Holding Charges", type: "currency" },
      { key: "holdingGST", label: "Holding GST", type: "currency" },
      { key: "transferCharges", label: "Transfer Charges", type: "currency" },
      { key: "transferGST", label: "Transfer GST", type: "currency" },
      { key: "customisationCharges", label: "Customisation Charges", type: "currency" },
      { key: "customisationGST", label: "Customisation GST", type: "currency" },
    ]
  },
  {
    title: "Key Dates",
    fields: [
      { key: "applicationDate", label: "Application Date", type: "date" },
      { key: "holdDate", label: "Hold Date", type: "date" },
      { key: "handedToCRMDate", label: "Handed to CRM Date", type: "date" },
      { key: "crmReceivedDate", label: "CRM Received Date", type: "date" },
      { key: "confirmationDate", label: "Confirmation Date", type: "date" },
      { key: "agreementDate", label: "Agreement Date", type: "date" },
      { key: "registrationDate", label: "Registration Date", type: "date" },
      { key: "registrationNo", label: "Registration No.", type: "text" },
      { key: "possessionDate", label: "Possession Date", type: "date" },
      { key: "maintenanceStartDate", label: "Maintenance Start Date", type: "date" },
      { key: "warrantyStartDate", label: "Warranty Start Date", type: "date" },
      { key: "warrantyEndDate", label: "Warranty End Date", type: "date" },
    ]
  },
  {
    title: "Loan and CRM Details",
    fields: [
      { key: "crmUserID", label: "CRM User ID", type: "text" },
      { key: "loanNOCDate", label: "Loan NOC Date", type: "date" },
      { key: "loanSanctionDate", label: "Loan Sanction Date", type: "date" },
      { key: "loanSanctionAmount", label: "Loan Sanction Amount", type: "currency" },
      { key: "optedForGCS", label: "Opted for GCS", type: "boolean" },
      { key: "mldConnect", label: "MLD Connect", type: "boolean" },
      { key: "disbursementDate", label: "Disbursement Date", type: "date" },
      { key: "gcsCode", label: "GCS Code", type: "text" },
      { key: "bankForGCS", label: "Bank for GCS", type: "text" },
      { key: "bankForMLD", label: "Bank for MLD", type: "text" },
      { key: "loanBank", label: "Loan Bank", type: "text" },
      { key: "loanManager", label: "Loan Manager", type: "text" },
      { key: "loanManagerMobile", label: "Loan Mgr. Mob.", type: "phone" },
      { key: "loanManagerEmail", label: "Loan Mgr. Email", type: "email" },
    ]
  },
  {
    title: "Contact Information",
    fields: [
      { key: "mobilePrimary", label: "Mobile (Primary)", type: "phone" },
      { key: "emailPrimary", label: "E-Mail (Primary)", type: "email" },
      { key: "mobileAlternate1", label: "Mobile (Alternate 1)", type: "phone" },
      { key: "emailAlternate1", label: "E-Mail (Alternate 1)", type: "email" },
      { key: "mobileAlternate2", label: "Mobile (Alternate 2)", type: "phone" },
      { key: "emailAlternate2", label: "E-Mail (Alternate 2)", type: "email" },
      { key: "mobileAlternate3", label: "Mobile (Alternate 3)", type: "phone" },
      { key: "emailAlternate3", label: "E-Mail (Alternate 3)", type: "email" },
      { key: "customerGSTIN", label: "Customer GSTIN", type: "text" },
      { key: "customerPAN", label: "Customer PAN", type: "text" },
    ]
  },
  {
    title: "Scheme and Sales Details",
    fields: [
      { key: "scheme", label: "Scheme", type: "text" },
      { key: "schemeStart", label: "Scheme Start", type: "date" },
      { key: "schemeEnd", label: "Scheme End", type: "date" },
      { key: "schemeCost", label: "Scheme Cost", type: "currency" },
      { key: "salesManager", label: "Sales Manager", type: "text" },
      { key: "channelPartnerName", label: "Channel Partner Name", type: "text" },
      { key: "virtualAccount", label: "Virtual Account", type: "text" },
      { key: "taxVirtualAccount", label: "Tax Virtual Account", type: "text" },
      { key: "specialPayment", label: "Special Payment", type: "text" },
    ]
  },
  {
    title: "Additional Details",
    fields: [
      { key: "customerNo", label: "Customer No.", type: "text" },
      { key: "partnerNo", label: "Partner No.", type: "text" },
      { key: "unitMaterialNo", label: "Unit Material No.", type: "text" },
      { key: "parkingMaterialNo", label: "Parking Material No.", type: "text" },
      { key: "parkingType", label: "Parking Type", type: "text" },
      { key: "cibilScore", label: "Cibil Score", type: "number" },
      { key: "reckonerRate", label: "Reckoner Rate", type: "currency" },
      { key: "customerApplicationStatus", label: "Customer Application Status", type: "text" },
      { key: "status", label: "Status", type: "text" },
      { key: "cancellationDate", label: "Cancellation Date", type: "date" },
    ]
  },
  {
    title: "Registration and Duty Details",
    fields: [
      { key: "haveliNo", label: "Haveli No.", type: "text" },
      { key: "proportionatePrice", label: "Proportionate Price", type: "currency" },
      { key: "stampDutyRegistrationAmount", label: "Stamp Duty & Registration Amount", type: "currency" },
      { key: "stampDutyRegistrationReceived", label: "Stamp Duty & Registration Received", type: "currency" },
      { key: "stampDutyBalance", label: "Stamp Duty Balance", type: "currency" },
    ]
  },
  {
    title: "Interest and Approval Details",
    fields: [
      { key: "dueInterest", label: "Due Interest", type: "currency" },
      { key: "waivedInterest", label: "Waived Interest", type: "currency" },
      { key: "paidInterest", label: "Paid Interest", type: "currency" },
      { key: "balanceInterest", label: "Balance Interest", type: "currency" },
      { key: "terminationApprNo", label: "Termination Appr No.", type: "text" },
      { key: "warrantyApprNo", label: "Warranty Appr No.", type: "text" },
      { key: "handoverApprNo", label: "Handover Appr No.", type: "text" },
      { key: "registrationDelayApprNo", label: "Registration Delay Appr No.", type: "text" },
      { key: "applicantApprNo", label: "Applicant Appr No.", type: "text" },
      { key: "cashbackEligible", label: "Cashback Eligible", type: "boolean" },
      { key: "selfFund", label: "Self Fund", type: "boolean" },
      { key: "holdY", label: "Hold Y", type: "boolean" },
      { key: "warrantyExtended", label: "Warranty Extended", type: "boolean" },
      { key: "warrantyExtendedAt", label: "Warranty Extended At", type: "date" },
    ]
  }
];
