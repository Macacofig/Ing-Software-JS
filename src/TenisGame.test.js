import {TenisGame} from "./TenisGame.js";

describe("Tennis Game", () => {
  it("Deberia ser Love-Love al comentar el juego", () => {
    const marcador = new TenisGame();
    expect(marcador.showScore()).toEqual("Love-Love");
  });
});