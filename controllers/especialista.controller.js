const Especialista = require('../models/especialista.model');
const {
    validationResult
} = require('express-validator');
const EspecialistaMessages = require("../messages/especialista.messages");

exports.get = (req, res) => {

    Especialista.find(req.query).populate("_id","name").exec((error, especialistas) => {



    console.log("****************************** Especialista  Find All               *************************");
    console.log("**********************************************************************************************");
    console.log("**********************************************************************************************");
           //     console.log(especialista);

           // let i = 0;
           // do {
           //     console.log(error[i]);
           //      i++;
           //  } while (i < error.length);


    console.log("**********************************************************************************************");
    console.log("**********************************************************************************************");

//        if (error) throw error;



        let message = EspecialistaMessages.success.s2;

        if (especialistas.length < 0)
            message = EspecialistaMessages.success.s5;

        message.body = especialistas;
        return res.status(message.http).send(message);
    });




}

exports.create = (req, res) => {

    const errors = validationResult(req).array();
    //    if (errors.length > 0) return res.status(406).send(errors);

    new Especialista({
        name: req.body.name
    }).save((error, especialista) => {
        if (error) throw error;
        let message = EspecialistaMessages.success.s0;
        message.body = especialista;
        return res.header("location", "/especialistas/" + especialista._id).status(message.http).send(message);
    });
}

exports.update = (req, res) => {
    const errors = validationResult(req).array();
    console.log("****************************** Especialista  update               *************************");
    console.log(req.body);

    if (errors.length > 0) return res.status(406).send(errors);

    Especialista.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, especialista) => {
        if (error) throw error;
        if (!especialista) return res.status(EspecialistaMessages.error.e0.http).send(EspecialistaMessages.error.e0);

        let message = EspecialistaMessages.success.s1;
        message.body = especialista;
        return res.status(message.http).send(message);

    });

    console.log("****************************** Especialista  update       End        *************************");

}

exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    console.log("****************************** Especialista  delete               *************************");
    console.log(req.body);

    if (errors.length > 0) return res.status(406).send(errors);

    Especialista.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(EspecialistaMessages.error.e0.http).send(EspecialistaMessages.error.e0);
        return res.status(EspecialistaMessages.success.s3.http).send(EspecialistaMessages.success.s3);

    });

    console.log("****************************** Especialista  delete   END            *************************");

}

exports.getOne = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Especialista.findOne({
        _id: req.params.id
    }).populate("comments.user", "name").exec((error, especialista) => {
        if (error) throw error;
        if (!especialista) return res.status(EspecialistaMessages.error.e0.http).send(EspecialistaMessages.error.e0);
        let message = EspecialistaMessages.success.s2;
        message.body = especialista;
        return res.status(message.http).send(message);
    });

}