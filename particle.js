class Particle {
    constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = createVector(0, 0);
        this.locked = false;
        this.resistance = 10;
    }

    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }

    applyForce(force) {
        let f = force.copy();
        this.acceleration.add(f);
    }

    update() {
        if (!this.locked) {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
        }
        this.velocity.mult(0.9);
        this.acceleration.mult(0.9);
        // this.wallBounce();
    }
    // update(deltaTime, numSubsteps) {
    //     if (!this.locked) {
    //         // Calculate the time step size for each substep
    //         const substepTime = deltaTime / numSubsteps;
    
    //         // Perform the physics calculations for each substep
    //         for (let i = 0; i < numSubsteps; i++) {
    //             this.acceleration.mult(substepTime);
    //             this.velocity.add(this.acceleration);
    //             this.position.add(this.velocity.copy().mult(substepTime));
    //             this.acceleration.mult(0);
    //         }
    //     }
    // }

    wallBounce() {
        ellipse(this.position.x,this.position.y,sin(this.velocity.y)*10,sin(this.velocity.x)*10);
    }

    checkEdges() {
        if (this.position.y > height) {
            this.position.y = height;
            this.velocity.y *= -0.8; // bounce with some energy loss
            this.wallBounce();
        }
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y *= -0.8; // bounce with some energy loss
            this.wallBounce();
        }
        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -0.8;
            this.wallBounce();
        }
        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x *= -0.8;
            this.wallBounce();
        }
    }

    show() {
        stroke(255);
        strokeWeight(5);
        point(this.position.x, this.position.y);
        strokeWeight(1);
    }
}