export interface Matchee {
    username: string;
    interestedIn: Array<string>;
    age: number;
    status: Promise<boolean>;
    getStatus: (status: boolean) => Promise<boolean>;
    getInterestedIn: () => Array<string>
}

export class Cupid implements Matchee {
    status: Promise<boolean> = new Promise((resolve, reject) => {
        resolve(true);
    });
    constructor(
        public username: string,
        public interestedIn: Array<string>,
        public age: number,
    ){
        this.username = username;
        this.interestedIn = interestedIn;
        this.age = age;
    }
    async getStatus(): Promise<boolean> {
        return await this.status;
        }
    
    getInterestedIn(): Array<string> {
        return this.interestedIn;
    }
} 
