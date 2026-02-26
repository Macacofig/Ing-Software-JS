import {TenisGame} from "./TenisGame.js";

describe("Tennis Game", () => {
  it("Deberia ser Love-Love al comenzar el juego", () => {
    const marcador = new TenisGame();
    expect(marcador.showScore()).toEqual("Love-Love");
  });
  it("Deberia ser 15-Love al marcar un punto para el jugador 1", () => {
    const marcador = new TenisGame();
    marcador.point("Player 1");
    expect(marcador.showScore()).toEqual("15-Love");
  });
});