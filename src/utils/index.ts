import {imagesUrl} from "@constants";

export const generateImageUrl = (folderName: string, imageName: string) => {
    if (imageName && imageName) {
        return `${imagesUrl}${folderName}/${imageName}`;
    }
    return "/";
}

export function isEmptyObject(obj: Object) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}
