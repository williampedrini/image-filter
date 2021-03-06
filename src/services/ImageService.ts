import Jimp from "jimp";
import fs from "fs";
import {Service} from "typedi";

@Service()
export default class ImageService {

    public async filter(imageUrl: string): Promise<string> {
        if (imageUrl) {
            return await this.filterImageFromURL(imageUrl)
                .catch(() => "Error while filtering the image.");
        }
        return Promise.reject("The image url is mandatory.");
    }

    /**
     * Responsible for downloading, filtering, and saving the filtered image locally.
     * @param inputURL A publicly accessible url to an image file.
     * @return An absolute path to a filtered image locally saved file
     */
    private filterImageFromURL(inputURL: string): Promise<string> {
        return new Promise(async resolve => {
            const photo = await Jimp.read(inputURL);
            const outPath = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';
            await photo
                .resize(256, 256)
                .quality(60)
                .greyscale()
                .write(__dirname + outPath, () => {
                    resolve(__dirname + outPath);
                });
        });
    }

    /**
     * Responsible for deleting files on the local disk.
     * @param files An array of absolute paths to files.
     */
    public delete(files: Array<string>): void {
        for (let file of files) {
            fs.unlinkSync(file);
        }
    }
}
