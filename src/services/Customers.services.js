import http from "../http-common/http-common";

export class CustomerDataService {
    getCustomer(){
        return http.get('/customers');
    }

    static addCustomer(customers){
        return http.post('/customers',customers);
    }

    deleteCustomer(id){
        return http.delete('/customers/' + id);
    }
}

export default new CustomerDataService();