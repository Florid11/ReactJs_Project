import http from "../http-common/http-common";

export class CustomerDataService {
    getCustomers(){
        return http.get('/customers');
    }

    static addCustomers(customer){
        return http.post('/customers',customer);
    }

    deleteCustomers(id){
        return http.delete('/customers' + id);
    }
}

export default new CustomerDataService();