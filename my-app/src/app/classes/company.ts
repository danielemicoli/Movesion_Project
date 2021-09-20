export class Company {
   id: number;
    name: string;
   address: string;
   phone: string;
   revenue: string;

   constructor(id:number, name:string, address:string, phone:string, revenue:string){
       this.id = id
       this.name = name;
       this.address = address;
       this.phone = phone;
       this.revenue = revenue;

   }

}
