
import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EditButtonProps {
  onClick: () => void;
  className?: string;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick, className }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={cn(
        "h-9 bg-white/80 hover:bg-white transition-all duration-200",
        "border border-border/50 shadow-subtle hover:shadow-md",
        className
      )}
    >
      <Edit className="h-4 w-4 mr-2" />
      Edit Project
    </Button>
  );
};

export default EditButton;
