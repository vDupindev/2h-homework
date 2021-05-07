import { User } from "src/interfaces/user.interface";

export interface Ticket {
    id: number;
    completed: boolean;
    assigneeId: number;
    description: string;
    assignee?: User
}
