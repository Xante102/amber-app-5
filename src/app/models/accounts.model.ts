export class Account {
  _id: string;
  accNumber: number;
  bank: string;
  branch: string;
  accType: string;
  status: boolean;
  studentId: string;

  constructor(_id: string, accNumber: number, bank: string, branch: string, accType:string, status: boolean, studentId: string) {
    this._id = _id;
    this.accNumber = accNumber;
    this.bank = bank;
    this.branch = branch;
    this.accType = accType;
    this.status = status;
    this.studentId = studentId;
  }

 
}