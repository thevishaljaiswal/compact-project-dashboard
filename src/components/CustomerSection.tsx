
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Edit, User, Users, Mail, Phone, Calendar, Briefcase, MapPin, CreditCard, Flag } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

interface CustomerSectionProps {
  data: ProjectData;
  onEdit: (sectionTitle: string) => void;
}

const CustomerSection = ({ data, onEdit }: CustomerSectionProps) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showCoApplicants, setShowCoApplicants] = useState(false);

  const hasCoApplicants = data.coApp1Name || data.coApp2Name || data.coApp3Name;
  const hasChildren = data.haveChildren && data.noOfChild > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 animate-fade-in">
      {/* Main Customer Card */}
      <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 bg-white/60 backdrop-blur-xs">
        <CardHeader className="bg-primary/5 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg font-semibold">Customer Details</CardTitle>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onEdit("Customer Details")}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="flex items-center space-x-1">
            <span>#{data.customerNo}</span>
            {data.vip && (
              <HoverCard>
                <HoverCardTrigger>
                  <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-700 rounded-full ml-2">VIP</span>
                </HoverCardTrigger>
                <HoverCardContent className="text-xs w-60">
                  <p>VIP Reason: {data.vipReason || 'Not specified'}</p>
                </HoverCardContent>
              </HoverCard>
            )}
            {data.vvip && <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-700 rounded-full ml-2">VVIP</span>}
            {data.hni && <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-700 rounded-full ml-2">HNI</span>}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center">
                <User className="h-4 w-4 text-muted-foreground mr-2" />
                <div className="text-base font-medium">{data.customerName}</div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                <a href={`tel:${data.customerMobile}`} className="text-sm hover:text-primary transition-colors">
                  {data.customerMobile}
                </a>
                {data.customerMobile2 && (
                  <a href={`tel:${data.customerMobile2}`} className="text-sm hover:text-primary transition-colors ml-2">
                    / {data.customerMobile2}
                  </a>
                )}
              </div>
              
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                <a href={`mailto:${data.customerEmail}`} className="text-sm hover:text-primary transition-colors truncate max-w-[220px]">
                  {data.customerEmail}
                </a>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2 mt-1" />
                <div className="text-sm text-muted-foreground flex-1 truncate">
                  <HoverCard>
                    <HoverCardTrigger className="cursor-pointer">
                      <span className="truncate inline-block max-w-full">
                        {data.customerAddress || 'N/A'}, {data.customerCity}, {data.customerState}, {data.customerCountry}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <p className="text-sm">{data.customerAddress || 'N/A'}, {data.customerCity}, {data.customerState}, {data.customerCountry}</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">
                    {formatDate(data.customerDOB) || 'N/A'} ({data.customerAge || 'N/A'})
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground truncate max-w-[160px]" title={data.customerOccupation}>
                    {data.customerOccupation || 'N/A'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">PAN: {data.customerPAN || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">Aadhar: {maskAadhar(data.customerAadhar)}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <span className="text-xs text-muted-foreground">Marital Status:</span>
                  <span className="text-xs ml-1">{data.maritalStatus || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-xs text-muted-foreground">Anniversary:</span>
                  <span className="text-xs ml-1">{formatDate(data.anniversary) || 'N/A'}</span>
                </div>
              </div>
              
              {/* Organization Info */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <span className="text-xs text-muted-foreground">Organization:</span>
                  <HoverCard>
                    <HoverCardTrigger className="cursor-pointer">
                      <span className="text-xs ml-1 truncate max-w-[120px] inline-block">
                        {data.organisation || 'N/A'}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-60">
                      <div className="text-xs space-y-1">
                        <p><strong>Organization:</strong> {data.organisation || 'N/A'}</p>
                        <p><strong>Designation:</strong> {data.designation || 'N/A'}</p>
                        <p><strong>Industry:</strong> {data.industry || 'N/A'}</p>
                        <p><strong>Work Place:</strong> {data.workPlace || 'N/A'}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                
                <div className="flex items-center">
                  <span className="text-xs text-muted-foreground">Cibil Score:</span>
                  <span className="text-xs ml-1">{data.cibilScore || 'N/A'}</span>
                </div>
              </div>
            </div>
            
            {/* Children Section */}
            {hasChildren && (
              <div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowChildren(!showChildren)}
                  className="w-full flex items-center justify-between h-8 px-2 mb-1 border-t pt-2"
                >
                  <span className="text-sm">Children ({data.noOfChild})</span>
                  {showChildren ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                
                {showChildren && (
                  <div className="space-y-3 pl-2">
                    {data.child1Name && (
                      <div className="grid grid-cols-3 gap-2 border-l-2 border-primary/20 pl-2">
                        <div className="col-span-3 text-xs font-medium text-primary/80">Child 1</div>
                        <div className="text-xs"><span className="text-muted-foreground">Name:</span> {data.child1Name}</div>
                        <div className="text-xs"><span className="text-muted-foreground">DOB:</span> {formatDate(data.child1DOB)}</div>
                        <div className="text-xs"><span className="text-muted-foreground">Gender:</span> {data.child1Gender}</div>
                        <div className="col-span-3 text-xs">
                          <span className="text-muted-foreground">Academy:</span> {data.child1Academy || 'N/A'}
                        </div>
                      </div>
                    )}
                    
                    {data.child2Name && (
                      <div className="grid grid-cols-3 gap-2 border-l-2 border-primary/20 pl-2">
                        <div className="col-span-3 text-xs font-medium text-primary/80">Child 2</div>
                        <div className="text-xs"><span className="text-muted-foreground">Name:</span> {data.child2Name}</div>
                        <div className="text-xs"><span className="text-muted-foreground">DOB:</span> {formatDate(data.child2DOB)}</div>
                        <div className="text-xs"><span className="text-muted-foreground">Gender:</span> {data.child2Gender}</div>
                        <div className="col-span-3 text-xs">
                          <span className="text-muted-foreground">Academy:</span> {data.child2Academy || 'N/A'}
                        </div>
                      </div>
                    )}
                    
                    {data.child3Name && (
                      <div className="grid grid-cols-3 gap-2 border-l-2 border-primary/20 pl-2">
                        <div className="col-span-3 text-xs font-medium text-primary/80">Child 3</div>
                        <div className="text-xs"><span className="text-muted-foreground">Name:</span> {data.child3Name}</div>
                        <div className="text-xs"><span className="text-muted-foreground">DOB:</span> {formatDate(data.child3DOB)}</div>
                        <div className="text-xs"><span className="text-muted-foreground">Gender:</span> {data.child3Gender}</div>
                        <div className="col-span-3 text-xs">
                          <span className="text-muted-foreground">Academy:</span> {data.child3Academy || 'N/A'}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {/* Additional details */}
            <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-dashed">
              {data.customisation && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">
                      Customisation
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60">
                    <p className="text-xs">{data.customisationNature || 'No details available'}</p>
                  </HoverCardContent>
                </HoverCard>
              )}
              
              {data.hardToDeal && (
                <div className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
                  Hard to Deal
                </div>
              )}
              
              {data.antagonised && (
                <div className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
                  Antagonised
                </div>
              )}
              
              {data.specificCondition && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">
                      Special Condition
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60">
                    <p className="text-xs">{data.condition || 'No details available'}</p>
                  </HoverCardContent>
                </HoverCard>
              )}
              
              {data.specialConcession && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                      Special Concession
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60">
                    <p className="text-xs">{data.specialConcession}</p>
                  </HoverCardContent>
                </HoverCard>
              )}
              
              {data.purchaseReason && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                      Purchase Reason
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-60">
                    <p className="text-xs">{data.purchaseReason}</p>
                  </HoverCardContent>
                </HoverCard>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Co-Applicants and Banking Card */}
      <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 bg-white/60 backdrop-blur-xs">
        <CardHeader className="bg-secondary/5 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-secondary" />
              <CardTitle className="text-lg font-semibold">Co-Applicants & Banking</CardTitle>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onEdit("Co-Applicant Details")}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>
            {hasCoApplicants ? `${countCoApplicants(data)} co-applicant(s)` : 'No co-applicants'}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {/* Banking Details */}
            <div className="space-y-2 mb-4">
              <div className="text-sm font-medium mb-2 pb-1 border-b">Banking Details</div>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Account Holder:</span>
                  <span>{data.accountHolder || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Account Number:</span>
                  <span>{maskAccountNumber(data.accountNumber)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Bank:</span>
                  <span>{data.bankName || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">IFSC:</span>
                  <span>{data.ifsc || 'N/A'}</span>
                </div>
              </div>
            </div>

            {/* Co-Applicants Section */}
            {hasCoApplicants && (
              <div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowCoApplicants(!showCoApplicants)}
                  className="w-full flex items-center justify-between h-8 px-2 mb-1 border-t pt-2"
                >
                  <span className="text-sm">Co-Applicants Details</span>
                  {showCoApplicants ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                
                {showCoApplicants && (
                  <div className="space-y-4 pl-1">
                    {data.coApp1Name && (
                      <CoApplicantCard 
                        index={1}
                        name={data.coApp1Name}
                        no={data.coApp1No}
                        partnerNo={data.coApp1PartnerNo}
                        mobile={data.coApp1Mobile}
                        mobile2={data.coApp1Mobile2}
                        email={data.coApp1Email}
                        pan={data.coApp1PAN}
                        aadhar={data.coApp1Aadhar}
                        dob={data.coApp1DOB}
                        age={data.coApp1Age}
                        occupation={data.coApp1Occupation}
                      />
                    )}
                    
                    {data.coApp2Name && (
                      <CoApplicantCard 
                        index={2}
                        name={data.coApp2Name}
                        no={data.coApp2No}
                        partnerNo={data.coApp2PartnerNo}
                        mobile={data.coApp2Mobile}
                        mobile2={data.coApp2Mobile2}
                        email={data.coApp2Email}
                        pan={data.coApp2PAN}
                        aadhar={data.coApp2Aadhar}
                        dob={data.coApp2DOB}
                        age={data.coApp2Age}
                        occupation={data.coApp2Occupation}
                      />
                    )}
                    
                    {data.coApp3Name && (
                      <CoApplicantCard 
                        index={3}
                        name={data.coApp3Name}
                        no={data.coApp3No}
                        partnerNo={data.coApp3PartnerNo}
                        mobile={data.coApp3Mobile}
                        mobile2={data.coApp3Mobile2}
                        email={data.coApp3Email}
                        pan={data.coApp3PAN}
                        aadhar={data.coApp3Aadhar}
                        dob={data.coApp3DOB}
                        age={data.coApp3Age}
                        occupation={data.coApp3Occupation}
                      />
                    )}
                  </div>
                )}
              </div>
            )}

            {!hasCoApplicants && (
              <div className="flex items-center justify-center h-24 border rounded-md border-dashed text-muted-foreground">
                <p className="text-sm">No co-applicants registered</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface CoApplicantCardProps {
  index: number;
  name: string;
  no: string;
  partnerNo: string;
  mobile: string;
  mobile2: string;
  email: string;
  pan: string;
  aadhar: string;
  dob: string;
  age: number;
  occupation: string;
}

const CoApplicantCard: React.FC<CoApplicantCardProps> = ({
  index,
  name,
  no,
  partnerNo,
  mobile,
  mobile2,
  email,
  pan,
  aadhar,
  dob,
  age,
  occupation
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className={cn(
      "border rounded-md p-2 transition-all duration-200",
      expanded ? "bg-card/80" : "bg-card/30"
    )}>
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium text-sm">{name}</span>
          <span className="text-xs text-muted-foreground">#{no}</span>
        </div>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </div>
      
      {expanded && (
        <div className="mt-2 space-y-2 pl-6 text-sm">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center">
              <Phone className="h-3 w-3 text-muted-foreground mr-1" />
              <a href={`tel:${mobile}`} className="hover:text-primary transition-colors">
                {mobile}
              </a>
            </div>
            
            {mobile2 && (
              <div className="flex items-center">
                <Phone className="h-3 w-3 text-muted-foreground mr-1" />
                <a href={`tel:${mobile2}`} className="hover:text-primary transition-colors">
                  {mobile2}
                </a>
              </div>
            )}
            
            <div className="flex items-center col-span-2">
              <Mail className="h-3 w-3 text-muted-foreground mr-1" />
              <a href={`mailto:${email}`} className="hover:text-primary transition-colors truncate max-w-[200px]">
                {email}
              </a>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-3 w-3 text-muted-foreground mr-1" />
              <span>{formatDate(dob)} ({age || 'N/A'})</span>
            </div>
            
            <div className="flex items-center">
              <Briefcase className="h-3 w-3 text-muted-foreground mr-1" />
              <span className="truncate max-w-[150px]" title={occupation}>
                {occupation || 'N/A'}
              </span>
            </div>
            
            <div className="flex items-center">
              <CreditCard className="h-3 w-3 text-muted-foreground mr-1" />
              <span>PAN: {pan || 'N/A'}</span>
            </div>
            
            <div className="flex items-center">
              <CreditCard className="h-3 w-3 text-muted-foreground mr-1" />
              <span>Aadhar: {maskAadhar(aadhar)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper functions
const countCoApplicants = (data: ProjectData): number => {
  let count = 0;
  if (data.coApp1Name) count++;
  if (data.coApp2Name) count++;
  if (data.coApp3Name) count++;
  return count;
};

const maskAadhar = (aadhar: string): string => {
  if (!aadhar) return 'N/A';
  if (aadhar.length < 8) return aadhar;
  return 'XXXX-XXXX-' + aadhar.slice(-4);
};

const maskAccountNumber = (accountNumber: string): string => {
  if (!accountNumber) return 'N/A';
  if (accountNumber.length < 8) return accountNumber;
  return 'XXXXX' + accountNumber.slice(-4);
};

export default CustomerSection;
