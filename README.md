# Shiraga_PlayDietas
Esse README deve ser atualizado, de acordo com as necessidades específicadas pelo cliente.

Aplicativo multiplataforma. Ele incluiria um dashboard com informações para os usuários, chat para dúvidas, gamification, entre outras funções.

Gostaria, para o projeto, desenvolver um MVP com apenas algumas funções iniciais. Isso devido ao pouco tempo até as VFs, e por não conhecer desenvolvimento mobile.

A motivação do PlayDietas é oferecer orientações de dietas e cirurgias bariátricas para a sociedade de maneira acessível. É um app que estaria desenvolvendo para meu pai.

# Requisitos
 - Node.js
 - Framework Ionic/Angular 4
 - mySQL (ou outro banco de dados, sendo necessárias alterações)
 - PHP8 + Framework Laravel

# Executando o projeto
Abra o terminal na pasta NewDietas e execute o comando "ionic serve".
Após isso, abra as Ferramentas do Desenvolvedor nas opções do navegador, e coloque a visualização no aparelho desejado.
O projeto utilizou como base o iPhone X, mas funciona para todos os demais, mantendo a proposta de ser multiplataforma.

# O que foi desenvolvido...
O programa já está minimamente funcional. Já montou-se um Front-End básico para a tela de Login do PlayDietas (pasta NewDietas), assim como páginas de Registro para o usuário se cadastrar, e Landing (Home do programa).<br>
Estou tentando agora conectar a validação do token no Front-End com o API Laravel Rest no Back-End para, assim, armazenar e resgatar informações básicas dos usuários.<br>
O código básico para autenticação do servidor já foi feita e testada localmente. O problema agora são os crashs do mySQL: o artisan do PHP não consegue realizar a conexão pois o mySQL não consegue
abrir uma nova tabela de dados. Vamos tentar trocar o SGBD para funcionar com o Laravel.<br>
Para mais informações, olhe no Log de desenvolvimento do projeto.

# Diagrama de Classes
As três classes básicas pensadas no desenvolvimento do projeto. A classe administrador, no caso, seria ocupada pelo cirurgião bariátrico.

<img style="display:block; margin-left:auto; margin-right:auto" width="600px" height="300px" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/UMLPlayDietas.JPG">

As classes serão implementadas assim que for possível armazenar os dados no Banco de Dados.

# Jornada do usuário
As interações pelas quais o usuário passa durante o uso do programa.
<img width="900px" height="600px" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Fluxo%20da%20trajet%C3%B3ria%20do%20usu%C3%A1rio%20PlayDietas.png">

# Interface Gráfica: Ionic
Seguirei inicialmente utilizando o Ionic para montar toda a interface gráfica. Estarei seguindo esses guias como base:
 - (BASE) Ionic Framework 4 - Full Tutorial - iOS / Android App Development: https://www.youtube.com/watch?v=AvbuIRg8_Jg
 - Ionic 4 & Angular Tutorial For Beginners - Crash Course: https://www.youtube.com/watch?v=r2ga-iXS5i4

Mockup do Projeto - Planejamento da Interface

<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Página Inicial" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Interface%20Gr%C3%A1fica/Initial%20Page.png">

A página inicial é a responsável por permitir o usuário entrar no sistema com seu cadastro próprio. Ele diferencia usuários cadastrados efetivamente no programa PlayDietas, de outros usuários que estão somente utilizando o programa pelas informações de saúde, dietas e treinamentos físicos.

A tela permite o usuário se cadastrar (podendo ou não se inscrever no programa) para acompanhamento do uso do PlayDietas, e também permite Recuperar a Senha, caso o usuário a esqueça.


<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Feed de Notícias" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Interface%20Gr%C3%A1fica/Feed%20de%20Not%C3%ADcias.png">

O feed de notícias é a página mais comumente visitada pelos usuários, fornecendo de maneira direta e eficiente informações aos usuários e atualizações sobre o programa PlayDietas.


<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Sobre o Projeto" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Interface%20Gr%C3%A1fica/Sobre%20o%20projeto.png">

A página de informações mostra a importância de se inscrever no programa PlayDietas para potencializar seus resultados e ter de perto o acompanhamento personalizado da equipe multidisciplinar da Clínica Bariátrica.

# Projeto atualizado
Aqui algumas imagens da última versão do projeto.

<br><br>
Boas-Vindas
<br><br>
<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Sobre o Projeto" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Front%20Atualizado/welcome.JPG">
<br><br><br><br>
Login
<br><br>
<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Sobre o Projeto" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Front%20Atualizado/login.JPG">
<br><br><br><br>
Register
<br><br>
<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Sobre o Projeto" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Front%20Atualizado/register.JPG">
<br><br><br><br>
Home (se Auth=true. Mas a autenticação está desativada por enquanto)
<br><br>
<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Sobre o Projeto" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Front%20Atualizado/home.JPG">
<br><br><br><br>
Sidemenu
<br><br><br><br>
<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Sobre o Projeto" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Front%20Atualizado/sidemenu.JPG">





Dashboard - Testando cores


<img style="display:block; margin-left:auto; margin-right:auto" width="300px" height="610px" alt="Sobre o Projeto" src="https://github.com/PEE-2019-ELO-COM/Shiraga_PlayDietas/blob/master/Imagens%20Front%20Atualizado/dashboard.JPG">