import {imagesUrl} from "../constants";

export const generateImageUrl = (folderName, imageName) => {
    if (imageName && imageName) {
        return `${imagesUrl}${folderName}/${imageName}`;
    }
    return "/";
}
