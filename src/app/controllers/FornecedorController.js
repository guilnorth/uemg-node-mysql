const fornecedorModule = {};
const db = require('../../database/connection');
const Fornecedor = require('../models/Fornecedor');

fornecedorModule.register = (req, res) => {
    const { nome_fornecedor, cnpj, contato } = req.body;

    const newFornecedor = new Fornecedor('', nome_fornecedor, cnpj, contato);
    try {
        db.query('INSERT INTO fornecedor SET ?', newFornecedor.returnObject(), (err, result) => {
            if (err)
                return res.status(400).send({ error: (err.message) ? err.message : 'Registration failed' });

            return res.send({ ...result, data: (result.affectedRows) ? newFornecedor : {} });
        });

    } catch (err) {
        console.log((err));
        return res.status(400).send({ error: (err.message) ? err.message : 'Registration failed' });
    }
};

fornecedorModule.listAll = (req, res) => {
    try {
        db.query('SELECT * FROM fornecedor', (err, result) => {
            if (err) throw err;
            return res.status(200).send(result);
        });

    } catch (e) {
        console.log(e);
        return res.status(400).send({ error: 'List failed' });
    }
}

fornecedorModule.listOne = (req, res) => {
    const { idfornecedor } = req.params;

    if (!idfornecedor)
        return res.status(400).send({ error: 'Bad Request' });

    try {
        db.query(`
        SELECT * FROM fornecedor 
        WHERE idfornecedor = ? `,
            [idfornecedor], (err, result) => {
                if (err) throw err;

                return res.status(200).send(result);
            });
    } catch (e) {
        console.log(e);
        return res.status(400).send({ error: 'List failed' });
    }

}

fornecedorModule.update = async (req, res) => {
    try {
        const { idfornecedor, nome_fornecedor, cnpj, contato } = req.body;
        const newFornecedor = new Fornecedor(idfornecedor, nome_fornecedor, cnpj, contato);

        if (!idfornecedor)
            return res.status(400).send({ error: 'Bad Request' });
        db.query('UPDATE fornecedor SET ? WHERE idfornecedor = ?', [newFornecedor.returnObject(), idfornecedor], (err, result) => {
            if (err)
                return res.status(400).send({ error: (err.message) ? err.message : 'Update failed' });

            return res.send({ ...result, data: (result.affectedRows) ? newFornecedor : {} });
        });

    } catch (err) {
        console.log((err));
        return res.status(400).send({ error: (err.message) ? err.message : 'Registration failed' });
    }
};

fornecedorModule.delete = async (req, res) => {
    const { idfornecedor } = req.params;

    if (!idfornecedor)
        return res.status(400).send({ error: 'Bad Request' });

    try {
        db.query('DELETE FROM fornecedor WHERE idfornecedor = ?', [idfornecedor], function (err, result) {
            if (err)
                return res.status(400).send({ error: (err.message) ? err.message : 'Update failed' });

            return res.send(result);
        });

    } catch (err) {
        console.log((err));
        return res.status(400).send({ error: (err.message) ? err.message : 'Registration failed' });
    }
};



module.exports = fornecedorModule;
