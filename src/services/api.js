const API_URL = 'http://localhost:3001';

export async function getProdutos() {
  try {
    const response = await fetch(`${API_URL}/produtos`);
    if (!response.ok) {
      throw new Error('Erro ao buscar os produtos da API.');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição getProdutos:', error);
    throw error;
  }
}

export async function getProdutoPorId(id) {
  try {
    const response = await fetch(`${API_URL}/produtos/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Produto não encontrado.');
      }
      throw new Error('Erro ao buscar o produto.');
    }
    return await response.json();
  } catch (error) {
    console.error(`Erro na requisição getProdutoPorId (${id}):`, error);
    throw error;
  }
}