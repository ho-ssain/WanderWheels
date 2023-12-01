const BASE_URL = 'https://freeapi.miniprojectideas.com/api/ZoomCar/';

export const GetAllCars_URL = BASE_URL + 'GetAllCars';
export const GetAllCarsByOwnerId_URL = BASE_URL + 'GetAllCarsByOwnerId?id=';
export const GetAllCarsByLocation = BASE_URL + 'GetAllCarsByLocation?id=';
export const searchCarByLocation = BASE_URL + 'searchCarByLocation?query=';
export const GetCarById = BASE_URL + 'GetCarById?id=';
export const AddNewCar = BASE_URL + 'addNewCar';
export const UpdateCar = BASE_URL + 'UpdateCar';
export const DeleteCarById = BASE_URL + 'DeleteCarById?id=';
export const GetAllLocations = BASE_URL + 'GetAllLocations';
export const AddBulkLocations = BASE_URL + 'AddBulkLocations';
export const DeleteLocationById = BASE_URL + 'DeleteLocationById?id=';
export const GetAllUsers = BASE_URL + 'GetAllUsers';
export const GetUserByUserId = BASE_URL + 'GetUserByUserId?userId=';
export const Login = BASE_URL + 'Login';
export const AddNewUser = BASE_URL + 'AddNewUser';
export const UpdateUser = BASE_URL + 'UpdateUser';
export const DeleteUserByUserId = BASE_URL + 'DeleteUserByUserId?userId=';
export const GetAllBookings = BASE_URL + 'GetAllBookings';
export const GetAllBookingsByCarId = BASE_URL + 'GetAllBookingsByCarId?carid=';
export const GetAllBookingsByCustomerId =
  BASE_URL + 'GetAllBookingsByCustomerId';
export const GetBookingById = BASE_URL + 'GetBookingById';
export const createNewBooking = BASE_URL + 'createNewBooking';
export const updateBooking = BASE_URL + 'updateBooking';
export const DeleteBookingById = BASE_URL + 'DeleteBookingById';
export const GetAllReviewByCarId = BASE_URL + 'GetAllReviewByCarId';
export const AddReview = BASE_URL + 'AddReview';
