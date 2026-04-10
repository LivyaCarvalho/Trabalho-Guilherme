const produtos = [
    { nome: "Hambúrguer", preco: 15 },
    { nome: "X-Burger", preco: 18 },
    { nome: "Batata Frita", preco: 10 },
    { nome: "Refrigerante", preco: 7 }
  ];

  let carrinho = [];

  function renderMenu() {
    const menu = document.getElementById("menu");
    produtos.forEach((produto, index) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionar(${index})">Adicionar</button>
      `;
      menu.appendChild(div);
    });
  }

  function adicionar(index) {
    carrinho.push(produtos[index]);
    renderCarrinho();
  }

  function renderCarrinho() {
    const cart = document.getElementById("cart");
    cart.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
      total += item.preco;
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <span>${item.nome}</span>
        <button onclick="remover(${index})">X</button>
      `;
      cart.appendChild(div);
    });

    document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  function remover(index) {
    carrinho.splice(index, 1);
    renderCarrinho();
  }

  function finalizarPedido() {
    if (carrinho.length === 0) {
      alert("Carrinho vazio!");
      return;
    }

    let mensagem = "Pedido:%0A";
    carrinho.forEach(item => {
      mensagem += `- ${item.nome} (R$ ${item.preco})%0A`;
    });

    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    mensagem += `%0ATotal: R$ ${total}`;

    const url = `https://wa.me/?text=${mensagem}`;
    window.open(url, '_blank');
  }

  renderMenu();