export class Contacts {
    Id:number;
    Firstname:string;
    Lastname:string;
    Gender:string;
    DOB:string;
    Emailid:string;
    Phone:string;
    City:string;
    State:string;
    Country:string;
    Picture:string;

    constructor(Id:number,Firstname:string,Lastname:string,Gender:string,DOB:string,Emailid:string,Phone:string,City:string,State:string,Country:string,Picture:string){
        this.Id=Id;
        this.Firstname=Firstname;
        this.Lastname=Lastname;
        this.Gender=Gender;
        this.DOB=DOB;
        this.Emailid=Emailid;
        this.Phone=Phone;
        this.City=City;
        this.State=State;
        this.Country=Country;
        this.Picture=Picture;
    }
}
