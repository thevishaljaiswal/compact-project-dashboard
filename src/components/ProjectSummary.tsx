
import React from 'react';
import { ProjectData } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProjectSummaryProps {
  data: ProjectData;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ data }) => {
  return (
    <div className="w-full mb-8 animate-slide-in">
      <h2 className="text-xl font-semibold mb-4">Project Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Financial Summary */}
        <SummaryCard title="Financial Status">
          <div className="space-y-2">
            <ProgressItem 
              label="Payment Progress" 
              value={data.paidPercentUnit} 
              total={100}
              color="bg-green-500" 
            />
            <ProgressItem 
              label="Invoice Progress" 
              value={data.invoicedPercentUnit} 
              total={100}
              color="bg-blue-500" 
            />
            <div className="pt-2">
              <div className="flex justify-between text-sm">
                <span>Total Value:</span>
                <span className="font-medium">{formatCurrency(data.considerationValue)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Paid Amount:</span>
                <span className="font-medium">{formatCurrency(data.paid)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Balance:</span>
                <span className="font-medium">{formatCurrency(data.balance)}</span>
              </div>
            </div>
          </div>
        </SummaryCard>

        {/* Timeline Summary */}
        <SummaryCard title="Timeline">
          <div className="space-y-3">
            <TimelineItem 
              label="Application" 
              date={data.applicationDate} 
              completed={!!data.applicationDate}
            />
            <TimelineItem 
              label="Agreement" 
              date={data.agreementDate} 
              completed={!!data.agreementDate}
            />
            <TimelineItem 
              label="Registration" 
              date={data.registrationDate} 
              completed={!!data.registrationDate}
            />
            <TimelineItem 
              label="Possession" 
              date={data.possessionDate} 
              completed={!!data.possessionDate}
            />
          </div>
        </SummaryCard>

        {/* Contact Summary */}
        <SummaryCard title="Contact Details">
          <div className="space-y-2">
            <ContactItem 
              label="Customer" 
              value={data.customerName}
              subValue={data.mobilePrimary} 
              type="phone"
            />
            <ContactItem 
              label="Email" 
              value={data.emailPrimary}
              type="email" 
            />
            <ContactItem 
              label="Sales Manager" 
              value={data.salesManager}
              type="text" 
            />
            <ContactItem 
              label="Channel Partner" 
              value={data.channelPartnerName}
              type="text" 
            />
          </div>
        </SummaryCard>
      </div>
    </div>
  );
};

interface SummaryCardProps {
  title: string;
  children: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white/50 backdrop-blur-xs rounded-xl border shadow-subtle p-4 transition-all duration-300 hover:shadow-md">
      <h3 className="text-base font-medium mb-3 pb-2 border-b">{title}</h3>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

interface ProgressItemProps {
  label: string;
  value: number;
  total: number;
  color: string;
}

const ProgressItem: React.FC<ProgressItemProps> = ({ 
  label, 
  value, 
  total,
  color 
}) => {
  const percentage = (value / total) * 100;
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full transition-all duration-500", color)} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

interface TimelineItemProps {
  label: string;
  date: string;
  completed: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  label, 
  date, 
  completed 
}) => {
  return (
    <div className="flex items-center">
      <div className={cn(
        "w-4 h-4 rounded-full mr-3 flex-shrink-0",
        completed ? "bg-green-500" : "bg-muted border border-muted-foreground/20"
      )}>
        {completed && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className="flex justify-between w-full text-sm">
        <span className="font-medium">{label}:</span>
        <span className={cn(
          completed ? "text-foreground" : "text-muted-foreground"
        )}>
          {date ? formatDate(date) : "Pending"}
        </span>
      </div>
    </div>
  );
};

interface ContactItemProps {
  label: string;
  value: string;
  subValue?: string;
  type: 'phone' | 'email' | 'text';
}

const ContactItem: React.FC<ContactItemProps> = ({ 
  label, 
  value,
  subValue,
  type 
}) => {
  return (
    <div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="font-medium">
        {value || 'N/A'}
        {subValue && type === 'phone' && (
          <a href={`tel:${subValue}`} className="ml-2 text-sm text-primary hover:underline">
            {subValue}
          </a>
        )}
      </div>
      {type === 'email' && value && (
        <a href={`mailto:${value}`} className="text-sm text-primary hover:underline">
          {value}
        </a>
      )}
    </div>
  );
};

// Helper functions
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateString: string): string => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
};

export default ProjectSummary;
