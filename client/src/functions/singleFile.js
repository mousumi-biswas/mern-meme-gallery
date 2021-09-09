import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'singleFile', data, options );
    } catch (error) {
        throw error;
    }
}
export const getSingleFiles = async () => {
    try {
            const {data} = await axios.get(apiUrl + 'getSingleFiles');
            return data;
    } catch (error) {
        throw error;
    }
}
export const removeFile = async (id) => 
    await axios.delete(apiUrl + 'singleFile/:_id', id)
        