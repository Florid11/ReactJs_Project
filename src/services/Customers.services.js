import http from "../http-common/http-common";

export class CustomerDataService {
    getCustomers(){
        return http.get('/customers');
    }

    static addCustomers(customers){
        return http.post('/customers',customers);
    }

    deleteCustomers(id){
        return http.delete('/customers' + id);
    }
}

export default new CustomerDataService();