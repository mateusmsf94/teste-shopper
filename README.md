# Atualizador de Preços :money_with_wings:

Um projeto para atualizar os preços em um banco de dados usando um arquivo .csv.

## Instalação :computer:

Certifique-se de que não há processos rodando nas portas 3306, 3001 e 3000 antes de prosseguir.

1. Clone o repositório: `git clone https://github.com/mateusmsf94/teste-shopper`
2. Navegue até a pasta raiz do projeto: `cd teste-shopper`
3. Inicie os containers Docker: `docker-compose up`
4. Navegue até a pasta "backend": `cd backend`
5. Instale as dependências: `npm install`
6. Faca a build `npm run build`
7. Copie o conteudo de database.sql e cole o script em um programa com mysql workbench
    (o script restore so funciona corretamente depois disso)
8. Inicie o servidor de desenvolvimento: `npm run dev`
9. Abra outra janela do terminal
10. Navegue até a pasta "frontend": `cd frontend`
11. Instale as dependências: `npm install`
12. Inicie o aplicativo frontend: `npm start`

Agora você pode acessar o aplicativo em seu navegador no endereço `http://localhost:3000`.

## Uso :hammer_and_wrench:

1. Faça o upload de um arquivo .csv contendo os novos preços.
2. O aplicativo irá processar o arquivo e atualizar os preços correspondentes no banco de dados.
3. Você poderá ver o status da atualização e quaisquer erros encontrados durante o processo.



---

# Notas :memo:

Infelizmente, devido à falta de tempo, algumas tarefas não foram concluídas neste projeto. Aqui estão algumas informações importantes:

- **Estilização**: Não houve tempo para aplicar estilos ao aplicativo. Normalmente, teria utilizado o framework Tailwind CSS para facilitar o desenvolvimento e garantir uma aparência agradável.

- **Testes automatizados**: Os testes automatizados também não foram implementados devido à restrição de tempo. Para o frontend, teria sido utilizado o React Testing Library, enquanto para o backend, seriam usadas as bibliotecas Mocha, Chai e Sinon para testes unitários e de integração.

Apesar dessas limitações, todas as funcionalidades solicitadas foram implementadas e o projeto está funcional. Sinta-se à vontade para entrar em contato se tiver alguma dúvida.

Muito obrigado pela oportunidade!