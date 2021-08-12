import { options } from './options'

export class questions{
    id:number;
    q:string;
    options:options[];

    constructor(data: any){
        data = data || {};
        this.id = data.id;
        this.q = data.q;
        this.options = [];
        data.options.forEach((o:any) => {
            this.options.push(new options(o));
        });
    }
}