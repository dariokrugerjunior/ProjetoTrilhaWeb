package br.com.coldigogeladeiras.rest;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.com.coldigogeladeiras.jdbc.JDBCMarcaDAO;
import br.com.coldigogeladeiras.modelo.Marca;
import br.com.coldigogeladerias.bd.Conexao;
@Path("marca")
public class MarcaRest extends UtilRest{

	@GET
	@Path("/buscar")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar() {
		
		try {
			List<Marca> listMarcas = new ArrayList<Marca>();
			
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);
			listMarcas = jdbcMarca.buscar();
			conec.fecharConexao();
			
			return this.buildResponse(listMarcas);
			
		}catch(Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}	
	}
}
