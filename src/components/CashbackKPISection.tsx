
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Calendar, Trophy } from 'lucide-react';
import { ProjectData, CashbackKPI } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface CashbackKPISectionProps {
  data: ProjectData;
}

const CashbackKPISection: React.FC<CashbackKPISectionProps> = ({ data }) => {
  const achievedCount = data.cashbackKPIs.filter(kpi => kpi.isAchieved).length;
  const totalReward = data.cashbackKPIs
    .filter(kpi => kpi.isAchieved)
    .reduce((sum, kpi) => sum + (kpi.reward || 0), 0);

  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <h2 className="text-xl font-semibold">Cashback Rewards</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">
            {achievedCount} of {data.cashbackKPIs.length} achieved
          </div>
          {totalReward > 0 && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Earned: {formatCurrency(totalReward)}
            </Badge>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.cashbackKPIs.map((kpi, index) => (
          <CashbackKPICard key={index} kpi={kpi} />
        ))}
      </div>
    </div>
  );
};

interface CashbackKPICardProps {
  kpi: CashbackKPI;
}

const CashbackKPICard: React.FC<CashbackKPICardProps> = ({ kpi }) => {
  const isOverdue = !kpi.isAchieved && kpi.deadline && new Date(kpi.deadline) < new Date();

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-md",
      kpi.isAchieved 
        ? "bg-green-50 border-green-200" 
        : isOverdue 
          ? "bg-red-50 border-red-200" 
          : "bg-amber-50 border-amber-200"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {kpi.isAchieved ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <Clock className="h-5 w-5 text-amber-600" />
            )}
            <CardTitle className="text-sm font-medium leading-tight">
              {kpi.title}
            </CardTitle>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {kpi.description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2">
          {kpi.reward && (
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Reward:</span>
              <span className="text-sm font-semibold text-amber-600">
                {formatCurrency(kpi.reward)}
              </span>
            </div>
          )}
          
          {kpi.isAchieved ? (
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3 text-green-600" />
              <span className="text-xs text-green-600">
                Completed: {formatDate(kpi.completedDate || '')}
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              <span className={cn(
                "text-xs",
                isOverdue ? "text-red-600" : "text-muted-foreground"
              )}>
                Due: {formatDate(kpi.deadline || '')}
              </span>
            </div>
          )}
          
          <Badge 
            variant={kpi.isAchieved ? "default" : isOverdue ? "destructive" : "secondary"}
            className="w-full justify-center text-xs"
          >
            {kpi.isAchieved 
              ? "Achieved" 
              : isOverdue 
                ? "Overdue" 
                : "Pending"
            }
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CashbackKPISection;
