import { prisma } from '../lib/prisma'

async function main() {
  // Create a new user with a post
    const user = await prisma.user.findFirst({
      where : {
        id : 1
      }, include : {
        todos : true
      }
    })
console.log('Created user:', user)
}
main()
