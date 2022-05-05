
function onClick(){
    function Aluno(RA, nome) {
        this.RA = RA
        this.nome = nome
    }
    
    var aluno = new Aluno("RA", "nome")
    
    var aluno1 = {
        RA: "Ra",
        nome: "nome"
    
    }
    
    var aluno2 = new Object()
    aluno2.nome = "nome"
    aluno2.RA = "RA"

    alert(aluno.nome + " " + aluno.RA)
    alert(aluno1.nome + " " + aluno1.RA)
    alert(aluno2.nome + " " + aluno2.RA)
}

