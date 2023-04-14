import { User } from "./User.model";

export class Response
{
    page: number | undefined;
    per_page: number | undefined;
    total: number | undefined;
    total_pages: number | undefined;
    data: User[] | undefined;
    support: string | undefined;
}