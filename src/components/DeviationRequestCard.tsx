
import React from 'react';
import { DeviationRequest, DeviationType, DeviationStatus } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { AlertCircle, Clock, CheckCircle, XCircle } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DeviationRequestCardProps {
  request: DeviationRequest;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  canApprove: boolean;
}

const DeviationRequestCard: React.FC<DeviationRequestCardProps> = ({
  request,
  onApprove,
  onReject,
  canApprove
}) => {
  const getTypeLabel = (type: DeviationType): string => {
    switch (type) {
      case 'registration':
        return 'Registration Deviation';
      case 'possession':
        return 'Possession Deviation';
      case 'interest-waiver':
        return 'Interest Waiver';
      default:
        return 'Unknown Deviation';
    }
  };

  const getStatusIcon = () => {
    switch (request.status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  const getStatusBadge = () => {
    switch (request.status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <CardTitle className="text-lg">{getTypeLabel(request.type)}</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
        <CardDescription>
          Requested on {formatDate(request.requestDate)} by {request.requestedBy}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div>
            <h4 className="font-medium text-sm">Reason</h4>
            <p className="text-sm text-gray-600">{request.reason}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm">Details</h4>
            <p className="text-sm text-gray-600">{request.details}</p>
          </div>
          
          {request.status === 'approved' && (
            <div className="mt-2 p-2 bg-green-50 rounded-md">
              <p className="text-xs text-gray-600">
                <span className="font-medium">Approved by:</span> {request.approvedBy}
              </p>
              <p className="text-xs text-gray-600">
                <span className="font-medium">Date:</span> {formatDate(request.approvedDate || '')}
              </p>
              {request.approvalNotes && (
                <p className="text-xs text-gray-600">
                  <span className="font-medium">Notes:</span> {request.approvalNotes}
                </p>
              )}
            </div>
          )}
          
          {request.status === 'rejected' && (
            <div className="mt-2 p-2 bg-red-50 rounded-md">
              <p className="text-xs text-gray-600">
                <span className="font-medium">Rejected by:</span> {request.rejectedBy}
              </p>
              <p className="text-xs text-gray-600">
                <span className="font-medium">Date:</span> {formatDate(request.rejectedDate || '')}
              </p>
              {request.rejectionReason && (
                <p className="text-xs text-gray-600">
                  <span className="font-medium">Reason:</span> {request.rejectionReason}
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>
      
      {request.status === 'pending' && canApprove && (
        <CardFooter className="flex justify-end space-x-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-red-600 border-red-200 hover:bg-red-50"
            onClick={() => onReject(request.id)}
          >
            Reject
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="text-green-600 border-green-200 hover:bg-green-50"
            onClick={() => onApprove(request.id)}
          >
            Approve
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default DeviationRequestCard;
