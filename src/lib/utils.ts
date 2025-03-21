
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
}

export function maskSensitiveData(data: string, type: 'pan' | 'aadhar' | 'account' | 'phone'): string {
  if (!data) return 'N/A';
  
  switch (type) {
    case 'pan':
      // Show last 4 characters of PAN
      return data.length > 4 ? `XXXXX${data.slice(-4)}` : data;
    case 'aadhar':
      // Show last 4 digits of Aadhar
      return data.length > 4 ? `XXXX-XXXX-XXXX-${data.slice(-4)}` : data;
    case 'account':
      // Show last 4 digits of account number
      return data.length > 4 ? `XXXXX${data.slice(-4)}` : data;
    case 'phone':
      // Show last 4 digits of phone number
      return data.length > 4 ? `XXXXXX${data.slice(-4)}` : data;
    default:
      return data;
  }
}

export function calculateAge(dob: string): number {
  if (!dob) return 0;
  
  const birthDate = new Date(dob);
  if (isNaN(birthDate.getTime())) return 0;
  
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}
