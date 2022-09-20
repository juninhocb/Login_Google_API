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

#### Resultado
<img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);" src="https://loginbucketverypet.s3.sa-east-1.amazonaws.com/Google%20Sign%20In.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJGMEQCIGBlKURWnvCsBhIb%2FT1WM3uMwwX%2BdC1mP9Ps4mcKFb%2B%2BAiAUUpi5vhDEyDxRMtq2C0J7HhnQRzBSsc0ikFtbuTJPMCrkAghNEAAaDDQyNjkzOTQzNjg4NyIMPHgyUdtmd8NVcDsWKsECANQb6YzOtwXuM9lkLm1koRoDEEHzud%2Bq3dHex2xfH%2BU%2FuxVIXe%2BTeLxGcsdV0G7S3oDg0XhnIdINZYKKtX7aTQBX2jtWJ8ZaAzrzpp%2FVt787QQIdTtKHeQkrAZBkslx9hNAbFo0aW13HkrucAR4vTcQXThfpQOHHQ8%2BjfYjpqeWaPLoYvl3Q1Iak3YJfXiTDwzI1B7TcNJi6V22I5uz6qHlO8kEmB6YC9TBtdIcRCsyhMAtHaXHTdtRFR485k1VSOC3sSVIG0Hu5KlVaLBBkJdj2kzwCepOoEZK%2B6urNXLIcASjjmMS5FyCFH9RtYMGfVsC93Aa4x8%2B1AoJi8SXWxNepbb7Wf9PACrNQFLtJVx9V4kzzGQ8rUwZE5UbIE9CqYX3wQLUWfaBTec%2FYuzIKgahyyOT4n2mc%2BADI%2B4cqPaUxMJCIo5kGOrQC0uLoRyzKNYx71vVaYQnCDappGn58f%2BzLqqQ6yJOqaXr66UlWQYs7YfLoQFVj%2BhucCM0zZtoL2FXKmACYRgLgpak8OL4e4DngBtV3VWmHoJ9U33oBPhLSYFKBZhs3QF9sQkM5X3gdH8QN4dkbl2onyKqB%2ByyMJkR5E73aDhhLosdUPH2U3Bkd9zG%2FidbvXF%2Fh9tQdGSCqxJNLUBXkNgdlItdgF6Xe6bfOSYnbyaM96Lo%2FU%2B3FHB9Wmxq5BI%2Bz9hhSY5QBHjQMu2tVnZ%2FIU2PAcIkAUu0aL9QkAcZRPv9h1yBuZoBIEGezZfhfK0xy6OAK4tTd%2FuISLegaziy3El5JvObx7F9Euqg1wEA%2B2gcrSBvMP4oL977HzjBs8sFo5PjeQhHHlM2kA4Wr2%2BPSNDIUU7aclwY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220920T021554Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAWGZ4SZ5L2MNFBCET%2F20220920%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66c6e42100065a0473189f5d4161df876d30524296a42e9e9e60e01ca803b306">
