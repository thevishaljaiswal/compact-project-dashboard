
import React, { useState } from 'react';
import { ProjectData, SectionData, FieldData } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Save, X } from 'lucide-react';

interface EditFormProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectData;
  sections: SectionData[];
  currentSection?: string;
  onSave: (updatedData: ProjectData) => void;
}

const EditForm: React.FC<EditFormProps> = ({ 
  isOpen, 
  onClose, 
  data, 
  sections,
  currentSection,
  onSave 
}) => {
  const [formData, setFormData] = useState<ProjectData>(data);
  const [activeTab, setActiveTab] = useState<string>(
    currentSection ? 
    sections.findIndex(section => section.title === currentSection).toString() : 
    "0"
  );

  const handleInputChange = (key: keyof ProjectData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    toast.success('Project details updated successfully');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Project Details</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-start mb-4">
              {sections.map((section, index) => (
                <TabsTrigger 
                  key={index} 
                  value={index.toString()}
                  className="mb-1 mr-1"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {sections.map((section, sectionIndex) => (
              <TabsContent 
                key={sectionIndex} 
                value={sectionIndex.toString()}
                className="form-section space-y-6 animate-fade-in"
              >
                <h3 className="text-lg font-medium mb-4">{section.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.fields.map((field) => (
                    <FormField
                      key={field.key}
                      field={field}
                      value={formData[field.key]}
                      onChange={(value) => handleInputChange(field.key, value)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface FormFieldProps {
  field: FieldData;
  value: any;
  onChange: (value: any) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: any = e.target.value;
    
    // Convert value types
    if (field.type === 'number' || field.type === 'currency' || field.type === 'percentage') {
      newValue = e.target.value === '' ? '' : Number(e.target.value);
    }
    
    onChange(newValue);
  };

  const handleCheckboxChange = (checked: boolean) => {
    onChange(checked);
  };

  // Render different input types based on field type
  switch (field.type) {
    case 'boolean':
      return (
        <div className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id={field.key} 
              checked={value === true} 
              onCheckedChange={handleCheckboxChange} 
            />
            <label
              htmlFor={field.key}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {value ? 'Yes' : 'No'}
            </label>
          </div>
        </div>
      );
    
    case 'date':
      return (
        <div className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input 
            id={field.key}
            type="date" 
            value={value || ''} 
            onChange={handleChange} 
            className="w-full"
          />
        </div>
      );
    
    case 'number':
    case 'currency':
    case 'percentage':
      return (
        <div className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input 
            id={field.key}
            type="number" 
            value={value || ''} 
            onChange={handleChange}
            className="w-full"
            min={0}
            step={field.type === 'percentage' ? '0.01' : '1'}
          />
        </div>
      );
    
    case 'email':
      return (
        <div className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input 
            id={field.key}
            type="email" 
            value={value || ''} 
            onChange={handleChange} 
            className="w-full"
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        </div>
      );
    
    case 'phone':
      return (
        <div className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input 
            id={field.key}
            type="tel" 
            value={value || ''} 
            onChange={handleChange} 
            className="w-full"
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        </div>
      );
    
    default:
      return (
        <div className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input 
            id={field.key}
            type="text" 
            value={value || ''} 
            onChange={handleChange} 
            className="w-full"
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        </div>
      );
  }
};

export default EditForm;
