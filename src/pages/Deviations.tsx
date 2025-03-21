
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeviationManager from '@/components/DeviationManager';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { sampleProjectData } from '@/lib/data';
import { ProjectData } from '@/lib/types';

const Deviations = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = React.useState<ProjectData>(sampleProjectData);

  const handleUpdateData = (updatedData: ProjectData) => {
    setProjectData(updatedData);
    // In a real application, you would save this to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/50">
      <div className="container mx-auto py-6 px-4 sm:px-6">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Project
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">{projectData.projectName}</h1>
          <p className="text-muted-foreground">
            {projectData.building} - Flat {projectData.flatUnitNo}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <DeviationManager
            data={projectData}
            onUpdateData={handleUpdateData}
            currentUserName="John Doe" // In a real app, this would come from auth
            isAdmin={true} // In a real app, this would be determined by user role
          />
        </div>
      </div>
      
      <footer className="py-6 border-t bg-white/50 backdrop-blur-xs">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Property Management System
        </div>
      </footer>
    </div>
  );
};

export default Deviations;
