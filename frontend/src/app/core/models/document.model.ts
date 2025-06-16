export interface Document {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  duration: string;
  organization?: string;
  description?: string;
}
