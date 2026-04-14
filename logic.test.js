const {
  adicionarItem,
  removerItem,
  calcularTotal,
  carrinhoVazio
} = require('./logic');

describe("Testes do carrinho", () => {

  test("Adicionar item ao carrinho", () => {
    const carrinho = [];
    const produto = { nome: "Hambúrguer", preco: 15 };

    const resultado = adicionarItem(carrinho, produto);

    expect(resultado.length).toBe(1);
  });

  test("Remover item do carrinho", () => {
    const carrinho = [
      { nome: "Hambúrguer", preco: 15 },
      { nome: "Batata", preco: 10 }
    ];

    const resultado = removerItem(carrinho, 0);

    expect(resultado.length).toBe(1);
  });

  test("Calcular total", () => {
    const carrinho = [
      { nome: "Hambúrguer", preco: 15 },
      { nome: "Batata", preco: 10 }
    ];

    const total = calcularTotal(carrinho);

    expect(total).toBe(25);
  });

  test("Carrinho vazio", () => {
    expect(carrinhoVazio([])).toBe(true);
  });

});