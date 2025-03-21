
import React, { useState } from 'react';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectSummary from '@/components/ProjectSummary';
import DataSection from '@/components/DataSection';
import EditButton from '@/components/EditButton';
import EditForm from '@/components/EditForm';
import { sampleProjectData, projectSections } from '@/lib/data';
import { ProjectData } from '@/lib/types';

const Index = () => {
  const [projectData, setProjectData] = useState<ProjectData>(sampleProjectData);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | undefined>(undefined);

  const handleOpenEditForm = (sectionTitle?: string) => {
    setCurrentSection(sectionTitle);
    setIsEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
    setCurrentSection(undefined);
  };

  const handleSaveData = (updatedData: ProjectData) => {
    setProjectData(updatedData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/50">
      <div className="container mx-auto py-6 px-4 sm:px-6">
        <div className="flex justify-end mb-4">
          <EditButton onClick={() => handleOpenEditForm()} />
        </div>
        
        <ProjectHeader data={projectData} />
        
        <ProjectSummary data={projectData} />
        
        <div className="space-y-6 mb-10">
          {projectSections.map((section, index) => (
            <DataSection
              key={index}
              title={section.title}
              fields={section.fields}
              data={projectData}
              onEdit={(sectionTitle) => handleOpenEditForm(sectionTitle)}
            />
          ))}
        </div>
        
        <EditForm
          isOpen={isEditFormOpen}
          onClose={handleCloseEditForm}
          data={projectData}
          sections={projectSections}
          currentSection={currentSection}
          onSave={handleSaveData}
        />
      </div>
      
      <footer className="py-6 border-t bg-white/50 backdrop-blur-xs">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Property Management System
        </div>
      </footer>
    </div>
  );
};

export default Index;
