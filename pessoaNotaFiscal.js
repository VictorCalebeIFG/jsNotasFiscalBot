document.getElementById("DataCompetencia").value = "31/08/2023"
var customEvent = new Event("change", { bubbles: true });
document.getElementById("DataCompetencia").dispatchEvent(customEvent);

//----------------------------------------------------------------

var radioElement = document.querySelector('input[name="Tomador.LocalDomicilio"][value="1"]');
radioElement.checked = true;
var customEvent = new Event("change", { bubbles: true });
radioElement.dispatchEvent(customEvent);

//----------------------------------------------------------------

var cnpjInput = document.getElementById("Tomador_Inscricao");
cnpjInput.value = "34.521.488/0001-14";
var customEvent = new Event("change", { bubbles: true });
document.getElementById("Tomador_Inscricao").dispatchEvent(customEvent);

//----------------------------------------------------------------

var buttonElement = document.getElementById("btn_Tomador_Inscricao_pesquisar");
buttonElement.click();

//-----------------------------------------------------------------
var spans = document.querySelectorAll('span.cr-text');
var targetSpan = null;

for (var i = 0; i < spans.length; i++) {
  if (spans[i].textContent.trim() === "Informar endereço") {
    targetSpan = spans[i];
    break;
  }
}

if (targetSpan) {
  targetSpan.click();
} else {
  console.log("O elemento <span> não foi encontrado.");
}
//-----------------------------------------------------------------

document.getElementById("Tomador_EnderecoNacional_CEP").value = "04.809-050"
var customEvent = new Event("change", { bubbles: true });
document.getElementById("Tomador_EnderecoNacional_CEP").dispatchEvent(customEvent);

//----------------------------------------------------------------

document.getElementById("btn_Tomador_EnderecoNacional_CEP").click();

//----------------------------------------------------------------

document.getElementById("Tomador_EnderecoNacional_Numero").value = "107"

//----------------------------------------------------------------

document.getElementById("Tomador_Nome").value = "INSTITUTO ALICERCE"

//----------------------------------------------------------------

document.getElementById("Tomador_Email").value = "regulatório.instituto@alicerceedu.com.br"

//---------------------------------------------------------------

document.getElementById("Tomador_Telefone").value = "(11)3071-1555"
