import axios from "axios"
import { IContent } from "../../interfaces/content";

export default {
    getAllContent: async (): Promise<IContent[]> => {
        const contents = (await (axios.get(`${import.meta.env.VITE_API_URL}/content`))).data

        return contents;
    },
    getContentByName: (name: string) => {

    },
    uploadContent: () => {

    },
    updateContent: () => {

    },
    destroyContentById: (id: number) => {

    }
}