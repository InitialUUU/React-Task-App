export interface ITask { // modalSlice에서 사용
    taskId: string;
    taskName: string;
    taskDescription: string;
    taskOwner: string;
}

export interface ILogItem { //loggerSlice에서 사용
    logId: string;
    logAuthor: string;
    logMessage: string;
    logTimestamp: string;
}

export interface IBoard { // boardSlice에서 사용
    boardId: string;
    boardName: string;
    lists: IList[];
}

export interface IList {
    listId: string; // boardSlice.ts의 initalState의 첫번째 게시물의 listId 값이 string
    listName: string;
    tasks: ITask[];
}