let suaidade;
let comedia;
let acao;  // Corrigido
let terror;
let titulo;
let corpo; 
let filmes = {
  menor10: {
    comedia: "Era do Gelo, Só Gelo",
    acao: "Jumanji: Bem-vindo à Selva, Volta pra Realidade",
    terror: "Coraline, Vai Catarina"
  },
  entre10e14: {
    comedia: "Matilda, Você",
    acao: "Os Incríveis, Fil",
    terror: "A Noiva Cadáver, Carne"
  },
  entre14e16: {
    comedia: "A Escolha Perfeita 2",
    acao: "Jogos Vorazes, Mais Velocidade",
    terror: "Corra, Suma"
  },
  entre16e18: {
    comedia: "Deadpool, Pum",
    acao: "O Protetor, Professor",
    terror: "It, Itálica"
  },
  maior18: {
    comedia: "Neighbors",
    acao: "A Noite Mais Escura",
    terror: "O Exorcista, Cinta"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100, 100);
  createSpan("Qual sua Idade?").position(590, 530).addClass("hidden");
  suaidade = createInput("").position(590, 585).addClass("hidden");
  acao = createCheckbox("Gosta de filme de ação").position(100, 600).addClass("hidden");
  comedia = createCheckbox("Gosta de filme de comédia").position(100, 650).addClass("hidden");
  terror = createCheckbox("Gosta de filme de terror").position(100, 700).addClass("hidden");
  
  titulo = "Montserrat";
  corpo = "Bree Serif";
  button = createButton("se vira").position(width / 2, 585);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota() {
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));  
  button.hide();
}

function draw() {
  background("white");
  fill("pink");
  textAlign(CENTER, CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE FILMES", width / 2, 20);
  
  textFont(titulo);
  
  let idade = parseInt(suaidade.value());
  let checkacao = acao.checked();
  let checkcomedia = comedia.checked();
  let checkterror = terror.checked();
  
  let filme = "Insira suas preferências";
  if (suaidade.value() !== "") {
    filme = mostrafilme(idade, checkacao, checkcomedia, checkterror);
  }
  
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(filme, width / 2, height / 2);
  textFont(corpo);
} 

function mostrafilme(idade, checkacao, checkcomedia, checkterror) {
  if (isNaN(idade)) {
    return "Idade Inválida";
  } else if (idade < 5) {
    return "Sai daqui, você é uma criança!";
  } else if (idade > 120) {
    return "Já morreu, enterra!";
  }

  let categoria;
  
  if (idade < 10) {
    categoria = "menor10";
  } else if (idade < 14) {
    categoria = "entre10e14";
  } else if (idade < 16) {
    categoria = "entre14e16";
  } else if (idade < 18) {
    categoria = "entre16e18";
  } else {
    categoria = "maior18";
  }
  
  if (checkacao) {
    return filmes[categoria].acao || "Sem filme de ação disponível.";
  } else if (checkcomedia) {
    return filmes[categoria].comedia || "Sem filme de comédia disponível.";
  } else if (checkterror) {
    return filmes[categoria].terror || "Sem filme de terror disponível.";
  } else {
    return "Selecione pelo menos um gênero!";
  }
}
