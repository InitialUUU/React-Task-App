import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[]
}

const initialState: TBoardsState = {
    modalActive: false,
    boardArray: [
        // 빈 게시판 생성시 기본 데이터가 있도록 세팅하기 위함
        {
            boardId: 'board-0',
            boardName: "첫 번째 게시물",
            lists: [
                {
                    listId: "list-0",
                    listName: "List 1",
                    tasks: [
                        {
                            taskId: "task-0", // types/index.ts의 IList에서 관여
                            taskName: "Task 1",
                            taskDescription: "Description",
                            taskOwner: "John",
                        },
                        {
                            taskId: "task-1",
                            taskName: "Task 2",
                            taskDescription: "Description",
                            taskOwner: "John",
                        }
                    ]
                },
                {
                    listId: "list-1",
                    listName: "List 2",
                    tasks: [
                        {
                            taskId: "task-3",
                            taskName: "Task 3",
                            taskDescription: "description",
                            taskOwner: "John",
                        }
                    ]
                }
            ]

        }
    ]
}

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {

    }
})

export const boardsReducer = boardsSlice.reducer;