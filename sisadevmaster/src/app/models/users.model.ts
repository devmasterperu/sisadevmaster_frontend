export interface UsersModel {
  // Solamente declaras las variables que vas a Mapear (variables de envio de data)
  name: string;
  lastName: string;
  documentTypeId: number;
  documentNumber: string;
  email: string;
  dateOfBirth: string;
  organizationType: string;
  organizationName: string;
  locationId: number;
  homeAdress: string;
  gender: string;
  phoneNumber1: string;
  phoneNumber2: string;
  userTypeId: number;
}
