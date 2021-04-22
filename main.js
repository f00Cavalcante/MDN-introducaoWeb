/* Declaração de variáveis */
let
   lMinhaImagem = document.querySelector('img');

   /* atribuição de função */
   /* Função: alterar imagem da tag <img> conforme a mesma receber click */
   lMinhaImagem.onclick = 
   function()
   {
      let lMeuScr = lMinhaImagem.getAttribute('src');

      if(lMeuScr === './img/Simpsons_img01.png')
      {
         lMinhaImagem.setAttribute('src', './img/Simpsons_img02.png')
      }
         else
         {
            lMinhaImagem.setAttribute('src', './img/Simpsons_img01.png')
         }
   }

let
   lMyButton   = document.querySelector('button'), /* seleciona o elemento button */
   lMyHead     = document.querySelector('h1');     /* seleciona o elemento h1 (título) */

   /* Função: definir nome do usuário */
   function fDefinirUsuario()
   {
      /* inserção de dados */
      let userName = prompt('Informe seu nome.');

      if (!userName || userName === null)
      {
         fDefinirUsuario();
      }
         else
         {
            localStorage.setItem('name', userName); /* armazenar dados */
            lMyHead.textContent = ('Mozilla é legal, ' + userName);
         }
   }

   if (!localStorage.getItem('name'))
   {
      fDefinirUsuario();
   }
      else
      {
         let nomeGuardado = localStorage.getItem('name');
         lMyHead.textContent = ('Mozilla é legal, ' + nomeGuardado);
      }

   lMyButton.onclick = fDefinirUsuario;