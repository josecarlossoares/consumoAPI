async function obterDadosDaAPI() {
  let lista: any = [];
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users/');
      const dados: any = await resposta.json();
      console.log("Id - Nome - E-mail");
      for(const post of dados){
        let id: string = post.id
        let name: string = post.name
        let email: string = post.email
        console.log(`${id} - ${name} - ${email}`);
        
      }
    } catch (erro) {
      console.error('Erro ao obter dados da API:', erro);
    }
}

obterDadosDaAPI();
  