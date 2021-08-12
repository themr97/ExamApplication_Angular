export class options {
    id: number;
    option: string;
    answer: boolean;
    selected: boolean;

    constructor(data: any){
        data = data || {};
        this.id = data.id;
        this.option = data.option;
        this.answer = data.answer;
        this.selected = data.selected;
    }
}