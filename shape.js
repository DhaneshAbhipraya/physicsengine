class Shape {
    constructor() {
        this.particles = [];
        this.springs = [];
    }
    construct() {
        let springBuilder = new SpringBuilder(undefined, undefined, 0.05);
        this.particles.forEach(particle1 => {
            this.particles.forEach(particle2 => {
                this.springs.push(springBuilder.newParticle1(particle1).newParticle2(particle2).build());
            });
        });
    }
    deconstruct() {
        this.particles.length = 0;
    }
    updateAndShow() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].applyForce(createVector(0, 0.5)); // apply gravity
            this.particles[i].update();
            this.particles[i].checkEdges();
            this.particles[i].show();
        }

        noStroke();
        beginShape();
        fill(255, 255, 255, 127);
        for (let i = 0; i < this.particles.length; i++) {
            vertex(this.particles[i].position.x, this.particles[i].position.y);
        }
        endShape(CLOSE);
        stroke(0);

        // update spring lengths and apply forces
        for (let i = 0; i < this.springs.length; i++) {
            this.springs[i].update();
            strokeWeight(1);
            // this.springs[i].show();
        }
    }

    isPointInsideShape(point) {
        const polygon = this.particles;
        let count = 0;
        for (let i = 0; i < polygon.length; i++) {
            const p1 = polygon[i].position;
            const p2 = polygon[(i + 1) % polygon.length].position;
            if (point.y > Math.min(p1.y, p2.y) && point.y <= Math.max(p1.y, p2.y) && point.x <= Math.max(p1.x, p2.x) && p1.y !== p2.y) {
                const xIntersection = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
                if (p1.x === p2.x || point.x <= xIntersection) {
                    count++;
                }
            }
        }
        return count % 2 !== 0;
    }

}