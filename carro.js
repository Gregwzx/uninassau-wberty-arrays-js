var pessoa = "Jailson";

var carro = {
  cor: "vermelho",
  ano: 2012,
  dono: pessoa,

  ligar: function () {
    return this.dono + " ligou o carro";
  },

  acelerar: function () {
    return "O carro " + this.cor + " está sendo acelerado";
  }
};

alert(carro.acelerar());
