import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export default Prisma;

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await Prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await Prisma.$disconnect();
    process.exit(1);
  });
