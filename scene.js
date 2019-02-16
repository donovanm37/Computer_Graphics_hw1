var scene, camera, renderer;
var loadedObject = null;    // In this variable will be a loadedobject saved so it can be used to animate with the object.
var loadedObject2 = null;
var loadedObject3 = null;
init();
animate();

function init() {
    //Scene
    scene = new THREE.Scene();
    //Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 20000);
    camera.position.set(0, 100, 200); // set camera position
    camera.lookAt(scene.position);

    /// camera movement by keypress
    document.addEventListener( 'keypress', onDocumentKeyPress, false ); // to move camera with WASD

    //Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // Lets make the ground
    var floorTexture = new THREE.ImageUtils.loadTexture('images/Grass.jpg'); // Use grass texture
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(10, 10); // make the picture repeat so its not one blurry picture
    var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
    var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10); // geometry of the ground
    var floor = new THREE.Mesh(floorGeometry, floorMaterial); //make the mesh of the grass
    floor.position.y = -0.5; // put it a bit under the middle of the screen
    floor.rotation.x = Math.PI / 2; // make it look like a ground and not a wall
    scene.add(floor); // add to teh scene

    //lets make the road
    var RoadTexture = new THREE.ImageUtils.loadTexture('images/asphalt.jpg'); // use asphalt texture
    RoadTexture.wrapS = RoadTexture.wrapT = THREE.RepeatWrapping;
    RoadTexture.repeat.set(10, 10); // make the texture repeat so it wont be one blurry picture
    var RoadMaterial = new THREE.MeshBasicMaterial({ map: RoadTexture, side: THREE.DoubleSide });
    var RoadGeometry = new THREE.PlaneGeometry(1000, 200, 10, 10); // make the road of a plane
    var Road = new THREE.Mesh(RoadGeometry, RoadMaterial); // make the Mesh
    Road.position.set(0,0,140); // set at correct position
    Road.rotation.x = Math.PI / 2; // make it a road and not a wall
    scene.add(Road); // add to scene


    //Skybox
    var materialArray = []; // put all the png in an array
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-xpos.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-xneg.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-ypos.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-yneg.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-zpos.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-zneg.png') }));
    for (var i = 0; i < 6; i++) {
        materialArray[i].side = THREE.BackSide; // get the backside
    }
    var skyboxMaterial = new THREE.MeshFaceMaterial(materialArray); // put it in a material
    var skyboxGeom = new THREE.CubeGeometry(5000, 5000, 5000, 1, 1, 1); // make the geometry
    var skybox = new THREE.Mesh(skyboxGeom, skyboxMaterial); // make the skybox
    scene.add(skybox); // add the skybox to the scene


    //Use the functions from FunctionsBuilds.js to make the street

    House(400,25,-50, false);
    House(300,25,-50, false);
    House(200,25,-50, false);
    House(100,25,-50, false);
    House(0,25,-50, false);
    House(100,25,-50, false);
    House(-100,25,-50, false);
    House(-200,25,-50, false);
    House(-300,25,-50, false);
    House(-400,25,-50, false);

    House(400,25,320, true);
    House(300,25,320, true);
    House(200,25,320, true);
    House(100,25,320, true);
    House(0,25,320, true);
    House(100,25,320, true);
    House(-100,25,320, true);
    House(-200,25,320, true);
    House(-300,25,320, true);
    House(-400,25,320, true);

    Tree(450,25,0);
    Tree(350,25,0);
    Tree(250,25,0);
    Tree(150,25,0);
    Tree(50,25,0);
    Tree(-50,25,0);
    Tree(-150,25,0);
    Tree(-250,25,0);
    Tree(-350,25,0);
    Tree(-450,25,0);

    Tree(450,25,270);
    Tree(350,25,270);
    Tree(250,25,270);
    Tree(150,25,270);
    Tree(50,25,270);
    Tree(-50,25,270);
    Tree(-150,25,270);
    Tree(-250,25,270);
    Tree(-350,25,270);
    Tree(-450,25,270);

    Lantern(450,25,25);
    Lantern(350,25,25);
    Lantern(250,25,25);
    Lantern(150,25,25);
    Lantern(50,25,25);
    Lantern(-50,25,25);
    Lantern(-150,25,25);
    Lantern(-250,25,25);
    Lantern(-350,25,25);
    Lantern(-450,25,25);

    Lantern(450,25,245);
    Lantern(350,25,245);
    Lantern(250,25,245);
    Lantern(150,25,245);
    Lantern(50,25,245);
    Lantern(-50,25,245);
    Lantern(-150,25,245);
    Lantern(-250,25,245);
    Lantern(-350,25,245);
    Lantern(-450,25,245);

    Sun(800,400,35);
    Plane(0,300,-100);
    Car(-70,0,100);
    Cloud(-70,300,100);

    MailBox(435, 14, 0);
    MailBox(335, 14, 0);
    MailBox(235, 14, 0);
    MailBox(135, 14, 0);
    MailBox(35, 14, 0);
    MailBox(-65, 14, 0);
    MailBox(-165, 14, 0);
    MailBox(-265, 14, 0);
    MailBox(-365, 14, 0);
    MailBox(-465, 14, 0);


    MailBox(405, 14, 270, true);
    MailBox(305, 14, 270, true);
    MailBox(205, 14, 270, true);
    MailBox(105, 14, 270, true);
    MailBox(5, 14, 270, true);
    MailBox(-95, 14, 270, true);
    MailBox(-195, 14, 270, true);
    MailBox(-295, 14, 270, true);
    MailBox(-395, 14, 270, true);
    MailBox(-495, 14, 270, true);

    //add OrbitControls
    var controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.noKeys = true;

}

//Animations:
function animate() {
    requestAnimationFrame(animate);
    MoveCar();
    MoveCloud();
    MovePlane();
    render();
}

//moving car animation
function MoveCar() {
    loadedObject.position.x += 2; // make it move by adding 2
    if (loadedObject.position.x === 450) { // when it reaches end of road reset to beginning
        loadedObject.position.set(-450,0,100);
    }
}

function MovePlane() {
    loadedObject3.rotateX(Math.PI / 180); // make the plane rotate arround itself
    loadedObject3.translateZ(-1); // move a bit forward so it looks like its doing a loop

}

function MoveCloud() { // move the clouds
    loadedObject2.position.x += 1; // make the clouds move a bit
    if (loadedObject2.position.x === 450) { // when the clouds reach the end spawn at random position and move again
        loadedObject2.position.set(-450,Math.floor(Math.random() * 101) + 250  ,Math.floor(Math.random() * 1000) - 500  );
    }
}
function update() {

}
    //render
function render() {
    renderer.render(scene, camera);
}
 // make camera move by WASD
function onDocumentKeyPress( event ) {

    var keyCode = event.which; // get which key is pressed
    var positionDelta = 20;
    if ( keyCode === 97 ) // A
    {
        camera.position.x -= positionDelta;
    }
    else if ( keyCode === 100 ) // D
    {
        camera.position.x += positionDelta;
    }
    else if ( keyCode === 119 ) // W
    {
        camera.position.z -= positionDelta;
    }
    else if ( keyCode === 115 ) // S
    {
        camera.position.z += positionDelta;
    }
    camera.updateProjectionMatrix();
}
