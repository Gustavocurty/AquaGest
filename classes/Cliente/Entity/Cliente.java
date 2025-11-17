package classes.Cliente.Entity;

import java.util.ArrayList;
import java.util.List;

import classes.Cliente.Meta.Meta;
import classes.Cliente.TipoPeriodo.TipoPeriodo;

public class Cliente {
    private String cpf;
    private String nome;

    private List<Meta> minhasMetas = new ArrayList<>();

    // Construtor
    public Cliente(String cpf, String nome) {
        this.cpf = cpf;
        this.nome = nome;
    }

    // Passo 1.3: IncluirMeta (Recebe o Objeto Periodo já buscado)
    public void incluirMeta(double volumeMaximo, TipoPeriodo objTipoPeriodo) {
        
        // Passo 1.3.1: O CLIENTE cria a meta
        Meta novaMeta = new Meta(volumeMaximo, objTipoPeriodo);
        
        // Adiciona na lista interna dele
        this.minhasMetas.add(novaMeta);
        
        System.out.println(">> Sucesso! Meta criada e associada ao cliente " + this.nome);
        System.out.println(">> Detalhes: " + novaMeta);
    }

    public String getCpf() { return cpf; }
}
