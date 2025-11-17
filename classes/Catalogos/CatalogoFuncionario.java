package classes.Catalogos;

import java.util.ArrayList;
import java.util.List;

import classes.Empresa.Funcionario.Funcionario;


public class CatalogoFuncionario {
    // Lista interna de funcionários da empresa
    private List<Funcionario> funcionariosCadastrados = new ArrayList<>();

    // Construtor: popula com alguns funcionários de exemplo
    public CatalogoFuncionario() {
        funcionariosCadastrados.add(new Funcionario("111.222.333-44", "João Silva"));
        funcionariosCadastrados.add(new Funcionario("555.666.777-88", "Maria Oliveira"));
        funcionariosCadastrados.add(new Funcionario("999.888.777-66", "Carlos Souza"));
    }

    // Passo 1.2 - Busca Funcionários pelos CPFs e retorna uma lista de objetos funcionário
    public List<Funcionario> getFuncionarios(String[] listaCpfs) {
        List<Funcionario> funcionariosEncontrados = new ArrayList<>();

        for (String cpfProcurado : listaCpfs) {
            boolean cpfExiste = false;
            
            for (Funcionario func : funcionariosCadastrados) {
                if (func.getCpf().equals(cpfProcurado)) {
                    funcionariosEncontrados.add(func);
                    cpfExiste = true;
                    break; 
                }
            }
            if (!cpfExiste) {
                System.out.println("Aviso: CPF " + cpfProcurado + " não consta no cadastro.");
            }
        }
        return funcionariosEncontrados;
    }
}