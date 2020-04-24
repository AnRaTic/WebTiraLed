let cajapinchada = 0;
let conectado = 0;
let url = "192.168.1.86:6001";
$(document).ready(function () {
    $("#caja0").hover(
        function () {
            apagar();
        }, function () {
            deshover();
        }
    );
    $("#caja1").hover(
        function () {
            caja1();
        }, function () {
            deshover();
        }
    );
    $("#caja2").hover(
        function () {
            caja2();
        }, function () {
            deshover();
        }
    );
    $("#caja3").hover(
        function () {
            caja3();
        }, function () {
            deshover();
        }
    );
    $("#caja4").hover(
        function () {
            caja4();
        }, function () {
            deshover();
        }
    );
    $("#caja5").hover(
        function () {
            caja5();
        }, function () {
            deshover();
        }
    );
    $("#caja6").hover(
        function () {
            caja6();
        }, function () {
            deshover();
        }
    );
    $("#caja7").hover(
        function () {
            caja7();
        }, function () {
            deshover();
        }
    );
    $("#caja0").click(function () {
        pinchar(0);
    });
    $("#caja1").click(function () {
        pinchar(1);
    });
    $("#caja2").click(function () {
        pinchar(2);
    });
    $("#caja3").click(function () {
        pinchar(3);
    });
    $("#caja4").click(function () {
        pinchar(4);
    });
    $("#caja5").click(function () {
        pinchar(5);
    });
    $("#caja6").click(function () {
        pinchar(6);
    });
    $("#caja7").click(function () {
        pinchar(7);
    });
    $("#botonEnviar").click(function () {
        let colorHex;
        let colorRGB;
        let inverso;
        switch (cajapinchada) {
            case 0:
                post("0");
                break;
            case 1:
                inverso = $("#checkbox1").prop("checked") ? 2 : 1;
                post(String(inverso));
                break;
            case 2:
                post("3");
                break;
            case 3:
                colorHex = $("#caja3 p input").val();
                colorRGB = hexToRgb(colorHex);
                post("4," + colorRGB.r + "," + colorRGB.g + "," + colorRGB.b);
                break;
            case 4:
                colorHex = $("#caja4 p input").val();
                colorRGB = hexToRgb(colorHex);
                post("5," + colorRGB.r + "," + colorRGB.g + "," + colorRGB.b);
                break;
            case 5:
                colorHex = $("#caja5 p input").val();
                colorRGB = hexToRgb(colorHex);
                post("6," + colorRGB.r + "," + colorRGB.g + "," + colorRGB.b);
                break;
            case 6:
                inverso = $("#checkbox2").prop("checked") ? 8 : 7;
                post(String(inverso));
                break;
            case 7:
                post("9");
                break;
            default:
                apagar();
        }
    });
    $(".entradaTexto").on('keyup', function (e) {
        if (e.keyCode === 13) {
            url=$(".entradaTexto").val();
            get();
        }
    });

    get();

    
});

function pinchar(caja) {
    desactivar();
    $("#caja" + caja).addClass("activo");
    cajapinchada = caja;
}

function desactivar() {
    let i = 0;
    for (i = 0; i < 8; i++) {
        $("#caja" + i).removeClass("activo");
    }
}

function deshover() {
    switch (cajapinchada) {
        case 1:
            caja1();
            break;
        case 2:
            caja2();
            break;
        case 3:
            caja3();
            break;
        case 4:
            caja4();
            break;
        case 5:
            caja5();
            break;
        case 6:
            caja6();
            break;
        case 7:
            caja7();
            break;
        default:
            apagar();
    }
}

function caja1() {
    let i;
    let inverso = $("#checkbox1").prop("checked") ? 1 : 0;
    for (i = 0; i < 9; i++) {
        let j = ((1 - inverso) * i + inverso * (8 - i));
        $("#l" + j).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "4s" });
        $("#l-" + j).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "4s" });
        tranCaja1(i);
        tranCaja1(-i);
    }
}

function caja2() {
    let i;
    for (i = 0; i < 9; i++) {
        $("#l" + i).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "4.5s" });
        $("#l-" + i).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "4.5s" });
        tranCaja2(i);
        tranCaja2(-i);
    }
}

function caja3() {
    let color = $("#caja3 p input").val();
    let i;
    for (i = 0; i < 9; i++) {
        $("#l" + i).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "3s" });
        $("#l-" + i).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "3s" });
        tranCaja3(i, color);
        tranCaja3(-i, color);
    }
}

