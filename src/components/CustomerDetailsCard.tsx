
import React, { useState } from 'react';
import { ProjectData } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, User, MapPin, Phone, Mail, Calendar, Briefcase, CreditCard, BookOpen, Baby } from 'lucide-react';
import DataField from './DataField';
import { cn } from '@/lib/utils';

interface CustomerDetailsCardProps {
  data: ProjectData;
  onEdit: (sectionTitle: string) => void;
}

const CustomerDetailsCard: React.FC<CustomerDetailsCardProps> = ({ data, onEdit }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {/* Customer Information Card */}
      <Card className="bg-white/60 backdrop-blur-xs h-full">
        <CardHeader className="border-b pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              Customer Details
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onEdit("Customer Information")}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <Edit className="h-4 w-4 mr-1" />
              <span className="text-sm">Edit</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 gap-3">
            <DataField field={{ key: 'customerName', label: 'Name', type: 'text' }} value={data.customerName} />
            
            <div className="flex gap-2">
              <div className="flex-1">
                <DataField field={{ key: 'customerCountry', label: 'Country', type: 'text' }} value={data.customerCountry} />
              </div>
              <div className="flex-1">
                <DataField field={{ key: 'customerState', label: 'State', type: 'text' }} value={data.customerState} />
              </div>
            </div>
            
            <DataField field={{ key: 'customerCity', label: 'City', type: 'text' }} value={data.customerCity} />
            
            <div className="flex items-center mt-1">
              <MapPin className="h-3 w-3 text-primary mr-1" />
              <span className="text-xs font-medium text-muted-foreground">Address</span>
            </div>
            <div className="text-sm border rounded-md p-2 bg-slate-50">
              {data.customerAddress || 'N/A'}
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1">
                <DataField field={{ key: 'customerMobile', label: 'Primary Mobile', type: 'phone' }} value={data.customerMobile} />
              </div>
              <div className="flex-1">
                <DataField field={{ key: 'customerMobile2', label: 'Secondary Mobile', type: 'phone' }} value={data.customerMobile2} />
              </div>
            </div>
            
            <DataField field={{ key: 'customerEmail', label: 'Email', type: 'email' }} value={data.customerEmail} />
            
            <div className="grid grid-cols-2 gap-2">
              <DataField field={{ key: 'customerPAN', label: 'PAN', type: 'text' }} value={data.customerPAN} />
              <DataField field={{ key: 'customerAadhar', label: 'Aadhar', type: 'text' }} value={data.customerAadhar} />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <DataField field={{ key: 'customerDOB', label: 'Date of Birth', type: 'date' }} value={data.customerDOB} />
              <DataField field={{ key: 'customerAge', label: 'Age', type: 'number' }} value={data.customerAge} />
            </div>
            
            <DataField field={{ key: 'customerOccupation', label: 'Occupation', type: 'text' }} value={data.customerOccupation} />
          </div>
        </CardContent>
      </Card>

      {/* Children Information Card */}
      <Card className="bg-white/60 backdrop-blur-xs h-full">
        <CardHeader className="border-b pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center">
              <Baby className="h-5 w-5 mr-2 text-primary" />
              Family Details
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onEdit("Children Information")}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <Edit className="h-4 w-4 mr-1" />
              <span className="text-sm">Edit</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="grid grid-cols-2 gap-2">
              <DataField field={{ key: 'maritalStatus', label: 'Marital Status', type: 'text' }} value={data.maritalStatus} />
              <DataField field={{ key: 'anniversary', label: 'Anniversary', type: 'date' }} value={data.anniversary} />
            </div>
            
            <div className="flex gap-2 items-center">
              <div className="flex-1">
                <DataField field={{ key: 'haveChildren', label: 'Have Children', type: 'boolean' }} value={data.haveChildren} />
              </div>
              <div className="flex-1">
                <DataField field={{ key: 'numberOfChildren', label: 'No. of Children', type: 'number' }} value={data.numberOfChildren} />
              </div>
            </div>
            
            {data.haveChildren && (
              <>
                <div className="mt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => toggleSection('children')}
                    className="text-sm text-primary hover:text-primary w-full justify-start p-2"
                  >
                    {expandedSection === 'children' ? 'Hide' : 'Show'} Children Details
                  </Button>
                </div>
                
                <div className={cn("space-y-3", expandedSection !== 'children' && "hidden")}>
                  {data.child1Name && (
                    <div className="border rounded-md p-3 bg-slate-50">
                      <div className="font-medium mb-2 text-sm">Child 1</div>
                      <div className="grid grid-cols-1 gap-2">
                        <DataField field={{ key: 'child1Name', label: 'Name', type: 'text' }} value={data.child1Name} />
                        <div className="grid grid-cols-2 gap-2">
                          <DataField field={{ key: 'child1DOB', label: 'DOB', type: 'date' }} value={data.child1DOB} />
                          <DataField field={{ key: 'child1Gender', label: 'Gender', type: 'text' }} value={data.child1Gender} />
                        </div>
                        <DataField field={{ key: 'child1Academy', label: 'Academy', type: 'text' }} value={data.child1Academy} />
                      </div>
                    </div>
                  )}
                  
                  {data.child2Name && (
                    <div className="border rounded-md p-3 bg-slate-50">
                      <div className="font-medium mb-2 text-sm">Child 2</div>
                      <div className="grid grid-cols-1 gap-2">
                        <DataField field={{ key: 'child2Name', label: 'Name', type: 'text' }} value={data.child2Name} />
                        <div className="grid grid-cols-2 gap-2">
                          <DataField field={{ key: 'child2DOB', label: 'DOB', type: 'date' }} value={data.child2DOB} />
                          <DataField field={{ key: 'child2Gender', label: 'Gender', type: 'text' }} value={data.child2Gender} />
                        </div>
                        <DataField field={{ key: 'child2Academy', label: 'Academy', type: 'text' }} value={data.child2Academy} />
                      </div>
                    </div>
                  )}
                  
                  {data.child3Name && (
                    <div className="border rounded-md p-3 bg-slate-50">
                      <div className="font-medium mb-2 text-sm">Child 3</div>
                      <div className="grid grid-cols-1 gap-2">
                        <DataField field={{ key: 'child3Name', label: 'Name', type: 'text' }} value={data.child3Name} />
                        <div className="grid grid-cols-2 gap-2">
                          <DataField field={{ key: 'child3DOB', label: 'DOB', type: 'date' }} value={data.child3DOB} />
                          <DataField field={{ key: 'child3Gender', label: 'Gender', type: 'text' }} value={data.child3Gender} />
                        </div>
                        <DataField field={{ key: 'child3Academy', label: 'Academy', type: 'text' }} value={data.child3Academy} />
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bank Details Card */}
      <Card className="bg-white/60 backdrop-blur-xs h-full">
        <CardHeader className="border-b pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-primary" />
              Bank Details
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onEdit("Bank Details")}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <Edit className="h-4 w-4 mr-1" />
              <span className="text-sm">Edit</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 gap-3">
            <DataField field={{ key: 'accountHolder', label: 'Account Holder', type: 'text' }} value={data.accountHolder} />
            <DataField field={{ key: 'accountNumber', label: 'Account Number', type: 'text' }} value={data.accountNumber} />
            <DataField field={{ key: 'bankName', label: 'Bank Name', type: 'text' }} value={data.bankName} />
            
            <div className="flex items-center mt-1">
              <MapPin className="h-3 w-3 text-primary mr-1" />
              <span className="text-xs font-medium text-muted-foreground">Bank Address</span>
            </div>
            <div className="text-sm border rounded-md p-2 bg-slate-50">
              {data.bankAddress || 'N/A'}
            </div>
            
            <DataField field={{ key: 'ifsc', label: 'IFSC', type: 'text' }} value={data.ifsc} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerDetailsCard;
