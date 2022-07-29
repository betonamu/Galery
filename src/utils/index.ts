import {imagesUrl} from "@constants";
import {ObjectStrKey} from "@common/Models/ApiModels";

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

export const cleanObject = (obj: ObjectStrKey) => {
    let result: ObjectStrKey = {};
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if ((!Array.isArray(obj[key]) && obj[key]) || obj[key]?.length)
                result[key] = obj[key];
        });
    }
    return result;
};
