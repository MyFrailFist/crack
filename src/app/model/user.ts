// class Address {
//     unit: string;
//     estate: string;
//     block: string;
//     country: string;
//     province: string;
//     region: string;

//     constructor(unit, estate, block, country, province, region){
//         this.unit = unit;
//         this.estate = estate;
//         this.block = block;
//         this.country = country;
//         this.province = province;
//         this.region = region;
//     }
// }
interface Address {
    estate: string,
    country: string,
    unit: string,
    block: string
}


export class User {
	$key:string;
    id: number;
    name: string;
    //country: string;
    address: Address;
    //unit: string;
    //estate: string;
    //block: string;
    phoneNumber:number;
    email: string;
    resident: boolean;
    propertyManager: boolean;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    onBoard: false;
    timeStamp: number;

    fitbitToken: string;

    constructor(){
        this.address = {
            estate: "LALALALALALAnd",
            country: "WOnderland",
            unit: "unitOfOpera",
            block : "1231^323"
        }
    }
}


// export class User {
//     constructor(
//   public $key:string,
//     public id: number,
//     public name: string,
//     public email: string,
//     public country:string,
//     public username: string,
//     public password: string,
//     public firstName: string,
//     public lastName: string,
//     public onBoard: false,
//     public timeStamp: number,
//     ){}
// }