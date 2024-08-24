// 'use server'

// import { ApiFetchOptions, ResponseData } from "../models";

// export const HttpClientBase = async (apiOptions: ApiFetchOptions): Promise<ResponseData> => {
//     const session = await getServerSession(...args, authOptions)
//     let tokenInformation = session?.user.WebToken;
//     if (tokenInformation === undefined && apiOptions.url === 'permission/user/get?pagenumber=1&pagesize=1' && apiOptions.tokenValue !== undefined) {
//         tokenInformation = apiOptions.tokenValue as string;
//         apiOptions.tokenValue = "";
//     }

//     const headers: HeadersInit = {
//         'Authorization': 'Bearer ' + tokenInformation as string,
//         'TimeZoneId': apiOptions.timezoneId as string,
//     };

//     if (!(apiOptions.body instanceof FormData)) {
//         headers['Content-Type'] = apiOptions.contentType as string;
//     }

//     const requestOptions: RequestInit = {
//         method: apiOptions.method,
//         headers: headers,
//         body: apiOptions.method !== 'GET' && apiOptions.method !== 'HEAD' ? apiOptions.body : null,
//     };

//     try {
//         const response = await fetch(`${process.env.API_URL}/${apiOptions.url}`, requestOptions);

//         if (response.status === 401) {
//             // signOut();
//             return {
//                 status: false,
//                 title: 'Unauthorized',
//                 message: ['User is unauthorized.'],
//                 dataObject: null
//             };
//         }
//         const result = await parseJSON(response);

//         if (response.status !== 200) {
//             console.log("ApiOptions: ", apiOptions);
//             console.log("Response: ", response);
//             console.log("Response Status: ", response.status);
//             console.log("Result: ", result);
//             console.log("_________________________________________");
//         }

//         if (response.status === 200) {
//             return result;
//         } else {
//             return {
//                 status: false,
//                 title: result?.title || 'Error|' + response.status,
//                 message: result?.message || [response.statusText],
//                 dataObject: result?.dataObject || null
//             };
//         }
//     } catch (error: unknown) {
//         let errorMessage = 'An unknown error occurred.';
//         if (error instanceof Error) {
//             errorMessage = error.message;
//         }
//         return {
//             status: false,
//             title: 'Fetch Error',
//             message: [errorMessage],
//             dataObject: null
//         };
//     }
// };