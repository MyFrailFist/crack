

interface Address{
	estate: string;
	block:string;
	unit: string;
}

export class Announcement {
	uid?: string;
	title: string;
	content: string;
	date: Date;
	scope: string;
	address: Address;
	userName?: string;
	approved: boolean;

	constructor(title: string, html: string, address: any, scope: string){
		this.title = title;
		this.content = html;
		this.address = address;
		this.scope = scope;
	}
}