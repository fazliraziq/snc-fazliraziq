import { Person } from "@/utils/common/person";
import { mockUsers } from "@/utils/server/mock-users";
import { PrismaClient } from "@prisma/client";

export const getPersonFromDB = async (person: Person) => {
  
  // const prisma = new PrismaClient();
  return mockUsers[person];
  // const users = await prisma.User.find({
  //   where: {
  //     name : person
  //   }
  // });

  // return users
};
