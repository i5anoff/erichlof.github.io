var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({ color: 'rgb(0,255,0)' });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var light = new THREE.PointLight( 'rgb(255,255,255)', 1, 0 );
light.position.set(50,0,50);
scene.add(light);

var sunRiseFlag = true;
var sunHeight = 0;

camera.position.z = 3;
cube.rotation.x = 0.4;
cube.rotation.y = 0.6;

animate();

function animate(){
   
   requestAnimationFrame(animate);

   if(sunRiseFlag == true){
      sunHeight = sunHeight + 1;
   }

   if(sunRiseFlag == false){
      sunHeight = sunHeight - 1;
   }

   if(sunHeight > 150){
      sunHeight = 150;
      sunRiseFlag = false;
   }

   if(sunHeight < 0){
      sunHeight = 0;
      sunRiseFlag = true;
   }

   light.position.set(50,sunHeight,50);

   renderer.render( scene, camera );

}
