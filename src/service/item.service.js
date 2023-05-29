import httpComman from "./http-comman";

class itemsDataService {
    getAll() {
        return httpComman.get("/products");
    }
}

export default new itemsDataService();