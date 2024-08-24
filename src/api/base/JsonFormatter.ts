"use server"

export const parseJSON = async (response: Response): Promise<any> => {
    try {
        return await response.json();
    } catch (error) {
        return null;
    }
};