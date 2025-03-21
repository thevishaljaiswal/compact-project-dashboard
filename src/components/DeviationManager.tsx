
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DeviationRequest, DeviationType, DeviationStatus, ProjectData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FilePlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DeviationRequestCard from './DeviationRequestCard';
import NewDeviationRequestForm from './NewDeviationRequestForm';

interface DeviationManagerProps {
  data: ProjectData;
  onUpdateData: (data: ProjectData) => void;
  currentUserName: string;
  isAdmin: boolean;
}

const DeviationManager: React.FC<DeviationManagerProps> = ({
  data,
  onUpdateData,
  currentUserName,
  isAdmin
}) => {
  const { toast } = useToast();
  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false);
  const [rejectionDialogOpen, setRejectionDialogOpen] = useState(false);
  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [approvalNotes, setApprovalNotes] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  // Ensure deviationRequests exists in data
  const deviationRequests = data.deviationRequests || [];

  const handleNewRequestSubmit = (formData: { type: DeviationType; reason: string; details: string }) => {
    const newRequest: DeviationRequest = {
      id: uuidv4(),
      type: formData.type,
      status: 'pending',
      requestDate: new Date().toISOString(),
      requestedBy: currentUserName,
      reason: formData.reason,
      details: formData.details
    };

    const updatedRequests = [...deviationRequests, newRequest];
    onUpdateData({
      ...data,
      deviationRequests: updatedRequests
    });

    setIsNewRequestOpen(false);
    toast({
      title: "Request Submitted",
      description: "Your deviation request has been submitted for approval.",
    });
  };

  const handleApproveRequest = (requestId: string) => {
    setSelectedRequestId(requestId);
    setApprovalDialogOpen(true);
  };

  const handleRejectRequest = (requestId: string) => {
    setSelectedRequestId(requestId);
    setRejectionDialogOpen(true);
  };

  const confirmApproval = () => {
    if (!selectedRequestId) return;

    const updatedRequests = deviationRequests.map(req => {
      if (req.id === selectedRequestId) {
        return {
          ...req,
          status: 'approved' as DeviationStatus,
          approvedBy: currentUserName,
          approvedDate: new Date().toISOString(),
          approvalNotes: approvalNotes
        };
      }
      return req;
    });

    onUpdateData({
      ...data,
      deviationRequests: updatedRequests
    });

    setApprovalDialogOpen(false);
    setApprovalNotes('');
    setSelectedRequestId(null);
    toast({
      title: "Request Approved",
      description: "The deviation request has been approved successfully.",
    });
  };

  const confirmRejection = () => {
    if (!selectedRequestId) return;

    const updatedRequests = deviationRequests.map(req => {
      if (req.id === selectedRequestId) {
        return {
          ...req,
          status: 'rejected' as DeviationStatus,
          rejectedBy: currentUserName,
          rejectedDate: new Date().toISOString(),
          rejectionReason: rejectionReason
        };
      }
      return req;
    });

    onUpdateData({
      ...data,
      deviationRequests: updatedRequests
    });

    setRejectionDialogOpen(false);
    setRejectionReason('');
    setSelectedRequestId(null);
    toast({
      title: "Request Rejected",
      description: "The deviation request has been rejected.",
    });
  };

  const filteredRequests = deviationRequests.filter(req => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return req.status === 'pending';
    if (activeTab === 'approved') return req.status === 'approved';
    if (activeTab === 'rejected') return req.status === 'rejected';
    if (activeTab === 'registration') return req.type === 'registration';
    if (activeTab === 'possession') return req.type === 'possession';
    if (activeTab === 'interest-waiver') return req.type === 'interest-waiver';
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Deviation Requests</h2>
        <Button 
          onClick={() => setIsNewRequestOpen(true)}
          className="gap-2"
        >
          <FilePlus className="h-4 w-4" />
          New Request
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-7 mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="registration">Registration</TabsTrigger>
          <TabsTrigger value="possession">Possession</TabsTrigger>
          <TabsTrigger value="interest-waiver">Interest Waiver</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          {filteredRequests.length > 0 ? (
            <div className="space-y-4">
              {filteredRequests.map(request => (
                <DeviationRequestCard
                  key={request.id}
                  request={request}
                  onApprove={handleApproveRequest}
                  onReject={handleRejectRequest}
                  canApprove={isAdmin}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              No deviation requests found.
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* New Request Dialog */}
      <Dialog open={isNewRequestOpen} onOpenChange={setIsNewRequestOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Deviation Request</DialogTitle>
            <DialogDescription>
              Fill out the form below to submit a new deviation request for approval.
            </DialogDescription>
          </DialogHeader>
          <NewDeviationRequestForm
            onSubmit={handleNewRequestSubmit}
            onCancel={() => setIsNewRequestOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Approval Dialog */}
      <AlertDialog open={approvalDialogOpen} onOpenChange={setApprovalDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Approve Deviation Request</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to approve this deviation request? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="mb-4">
            <label htmlFor="approvalNotes" className="block text-sm font-medium text-gray-700 mb-1">
              Approval Notes (Optional)
            </label>
            <Textarea
              id="approvalNotes"
              value={approvalNotes}
              onChange={(e) => setApprovalNotes(e.target.value)}
              placeholder="Add any notes or conditions for this approval"
              className="w-full"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmApproval}>Approve</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Rejection Dialog */}
      <AlertDialog open={rejectionDialogOpen} onOpenChange={setRejectionDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Deviation Request</AlertDialogTitle>
            <AlertDialogDescription>
              Please provide a reason for rejecting this deviation request.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="mb-4">
            <label htmlFor="rejectionReason" className="block text-sm font-medium text-gray-700 mb-1">
              Rejection Reason
            </label>
            <Textarea
              id="rejectionReason"
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Enter reason for rejection"
              className="w-full"
              required
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmRejection}
              className="bg-red-600 hover:bg-red-700"
              disabled={!rejectionReason.trim()}
            >
              Reject
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeviationManager;
