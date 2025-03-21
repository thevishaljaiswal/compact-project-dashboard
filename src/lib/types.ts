
export interface ProjectData {
  projectName: string;
  building: string;
  flatUnitNo: string;
  customerName: string;
  salesOrderNo: string;
  
  // Financial Details
  considerationValue: number;
  gstPercentage: number;
  gstAmount: number;
  invoicedPercentUnit: number;
  invoicedUnit: number;
  invoicedGST: number;
  invoiced: number;
  paidPercentUnit: number;
  paidUnit: number;
  paidGST: number;
  paidTDS: number;
  paid: number;
  balanceUnit: number;
  balanceGST: number;
  balance: number;
  
  // Unit Value Details
  baseRate: number;
  baseValue: number;
  carParkingValue: number;
  pmcPMRDA: number;
  mseb: number;
  midc: number;
  clubCharges: number;
  exclusiveClubCharges: number;
  provisionalCharges: number;
  evPointCharges: number;
  considerationRate: number;
  otherCharges: number;
  gstOtherAmount: number;
  gstOtherPercentage: number;
  allInclusiveRate: number;
  allInclusiveValue: number;
  
  // Partner and Additional Charges
  channelPartnerPercentage: number;
  channelPartnerCharges: number;
  interestCharges: number;
  interestGST: number;
  holdingCharges: number;
  holdingGST: number;
  transferCharges: number;
  transferGST: number;
  customisationCharges: number;
  customisationGST: number;
  
  // Dates
  applicationDate: string;
  holdDate: string;
  handedToCRMDate: string;
  crmReceivedDate: string;
  confirmationDate: string;
  agreementDate: string;
  registrationDate: string;
  registrationNo: string;
  haveliNo: string;
  proportionatePrice: number;
  possessionDate: string;
  maintenanceStartDate: string;
  warrantyStartDate: string;
  warrantyEndDate: string;
  customerApplicationStatus: string;
  status: string;
  cancellationDate: string;
  
  // CRM and Loan Details
  crmUserID: string;
  loanNOCDate: string;
  loanSanctionDate: string;
  loanSanctionAmount: number;
  optedForGCS: boolean;
  mldConnect: boolean;
  disbursementDate: string;
  gcsCode: string;
  bankForGCS: string;
  bankForMLD: string;
  loanBank: string;
  loanManager: string;
  loanManagerMobile: string;
  loanManagerEmail: string;
  holdY: boolean;
  warrantyExtended: boolean;
  warrantyExtendedAt: string;
  
  // Duty and Registration
  stampDutyRegistrationAmount: number;
  stampDutyRegistrationReceived: number;
  stampDutyBalance: number;
  
  // Property and Scheme Details
  typology: string;
  specialPayment: string;
  scheme: string;
  schemeStart: string;
  schemeEnd: string;
  schemeCost: number;
  salesManager: string;
  channelPartnerName: string;
  virtualAccount: string;
  taxVirtualAccount: string;
  
  // Customer Details
  customerNo: string;
  customerCountry: string;
  customerState: string;
  customerCity: string;
  customerMobile: string;
  customerMobile2: string;
  customerEmail: string;
  customerAddress: string;
  customerPAN: string;
  customerAadhar: string;
  customerDOB: string;
  customerAge: number;
  customerOccupation: string;
  maritalStatus: string;
  anniversary: string;
  haveChildren: boolean;
  noOfChild: number;
  child1Name: string;
  child1DOB: string;
  child1Academy: string;
  child1Gender: string;
  child2Name: string;
  child2DOB: string;
  child2Academy: string;
  child2Gender: string;
  child3Name: string;
  child3DOB: string;
  child3Academy: string;
  child3Gender: string;
  vvip: boolean;
  hni: boolean;
  salaried: boolean;
  vip: boolean;
  vipReason: string;
  specificComm: string;
  commMode: string;
  referByPromoter: string;
  customisation: boolean;
  customisationNature: string;
  emailedPDD: boolean;
  terms: string;
  otherDetails: string;
  hardToDeal: boolean;
  antagonised: boolean;
  specificCondition: boolean;
  condition: string;
  purchaseReason: string;
  specialConcession: string;
  ethnicity: string;
  industry: string;
  organisation: string;
  designation: string;
  workPlace: string;
  cibilScore: number;
  
  // Banking Details
  accountHolder: string;
  accountNumber: string;
  bankName: string;
  bankAddress: string;
  ifsc: string;
  
  // Co-Applicant 1 Details
  coApp1No: string;
  coApp1PartnerNo: string;
  coApp1Name: string;
  coApp1Mobile: string;
  coApp1Mobile2: string;
  coApp1Email: string;
  coApp1Address: string;
  coApp1PAN: string;
  coApp1Aadhar: string;
  coApp1DOB: string;
  coApp1Age: number;
  coApp1Occupation: string;
  
  // Co-Applicant 2 Details
  coApp2No: string;
  coApp2PartnerNo: string;
  coApp2Name: string;
  coApp2Mobile: string;
  coApp2Mobile2: string;
  coApp2Email: string;
  coApp2Address: string;
  coApp2PAN: string;
  coApp2Aadhar: string;
  coApp2DOB: string;
  coApp2Age: number;
  coApp2Occupation: string;
  
  // Co-Applicant 3 Details
  coApp3No: string;
  coApp3PartnerNo: string;
  coApp3Name: string;
  coApp3Mobile: string;
  coApp3Mobile2: string;
  coApp3Email: string;
  coApp3Address: string;
  coApp3PAN: string;
  coApp3Aadhar: string;
  coApp3DOB: string;
  coApp3Age: number;
  coApp3Occupation: string;
  
  // Property Details
  property: string;
  floor: string;
  propertyType: string;
  saleableArea: number;
  carpetArea: number;
  partnerNo: string;
  unitMaterialNo: string;
  parkingMaterialNo: string;
  parkingType: string;
  
  // Financial and Approval Details
  reckonerRate: number;
  dueInterest: number;
  waivedInterest: number;
  paidInterest: number;
  balanceInterest: number;
  terminationApprNo: string;
  warrantyApprNo: string;
  handoverApprNo: string;
  registrationDelayApprNo: string;
  applicantApprNo: string;
  cashbackEligible: boolean;
  selfFund: boolean;
}

export interface SectionData {
  title: string;
  fields: FieldData[];
}

export interface FieldData {
  key: keyof ProjectData;
  label: string;
  type: 'text' | 'number' | 'date' | 'boolean' | 'percentage' | 'currency' | 'email' | 'phone';
}

export interface CustomerData {
  name: string;
  no: string;
  mobile: string;
  mobile2: string;
  email: string;
  address: string;
  pan: string;
  aadhar: string;
  dob: string;
  age: number;
  occupation: string;
}

export interface CoApplicantData {
  no: string;
  partnerNo: string;
  name: string;
  mobile: string;
  mobile2: string;
  email: string;
  address: string;
  pan: string;
  aadhar: string;
  dob: string;
  age: number;
  occupation: string;
}
