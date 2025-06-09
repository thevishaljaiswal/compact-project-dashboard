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
  
  // Contact Information
  mobilePrimary: string;
  emailPrimary: string;
  mobileAlternate1: string;
  emailAlternate1: string;
  mobileAlternate2: string;
  emailAlternate2: string;
  mobileAlternate3: string;
  emailAlternate3: string;
  customerGSTIN: string;
  customerPAN: string;
  
  // Property Details
  property: string;
  floor: string;
  propertyType: string;
  saleableArea: number;
  carpetArea: number;
  customerNo: string;
  partnerNo: string;
  unitMaterialNo: string;
  parkingMaterialNo: string;
  parkingType: string;
  
  // Financial and Approval Details
  cibilScore: number;
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
  
  // New Customer Details
  customerCountry: string;
  customerState: string;
  customerCity: string;
  customerMobile: string;
  customerMobile2: string;
  customerEmail: string;
  customerAddress: string;
  customerAadhar: string;
  customerDOB: string;
  customerAge: number;
  customerOccupation: string;
  
  // Children Details
  maritalStatus: string;
  anniversary: string;
  haveChildren: boolean;
  numberOfChildren: number;
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
  
  // Bank Details
  accountHolder: string;
  accountNumber: string;
  bankName: string;
  bankAddress: string;
  ifsc: string;
  
  // Deviation Requests
  deviationRequests: DeviationRequest[];
  
  // Tickets/Issues
  tickets: Ticket[];
  
  // Add cashback KPIs
  cashbackKPIs: CashbackKPI[];
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

export type DeviationType = 'registration' | 'possession' | 'interest-waiver';
export type DeviationStatus = 'pending' | 'approved' | 'rejected';

export interface DeviationRequest {
  id: string;
  type: DeviationType;
  status: DeviationStatus;
  requestDate: string;
  requestedBy: string;
  reason: string;
  details: string;
  approvedBy?: string;
  approvedDate?: string;
  approvalNotes?: string;
  rejectedBy?: string;
  rejectedDate?: string;
  rejectionReason?: string;
}

export type TicketSource = 'email' | 'call' | 'mobile-app';
export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed';
export type TicketPriority = 'low' | 'medium' | 'high' | 'critical';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  source: TicketSource;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
  createdBy: string;
  assignedTo?: string;
  resolvedAt?: string;
  resolvedBy?: string;
  category: string;
}

export interface CashbackKPI {
  title: string;
  description: string;
  isAchieved: boolean;
  deadline?: string;
  completedDate?: string;
  reward?: number;
}
