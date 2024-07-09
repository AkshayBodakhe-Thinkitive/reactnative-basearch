import { formatDate } from "../../../utils/DateUtils";

export const PatientProfileData =  {
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
  }


  export const personalDetailsFields = [
    {key: 'mobileNumber', title: 'Contact Number'},
    {key: 'email', title: 'Email Id'},
    {key: 'homeNumber', title: 'Phone Number'},
    {key: 'gender', title: 'Gender'},
    {key: 'dob', title: 'Date Of Birth', formatter: formatDate},
  ];