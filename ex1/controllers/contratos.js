const Contrato = require('../models/contrato');

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.lookUp = id => {
    return Contrato
        .findOne({ _id: id })
        .exec()
}

module.exports.lookUpEntidade = NIPC_entidade_comunicante => {
    return Contrato
        .find({ NIPC_entidade_comunicante: NIPC_entidade_comunicante })
        .exec()
}

module.exports.lookUpTipo = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec()
}

module.exports.entidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

module.exports.tipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

module.exports.insert = (contrato) => {
    if (Contrato.findOne({ _id: contrato._id }).length == 1) {
        return Promise.reject(new Error("Id already exists"))
    }

    var novo = new Contrato(contrato)
    return novo.save()
}

module.exports.delete = id => {
    return Contrato
        .deleteOne({ _id: id })
        .exec();
}

module.exports.update = (id, contrato) => {
    return Contrato
        .updateOne({ _id: id }, contrato)
        .exec();
}