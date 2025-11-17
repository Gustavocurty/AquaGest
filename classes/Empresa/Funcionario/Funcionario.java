package classes.Empresa.Funcionario;

import java.util.ArrayList;
import java.util.List;

import classes.Empresa.Tarefa.Tarefa;

public class Funcionario {
    private String cpf;
    private String nome;
    private List<Tarefa> tarefas;

    //Constructor
    public Funcionario(String cpf, String nome) {
        this.cpf = cpf;
        this.nome = nome;
        this.tarefas = new ArrayList<>();
    }

    // Método 1.6*: adicionarTarefa
    public void adicionarTarefa(Tarefa novaTarefa) {
        this.tarefas.add(novaTarefa);
        System.out.println(">> Tarefa associada ao funcionário " + this.nome);
    }
    
    // Getter CPF
    public String getCpf() { return cpf; }

    /*
    *  Getters e Setters
    */
}
