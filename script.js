const doenças = [
  {
    nome: "Gonorreia",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> A gonorreia é uma infecção causada pela bactéria <em>Neisseria gonorrhoeae</em>.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Dor ao urinar</li>
                <li>Secreção anormal (pode ser amarelada ou esverdeada)</li>
                <li>Dor na garganta (se infectada)</li>
                <li>Dor abdominal</li>
            </ul>
            <strong>Diagnóstico:</strong> Exames de urina, swabs uretrais ou cervicais.<br>
            <strong>Prevenção:</strong> Uso de preservativos, testes regulares.<br>
            <strong>Tratamento:</strong> Antibióticos, geralmente uma combinação para prevenir resistência. É importante tratar parceiros também.<br>
        `,
  },
  {
    nome: "Clamídia",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> A clamídia é uma infecção bacteriana comum, muitas vezes assintomática.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Dor ao urinar</li>
                <li>Secreção anormal</li>
                <li>Dor abdominal</li>
                <li>Sangramento entre períodos menstruais</li>
            </ul>
            <strong>Diagnóstico:</strong> Exames de urina ou swabs.<br>
            <strong>Prevenção:</strong> Uso de preservativos, testes regulares.<br>
            <strong>Tratamento:</strong> Antibióticos, frequentemente azitromicina ou doxiciclina.
        `,
  },
  {
    nome: "Sífilis",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> A sífilis é uma infecção bacteriana que pode causar sérias complicações se não tratada.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Feridas indolores (cancros)</li>
                <li>Erupções cutâneas</li>
                <li>Febre</li>
                <li>Fadiga</li>
                <li>Dor de garganta</li>
            </ul>
            <strong>Diagnóstico:</strong> Exames de sangue e testes para verificar feridas.<br>
            <strong>Prevenção:</strong> Uso de preservativos, testes regulares.<br>
            <strong>Tratamento:</strong> Antibióticos, geralmente penicilina.
        `,
  },
  {
    nome: "Herpes Genital",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> A herpes genital é causada pelo vírus herpes simples (HSV-1 ou HSV-2).<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Feridas dolorosas</li>
                <li>Coceira</li>
                <li>Ardor</li>
                <li>Febre</li>
                <li>Dor ao urinar</li>
            </ul>
            <strong>Diagnóstico:</strong> Exame físico, teste de cultura de feridas, testes de sangue.<br>
            <strong>Prevenção:</strong> Uso de preservativos, evitar contato durante surtos.<br>
            <strong>Tratamento:</strong> Antivirais, como aciclovir, para reduzir a gravidade e a frequência dos surtos.
        `,
  },
  {
    nome: "HIV/AIDS",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> O HIV é um vírus que ataca o sistema imunológico, podendo levar à AIDS.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Muitas vezes assintomático nas fases iniciais</li>
                <li>Febre</li>
                <li>Dor de cabeça</li>
                <li>Fadiga</li>
                <li>Perda de peso</li>
            </ul>
            <strong>Diagnóstico:</strong> Exames de sangue para detectar anticorpos ou o próprio vírus.<br>
            <strong>Prevenção:</strong> Uso de preservativos, profilaxia pré-exposição (PrEP), testes regulares.<br>
            <strong>Tratamento:</strong> Antirretrovirais, que ajudam a controlar o vírus e a prevenir a progressão para AIDS.
        `,
  },
  {
    nome: "HPV (Papilomavírus Humano)",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> O HPV é um grupo de vírus que podem causar verrugas genitais e câncer.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Muitas vezes assintomático</li>
                <li>Verrugas genitais podem aparecer</li>
            </ul>
            <strong>Diagnóstico:</strong> Exame físico, teste de Papanicolau em mulheres.<br>
            <strong>Prevenção:</strong> Vacinação, uso de preservativos.<br>
            <strong>Tratamento:</strong> Remoção de verrugas; monitoramento para câncer.
        `,
  },
  {
    nome: "Hepatite B",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> Infecção viral que afeta o fígado, podendo se tornar crônica.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Fadiga</li>
                <li>Dor abdominal</li>
                <li>Icterícia</li>
                <li>Urina escura</li>
            </ul>
            <strong>Diagnóstico:</strong> Exames de sangue.<br>
            <strong>Prevenção:</strong> Vacinação, uso de preservativos.<br>
            <strong>Tratamento:</strong> Antivirais; em casos crônicos, monitoramento regular.
        `,
  },
  {
    nome: "Hepatite C",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> Infecção viral que pode se tornar crônica e afetar o fígado.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Muitas vezes assintomático</li>
                <li>Pode causar fadiga e dor no fígado</li>
            </ul>
            <strong>Diagnóstico:</strong> Exames de sangue.<br>
            <strong>Prevenção:</strong> Uso de preservativos, evitar compartilhamento de agulhas.<br>
            <strong>Tratamento:</strong> Antivirais, com altas taxas de cura.
        `,
  },
  {
    nome: "Tricomoníase",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> Infecção causada pelo protozoário <em>Trichomonas vaginalis</em>.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Irritação genital</li>
                <li>Secreção com odor forte</li>
            </ul>
            <strong>Diagnóstico:</strong> Exame físico, testes laboratoriais.<br>
            <strong>Prevenção:</strong> Uso de preservativos.<br>
            <strong>Tratamento:</strong> Antibióticos, como metronidazol.
        `,
  },
  {
    nome: "Mycoplasma genitalium",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> Infecção bacteriana que pode causar uretrite e cervicite.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Dor ao urinar</li>
                <li>Secreção</li>
                <li>Dor durante relações sexuais</li>
            </ul>
            <strong>Diagnóstico:</strong> Testes laboratoriais específicos.<br>
            <strong>Prevenção:</strong> Uso de preservativos.<br>
            <strong>Tratamento:</strong> Antibióticos, como azitromicina ou moxifloxacino.
        `,
  },
  {
    nome: "Linfogranuloma venéreo",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> Causado por cepas de <em>Chlamydia trachomatis</em>.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Inchaço dos gânglios linfáticos</li>
                <li>Úlceras genitais</li>
            </ul>
            <strong>Diagnóstico:</strong> Exames laboratoriais.<br>
            <strong>Prevenção:</strong> Uso de preservativos.<br>
            <strong>Tratamento:</strong> Antibióticos, como doxiciclina.
        `,
  },
  {
    nome: "Candidíase",
    imagem: "profile.gif",
    detalhes: `
            <strong>Descrição:</strong> Infecção fúngica que pode ser transmitida sexualmente, mas não é considerada uma IST estrita.<br>
            <strong>Sintomas:</strong>
            <ul>
                <li>Coceira</li>
                <li>Ardor</li>
                <li>Secreção vaginal espessa</li>
            </ul>
            <strong>Diagnóstico:</strong> Exame físico e análise de secreção.<br>
            <strong>Prevenção:</strong> Manter higiene adequada, uso de preservativos.<br>
            <strong>Tratamento:</strong> Antifúngicos, como fluconazol.
        `,
  },
];

function criarListaDoencas() {
  const lista = document.getElementById("doencas-lista");

  doenças.forEach((doenca) => {
    const card = document.createElement("div");
    card.className = "card";

    const imagem = document.createElement("img");
    imagem.src = doenca.imagem;
    imagem.alt = doenca.nome;

    const titulo = document.createElement("h3");
    titulo.innerText = doenca.nome;

    const button = document.createElement("button");
    button.innerText = "Ver Detalhes";
    button.onclick = () => mostrarDetalhes(doenca);

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(button);
    lista.appendChild(card);
  });
}

function mostrarDetalhes(doenca) {
  const modal = document.getElementById("modal");
  const titulo = document.getElementById("modal-titulo");
  const conteudo = document.getElementById("modal-texto");

  titulo.innerText = doenca.nome;
  conteudo.innerHTML = doenca.detalhes;

  modal.style.display = "block";
}

function fecharModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

criarListaDoencas();

document.getElementById("modal-fechar").onclick = fecharModal;
