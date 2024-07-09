import UpcomingAppointments from '../screens/UpcomingAppointments';

export const AppointmentTobTabOptions = [
  {key: 'first', title: 'Upcoming', component: UpcomingAppointments},
  {key: 'second', title: 'Past', component: UpcomingAppointments},
];

export const appointmentsStaticData = [
  {
    uuid: 'c17b3f63-f221-4381-9cdb-5a1abc329c99',
    patientId: '50bcd50a-05dd-42ce-aac7-3e028b7c49d4',
    providerId: '9ec96bf0-c62f-4f26-b550-87b5a658b000',
    appointmentId: '0989af9b-072e-4ce8-b20b-91d73b152666',
    day: 'Saturday',
    date: '2024-06-22T00:00:00.000Z',
    start: '04:00 PM',
    end: '04:30 PM',
    locationId: '5d0b50bd-44de-456c-b5d8-c4492172ea88',
    complaints: null,
    status: 'Checked_In',
    appointmentType: 'New_Appointment',
    mode: 'In_Person',
    Appointment: {
      uuid: '0989af9b-072e-4ce8-b20b-91d73b152666',
      appointmentType: 'New_Appointment',
      appointmentCount: null,
      mode: 'In_Person',
      startDate: '2024-05-22T13:00:00.000Z',
      endDate: '2024-06-23T13:00:00.000Z',
    },
    Provider: {
      uuid: '9ec96bf0-c62f-4f26-b550-87b5a658b000',
      firstName: 'Amelia',
      lastName: 'West',
      profilePicture:
        'https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=1024x1024&w=is&k=20&c=9dGjXLWwRAimcACr0jOZDmmLcH0P29fi2ibKunQ6xpo=',
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    Patient: {
      uuid: '50bcd50a-05dd-42ce-aac7-3e028b7c49d4',
      firstName: 'Akshay',
      lastName: 'Bodakhe',
      gender: 'male',
      mobileNumber: 9850092098,
      homeNumber: 0,
      dob: '2001-07-30T08:15:00.000Z',
      profilePicture:
        'https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=1024x1024&w=is&k=20&c=9dGjXLWwRAimcACr0jOZDmmLcH0P29fi2ibKunQ6xpo=',
      email: 'akshaybodakhe123@gmail.com',
    },
    Locations: {
      uuid: '5d0b50bd-44de-456c-b5d8-c4492172ea88',
      name: 'Baner',
    },
    color: '#FF7F7F',
  },
];
