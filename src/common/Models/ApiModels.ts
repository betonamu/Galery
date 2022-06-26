export type ResponseApi<T> = {
    response: T;
    isLoading?: boolean;
}

export type RequestApi<T> = {
    payload: PayloadType;
    type: Action;
}

export type PayloadType = {
    params: any;
    onCompleted?: () => void
    onError?: (error: any) => void
}

export type Action = {
    type: string;
}