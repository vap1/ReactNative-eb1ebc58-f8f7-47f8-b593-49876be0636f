
export interface Opportunity {
  opportunityId: string;
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string[];
}

export interface OpportunityDetails {
  // Define the fields for opportunity details here
}

export interface OpportunityResponse {
  success: boolean;
  errorMessage?: string;
}