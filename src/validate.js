export function validarLogin(email, password) {
  const errors = [];

  if (!email || email.trim() === '') {
    errors.push('Email é obrigatório');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Email inválido');
  }

  if (!password || password.trim() === '') {
    errors.push('Palavra-passe é obrigatória');
  } else if (password.length < 6) {
    errors.push('Palavra-passe deve ter no mínimo 6 caracteres');
  }

  return errors;
}

export function validarLivro(data) {
  const errors = [];

  if (!data.titulo || data.titulo.trim() === '') {
    errors.push('Título é obrigatório');
  }

  if (!data.isbn || data.isbn.trim() === '') {
    errors.push('ISBN é obrigatório');
  }

  if (!data.autor_id) {
    errors.push('Autor é obrigatório');
  }

  if (!data.categoria_id) {
    errors.push('Categoria é obrigatória');
  }

  if (!data.exemplares || parseInt(data.exemplares) <= 0) {
    errors.push('Exemplares deve ser maior que 0');
  }

  return errors;
}

export function validarAutor(data) {
  const errors = [];

  if (!data.nome || data.nome.trim() === '') {
    errors.push('Nome é obrigatório');
  }

  return errors;
}

export function validarCategoria(data) {
  const errors = [];

  if (!data.nome || data.nome.trim() === '') {
    errors.push('Nome é obrigatório');
  }

  return errors;
}

export function validarMembro(data) {
  const errors = [];

  if (!data.nome || data.nome.trim() === '') {
    errors.push('Nome é obrigatório');
  }

  if (!data.email || data.email.trim() === '') {
    errors.push('Email é obrigatório');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email inválido');
  }

  return errors;
}

export function validarEmprestimo(data) {
  const errors = [];

  if (!data.livro_id) {
    errors.push('Livro é obrigatório');
  }

  if (!data.membro_id) {
    errors.push('Membro é obrigatório');
  }

  if (!data.data_emprestimo) {
    errors.push('Data de empréstimo é obrigatória');
  }

  if (!data.data_devolucao_prevista) {
    errors.push('Data de devolução prevista é obrigatória');
  }

  return errors;
}
