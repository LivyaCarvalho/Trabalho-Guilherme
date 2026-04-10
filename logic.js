function adicionarItem(carrinho, produto) {
  return [...carrinho, produto];
}

function removerItem(carrinho, index) {
  return carrinho.filter((_, i) => i !== index);
}

function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => total + item.preco, 0);
}

function carrinhoVazio(carrinho) {
  return carrinho.length === 0;
}

module.exports = {
  adicionarItem,
  removerItem,
  calcularTotal,
  carrinhoVazio
};