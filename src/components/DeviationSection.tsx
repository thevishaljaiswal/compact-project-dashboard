
import React from 'react';
import { DeviationRequest, ProjectData } from '@/lib/types';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, FilePlus } from 'lucide-react';

interface DeviationSectionProps {
  data: ProjectData;
}

const DeviationSection: React.FC<DeviationSectionProps> = ({ data }) => {
  const deviationRequests = data.deviationRequests || [];
  const pendingCount = deviationRequests.filter(r => r.status === 'pending').length;
  
  const getRecentRequests = (): DeviationRequest[] => {
    // Sort by date and get the 3 most recent
    return [...deviationRequests]
      .sort((a, b) => new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime())
      .slice(0, 3);
  };
  
  const getTypeLabel = (type: string): string => {
    switch (type) {
      case 'registration':
        return 'Registration';
      case 'possession':
        return 'Possession';
      case 'interest-waiver':
        return 'Interest Waiver';
      default:
        return type;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
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
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Deviation Requests</CardTitle>
          <div className="flex gap-2">
            {pendingCount > 0 && (
              <Badge variant="outline" className="flex items-center gap-1 bg-yellow-50 text-yellow-700 border-yellow-200">
                <AlertCircle className="h-3 w-3" />
                {pendingCount} Pending
              </Badge>
            )}
            <Link to="/deviations">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {deviationRequests.length > 0 ? (
          <div className="space-y-3">
            {getRecentRequests().map((request) => (
              <div 
                key={request.id} 
                className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-sm">{getTypeLabel(request.type)} Deviation</p>
                  <p className="text-xs text-muted-foreground truncate max-w-[300px]">{request.reason}</p>
                </div>
                {getStatusBadge(request.status)}
              </div>
            ))}
            
            {deviationRequests.length > 3 && (
              <div className="text-center text-sm text-muted-foreground pt-2">
                <Link to="/deviations" className="hover:underline">
                  View all {deviationRequests.length} deviation requests
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-3">No deviation requests yet</p>
            <Link to="/deviations">
              <Button variant="outline" size="sm" className="gap-2">
                <FilePlus className="h-4 w-4" />
                Create New Request
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DeviationSection;
