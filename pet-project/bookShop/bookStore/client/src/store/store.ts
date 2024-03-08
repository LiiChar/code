import { IStore } from './../model/model';
// import { create } from "zustand";
// import { IBook } from "../model/model";

// const useBookStore = create<IStore>()((set) => ({
//     books: [
//         {id: 1, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Lore', rate: 3},
//         {id: 2, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Origin', rate: 3},
//         {id: 3, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Lazy', rate: 3},
//         {id: 4, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Max', rate: 3},
//         {id: 5, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Vlad', rate: 3},
//         {id: 6, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Reg', rate: 3},
//         {id: 7, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Start', rate: 3},
//         {id: 8, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Marko', rate: 3},
//         {id: 9, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Judi', rate: 3},
//         {id: 10, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Kristi', rate: 3},
//     ],
//     book: {id: 1, description: 'fsdfiuhjklmopisurydhgfdrgserdgsdf', image: '123', name: 'Lore', rate: 3},
//     add: (book: IBook) => set((state) => (
//         { books: {book, ...state.books}}
//     )),
//     delete: (id: number) => set((state) => (
//         { books: state.books.filter((book => book.id !== id))}
//     )),
//     getOne: (id: number) => set((state) => (
//         { book: state.books.find((book => book.id === id))}
//     )),
// }))
// export default useBookStore;

