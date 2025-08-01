
import React, { useState } from 'react';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectSummary from '@/components/ProjectSummary';
import DataSection from '@/components/DataSection';
import EditButton from '@/components/EditButton';
import EditForm from '@/components/EditForm';
import CustomerDetailsCard from '@/components/CustomerDetailsCard';
import DeviationSection from '@/components/DeviationSection';
import RecentTicketsSection from '@/components/RecentTicketsSection';
import CashbackKPISection from '@/components/CashbackKPISection';
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

  // Filter out the sections we're displaying separately in cards
  const filteredSections = projectSections.filter(section => 
    !['Customer Information', 'Children Information', 'Bank Details'].includes(section.title)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/50">
      <div className="container mx-auto py-6 px-4 sm:px-6">
        <div className="flex justify-end mb-4">
          <EditButton onClick={() => handleOpenEditForm()} />
        </div>
        
        {/* Recent Tickets Section - Added at the top */}
        <RecentTicketsSection data={projectData} />
        
        {/* Cashback KPI Section - Added after tickets */}
        <CashbackKPISection data={projectData} />
        
        <ProjectHeader data={projectData} />
        
        <ProjectSummary data={projectData} />
        
        {/* Deviation Section */}
        <DeviationSection data={projectData} />
        
        {/* Customer Details Cards */}
        <CustomerDetailsCard 
          data={projectData}
          onEdit={handleOpenEditForm}
        />
        
        <div className="space-y-6 mb-10">
          {filteredSections.map((section, index) => (
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
