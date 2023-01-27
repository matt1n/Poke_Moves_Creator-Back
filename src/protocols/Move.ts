export type Move = {
    name: string,
    description: string,
    category: string,
    power: number,
    accuracy: number,
    type: string,
    pp: number,
    trainer_id: number
  }

export type BodyMove = Omit<Move, "trainer_id">
