import { ImagePath } from "../../../constants/ImagePaths";
import { AppNavConstants } from "../../../constants/NavConstants";

export const homeScreenOptionsdata = [
    {
      id: 1,
      imagePath: ImagePath.bookAppointmentImage,
      navigateTo: AppNavConstants.PROVIDER_LIST,
    },
    {
      id: 2,
      imagePath: ImagePath.InstantVideoConsultImage,
    //   navigateTo: AppNavConstants.INSTANT_CONSULT,
    },
    {
      id: 3,
      imagePath: ImagePath.upcomingAppointmentImage,
    //   navigateTo: BottomNavConstants.APPOINTMENT,
    },
    {
      id: 4,
      imagePath: ImagePath.vitalicon,
    //   navigateTo: AppNavConstants.VITALS,
    },
    {
      id: 5,
      imagePath: ImagePath.labTestImage,
    //   navigateTo: AppNavConstants.MEDICAL_REPORT,
    },
    {
      id: 6,
      imagePath: ImagePath.insuranceImage,
    //   navigateTo: AppNavConstants.INSURANCE_PAGE,
    },
  ];

  export const staticProvidersList = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      averageRating: 4.5,
      provider_speciality_intermediate: [{speciality: {name: 'Cardiology'}}],
      imageUrl: 'https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=1024x1024&w=is&k=20&c=9dGjXLWwRAimcACr0jOZDmmLcH0P29fi2ibKunQ6xpo=',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      averageRating: 4.7,
      provider_speciality_intermediate: [{speciality: {name: 'Dermatology'}}],
      imageUrl: 'https://media.istockphoto.com/id/1433891420/photo/young-doctor-hospital-medical-medicine-health-care-clinic-office-portrait-glasses-man.jpg?s=612x612&w=0&k=20&c=aKpabWfXpyLy8zkAWnqdZa9ZDm7A5df_EZSpAmOyGB4=',
    },
    // Add more provider objects as needed
  ];
  