var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var clock = new THREE.Clock();

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', onWindowResize, false); 

var cubeGeometry = new THREE.CubeGeometry(20,20,20);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 'rgb(0,255,0)' });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

var sphereGeometry = new THREE.SphereGeometry(5);
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 'rgb(255,255,0)' });
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

var light = new THREE.PointLight( 'rgb(255,255,255)', 1, 0 );
scene.add(light);

var sunRiseFlag = true;
var sunHeight = 0;
var frameTime = 0;

camera.position.y = 40;
camera.position.z = 160;

cube.rotation.x = 0.4;
cube.rotation.y = 0.6;

animate();

function animate(){
   
   requestAnimationFrame(animate);

   frameTime = clock.getDelta();

   if(sunRiseFlag == true){
      sunHeight = sunHeight + 60 * frameTime;
   }

   if(sunRiseFlag == false){
      sunHeight = sunHeight - 60 * frameTime;
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
   sphere.position = light.position;

   renderer.render( scene, camera );

}


function onWindowResize(){
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize( window.innerWidth, window.innerHeight );   
}
