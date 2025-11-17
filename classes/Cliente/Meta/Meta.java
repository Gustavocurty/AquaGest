package classes.Cliente.Meta;

import classes.Cliente.TipoPeriodo.TipoPeriodo;

public class Meta {
    private double volumeMaximo;
    private TipoPeriodo periodo; 

    // Passo 1.3.1: O Construtor chamado pelo Cliente
    public Meta(double volume, TipoPeriodo periodo) {
        this.volumeMaximo = volume;
        this.periodo = periodo;
    }

    public String toString() {
        return "Meta de " + volumeMaximo + "L (" + periodo.getNome() + ")";
    }
}
