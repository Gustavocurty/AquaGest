package classes.Cliente;

import classes.Cliente.Catalagos.CatalagoClientes;
import classes.Cliente.Catalagos.CatalagoTipoPeriodo;
import classes.Cliente.Entity.Cliente;
import classes.Cliente.TipoPeriodo.TipoPeriodo;

public class IMController {

    private CatalagoClientes catalagoClientes;
    private CatalagoTipoPeriodo catalagoTipoPeriodo;

    // Injeção de Dependência via Construtor (como conversamos antes)
    public IMController(CatalagoClientes lc, CatalagoTipoPeriodo lp) {
        this.catalagoClientes = lc;
        this.catalagoTipoPeriodo = lp;
    }

    // Passo 1: IncluirMeta (Método principal)
    public void incluirMeta(double volumeMaximo, String tipoPeriodo, String cpfUsuario) {
        
        // Passo 1.1: Busca pelo objeto Cliente
        Cliente objCliente = catalagoClientes.getCliente(cpfUsuario);
        
        // Passo 1.2: Busca pelo objeto do Tipo do periodo
        TipoPeriodo objTipoPeriod = catalagoTipoPeriodo.getTipoPeriodo(tipoPeriodo);
        
        // Passo 1.3: Manda o Cliente criar a meta
        objCliente.incluirMeta(volumeMaximo, objTipoPeriod);
    }
}