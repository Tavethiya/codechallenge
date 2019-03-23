export class Common {

    constructor(private dbService) {
    }

    public getAll() {
        return this.dbService.getAllData();
    }

    public getSingle(data) {
        if (data) {
           return this.dbService.getSingleData(data);
        }
    }

    public add(data) {
        if (data) {
            return this.dbService.addData(data);
        }
    }

    public delete(data) {
        if (data) {
           return this.dbService.deleteData(data);
        }
    }

}