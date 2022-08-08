export class Student {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  cohort: number;
  // results: any;

  constructor(_id?: string, name?: string, email?: string, phoneNumber?: number, cohort?: number) {
    this._id = _id!;
    this.name = name!;
    this.email = email!;
    this.phoneNumber = phoneNumber!;
    this.cohort = cohort!;
  }
}
