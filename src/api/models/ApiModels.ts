export interface ApiFetchOptions{
    url: string,
    method: string,
    contentType: string ;
    timezoneId?: string | '',
    body?: string | FormData;
    logMessage?: string;
    tokenValue?: string | null;
}

export interface ResponseData{
    status: boolean,
    title: string,
    message: string[],
    dataObject: any
}

export interface LogData{
    UserName?: string,
    UserIp?: string,
    LogType: string,
    ExceptMessage: string,
    ExceptionType: string,
    ExceptionSource: string,
    ExceptionUrl: string,
    Screen: string,
    Notes: string,
}