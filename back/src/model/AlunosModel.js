const toCreateAluno = (model) => {
    return `INSERT INTO alunos VALUES (DEFAULT,'${model.nome}','${model.nascimento}')`;
}

const toReadAll = () => {
    return `SELECT * FROM alunos`;
}

const del = (model) => {
    return `DELETE FROM alunos WHERE id = ${model.id}`;
}

const update = (model) => {
    return `UPDATE alunos SET nome = '${model.nome}', nascimento = '${model.nascimento}' WHERE id = ${model.id}`
}

module.exports = {
    toCreateAluno,
    toReadAll,
    del,
    update
}
 