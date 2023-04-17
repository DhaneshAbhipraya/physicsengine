class SpringBuilder {
    constructor(particle1, particle2, springConstant, restLength) {
        this.particle1=particle1;
        this.particle2=particle2;
        this.springConstant=springConstant;
        this.restLength=restLength;
    }
    build() {
        return new Spring(this.particle1, this.particle2, this.springConstant, this.restLength);
    }
    newParticle1(val) {
        this.particle1=val;
        return this;
    }
    newParticle2(val) {
        this.particle2=val;
        return this;
    }
    newSpringConstant(val) {
        this.springConstant=val;
        return this;
    }
    newRestLength(val) {
        this.restLength=val;
        return this;
    }
}