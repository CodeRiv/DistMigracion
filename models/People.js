const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({

    DPI: {
        type: String,
        required: [true, 'Por favor añadir un DPI'],
        unique: true,
        trim: true,
        minlength: [13, 'Un DPI debe contener 13 caracteres'],
        maxlength: [13, 'Un DPI debe contener 13 caracteres']
    },
    primernombre: {
        type: String,
        required: [true, 'Por favor añada un nombre'],
        maxlength: [50, 'Nombre demasiado largo']
    },
    segundonombre: {
        type: String,
        required: [true, 'Por favor añada un segundo nombre'],
        maxlength: [50, 'Nombre demasiado largo']
    },
    primerapellido: {
        type: String,
        required: [true, 'Por favor añada un apeliido'],
        maxlength: [50, 'Apellido demasiado largo']
    },
    segundoapellido: {
        type: String,
        required: [true, 'Por favor añada un segundo apeliido'],
        maxlength: [50, 'Apellido demasiado largo']
    },
    fechaprimertramite: {
        type: Date,
        required: [true, 'Por favor agrega la fecha inicial del trámite']
    },
    fechaexpiracion: {
        type: Date,
        required: [true, 'Por favor agrega la fecha de expiración del trámite']
    },
    Nacionalidad: {
        type: String,
        required: [true, 'Por favor ingrese una nacionalidad']
    },
    PaisActual: {
        type: String,
        required: [true, 'Ingrese el país actual']
    }
})

module.exports = mongoose.models.People || mongoose.model('People', PeopleSchema);