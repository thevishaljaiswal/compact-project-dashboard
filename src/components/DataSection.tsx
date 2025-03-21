
import React, { useState } from 'react';
import { ProjectData, FieldData } from '@/lib/types';
import { cn } from '@/lib/utils';
import DataField from './DataField';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Edit } from 'lucide-react';

interface DataSectionProps {
  title: string;
  fields: FieldData[];
  data: ProjectData;
  onEdit: (sectionTitle: string) => void;
}

const DataSection: React.FC<DataSectionProps> = ({ 
  title, 
  fields, 
  data,
  onEdit
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Show only the first 6 fields when collapsed
  const visibleFields = isExpanded ? fields : fields.slice(0, 6);
  const hasMoreFields = fields.length > 6;

  return (
    <div 
      className={cn(
        "bg-white/60 backdrop-blur-xs rounded-xl border shadow-subtle mb-6 transition-all duration-300",
        "hover:shadow-md section-transition"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onEdit(title)}
            className="h-8 px-2 text-muted-foreground hover:text-foreground"
          >
            <Edit className="h-4 w-4 mr-1" />
            <span className="text-sm">Edit</span>
          </Button>
          {hasMoreFields && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleExpand}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">Less</span>
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">More</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="field-grid">
          {visibleFields.map((field) => (
            <DataField 
              key={field.key} 
              field={field} 
              value={data[field.key]} 
            />
          ))}
        </div>
        
        {!isExpanded && hasMoreFields && (
          <div className="mt-2 text-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleExpand}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              <ChevronDown className="h-4 w-4 mr-1" />
              Show all {fields.length} fields
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataSection;
