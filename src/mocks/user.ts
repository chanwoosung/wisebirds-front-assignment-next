import { IUser, IUsersResponse } from "@/types/services";
import { faker } from "@faker-js/faker";

// 무작위 사용자 생성 함수
const generateRandomUser = (id: number): IUser => {
  return {
    id: id,
    email: faker.internet.email(),
    name: faker.person.firstName(),
    last_login_at: faker.date.past(),
    edit: false,
  };
};

// 임의의 사용자 데이터 생성
const generateRandomUserData = (): IUsersResponse => {
  const content: IUser[] = [];
  const numUsers = 100;
  for (let i = 1; i <= numUsers; i++) {
    content.push(generateRandomUser(i));
  }
  return {
    content: content,
    size: numUsers,
    total_elements: numUsers,
    total_pages: 1,
  };
};

// 임의의 사용자 데이터 생성
export const userData: IUsersResponse = generateRandomUserData();
