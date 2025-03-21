
import React from 'react';
import { useForm } from 'react-hook-form';
import { DeviationType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DeviationFormData {
  type: DeviationType;
  reason: string;
  details: string;
}

interface NewDeviationRequestFormProps {
  onSubmit: (data: DeviationFormData) => void;
  onCancel: () => void;
}

const NewDeviationRequestForm: React.FC<NewDeviationRequestFormProps> = ({
  onSubmit,
  onCancel
}) => {
  const form = useForm<DeviationFormData>({
    defaultValues: {
      type: 'registration',
      reason: '',
      details: ''
    }
  });

  const handleSubmit = (data: DeviationFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deviation Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select deviation type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="registration">Registration Deviation</SelectItem>
                  <SelectItem value="possession">Possession Deviation</SelectItem>
                  <SelectItem value="interest-waiver">Interest Waiver</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for Request</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter reason for the deviation request" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Provide detailed explanation for the deviation request"
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            Submit Request
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewDeviationRequestForm;
