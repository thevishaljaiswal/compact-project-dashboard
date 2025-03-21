
import React from 'react';
import { FieldData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Check, X, Phone, Mail } from 'lucide-react';

interface DataFieldProps {
  field: FieldData;
  value: any;
}

const DataField: React.FC<DataFieldProps> = ({ field, value }) => {
  const formattedValue = formatValue(value, field.type);
  
  return (
    <div className="field-item group">
      <div className="text-xs font-medium text-muted-foreground mb-1">
        {field.label}
      </div>
      <div className="flex items-center justify-between">
        <div className={cn(
          "font-medium text-foreground",
          value === null || value === undefined || value === '' ? "text-muted-foreground italic" : ""
        )}>
          {renderValueWithIcon(formattedValue, field.type)}
        </div>
      </div>
    </div>
  );
};

// Helper function to format different value types
const formatValue = (value: any, type: string): string | React.ReactNode => {
  if (value === null || value === undefined || value === '') {
    return 'N/A';
  }

  switch (type) {
    case 'currency':
      return formatCurrency(value);
    case 'percentage':
      return `${value}%`;
    case 'date':
      return formatDate(value);
    case 'boolean':
      return value === true ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />;
    case 'email':
    case 'phone':
      return value;
    default:
      return value.toString();
  }
};

// Render value with appropriate icon
const renderValueWithIcon = (value: any, type: string): React.ReactNode => {
  if (value === 'N/A') {
    return <span className="text-muted-foreground italic">N/A</span>;
  }

  if (type === 'boolean') {
    return value;
  }

  if (type === 'phone' && value !== 'N/A') {
    return (
      <div className="flex items-center">
        <Phone className="h-3 w-3 text-primary mr-1" />
        <a href={`tel:${value}`} className="hover:text-primary transition-colors">
          {value}
        </a>
      </div>
    );
  }

  if (type === 'email' && value !== 'N/A') {
    return (
      <div className="flex items-center">
        <Mail className="h-3 w-3 text-primary mr-1" />
        <a href={`mailto:${value}`} className="hover:text-primary transition-colors truncate max-w-[200px]">
          {value}
        </a>
      </div>
    );
  }

  return value;
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

export default DataField;
