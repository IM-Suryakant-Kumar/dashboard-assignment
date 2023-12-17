import IUser from "./user";

export interface IApiData {
	success: boolean;
	message: string;
    user: IUser;
}

export interface SuccessResponse {
	data: IApiData;
}

export interface FailedResponse {
	response: {
		data: IApiData;
		status: string;
		statusText: string;
	};
}

export default interface IApiRes extends SuccessResponse, FailedResponse {}
