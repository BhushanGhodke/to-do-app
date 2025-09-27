export class TaskCreate {
    public task: string = '';
    public status: string = '';
    public userId: number = 0
}

export class TaskInfo {

    public taskId: number = 0
    public task: string = '';
    public status: string = '';
    public userId: number = 0
    public updateTime: string = '';
    public createdTime: string = ''
}