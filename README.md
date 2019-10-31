
# Criando uma API Rest com NodeJS e MongoDB.

  

O workshop tem como objetivo apresentar os conceitos básicos de uma API Rest, através de exemplos e analogias. Desenvolver na prática uma API Rest utilizando NodeJS aplicando os conceitos apresentados e utilizando boas práticas para o desenvolvimento. Na atividade prática será desenvolvido um CRUD básico onde será possível entender os conceitos de rotas, autenticação, realizar testes de rotas e armazenamento de dados com MongoDB.

  

## Softwares necessários

  

+ NodeJS - versão >=10 - https://nodejs.org/en/

+ Postman - https://www.getpostman.com/downloads/

+ MongoDB - https://www.mongodb.com/

+ Robo3T ( Não é primordial) - https://robomongo.org/download

  

## Introducao ao conceito REST

### Analogia - Restaurante

+ Limpo
+ Com bom atendimento
+ Que lhe entregue tudo o você solicitou corretamente

 
**Cliente** - Client (Smarthphone, Navegador Web....)
* Realiza o pedido
* Espera ser bem atendido

**Garçom**  - API

* Anotar pedidos
* Levar pedidos para cozinha
* Servir o cliente da melhor forma

** Cozinha** - Servidor
* Prepara o pedido


#### PROTOCOLO HTTP - Bloco de notas do garçom
+ HTTP - Hypertext Transfer Protocol - Transferência de dados
+ REST - REpresentation State Transfer 
	+  É um estilo de arquitetura de software que define um conjunto de restrições a serem usados para a criação de web services.
+ Delimita algumas obrigações nessas transferências de dados.

### Restrições - Constraints

+ **Uniform Interface**: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.
+ **Client-server**: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React ou AngularJs para WEB e React Native ou Ionic para o smartphone, por exemplo.
+ **Stateless**: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.
+ **Cacheable**: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.
+ ** Layered System** : O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.
+ **Code on demand (optional)** : Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

  
  

### Identificação dos Recursos - Resources

 
Toda aplicação gerencia algumas informações. Uma aplicação de um E-commerce, por exemplo, gerencia seus produtos, clientes, vendas, etc. Essas coisas que uma aplicação gerencia são chamadas de Recursos no modelo REST.


Um recurso nada mais é do que uma abstração sobre um determinado tipo de informação que uma aplicação gerencia, sendo que um dos princípios do REST diz que todo recurso deve possuir uma identificação única. Essa identificação serve para que a aplicação consiga diferenciar qual dos recursos deve ser manipulado em uma determinada solicitação.
A identificação do recurso deve ser feita utilizando-se o conceito de URI (Uniform Resource Identifier), que é um dos padrões utilizados pela Web. Alguns exemplos de URI's:

  

http://servicorest.com.br/produtos
http://servicorest.com.br/clientes
http://servicorest.com.br/clientes/57
http://servicorest.com.br/vendas

 
### VERBOS HTTP

+ GET
	+ Receber dados de um Resource
+ POST
	+ Enviar dados ou informações para serem processados por um Resource.
+ PUT
	+ Atualizar dados de um Resource
+ DELETE
	+ Deletar um Resource
	+ 
### BOAS PRÁTICAS

  

+ Utilizar os verbos HTTP corretos para cada requisição.
+ Utilizar plural ou singular na criação dos endpoints? NÃO IMPORTA! use um padrão!!
+ Não deixar barra no final do endpoint
+ Nunca deixe o cliente sem resposta!
+ Utilize URI’s legíveis
+ Utilize o mesmo padrão de URI na identificação dos recursos
+ Mantenha a consistência na definição das URI’s. Crie um padrão de nomenclatura para as URI’s dos recursos e utilize sempre esse mesmo padrão. Evite situações como:

	* http://servicorest.com.br/produto (Singular)
	* http://servicorest.com.br/clientes (Plural)
	* http://servicorest.com.br/processosAdministrativos (Camel Case)
	* http://servicorest.com.br/processos_judidicais (Snake Case)

+ Evite adicionar na URI a operação a ser realizada no recurso
+ A manipulação dos recursos deve ser feita utilizando-se os métodos do protocolo HTTP, que inclusive é um dos princípios do REST .
+ Portanto, evite definir URI’s que contenham a operação a ser realizada em um recurso, tais como:
	* http://servicorest.com.br/produtos/cadastrar
	* http://servicorest.com.br/clientes/10/excluir
	* http://servicorest.com.br/vendas/34/atualizar

### STATUS DAS RESPOSTAS 

+ 1xx: Informação
+ 2xx: Sucesso
	+ 200: OK - Em requisições GET, PUT e DELETE executadas com sucesso.
	+ 201: CREATED - Em requisições POST, quando um novo recurso é criado com sucesso.
	+ 204: Não tem conteúdo PUT POST DELETE
+ 3xx: Redirection
	+ 302: Found - Em requisições feitas a URI's antigas, que foram alteradas
+ 4xx: Client Error
	+ 401: Unauthorized - Em requisições que exigem autenticação, mas seus dados não foram fornecidos.
	+ 400: Bad Request - Em requisições cujas informações enviadas pelo cliente sejam invalidas.
	+ 404: Not Found! - Em requisições cuja URI de um determinado recurso seja inválida.
