package classes.Catalogos;

import java.util.ArrayList;
import java.util.List;

import classes.Empresa.Prioridade.Prioridade;

public class CatalogoPrioridadeTarefa {

    // Lista que simula as opções disponíveis
    private List<Prioridade> prioridadesRegistradas = new ArrayList<>();

    // Construtor: pré-carrega algumas prioridades
    public CatalogoPrioridadeTarefa() {
        prioridadesRegistradas.add(new Prioridade("Alta"));
        prioridadesRegistradas.add(new Prioridade("Média"));
        prioridadesRegistradas.add(new Prioridade("Baixa"));
        prioridadesRegistradas.add(new Prioridade("Normal"));
    }

    // Passo 1.3: Busca a prioridade correspondente
    public Prioridade getPriori(String nivel) {
        for (Prioridade p : prioridadesRegistradas) {
            // equalsIgnoreCase é importante para aceitar "alta", "Alta" ou "ALTA"
            if (p.getNivel().equalsIgnoreCase(nivel)) {
                return p;
            }
        }
        return new Prioridade("Normal");
    }
}