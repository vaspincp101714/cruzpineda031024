const express = require ("express");
const cors = require("cors");
const app = express();
const puerto = 3000;
app.use(cors());

app.get("/usuario",function(req, res){
    res.json({
        primernombre: "Melissa",
        segundonombre: "Yamileth",
        primerapellido: "Cruz",
        segundoapellido: "Pineda",
        fechanacimiento: "1994-04-08",
        estadofamiliar: "Soltera",
        residencia: "Santa Tecla",
        profesion: "Estudiante",
        estatura: 1.65,
        peso: 150,
        colorpiel: "trigueño",
        colorojos: "cafe",
        colorcabello: "negro",
        ultimosempleos: [{
            empresa:"Hidroexpo S.A de C.V.",
            dependencia: "Departamento de Informatica",
            direccion: "canton A, Calle B, La Libertad",
            cargo: "Coordinador de tecnologia",
            desde: "01-01-20016",
            hasta: "31-12-20016"
        },{
            empresa: "Presidencia de la Republica",
            dependencia: "secretaria privada",
            direccion: "Calle A, pasaje B, San Salvador",
            cargo: "Desarrollador de sistemas",
            desde: "2017-01-01",
            hasta: "2017-01-01"
        }]
    });
})


app.get("/genero", function(req,res){
    res.json([
        {
            id:1,
            genero:"Masculino",
        },{
            id: 2,
            genero: "Femenino"
        }
    ]);
});


app.get("/tipo_documento", function(req,res){
    res.json([{
        id:1,
        tipo_documento: "DUI"
    },{
        id:2,
        tipo_documento: "NIT"
    },{
        id:3,
        tipo_documento: "ISSS"
    },{
        id:4,
        tipo_documento: "PASAPORTE"
    }]);
});

app.get("/departamentos",function(req,res){
    res.json([{
        id:1,
        departamento:"Ahuachapan"
    },{
        id:2,
         departamento:"Santa Ana"
    },{
        id:3,
        departamento:"Sonsonate"
    },{
        id:4,
        departamento:"La Libertad"
    },{
        id:5,
        departamento:"Chalatenango"
    },{
        id:6,
        departamento:"Cuscatlan"
    },{
        id:7,
        departamento:"Cabañas"
    },{
        id:8,
        departamento:"La Paz"
    },{
        id:9,
        departamento:"San Vicente"
    },{
        id:10,
        departamento:"Usulutan"
    },{
        id:11,
        departamento:"San Miguel"
    },{
        id:12,
        departamento:"Morazan"
    },{
        id:13,
        departamento:"San Salvador"
    },{
        id:14,
        departamento:"La Union"
    }]);
});



app.get("/departamentos",function(req,res){
    res.json([{
            id:1,
            municipio: "Ahuachapan Centro"
        },{
            id:2,
            municipio: "Ahuachapan Norte"
        },{
            id:3,
            municipio: "Santa Ana Norte"
        },{
            id:4,
            municipio: "Santa Ana Sur"
        },{
            id:5,
            municipio: "Sonsonate Este"
        },{
            id:6,
            municipio: "Sonsonate Oeste"
        },{
            id:7,
            municipio: "La Libertad Sur"
        },{
            id:8,
            municipio: "La Libertad Costa"
        },{
            id:9,
            municipio: "Chalatenango Sur"
        },{
            id:10,
            municipio: "Chalatenango Centro"
        },{
            id:11,
            municipio: "Cuscatlan Sur"
        },{
            id:12,
            municipio: "Cuscatlan Norte"
        },{
            id:13,
            municipio: "Cabañas Este"
        },{
            id:14,
            municipio: "Cabañas Oeste"
        },{
            id:15,
            municipio: "La Paz Oeste"
        },{
            id:16,
            municipio: "La Paz Centro"
        },{
            id:17,
            municipio: "San Vicente Sur"
        },{
            id:18,
            municipio: "San Vicente Norte"
        },{
            id:19,
            municipio: "Usulutan Norte"
        },{
            id:20,
            municipio: "Usulutan Este"
        },{
            id:21,
            municipio: "San Miguel Norte"
        },{
            id:22,
            municipio: "San Miguel Oeste"
        },{
            id:23,
            municipio: "Morazan Norte"
        },{
            id:24,
            municipio: "Morazan Sur"
        },{
            id:25,
            municipio: "San Salvador Centro"
        },{
            id:26,
            municipio: "San Salvador Sur"
         },{
            id:27,
            municipio: "La Union Norte"
         },{
            id:28,
            municipio: "La Union Sur"
         },
    ]);
});


app.get("/sumar",function(req,res){
    let resultado = parseFloat(req.query.campo1) + parseFloat(req.query.campo2);

    res.json({
        igual_a: resultado
    })
});

app.listen(puerto,function(req,res){
    console.log("Servidor en ejecucion en el puerto 3000");
});