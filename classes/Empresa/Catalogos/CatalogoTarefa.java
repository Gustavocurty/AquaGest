package classes.Empresa.Catalogos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import classes.Empresa.Funcionario.Funcionario;
import classes.Empresa.Ocorrencia.Ocorrencia;
import classes.Empresa.Prioridade.Prioridade;
import classes.Empresa.Tarefa.Tarefa;

public class CatalogoTarefa {
    private List<Tarefa> tarefas = new ArrayList<>(); 

    // Passo 1.4
    public Tarefa registrarTarefa(List<Funcionario> funcs, Ocorrencia oc, String desc, Date prazo, Prioridade priori) {
        // 1.4.1: Criação efetiva do objeto
        Tarefa novaTarefa = new Tarefa(funcs, oc, desc, prazo, priori);
        
        // Salva a tarefa no catálogo
        this.tarefas.add(novaTarefa);
        
        return novaTarefa;
    }
}