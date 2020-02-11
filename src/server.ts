import {bootstrapMicroframework, Microframework} from 'microframework-w3tec';
import {ExpressLoader} from "./loaders/ExpressLoader";
import {IocLoader} from "./loaders/IocLoader";

bootstrapMicroframework({
    loaders: [
        IocLoader,
        ExpressLoader
    ],
})
.then(() => console.log("Application is up and running."))
.catch(error => console.log("Application is crashed:" + error));
