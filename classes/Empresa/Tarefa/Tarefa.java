package classes.Empresa.Tarefa;
import java.util.Date;
import java.util.List;

import classes.Empresa.Funcionario.Funcionario;
import classes.Empresa.Ocorrencia.Ocorrencia;
import classes.Empresa.Prioridade.Prioridade;

public class Tarefa {
    private List<Funcionario> funcionarios;
    private Ocorrencia ocorrencia;
    private String descricao;
    private Date prazo;
    private Prioridade prioridade;

    // Construtor (Passo 1.4.1 - New Tarefa)
    // Recebe OBJETOS
    public Tarefa(List<Funcionario> funcs, Ocorrencia oc, String desc, Date prazo, Prioridade priori) {
        this.funcionarios = funcs;
        this.ocorrencia = oc;
        this.descricao = desc;
        this.prazo = prazo;
        this.prioridade = priori;
        System.out.println(">> Nova Tarefa instanciada na memória: " + desc);
    }

    //Getters e setters
}