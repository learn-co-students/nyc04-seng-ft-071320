
//penner
(function(){var a,b;b=function(a){return"object"==typeof exports?module.exports=a:"function"==typeof define&&define.amd?define([],a):this.penner=a},a={linear:function(a,b,c,d){return c*a/d+b},easeInQuad:function(a,b,c,d){return c*(a/=d)*a+b},easeOutQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeInOutQuad:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},easeInCubic:function(a,b,c,d){return c*(a/=d)*a*a+b},easeOutCubic:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeInOutCubic:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b},easeInQuart:function(a,b,c,d){return c*(a/=d)*a*a*a+b},easeOutQuart:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeInOutQuart:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeOutQuint:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeInOutQuint:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeOutSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeInOutSine:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b},easeInExpo:function(a,b,c,d){return 0===a?b:c*Math.pow(2,10*(a/d-1))+b},easeOutExpo:function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeInOutExpo:function(a,b,c,d){return(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeOutCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeInOutCirc:function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(a,b,c,d){var e,f,g;return g=1.70158,f=0,e=c,0===a||1===(a/=d),f||(f=.3*d),e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*(2*Math.PI)/f))+b},easeOutElastic:function(a,b,c,d){var e,f,g;return g=1.70158,f=0,e=c,0===a||1===(a/=d),f||(f=.3*d),e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),e*Math.pow(2,-10*a)*Math.sin((a*d-g)*(2*Math.PI)/f)+c+b},easeInOutElastic:function(a,b,c,d){var e,f,g;return g=1.70158,f=0,e=c,0===a||2===(a/=d/2),f||(f=d*(.3*1.5)),e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),1>a?-.5*(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*(2*Math.PI)/f))+b:e*Math.pow(2,-10*(a-=1))*Math.sin((a*d-g)*(2*Math.PI)/f)*.5+c+b},easeInBack:function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b},easeOutBack:function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},easeInOutBack:function(a,b,c,d,e){return void 0===e&&(e=1.70158),(a/=d/2)<1?c/2*(a*a*(((e*=1.525)+1)*a-e))+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},easeInBounce:function(b,c,d,e){var f;return f=a.easeOutBounce(e-b,0,d,e),d-f+c},easeOutBounce:function(a,b,c,d){return(a/=d)<1/2.75?c*(7.5625*a*a)+b:2/2.75>a?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:2.5/2.75>a?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},easeInOutBounce:function(b,c,d,e){var f;return e/2>b?(f=a.easeInBounce(2*b,0,d,e),.5*f+c):(f=a.easeOutBounce(2*b-e,0,d,e),.5*f+.5*d+c)}},b(a)}).call(this);


class EmojiCanvasSet {

  constructor(emojis = []) {
    this.hidden = this.constructor.makeHidden();
    this.canvases = this.constructor.makeCanvases(emojis);

    Object.values(this.canvases).map(this.appendCanvasToHidden)

  }

  appendCanvasToHidden(canvas) {
    this.hidden.appendChild(canvas);
  }

  getOrMake(emoji) {
    let canvas = this.canvases[emoji]
    if (!canvas) {
      canvas = this.constructor.makeEmojiCanvas(emoji);
      this.appendCanvasToHidden(canvas);
      this.canvases[emoji] = canvas;
    }
    return canvas;
  }

  static makeCanvases(emojis){
    return emojis.reduce((accumulator, moje) => {
      const canvas = this.constructor.makeEmojiCanvas(moje);
      accumulator[moje] = canvas;
      
      return accumulator;
    }, {});
  }

  static makeHidden(){
    const element = document.createElement("div");
    element.className = "hide";
    document.body.appendChild(element);
    return element;
  }

