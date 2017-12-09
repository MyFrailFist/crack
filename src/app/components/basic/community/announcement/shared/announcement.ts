

interface Address{
	estate: string;
	block:string;
	unit: string;
	country: string;
}

export class Announcement {
	$key: string;
	refToUserAnnct: string;
	refToOtherAnnct: string;
	title: string;
	content: string;
	date: Object;
	scope: string;
	address: Address;
	userId: string;
	userName: string;
	approved: boolean;

	constructor(title: string, html: string, userId: string, userName: string, address: any, scope: string){
		this.title = title;
		this.content = html;
		this.userId = userId;
		this.userName = userName;
		this.address = address;
		this.scope = scope;
	}
}