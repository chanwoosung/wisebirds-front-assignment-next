import { IPaging } from "./campaign";

export enum UserTableHeader {
  id = "아이디",
  email = "이메일",
  name = "이름",
  last_login_at = "마지막 접속 시간",
  edit = "수정",
}

export type IUser = {
  id: number;
  name: string;
  email: string;
  last_login_at: Date;
  edit: boolean;
};

export interface IUsersResponse extends IPaging {
  content: IUser[];
}
