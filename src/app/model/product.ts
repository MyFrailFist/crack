export class Product {
	$key:string;
    merchantId: string;
    name: string;
    description: string;
    price:string;
    quantity: number;
    phoneNumber: string;
    image: File;
    imageName:string;
    imageUrl: string;
    date: string;
    createdAt: Date = new Date();

  //   constructor(image :File) {
  //   this.image = image;
  // }
}
