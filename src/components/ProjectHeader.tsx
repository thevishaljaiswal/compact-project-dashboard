
import React from 'react';
import { ProjectData } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProjectHeaderProps {
  data: ProjectData;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ data }) => {
  return (
    <div className="w-full animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 pb-6 border-b">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <div className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full">
              {data.typology}
            </div>
            <div className="text-xs font-medium px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
              {data.status}
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-balance">
            {data.projectName}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center mt-1 text-muted-foreground text-sm">
            <span className="mr-2">Building: {data.building}</span>
            <span className="hidden sm:block">•</span>
            <span className="mx-2">Unit: {data.flatUnitNo}</span>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
          <div className="text-sm text-muted-foreground mb-1">Customer</div>
          <div className="text-lg font-semibold">{data.customerName}</div>
          <div className="text-sm text-muted-foreground mt-1">SO: {data.salesOrderNo}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Combined Consideration Value Card */}
        <KeyMetricCard 
          label="Consideration Value" 
          value={formatCurrency(data.considerationValue)} 
          subValue={`GST: ${data.gstPercentage}% (${formatCurrency(data.gstAmount)})`}
          className="bg-primary/5"
        />
        
        {/* Combined Amount Paid Card */}
        <KeyMetricCard 
          label="Amount Paid" 
          value={formatCurrency(data.paid)} 
          subValue={<>
            <span className="text-green-600 font-medium">{data.paidPercentUnit}%</span> of total • 
            Unit: {formatCurrency(data.paidUnit)} • GST: {formatCurrency(data.paidGST)}
          </>}
          className="bg-green-500/5"
        />
        
        {/* Combined Balance Card */}
        <KeyMetricCard 
          label="Balance" 
          value={formatCurrency(data.balance)} 
          subValue={<>
            Unit: {formatCurrency(data.balanceUnit)} • GST: {formatCurrency(data.balanceGST)}
          </>}
          className="bg-amber-500/5"
        />
      </div>
    </div>
  );
};

interface KeyMetricCardProps {
  label: string;
  value: string;
  subValue?: string | React.ReactNode;
  className?: string;
}

const KeyMetricCard: React.FC<KeyMetricCardProps> = ({ 
  label, 
  value, 
  subValue,
  className 
}) => {
  return (
    <div className={cn(
      "p-4 rounded-xl border transition-all duration-300 hover:shadow-md", 
      className
    )}>
      <div className="text-sm font-medium text-muted-foreground mb-1">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
      {subValue && <div className="text-xs text-muted-foreground mt-1">{subValue}</div>}
    </div>
  );
};

// Helper function to format currency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default ProjectHeader;
