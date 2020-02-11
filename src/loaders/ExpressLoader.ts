import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';
import {createExpressServer} from 'routing-controllers';
import {Application} from 'express';
import ImageController from "../controllers/ImageController";

export const ExpressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const application: Application = createExpressServer({
            routePrefix: "/api",
            defaultErrorHandler: true,
            controllers: [ImageController],
        });
        settings.setData('express_app', application);
        settings.setData('express_server', application.listen(process.env.PORT || 8082));
    }
};
