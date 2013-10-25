var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({ color: 'rgb(0,255,0)' });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);


var redIntensity = 0;
var redColor = new THREE.Color( 'rgb(0,0,0)' );
var colorBrightenFlag = true;

camera.position.z = 5;
var forwardFlag = false;
animate();

function animate(){
   
   requestAnimationFrame(animate);

   cube.rotation.x = cube.rotation.x + 0.02;
   cube.rotation.y = cube.rotation.y + 0.03;

   if(forwardFlag == false){
      camera.position.z = camera.position.z + 0.1;
   }
   if(forwardFlag == true){
      camera.position.z = camera.position.z - 0.1;
   } 
      
   if(camera.position.z > 10){
      camera.position.z = 10;
      forwardFlag = true;
   }
       
   if(camera.position.z < 1){
      camera.position.z = 1;
      forwardFlag = false;
   }

   if(colorBrightenFlag == true){
      redIntensity = redIntensity + 8;
   }
   if(colorBrightenFlag == false){
      redIntensity = redIntensity - 8;
   } 
      
   if(redIntensity > 255){
      redIntensity = 255;
      colorBrightenFlag = false;
   }
       
   if(redIntensity < 0){
      redIntensity = 0;
      colorBrightenFlag = true;
   }
   
   redColor.r = redIntensity / 255;
   cube.material.color.set(redColor);
      
   renderer.render( scene, camera );

}
