import { Job } from './job';

export const JOBS: Job[] = [
{ id: 1,
  clientName: {
    firstName: 'Rick',
    lastName: 'Sanchez'
  },
  jobAddress: {
    street: '1245 Rick & Morty Rd',
    city: 'Schezwan',
    zipCode: 23411
  },
  status: 'not started',
  created: new Date(2019, 10, 4)
},
{ id: 2,
  clientName: {
    firstName: 'Sponge',
    lastName: 'Bob'
  },
  jobAddress: {
    street: '1223 Bikini Bottom Rd.',
    city: 'Bikini Bottom',
    zipCode: 82838
  },
  status: 'in progress',
  created: new Date(2019, 4, 23)
},
{ id: 3,
  clientName: {
    firstName: 'Yeet',
    lastName: 'Yeeters'
  },
  jobAddress: {
    street: '445 Yeeters Rd.',
    city: 'YeetNation',
    zipCode: 40204
  },
  status: 'done',
  created: new Date(2019, 10, 4)
}
]
