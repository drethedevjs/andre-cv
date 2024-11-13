export interface JobProps {
  id: number;
  company_name: string;
  position: string,
  yearRange: string;
  position_details: Array<PositionDetails>;
  isRemote: boolean;
};

export interface PositionDetails {
  id: number;
  description: string;
  position_id: number;
}