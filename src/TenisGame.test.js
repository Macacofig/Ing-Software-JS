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
  it("Deberia ser 30-Love al marcar dos puntos para el jugador 1", () => {
    const marcador = new TenisGame();
    marcador.point("Player 1");
    marcador.point("Player 1");
    expect(marcador.showScore()).toEqual("30-Love");
  });
  it("Deberia ser 40-Love al marcar tres puntos para el jugador 1", () => {
    const marcador = new TenisGame();
    marcador.point("Player 1");
    marcador.point("Player 1");
    marcador.point("Player 1");
    expect(marcador.showScore()).toEqual("40-Love");
  });
  it("Deberia ser Love-15 al marcar un punto para el jugador 2", () => {
    const marcador = new TenisGame();
    marcador.point("Player 2");
    expect(marcador.showScore()).toEqual("Love-15");
  });
  it("Deberia ser Love-30 al marcar dos puntos para el jugador 2", () => {
    const marcador = new TenisGame();
    marcador.point("Player 2");
    marcador.point("Player 2");
    expect(marcador.showScore()).toEqual("Love-30");
  });
  it("Deberia ser Love-40 al marcar tres puntos para el jugador 2", () => {
    const marcador = new TenisGame();
    marcador.point("Player 2");
    marcador.point("Player 2");
    marcador.point("Player 2");
    expect(marcador.showScore()).toEqual("Love-40");
  });

  it("Deberia ser 15-15 cuando Player 1  maraca 1 punto y Player 2 marca 1 punto", () => {
    const marcador = new TenisGame();
    marcador.point("Player 1");
    marcador.point("Player 2");
    expect(marcador.showScore()).toEqual("15-15");
  });

  it("Deberia ser 30-15 cuando Player 1  maraca 2 puntos y Player 2 marca 1 punto", () => {
    const marcador = new TenisGame();
    marcador.point("Player 1");
    marcador.point("Player 1");
    marcador.point("Player 2");
    expect(marcador.showScore()).toEqual("30-15");
  });

  it("Deberia ser 30-15 cuando Player 1  maraca 1 punto y Player 2 marca 2 puntos", () => {
    const marcador = new TenisGame();
    marcador.point("Player 1");
    marcador.point("Player 2");
    marcador.point("Player 2");
    expect(marcador.showScore()).toEqual("15-30");
  });

  it("Deberia ser 30-15 cuando Player 1  maraca 2 puntos y Player 2 marca 2 puntos", () => {
    const marcador = new TenisGame();
    marcador.point("Player 1");
    marcador.point("Player 1");
    marcador.point("Player 2");
    marcador.point("Player 2");
    expect(marcador.showScore()).toEqual("30-30");
  });
});