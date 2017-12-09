import * as firebase from "firebase";

export class Upload {

	$key: string;
	file: File;
	nameRefToStorage: string;
	size: [number, string];
	name: string;
	url: string;
	extension: string;
	progress: number;
	createdOn: Object;
	userFileLibraryItem: boolean;

	constructor(file: File){
		this.file = file;
		this.createdOn = firebase.database.ServerValue.TIMESTAMP;
		this.userFileLibraryItem = true;

		//Used to reference to firebase Storage
		this.nameRefToStorage = file.name

		//Used for display
		let splitName: string[] = file.name.split(".");
		this.extension = ".".concat(splitName[splitName.length-1]);
		this.name = file.name.replace(this.extension, "");

		if(file.size < 1024){
			this.size = [file.size,"B"];
		} else if (file.size >= 1024 && file.size < 1024**2) {
			let sizeInKB = Math.round(file.size/1024);
			this.size = [ sizeInKB, " KB"];
		} else if (file.size >= 1024**2 && file.size < 1024**3) {
			let sizeInMB = Math.round(file.size/(1024**2))
			this.size = [ sizeInMB, " MB"];
		} else if (file.size >= 1024**3 && file.size < 1024**4) {
			let sizeInGB = Math.round(file.size/(1024**3))
			this.size = [ sizeInGB, "GB"];
		} else if (file.size >= 1024**4) {
			let sizeInTB = Math.round(file.size/(1024**4))
			this.size = [ sizeInTB, "TB"];
		}
	}
}
