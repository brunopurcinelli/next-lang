import { ApiFetchOptions, LogData, ResponseData } from "../models";

export class ApiBase {
    private _screen: string;
    private _urlLog: string;
    private _lastRequestTime: number = 0;
    private _THROTTLE_LIMIT_MS: number = 3000;
    private _isLogging: boolean = false;

    constructor(screen: string, urlLog: string) {
        this._screen = screen;
        this._urlLog = urlLog;
    }

    private async throttleRequest<T>(fn: () => Promise<T>, url: string): Promise<T> {
        const now = Date.now();
        const timeSinceLastRequest = now - this._lastRequestTime;

        if (timeSinceLastRequest > this._THROTTLE_LIMIT_MS) {
            this._lastRequestTime = now;
            return await fn();
        } else {
            const waitTime = this._THROTTLE_LIMIT_MS - timeSinceLastRequest;
            console.log(`Throttling request to ${url}, retrying in ${waitTime}ms...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            this._lastRequestTime = Date.now();
            return await fn();
        }
    }

    protected async callApiAsync(url: string, data: any, method: string = "POST", contentType: string = 'application/json'): Promise<ResponseData> {
        const options: ApiFetchOptions = {
            url: url,
            method: method,
            contentType: contentType,
            body: data !== null && contentType === 'application/json' ? JSON.stringify(data) : data,
            timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
            tokenValue: data.tokenValue
        };

        // return this.throttleRequest(async () => {
        //     let response: ResponseData;
        //     let attempt = 0;
        //     const maxAttempts = 5;
        //     const retryDelay = 2000; // 1 segundo

        //     do {
        //         attempt++;
        //         response = await HttpClientBase(options);

        //         if (response.status) {
        //             return response;
        //         }

        //         if (!response.status && response.title === "Error|429") {
        //             console.warn(`Attempt ${attempt} failed with status 429. Retrying in ${retryDelay}ms...`);
        //             await new Promise(resolve => setTimeout(resolve, retryDelay));
        //         } else {
        //             break;
        //         }
        //     } while (attempt < maxAttempts);

        //     if (!response.status) {
        //         if (!this._isLogging) {
        //             this._isLogging = true;
        //             await this.logAsync(this.buildLogInformation(this._screen, response.message.join(' '), new Error(response.title)));
        //             this._isLogging = false;
        //         }
        //     }

        //     return response;
        // }, url);
        return {
            status: false,
            title: '',
            message: [''],
            dataObject: null
        };
    }

    protected async logAsync(logInfo: LogData): Promise<void> {
        if (this._isLogging) return;
        try {
            await this.callApiAsync(this._urlLog, logInfo);
        } catch (error) {
            console.error('Failed to log error:', error);
        }
    }

    protected buildLogInformation(screen: string, message: string, error?: any): LogData {
        return {
            LogType: error ? "Error" : "Info",
            ExceptMessage: error ? error.message : "",
            ExceptionType: error ? error.name : "",
            ExceptionSource: error ? error.stack : "",
            ExceptionUrl: window.location.href,
            Screen: screen,
            Notes: message,
            UserIp: ""
        };
    }
}
