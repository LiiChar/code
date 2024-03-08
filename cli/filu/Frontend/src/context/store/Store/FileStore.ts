import { observable, action } from "mobx";
import { IContent } from "../../../interfaces/content";

const FileStore = () => {
    const state = observable({
      files: [] as IContent[]
    })

    const actions = {

    }

  return {
    ...state,
    ...actions
  }
}
export default FileStore;