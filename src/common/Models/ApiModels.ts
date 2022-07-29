import {any} from "prop-types";

export type ResponseApi<T = {}> = {
    response: T;
    isLoading?: boolean;
}

export type RequestApi<T = {}> = {
    payload: PayloadType;
    type: string;
}

export type PayloadType = {
    params: any;
    onCompleted?: (result?: any) => void
    onError?: (error?: any) => void
}

export type Action = {
    type: string;
}

export type ObjectStrKey = {
    [x: string]: any
}

export type Collection = {
    id: number;
    collectionName: string;
    createAt: Date;
    folderName: string;
    coverImage: string;
    images: string[];
}

export type CollectionRequest = {
    collectionName: string;
    modelId: string;
    description: string;
    folderName: string;
    imagesUpload: Array<any>;
    fileObjects?: {};
}