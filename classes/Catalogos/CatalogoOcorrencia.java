package classes.Catalogos;

import java.util.ArrayList;
import java.util.List;

import classes.Empresa.Ocorrencia.Ocorrencia;

public class CatalogoOcorrencia {
    private List<Ocorrencia> ocorrenciasRegistradas = new ArrayList<>();

    // Construtor: popula o catálogo com algumas ocorrências de exemplo
    public CatalogoOcorrencia() {
        ocorrenciasRegistradas.add(new Ocorrencia("OS-12345", "Vazamento na Paulista"));
        ocorrenciasRegistradas.add(new Ocorrencia("OS-99999", "Falta de luz no Centro"));
    }

    // Passo 1.1 - Busca uma Ocorrência pelo protocolo e retorna o objeto 
    public Ocorrencia getOcorr(String protocolo) {
        for (Ocorrencia oc : ocorrenciasRegistradas) {
            if (oc.getProtocolo().equals(protocolo)) {
                return oc; 
            }
        }
        throw new RuntimeException("Ocorrência " + protocolo + " não encontrada nos registros!");
    }
}