function caja4() {
    let color = $("#caja4 p input").val();
    let i;
    for (i = 0; i < 9; i++) {
        $("#l" + i).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "3s" });
        $("#l-" + i).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "3s" });
        tranCaja4(i, color);
        tranCaja4(-i, color);
    }
}

function caja5() {
    let color = $("#caja5 p input").val();
    let i;
    for (i = -8; i < 9; i++) {
        $("#l" + i).css({ "animation-delay": "0s", "animation-direction": "alternate", "animation-duration": "1s" });
        tranCaja5(i, color);
    }
}

function caja6() {
    let i;
    let inverso = $("#checkbox2").prop("checked") ? 1 : 0;
    for (i = -8; i < 9; i++) {
        let j = ((1 - inverso) * i + inverso * (-i));
        $("#l" + j).css({ "animation-delay": i * 0.3 + "s", "animation-duration": "4s" });
        tranCaja1(j);
    }
}

function caja7() {
    let i;
    for (i = -8; i < 9; i++) {
        $("#l" + i).css({ "animation-delay": "0s", "animation-duration": "4s" });
        tranCaja1(i);
    }
}

function apagar() {
    for (i = -8; i <= 8; i++) {
        $("#l" + i).css({ "animation-delay": "0s" });
        $.keyframe.define([{
            name: "l" + i,
            '0%': { 'fill': 'white' },
            '100%': { 'fill': 'white' }
        }]);
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function tranCaja1(i) {
    $.keyframe.define([{
        name: "l" + String(i),
        '0%': { 'fill': 'rgb(250, 0, 0)' },
        '17%': { 'fill': 'rgb(250, 250, 0)' },
        '33%': { 'fill': 'rgb(0, 250, 0)' },
        '50%': { 'fill': 'rgb(0, 250, 250)' },
        '67%': { 'fill': 'rgb(0, 0, 250)' },
        '83%': { 'fill': 'rgb(250, 0, 250)' },
        '100%': { 'fill': 'red' }
    }]);
}

function tranCaja2(i) {
    $.keyframe.define([{
        name: "l" + String(i),
        '0%': { 'fill': 'rgb(250, 0, 0)' },
        '17%': { 'fill': 'rgb(250, 250, 250)' },
        '33%': { 'fill': 'rgb(0, 250, 0)' },
        '50%': { 'fill': 'rgb(250, 250, 250)' },
        '67%': { 'fill': 'rgb(0, 0, 250)' },
        '83%': { 'fill': 'rgb(250, 250, 250)' },
        '100%': { 'fill': 'red' }
    }]);
}

function tranCaja3(i, color) {
    $.keyframe.define([{
        name: "l" + String(i),
        '0%': { 'fill': color },
        '100%': { 'fill': color }
    }]);
}

function tranCaja4(i, color) {
    $.keyframe.define([{
        name: "l" + String(i),
        '25%': { 'fill': 'white' },
        '50%': { 'fill': color },
        '75%': { 'fill': 'white' }
    }]);
}

function tranCaja5(i, color) {
    let colores = ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'];
    colores[i + 8] = color;
    colores[i + 9] = color;
    $.keyframe.define([{
        name: "l" + String(i),
        '0%': { 'fill': colores[0] },
        '5.88%': { 'fill': colores[1] },
        '11.76%': { 'fill': colores[2] },
        '17.64%': { 'fill': colores[3] },
        '23.52%': { 'fill': colores[4] },
        '29.41%': { 'fill': colores[5] },
        '35.29%': { 'fill': colores[6] },
        '41.17%': { 'fill': colores[7] },
        '47.06%': { 'fill': colores[8] },
        '52.94%': { 'fill': colores[9] },
        '58.82%': { 'fill': colores[10] },
        '64.71%': { 'fill': colores[11] },
        '70.59%': { 'fill': colores[12] },
        '76.47%': { 'fill': colores[13] },
        '82.35%': { 'fill': colores[14] },
        '88.24%': { 'fill': colores[15] },
        '94.12%': { 'fill': colores[16] }
    }]);
}

function post(data){
    $.post("http://"+url+"/", data);
}

function get(){
    $("#conectado").html("no conectado");
    $.getJSON("http://"+url+"/", function(data, status){
        if(status == "success"){
            conectado=1;
            $("#conectado").html("conectado")
            console.log("conectado");
        }
    });
}