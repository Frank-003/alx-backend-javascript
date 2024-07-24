import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
    const result = {
        photo: null,
        user: null,
    };

    try {
        const photo = await uploadPhoto();
        const user = await createUser();
        result.photo = photo;
        result.user = user;
    } catch (error) {
        // If any of the functions fail, return an empty object
        return result;
    }

    return result;
}
