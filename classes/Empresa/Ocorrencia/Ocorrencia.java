package classes.Empresa.Ocorrencia;

import java.util.ArrayList;
import java.util.List;

import classes.Empresa.Tarefa.Tarefa;

public class Ocorrencia {
    private String protocolo;
    private String descricao;
    private List<Tarefa> tarefas;

    public Ocorrencia(String protocolo, String descricao) {
        this.protocolo = protocolo;
        this.descricao = descricao;
        this.tarefas = new ArrayList<>();
    }

    // Método 1.5: adicionarTarefa
    public void adicionarTarefa(Tarefa novaTarefa) {
        this.tarefas.add(novaTarefa);
        System.out.println(">> Tarefa vinculada à ocorrência " + this.protocolo);
    }

    //Getters e setters
    public String getProtocolo() {
        return protocolo;
    }
}