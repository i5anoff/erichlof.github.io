var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({ color: 'rgb(0,255,0)' });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
animate();

function animate(){
   
   requestAnimationFrame(animate);

   cube.rotation.x = cube.rotation.x + 0.02;
   cube.rotation.y = cube.rotation.y + 0.03;
  
   renderer.render( scene, camera );

}
