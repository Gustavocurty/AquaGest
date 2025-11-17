package classes.Cliente.Catalagos;

import java.util.ArrayList;
import java.util.List;

import classes.Cliente.Entity.Cliente;

public class CatalagoClientes{
    private List<Cliente> clientesCadastrados = new ArrayList<>();

    // Construtor com alguns clientes já cadastrados
    public CatalagoClientes() {
        clientesCadastrados.add(new Cliente("123.456.789-00", "João da Silva"));
        clientesCadastrados.add(new Cliente("987.654.321-00", "Maria Oliveira"));
    }

    // Passo 1.1: Busca o objeto Cliente
    public Cliente getCliente(String cpfUsuario) {
        for (Cliente c : clientesCadastrados) {
            if (c.getCpf().equals(cpfUsuario)) {
                return c;
            }
        }
        throw new RuntimeException("Cliente não encontrado!");
    }
}
