## Passos para reproduzir

<body>
<ol>
<li>Abrir google cloud console</li>
<li>Criar um projeto de API e Serviços</li>
<li>
  Configurar a tela de consentimendo do Google OAuth
  <ul>
      <li> Adicionar as URIs autorizadas e redirecionamentos </li>
      <li> Definir o escopo de acesso do cliente </li>
      <li> Definir informações a serem capturadas </li>
    </ul>
</li>
<li>Criar o ID do cliente (que irá se conectar a API) OAuth
  <ul>
      <li> Adicionar as URIs autorizadas e redirecionamentos </li>
    </ul>
</li>
<li>Copiar sua api_client</li>
<li>Substituir o client_id no local indicado em <strong>script.js</strong> </li>
<li> Rodar o projeto (eu utilizei o liveserver) </li>
</ol>
</body>

#### Utilize o Console do navegador para obter informações sobre o objeto capturado

#### Utilize o Google playground para testar sua acess_token/refresh_token para acessar API's  

<a href="https://developers.google.com/oauthplayground/">Google o OAuth Playground</a>
