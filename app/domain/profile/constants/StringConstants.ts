import {formatDate} from '../../../utils/DateUtils';

export const PatientProfileData = {
  uuid: '50bcd50a-05dd-42ce-aac7-3e028b7c49d4',
  firstName: 'Akshay',
  lastName: 'Bodakhe',
  gender: 'male',
  mobileNumber: 9850092098,
  homeNumber: 8868362783,
  dob: '2001-07-30T08:15:00.000Z',
  profilePicture:
    'https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=1024x1024&w=is&k=20&c=9dGjXLWwRAimcACr0jOZDmmLcH0P29fi2ibKunQ6xpo=',
  email: 'akshaybodakhe123@gmail.com',
  maritalStatus : 'single'
};

export const personalDetailsFields = [
  {key: 'mobileNumber', title: 'Contact Number'},
  {key: 'email', title: 'Email Id'},
  {key: 'homeNumber', title: 'Phone Number'},
  {key: 'gender', title: 'Gender'},
  {key: 'dob', title: 'Date Of Birth', formatter: formatDate},
];

export const KEY_MAPPING_FAMILY = {
  firstName: 'First Name',
  lastName: 'Last Name',
  relationWithPatient: 'Relationship',
  contactNumber: 'Contact',
  email: 'Email',
  address: 'Address',
};

export const familyDataStatic = [
  {
    firstName: 'Ak',
    lastName: 'Bodakhe',
    relationWithPatient: 'Brother',
    contactNumber: '9850092098',
    email: 'aks@gmail.com',
    address: 'Pune',
  },
];

export const insuranceDataStatic = [
  {
    uuid: '34887fe7-c91d-490f-9517-a4a23bd2b00a',
    type: 'Primary',
    name: 'other',
    planName: 'Plan1',
    companyName: 'Company1',
    startDate: '2024-06-26T08:05:20.869Z',
    endDate: '2024-12-26T08:05:24.000Z',
    firstName: 'A',
    lastName: 'Bodakhe',
    patientRelationshipToInsured: 'Spouse',
    gender: 'Male',
    addressLine1: 'Baner',
    addressLine2: 'Pune',
    city: 'Pune',
    state: 'MH',
    country: 'India',
    zip: '411011',
    frontImage:
      'https://media.istockphoto.com/id/118089784/vector/medical-report-background.jpg?s=1024x1024&w=is&k=20&c=BFcMEnUJ2NI12v-n163ByFxNHXEWEP02Gzi087UCfCA=',
      backImage:
      'https://media.istockphoto.com/id/1209384246/photo/health-insurance-medical-card-concept-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=RvvBypdMjH0ey6NEhFT7UH48fe8_9wgDzl62PMTPdRc=',
    patientId: '50bcd50a-05dd-42ce-aac7-3e028b7c49d4',
    policyNumber: '123456',
    dob: '2024-06-26T08:14:08.814Z',
    primary: null,
  },
];


export const KEY_MAPPING_INSURANCE = {
  name: 'Insurance Name',
  policyNumber: 'Insurance Number',
  planName: 'Plan Name',
};


export const maritalStatusData = [
  {label: 'Married', value: 'married'},
  {label: 'Single', value: 'single'},
  {label: 'Divorced', value: 'divorced'},
  {label: 'Widowed', value: 'widowed'},
];

export const genderData = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'other'},
];