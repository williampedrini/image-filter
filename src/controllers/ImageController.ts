import "reflect-metadata";
import ImageService from "../services/ImageService";
import {Controller, Get, QueryParam} from "routing-controllers";
import {Inject} from "typedi";

@Controller()
export default class ImageController {

    @Inject()
    private imageService: ImageService;

    @Get("/filteredimage")
    public filter(@QueryParam("image_url") imageUrl: string): Promise<string> {
        return this.imageService.filter(imageUrl);
    }
}
