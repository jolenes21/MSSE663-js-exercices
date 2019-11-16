export interface Matchee {
    username: string;
    interestedIn: Promise<string>;
    age: number;
    status: Promise<boolean>;
    getStatus: (status: boolean) => Promise<boolean>;
    getInterestedIn: (interestedIn: string) => { array };
}

export class Cupid implements Matchee {
    status: Promise<boolean> = new Promise((resolve, reject) => {
        resolve(true);
    });
    constructor(
        public username: string,
        public interestedIn: string,
        public age: number,
    ){
        this.username = username;
        this.interestedIn = interestedIn;
        this.age = age;
    }
    async getStatus(): Promise<boolean> {
        return await this.status;
        }
    
    
    async getInterestedIn(): array {
        return await this.interestedIn;
    }
} 