+ 5xx: Server Error 500: Internal Server Error

	 [https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

### O que é RESTful?

  

É um sistema que utiliza utiliza os princípios REST.

  

# Let`s code

  

### Etapa1

  

1. Criar aplicação NodeJs
2. O que são Middlewares?
3. Express framework
4. Criação de rotas
5. Processamento das requisições
6. O que é JSON?
7. Buscar resource
8. Realizar testes de rotas com Postman


### Etapa 2

1. Organização dos arquivos por rotas
2. O que é Jason Web Token (JWT) ?
3. Criar Basic Authentication
3. Realizar testes de autenticação com Postman
  
### Etapa 3

1. Mongoose
2. Estabelecer conexão com MongoDB
3. Criar banco de dados e coleções.
4. Operações com MongoDB nas rotas da API
5. Realizar testes com Postman

# Etapa1

* Criar aplicação NodeJs
		 ```yarn add -y``` - Inicializa o projeto com o gerenciador de pacotes do node YARN
		Adicionar arquivo ```server.js```
		
* Express framework
	* 	```yarn add express```	Instalar o modulo Express com YARN
	*   Criar `Hello World` e rodar o nosso server
		```js 
		const  express  =  require('express');
		const  app  =  express();
		
		app.listen(3000,  ()  =>  {
			console.log("Hello world");
		})
		```
	Rodar servidor - ```node server.js```		
* Criação de rotas
	+ Nodemon - Para auxiliar no desenvolvimento
		``yarn add nodemon``
	+ Utilizar verbos indicados para cada requisição.	
	```js
	//GET
	app.get('/profissionais')
	app.get('/profissionais/:id')

	//POST
	app.post('/profissionais')
	
	//PUT
	app.put('/profissionais')
	app.put('/profissionais/:id')
	
	//DELETE	
	app.delete('/profissionais')
	```
* Processamento das requisições
	```js
	//Importar recuros
	const  data  =  require("../profissionais.json");
	
	//Interpretar JSON
	app.use(express.json());
	```
* O que é JSON?
	**JSON** (JavaScript Object Notation - Notação de Objetos JavaScript) é uma formatação leve de troca de 	dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar.
	```js 
	[
		{
			"id":1,
			"nome":"Britt Jozsa",
			"email":"bjozsa0@globo.com",
			"data_nascimento":"28/01/1986",
			"genero":"F",
			"tratamento":"Ms",
			"celular":"8165833384",
			"especialidade":"Geriatria"
		}
	]
	

 * Buscar resource - Buscar todos os profissionais
	* Utilizar o morgan para gerenciar os logs 
		* O Morgan, que é uma forma de logar ou mostrar quais requisições estão chegando em nosso servidor HTTP.
	* Adicionando morgan ao projeto
	```yarn add morgan```
	* Utilizar morgan no projeto
		```js 
		const  morgan  =  require('morgan');
			
		app.use(morgan('dev'))	
	
	* Processando request
		```js
		app.get('/profissionais',  (req,res)  =>{
			res.json(data);
		})

* Atribuir boas respostas para as requests - Status das respostas
	* Tratando caso não encontrar nenhum profissional, informando ``status 204 - No content``
		```js  
		app.get('/profissionais/:id',  (req,res)  =>{
			const  {  id  }  =  req.params;
			const  profissional  =  data.find( prof  =>  prof.id  ==  id);
			
			if (!profissional) return  res.status(204).json();
			
			res.json(profissional);
			})
	
* Processando rotas - GET, POST, PUT, DELETE
	* GET
		```js  
			app.get('/profissionais/:id',  (req,res)  =>{
				const  {  id  }  =  req.params;
				const  profissional  =  data.find( prof  =>  prof.id  ==  id);
				
				if (!profissional) return  res.status(204).json();
				
				res.json(profissional);
			})
	* POST
		```js 
		//POST - Enviar dados ou informações para serem processados por um Resource.
		app.post('/profissionais',  (req,res)  =>{
			const  {  nome,  email  }  =  req.body;
			const  profissional  =  {
				"id":  data.length +  1,
				"nome":  nome,
				"email":  email
			};
			data.push(profissional);
			res.status(200).json(profissional);
		})
	* PUT
		```js
			//PUT - Atualizar dados de um Resource 
			app.put('/profissionais/:id',  (req,res)  =>{
				const  {  id  }  =  req.params;
		
				const  profissional  =  data.find(prof  =>  prof.id  ==  id);
				
				if (!profissional) return  res.status(204).json();
				
				const  {  nome,  email  }  =  req.body;
				
				profissional.nome  =  nome;
				profissional.email  =  email;
				
				res.status(200).json(profissional);
			})
	* DELETE
		```js
		//DELETE - Deletar um Resource
		app.delete('/profissionais/:id',  (req,res)  =>{
			
			const  {  id  }  =  req.params;
	
			const  profissional  =  data.filter(prof  =>  prof.id  !=  id);
			
			res.status(200).json(profissional);
		})

## Referências 

+  [https://becode.com.br/o-que-e-api-rest-e-restful/](https://becode.com.br/o-que-e-api-rest-e-restful/)
+  [https://blog.caelum.com.br/rest-principios-e-boas-praticas/](https://blog.caelum.com.br/rest-principios-e-boas-praticas/)
+  [https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6](https://medium.com/tableless/entendendo-tokens-jwt-json-web-token-413c6d1397f6)
+  [https://www.4linux.com.br/o-que-e-middleware](https://www.4linux.com.br/o-que-e-middleware)
+  [https://www.json.org/json-pt.html](https://www.json.org/json-pt.html)
+  [https://www.devpleno.com/morgan/](https://www.devpleno.com/morgan/)