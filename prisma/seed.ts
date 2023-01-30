import prisma from "../src/db/db.js";

async function main() {
    await prisma.trainers.createMany({
        data: [
            {
                "name":"sim",
                "email":"sim@gmail.com",
                "password":"$2b$12$1tLt8g.7BRroG2QArcPXCuUL3cDcBX8u.TlDTOVLNNEKmkVCMTPHq",
                "image":"https://i.kym-cdn.com/photos/images/original/002/324/824/eeb.jpg"
            },
            {
                "name":"sima",
                "email":"sima@gmail.com",
                "password":"$2b$12$p46bZ1HDzcwD8AVrBwOg/uLLqUWIY0LP8VyCcGqcH7HA.MUzC8xMC",
                "image":"https://i.kym-cdn.com/photos/images/original/002/324/824/eeb.jpg"
            }
        ]
    })
    await prisma.moves.createMany({data: [
        {
            "name":"Cultura pop no projeto?",
            "description":"O pokemon referencia algo da cultura pop no projeto e torce para que o tutor goste",
            "category":"special",
            "power":333,
            "accuracy":50,
            "type":"PSYCHIC",
            "pp":30,
            "trainer_id":1
        },
        {
            "name":"Hablar Mesmo",
            "description":"Quando o pokemon usa esse movimento, ele começa a hablar mesmo, tal como a Belle Bellinhaaa, intimidando o inimigo",
            "category":"status",
            "power":0,
            "accuracy":100,
            "type":"NORMAL",
            "pp":30,
            "trainer_id":1
        },
        {
            "name":"Mono Yasuo montage",
            "description":"O pokemon vai para cima que nem louco, achando que é deus e torce para dar ik no oponente",
            "category":"physical",
            "power":500,
            "accuracy":25,
            "type":"FIGHTING",
            "pp":10,
            "trainer_id":1
        }
    ]})
}

main()
  .then(()=> console.log("Registro feito com sucesso!"))
  .catch(e=> {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

