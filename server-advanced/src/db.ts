
import * as NEDB from "nedb";

export class Nedb {
    public db: any;
    private userCredientials: NEDB;

    constructor() {
        this.userCredientials = new NEDB('./data/userCredientiels.db')
        this.userCredientials.loadDatabase()

        this.db = {
            userCredientials: this.userCredientials,
        }
    }

    async insert(collection: string, records: any): Promise<any>{
        return new Promise((resolve, reject)=>{
            return this.db[collection].insert(records, (err: Error, docs:any) => err ? reject(err) : resolve(docs))
        })
    }

    async find(collection: string, where: Object): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.db[collection].find(where, (err: Error, docs:any[]) => err ? reject(err) : resolve(docs))
        })
    }
}