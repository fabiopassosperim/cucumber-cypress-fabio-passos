#language: pt

Funcionalidade: Administrar livros no Hub de leitura
Como administrador do sistema, quero manter o catálogo de livros atualizado.

Cenário: Adicionar um novo livro
  Dado que estou logado como administrador
  Quando adiciono um novo livro com os dados obrigatórios
  Então deve aparecer uma mensagem de sucesso: "Livro adicionado com sucesso!"

Cenário: Fazer login com email inválido
  Dado que estou na página de login
  Quando tento fazer login com um email inválido
  Então deve aparecer uma mensagem de validação: "Por favor, insira um email válido."

  

