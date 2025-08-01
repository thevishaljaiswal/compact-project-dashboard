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
  customerPAN: "ABCPD1234E",
  
  // Property Details
  property: "3 BHK Apartment",
  floor: "12",
  propertyType: "Residential",
  saleableArea: 1200,
  carpetArea: 950,
  customerNo: "CUST-7890",
  partnerNo: "PART-1234",
  unitMaterialNo: "UM-5678",
  parkingMaterialNo: "PM-9012",
  parkingType: "Covered",
  
  // Financial and Approval Details
  cibilScore: 780,
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
  selfFund: false,
  
  // New Customer Details
  customerCountry: "India",
  customerState: "Maharashtra",
  customerCity: "Mumbai",
  customerMobile: "9876543210",
  customerMobile2: "9876543211",
  customerEmail: "john.smith@example.com",
  customerAddress: "123 Happy Homes, Bandra West, Mumbai 400050",
  customerAadhar: "XXXX-XXXX-XXXX-5678",
  customerDOB: "1985-06-15",
  customerAge: 38,
  customerOccupation: "Software Engineer",
  
  // Children Details
  maritalStatus: "Married",
  anniversary: "2010-10-10",
  haveChildren: true,
  numberOfChildren: 2,
  child1Name: "James Smith",
  child1DOB: "2012-05-20",
  child1Academy: "Bright Star School",
  child1Gender: "Male",
  child2Name: "Emily Smith",
  child2DOB: "2015-03-15",
  child2Academy: "Little Angels Academy",
  child2Gender: "Female",
  child3Name: "",
  child3DOB: "",
  child3Academy: "",
  child3Gender: "",
  
  // Bank Details
  accountHolder: "John Smith",
  accountNumber: "XXXXX7890",
  bankName: "HDFC Bank",
  bankAddress: "Bandra Branch, Mumbai 400050",
  ifsc: "HDFC0001234",
  
  // Deviation Requests
  deviationRequests: [],
  
  // Customer Tickets
  tickets: [
    {
      id: '1',
      title: 'Complaint about construction noise',
      description: 'Customer is complaining about excessive noise from the construction site during early morning hours.',
      source: 'email',
      status: 'resolved',
      priority: 'medium',
      createdAt: '2025-04-23T10:23:45.000Z',
      createdBy: 'John Doe',
      assignedTo: 'Site Manager',
      resolvedAt: '2025-04-25T15:30:12.000Z',
      resolvedBy: 'Site Manager',
      category: 'Noise Complaint'
    },
    {
      id: '2',
      title: 'Water leakage in bathroom',
      description: 'Customer reported water leakage from ceiling in the master bathroom.',
      source: 'call',
      status: 'in-progress',
      priority: 'high',
      createdAt: '2025-05-02T14:12:33.000Z',
      createdBy: 'John Doe',
      assignedTo: 'Maintenance Team',
      category: 'Plumbing Issue'
    },
    {
      id: '3',
      title: 'Request for payment schedule adjustment',
      description: 'Customer wants to change the payment schedule due to financial constraints.',
      source: 'mobile-app',
      status: 'open',
      priority: 'medium',
      createdAt: '2025-05-07T09:45:21.000Z',
      createdBy: 'John Doe',
      category: 'Payment'
    },
    {
      id: '4',
      title: 'Question about amenities access',
      description: 'Customer is asking about when they will get access to the clubhouse and swimming pool.',
      source: 'email',
      status: 'closed',
      priority: 'low',
      createdAt: '2025-04-15T16:30:00.000Z',
      createdBy: 'John Doe',
      resolvedAt: '2025-04-16T11:20:45.000Z',
      resolvedBy: 'Customer Relations',
      category: 'Amenities'
    },
    {
      id: '5',
      title: 'Parking slot allocation issue',
      description: 'Customer is disputing the allocated parking slot and requesting a change.',
      source: 'call',
      status: 'in-progress',
      priority: 'high',
      createdAt: '2025-05-05T13:15:27.000Z',
      createdBy: 'John Doe',
      assignedTo: 'Property Manager',
      category: 'Parking'
    }
  ],
  
  // Add cashback KPIs data
  cashbackKPIs: [
    {
      title: "On Time Registration",
      description: "Complete registration within agreed timeline",
      isAchieved: true,
      deadline: "2024-03-15",
      completedDate: "2024-03-10",
      reward: 25000
    },
    {
      title: "On Time Payment - 30%",
      description: "Pay 30% of total amount on schedule",
      isAchieved: true,
      deadline: "2024-02-01",
      completedDate: "2024-01-28",
      reward: 15000
    },
    {
      title: "On Time Payment - 60%",
      description: "Pay 60% of total amount on schedule",
      isAchieved: false,
      deadline: "2024-06-01",
      reward: 20000
    },
    {
      title: "On Time Payment - 95%",
      description: "Pay 95% of total amount on schedule",
      isAchieved: false,
      deadline: "2024-12-01",
      reward: 30000
    }
  ]
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
  },
  {
    title: "Customer Information",
    fields: [
      { key: "customerName", label: "Customer Name", type: "text" },
      { key: "customerCountry", label: "Customer Country", type: "text" },
      { key: "customerState", label: "Customer State", type: "text" },
      { key: "customerCity", label: "Customer City", type: "text" },
      { key: "customerMobile", label: "Customer Mobile", type: "phone" },
      { key: "customerMobile2", label: "Customer Mobile2", type: "phone" },
      { key: "customerEmail", label: "Customer Email", type: "email" },
      { key: "customerAddress", label: "Customer Address", type: "text" },
      { key: "customerPAN", label: "Customer PAN", type: "text" },
      { key: "customerAadhar", label: "Customer Aadhar", type: "text" },
      { key: "customerDOB", label: "Customer DOB", type: "date" },
      { key: "customerAge", label: "Customer Age", type: "number" },
      { key: "customerOccupation", label: "Customer Occupation", type: "text" },
    ]
  },
  {
    title: "Children Information",
    fields: [
      { key: "maritalStatus", label: "Marital Status", type: "text" },
      { key: "anniversary", label: "Anniversary", type: "date" },
      { key: "haveChildren", label: "Have Children", type: "boolean" },
      { key: "numberOfChildren", label: "No. of Child", type: "number" },
      { key: "child1Name", label: "Child1 Name", type: "text" },
      { key: "child1DOB", label: "Child1 DOB", type: "date" },
      { key: "child1Academy", label: "Child1 Academy", type: "text" },
      { key: "child1Gender", label: "Child1 Gender", type: "text" },
      { key: "child2Name", label: "Child2 Name", type: "text" },
      { key: "child2DOB", label: "Child2 DOB", type: "date" },
      { key: "child2Academy", label: "Child2 Academy", type: "text" },
      { key: "child2Gender", label: "Child2 Gender", type: "text" },
      { key: "child3Name", label: "Child3 Name", type: "text" },
      { key: "child3DOB", label: "Child3 DOB", type: "date" },
      { key: "child3Academy", label: "Child3 Academy", type: "text" },
      { key: "child3Gender", label: "Child3 Gender", type: "text" },
    ]
  },
  {
    title: "Bank Details",
    fields: [
      { key: "accountHolder", label: "Account Holder", type: "text" },
      { key: "accountNumber", label: "Account Number", type: "text" },
      { key: "bankName", label: "Bank Name", type: "text" },
      { key: "bankAddress", label: "Bank Address", type: "text" },
      { key: "ifsc", label: "IFSC", type: "text" },
    ]
  }
];
