const form = document.getElementById("form-ativity"); 
const mobile = [];
const person =[];

let lines = '';

form.addEventListener ('submit', function(e) {
   e.preventDefault();

   adicionarlinha();
   atualizartabela();
   atualizarmedia();
});

function adicionarlinha() { 
   const inputNameUser = document.getElementById('Name'); 
   const inputPhoneNumber = document.getElementById('Phone');

   if (person.includes(inputNameUser.value) || mobile.includes(parseFloat(inputPhoneNumber.value))) {
      alert(`Esse nome ou múmero já foi inserido, confirme se está a colocar os dados correctos | That name or number is already submited, please check if the data is correct`)
   }
   else {
      person.push(inputNameUser.value);
      mobile.push(parseFloat(inputPhoneNumber.value));

      let line = '<tr>';
      line += `<td>${inputNameUser.value}</td>`;
      line += `<td>${inputPhoneNumber.value}</td>`;
      line += '</tr>';

      lines += line
   }
   

   inputNameUser.value = '';
   inputPhoneNumber.value = '';
}

function atualizartabela() {
   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = lines;
}
