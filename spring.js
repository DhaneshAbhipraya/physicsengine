class Spring {
    constructor(particle1, particle2, springConstant, restLength) {
        if (particle1 != null) this.particle1 = particle1;
        else if (particle1 == null) this.particle1 = new Particle(createVector(0, 0), createVector(0, 0));
        if (particle2 != null) this.particle2 = particle2;
        else if (particle2 == null) this.particle2 = new Particle(createVector(0, 0), createVector(0, 0));
        if (restLength == undefined)
            this.restLength = particle1.position.dist(particle2.position);
        else this.restLength = restLength;
        this.springConstant = springConstant;
    }

    update() {
        let displacement = p5.Vector.sub(this.particle1.position, this.particle2.position);
        let distance = displacement.mag();
        let direction = displacement.copy().normalize();
        let force = direction.mult(-this.springConstant * (distance - this.restLength));
        force = force.limit(10);
        this.particle1.applyForce(force);
        this.particle2.applyForce(force.copy().mult(-1));
    }
    // update(deltaTime, numSubsteps) {
    //     // Calculate the time step size for each substep
    //     const substepTime = deltaTime / numSubsteps;
    
    //     // Perform the physics calculations for each substep
    //     for (let i = 0; i < numSubsteps; i++) {
    //         let displacement = p5.Vector.sub(this.particle1.position, this.particle2.position);
    //         let distance = displacement.mag();
    //         let direction = displacement.copy().normalize();
    //         let force = direction.mult(-this.springConstant * (distance - this.restLength)).mult(substepTime);
    //         this.particle1.applyForce(force);
    //         this.particle2.applyForce(force.copy().mult(-1));
    //     }
    // }
    

    show() {
        stroke(255);
        line(this.particle1.position.x, this.particle1.position.y, this.particle2.position.x, this.particle2.position.y);
    }
}