  static makeEmojiCanvas(emoji, radius = 256) {
    var canvas = document.createElement("canvas");
    canvas.height = radius;
    canvas.width = radius;

    var context = canvas.getContext("2d")
    context.translate(canvas.width / 2,canvas.height / 2);

    context.font=`${ radius }px Georgia`;
    context.fillStyle = "#ffffff"
    var width = context.measureText(emoji).width;
    context.fillText(emoji, 0 - (width / 2), 0 + (radius / 2.35));
    return canvas;
  }

}


class ThreeDeeRenderer {

  constructor() {
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );

    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( this.renderer.domElement );
    this.render()
  }


  addGeometry(canvas){
    const texture = canvas ? new THREE.CanvasTexture(canvas) : undefined;
    const geometry = new THREE.PlaneGeometry( 100, 100, 100 );
    const material = new THREE.MeshBasicMaterial( { 
      color: 0xffffff,
      map: texture,
      transparent: true
    } );
    const mesh = new THREE.Mesh( geometry, material );
    this.scene.add( mesh );
    // this.render()
    return mesh
  }

  render(){
    this.renderer.render( this.scene, this.camera );
  }

}

class Firework {

  constructor({ createMesh, render, done }){
    this.particles = this.constructor.makeParticles(100, createMesh);
    this.render = render;
    this.done = done;
    this.go = this.go.bind(this)
  }


  go() {
    const now = performance.now();
    this.startTime = this.startTime || now;
    const elapsed = now - this.startTime;
    const o = this.constructor.opacity(elapsed)
    this.particles.forEach(particle => {
      particle.update(elapsed, o)
    })
    // console.log(elapsed)
    this.render()
    if (elapsed < 3000) requestAnimationFrame(this.go)
    else if (this.done) this.done()
  }

  static makeParticles(howMany, createMesh) {
    const particles = []
    for (let i = 0; i < howMany; i++) {
      particles.push(new Particle(createMesh()))
    }
    return particles
  }

  static opacity(t) {
    const endFadeIn = 1000;
    const startFadeOut = 1500;
    const fadeOutDuration = 1500;

    if (t < endFadeIn) {
      // console.log(penner.easeOutQuad(t, 0, 1, 1000))
      return penner.easeOutQuad(t, 0, 1, endFadeIn)
    } else if (t > startFadeOut + fadeOutDuration) {
      return 0
    } else if ( t > startFadeOut) {
      return penner.easeInOutQuad(t - startFadeOut, 1, -1, fadeOutDuration)
    }
    return 1
  }

}


const DEGREES_IN_CIRCLE = 360;
const RADIANS_360_DEGREES = DEGREES_IN_CIRCLE * (Math.PI/180);

const constantine = 500;

class Particle {

  constructor(mesh){
    this.mesh = mesh;

    const initialVelocity = 150 //randomBetween(100, 200);

    const initialAngleYZ = randomBetween(0, RADIANS_360_DEGREES);
    const initialAngleXY = randomBetween(0, RADIANS_360_DEGREES);

    this.initialVelocityX = initialVelocity * Math.cos(initialAngleYZ) * Math.sin(initialAngleXY);
    this.initialVelocityY = initialVelocity * Math.cos(initialAngleYZ) * Math.cos(initialAngleXY) + (constantine / 2);
    this.initialVelocityZ = initialVelocity * Math.sin(initialAngleYZ);

    this.rotationalVelocity = randomBetween(0, 1.5)
    // console.log(this.initialVelocityZ)
  }

  update(t, o) {
    this.mesh.position.x = this.initialVelocityX * (t / constantine);
    this.mesh.position.y = this.initialVelocityY * (t / constantine) - Math.pow(t, 2) * ( 3.6 * ( 36 / ( constantine * 1000 ) ) ) - 100;
    this.mesh.position.z = this.initialVelocityZ * (t / constantine);

    this.mesh.rotation.z = this.rotationalVelocity * (t / constantine);

    this.mesh.material.opacity = o
  }

  




}

randomBetween = function(min, max){
    return Math.random() * (max - min) + min;
}

