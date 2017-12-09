interface myDate{
	startDate: number;
	endDate: number;
	dateCreated: Object;
}

interface Color{
	primary: string;
	secondary: string;
}
 
export class userEvent{

	$key: string;
	id: string;
	date: myDate;
	title: string;
	description: string;
	color: Color;
	// reminder: boolean;
	draggable: boolean = true;
 	resizable: {
	    beforeStart: boolean, 
	    afterEnd: boolean
	}
	// timeBeforeReminder: number[] = [ 24, 12, 6, 4, 1, 0.5, 0.25 ];
	// reminderDuration: number;

	constructor(title: string, description: string){
		this.title = title
		this.description = description
		// this.reminderDuration = this.timeBeforeReminder[reminderChosen]
		// this.reminder = reminder
		this.date = {
			startDate: new Date().getTime(),
			endDate: new Date().getTime(),
			dateCreated: null
		}
	}
}