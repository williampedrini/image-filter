import "reflect-metadata";
import ImageService from "../services/ImageService";
import {Controller, Get, QueryParam, Res} from "routing-controllers";
import {Response} from "express";
import {promisify} from "util";
import {Inject} from "typedi";

@Controller()
export default class ImageController {

    @Inject()
    private imageService: ImageService;

    @Get("/filteredimage")
    public async filter(@QueryParam("image_url") imageUrl: string, @Res() response: Response) {
        await this.imageService.filter(imageUrl)
            .then(url => ImageController.setResponseFile(url, response))
            .then(url => this.imageService.delete([url]))
            .catch(error => response.status(400).send(error));
        return response;
    }

    private static async setResponseFile(url: string, response: Response): Promise<string> {
        await promisify<string, void>(response.sendFile.bind(response))(url);
        return url;
    }
}
