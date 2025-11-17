package classes.Empresa;
import java.util.List;

import classes.Empresa.Catalogos.CatalogoFuncionario;
import classes.Empresa.Catalogos.CatalogoOcorrencia;
import classes.Empresa.Catalogos.CatalogoPrioridadeTarefa;
import classes.Empresa.Catalogos.CatalogoTarefa;
import classes.Empresa.Funcionario.Funcionario;
import classes.Empresa.Ocorrencia.Ocorrencia;
import classes.Empresa.Prioridade.Prioridade;
import classes.Empresa.Tarefa.Tarefa;

import java.util.Date;

public class ManutencaoController {
    private CatalogoOcorrencia catOcorrencia;
    private CatalogoFuncionario catFuncionario;
    private CatalogoPrioridadeTarefa catPrioridade;
    private CatalogoTarefa catTarefa;

    // Construtor
    public ManutencaoController(CatalogoOcorrencia cOcorr, 
                                CatalogoFuncionario cFunc, 
                                CatalogoPrioridadeTarefa cPrio, 
                                CatalogoTarefa cTar) {
        this.catOcorrencia = cOcorr;
        this.catFuncionario = cFunc;
        this.catPrioridade = cPrio;
        this.catTarefa = cTar;
    }

    // Método Passo 1: criarTarefa
    public void criarTarefa(String[] listaCpfs, String protocoloOcorr, String descricao, Date prazo, String nivelPrioridade) {        
        // 1.1: Busca Ocorrencia
        Ocorrencia objOcorrencia = catOcorrencia.getOcorr(protocoloOcorr);
        
        // 1.2: Busca Funcionários
        List<Funcionario> listaFuncionarios = catFuncionario.getFuncionarios(listaCpfs);
        
        // 1.3: Busca Prioridade
        Prioridade objPrioridade = catPrioridade.getPriori(nivelPrioridade);
        
        Tarefa tarefaCriada = catTarefa.registrarTarefa(
            listaFuncionarios, 
            objOcorrencia, 
            descricao, 
            prazo, 
            objPrioridade
        );
        
        // 1.5: Avisa a ocorrencia
        objOcorrencia.adicionarTarefa(tarefaCriada);

        // 1.6*: Avisa cada funcionário
        for (Funcionario func : listaFuncionarios) {
            func.adicionarTarefa(tarefaCriada);
        }
        
    }
}