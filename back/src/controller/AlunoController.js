const Item = require('../model/AlunosModel');
const con = require('../DAO/Dao');

const CadAluno = (req, res) => {
    con.query(Item.toCreateAluno(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarAluno = (req, res) => {
        con.query(Item.toReadAll(req.body), (err, result) => {
            if (err == null)
                if (result.length > 0)
                    res.json(result).end();
                else
                    res.status(404).end();
            else
                res.status(500).end();
        });
    }

    const ExcluirAluno = (req, res) => {
        con.query(Item.del(req.params), (err, result) => {
            if (err == null)
                if (result.affectedRows > 0)
                    res.status(204).end();
                else
                    res.status(404).end();
            else
                res.status(400).json(err).end();
        });
    }

    
const updateAluno = (req, res) => {
    con.query(Item.update(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}


module.exports = {
    CadAluno,
    listarAluno,
    ExcluirAluno,
    updateAluno
    
}