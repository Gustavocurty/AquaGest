package classes.Cliente.Catalagos;

import java.util.ArrayList;
import java.util.List;

import classes.Cliente.TipoPeriodo.TipoPeriodo;

public class CatalagoTipoPeriodo {
    private List<TipoPeriodo> periodosDisponiveis = new ArrayList<>();

    public CatalagoTipoPeriodo() {
        periodosDisponiveis.add(new TipoPeriodo("Diária"));
        periodosDisponiveis.add(new TipoPeriodo("Semanal"));
        periodosDisponiveis.add(new TipoPeriodo("Mensal"));
    }

    // Passo 1.2: Busca o objeto TipoPeriodo    
    public TipoPeriodo getTipoPeriodo(String periodoNome) {
        for (TipoPeriodo tp : periodosDisponiveis) {
            if (tp.getNome().equalsIgnoreCase(periodoNome)) {
                return tp;
            }
        }
        throw new RuntimeException("Período inválido!");
    }
}