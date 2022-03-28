const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//variaveis
var engine;
var world;
var solo, bola;
var parado;
var mexendo;


function setup() {
    createCanvas(400, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    engine = Engine.create();
    //guardar o mundo
    world = engine.world;



    //ETAPA 2: Criar os corpos
    //definir a propriedade do solo

    parado = {};
   
    //criar o corpo do solo

    //adicionar o solo no mundo

    //definir a propriedade da bola

    mexendo = {};
    //criar o corpo da bola

    //adicionar a bola no mundo


}


function draw() {
    background("cyan");

    //atualizar o motor
    Engine.update(engine);

    //pintar o solo de verde
    fill("green")
    //desenhar o retângulo no corpo do solo


    //pintar a bola;
    fill("");
    //desenhar a ellipse na posição do corpo da bola

}
