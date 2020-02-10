import {bootstrapMicroframework} from 'microframework-w3tec';
import {ExpressLoader} from "./loaders/ExpressLoader";
import {IocLoader} from "./loaders/IocLoader";

bootstrapMicroframework({
    loaders: [
        IocLoader,
        ExpressLoader
    ],
})
.catch(() => "Error")
.then(() => "Application running.");
