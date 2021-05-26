import Request from './Request';


class OrderServices extends Request{
    constructor() {
        super('/orders');
    }
    
    getOrders() {
        return this.GET('/').then(({ json, status }) => ({ json, status }));
    }
    
}

export default new OrderServices();