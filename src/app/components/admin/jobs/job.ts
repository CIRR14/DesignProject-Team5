export interface Job {
  id: number;
  clientName: {
    firstName: string,
    lastName: string
  };
  jobAddress: {
    street: string,
    city: string,
    zipCode: number
  };
  status: string;
  created: Date;
}
