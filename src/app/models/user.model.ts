export class User  {
   fullName: string;

  constructor(
    public email: string,
    public password: string
  ) {}


  get getEmail(): string {
    return this.email;
  }

  get getPassword(): string {
    return this.password;
  }
}
