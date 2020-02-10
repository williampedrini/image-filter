import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';
import {createExpressServer} from 'routing-controllers';
import {Application} from 'express';

export const ExpressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const application: Application = createExpressServer({
            routePrefix: "/api",
            controllers: [__dirname + "/../controllers/*.ts"],
        });
        settings.setData('express_app', application);
        settings.setData('express_server', application.listen(8081));
    }
};
