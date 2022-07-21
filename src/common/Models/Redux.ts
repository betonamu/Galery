import {Collection} from "@common/Models/ApiModels";

export type HomeState = {
    collections : Array<Collection>;
}

export type AccountState = {
    userData : Object;
}

export type ProductState = {
    collection: Object;
    models: Array<any>;
}
