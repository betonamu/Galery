import {imagesUrl} from "../constants";

export const generateImageUrl = (folderName, imageName) => {
    if (imageName && imageName) {
        return `${imagesUrl}${folderName}/${imageName}`;
    }
    return "/";
}

export function isEmptyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}
