# Pokémon_Moves_Creator-Back

Pokémon Moves Creator é um criador simples de movimentos de pokémons.

- Crie sua conta e:
    - Crie seus próprios movimentos e compartilhe com o mundo a sua criatividade.
    - Veja os movimentos criados por outros treinadores.
    - Curta e comente em seus movimentos favoritos.
    - Divirta-se 😊

## Features

- Criar uma conta
- Criar um movimento
- Buscar todos os movimentos
- Buscar movimentos por categoria
- Atualizar um movimento
- Deletar um movimento
- Curtir um movimento
- Comentar em um movimento
- Editar e deletar comentário
- Para melhores detalhes leia a documentação ~~bem fraquinha~~

## Como rodar

1. Clone esse repositório
2. Instale todas as dependências
```bash
npm i
```
3. Crie um banco de dados PostgreSQL com o nome que quiser.
4. Configure o arquivo `.env` usando o arquivo `.env.example`.
5. Rode todas as migrations:

```bash
npm run migration:run
```

6. Popule o banco:

```bash
npm run prisma:seed
```
7. Rode o back-end em desenvolvimento:

```bash
npm run dev
```

## License

Mozilla Public License Version 2.0

**É isso, divirta-se**