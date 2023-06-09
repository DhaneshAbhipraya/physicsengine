let particles = [];
let springs = [];
let mouseSpring;
let mouseParticle;
let selectedParticle;
let shapes = [];

function setup() {
    createCanvas(400, 400);

    let shape;

    shape = new Shape();

    // create particles
    shape.particles.push(new Particle(createVector(100, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(112, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(125, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(137, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(150, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(162, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(175, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(187, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 112), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 125), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 137), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 150), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 162), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 175), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 187), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(187, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(175, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(162, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(150, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(137, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(125, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(112, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 187), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 175), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 162), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 150), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 137), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 125), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(100, 112), createVector(0, 0)));
    shape.construct();
    shapes.push(shape);
    shape = new Shape();

    // create particles
    shape.particles.push(new Particle(createVector(200, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(125, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(250, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(175, 100), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(300, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(200, 125), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(300, 150), createVector(0, 0)));
    // particles.push(new Particle(createVector(200, 175), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(300, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(175, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(250, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(125, 200), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(100, 175), createVector(0, 0)));
    shape.particles.push(new Particle(createVector(200, 150), createVector(0, 0)));
    // particles.push(new Particle(createVector(100, 125), createVector(0, 0)));
    shape.construct();
    shapes.push(shape);

    // particles.push(new Particle(createVector(200, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(225, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(250, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(275, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(300, 100), createVector(0, 0)));
    // particles.push(new Particle(createVector(300, 125), createVector(0, 0)));
    // particles.push(new Particle(createVector(300, 150), createVector(0, 0)));
    // particles.push(new Particle(createVector(300, 175), createVector(0, 0)));
    // particles.push(new Particle(createVector(300, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(275, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(250, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(225, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(200, 200), createVector(0, 0)));
    // particles.push(new Particle(createVector(200, 175), createVector(0, 0)));
    // particles.push(new Particle(createVector(200, 150), createVector(0, 0)));
    // particles.push(new Particle(createVector(200, 125), createVector(0, 0)));
    // for (let index = 0; index < 1000; index++) {
    //     particles.push(new Particle(createVector(random(0,100), random(0,100)), createVector(0, 0)));
    // }

    // connect particles with springs
    // springs.push(springBuilder.newParticle1(particles[0]).newParticle2(particles[1]).build());
    // springs.push(springBuilder.newParticle1(particles[1]).newParticle2(particles[2]).build());
    // springs.push(springBuilder.newParticle1(particles[2]).newParticle2(particles[3]).build());
    // springs.push(springBuilder.newParticle1(particles[3]).newParticle2(particles[4]).build());
    // springs.push(springBuilder.newParticle1(particles[4]).newParticle2(particles[5]).build());
    // springs.push(springBuilder.newParticle1(particles[5]).newParticle2(particles[6]).build());
    // springs.push(springBuilder.newParticle1(particles[6]).newParticle2(particles[7]).build());
    // springs.push(springBuilder.newParticle1(particles[7]).newParticle2(particles[0]).build());
    // springs.push(springBuilder.newParticle1(particles[1]).newParticle2(particles[3]).build());
    // springs.push(springBuilder.newParticle1(particles[3]).newParticle2(particles[5]).build());
    // springs.push(springBuilder.newParticle1(particles[5]).newParticle2(particles[7]).build());
    // springs.push(springBuilder.newParticle1(particles[7]).newParticle2(particles[1]).build());
    // springs.push(springBuilder.newParticle1(particles[0]).newParticle2(particles[4]).build());
    // springs.push(springBuilder.newParticle1(particles[6]).newParticle2(particles[2]).build());
    // let springBuilder = new SpringBuilder(undefined, undefined, 0.05);
    // particles.forEach(particle1 => {
    //     particles.forEach(particle2 => {
    //         springs.push(springBuilder.newParticle1(particle1).newParticle2(particle2).build());
    //     });
    // });

    mouseParticle = new Particle(createVector(width/2, height/2), createVector(0, 0));
    // mouseParticle = shapes[0].particles[1];
    selectedParticle = null;
    mouseSpring = new Spring(mouseParticle, particles[0], 0.05, 0);
    strokeJoin(ROUND);
    frameRate(60);
    noCursor();
}

function draw() {
    background(0);

    requestPointerLock();

    mouseParticle.applyForce(createVector(movedX,movedY));
    mouseParticle.applyForce(createVector(0,0.1));
    mouseParticle.update();
    mouseParticle.checkEdges();

    // update particle positions
    particles=[];
    shapes.forEach(shape => {
        shape.updateAndShow();
        particles=concat(particles,shape.particles);
        shapes.forEach(otherShape => {
            shape.particles.forEach(particle => {
                if (otherShape.isPointInsideShape(particle)) {
                    particle.velocity.y=10000;
                }
            });
        });
    });
    stroke(255);
    strokeWeight(10);
    point(mouseParticle.position.x, mouseParticle.position.y);
    strokeWeight(1);

    // strokeWeight(1);
    // stroke(0);
    // beginShape();
    // for (let i = 0; i < particles.length; i++) {
    //     vertex(particles[i].position.x, particles[i].position.y);
    // }
    // endShape(CLOSE);

    if (mouseIsPressed) {
        mouseSpring.particle2 = selectedParticle;
        strokeWeight(1);
        mouseSpring.show();
        mouseSpring.update();
    }
}

function mousePressed() {
    let recordDistance = Infinity;
    let recordParticle;
    for (let i = 0; i < particles.length; i++) {
        if (particles[i].position.dist(mouseParticle.position) < recordDistance && particles[i] != mouseParticle) {
            recordDistance = particles[i].position.dist(mouseParticle.position);
            recordParticle = particles[i];
        }
    }
    selectedParticle = recordParticle;
}
