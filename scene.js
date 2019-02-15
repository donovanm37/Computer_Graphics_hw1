var scene, camera, renderer;
var loadedObject = null;
var loadedObject2 = null;
var loadedObject3 = null;
var spotLight, lightHelper, shadowCameraHelper;
init();
animate();

function init() {
    ////////////
    // scene  //
    ////////////
    scene = new THREE.Scene();

    ////////////
    // camera //
    ////////////
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 20000);
    camera.position.set(0, 100, 200);
    camera.lookAt(scene.position);

    /// camera movement by keypress
    document.addEventListener( 'keypress', onDocumentKeyPress, false );



    //////////////
    // renderer //
    //////////////
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    ////////////
    //  axes  //
    ////////////
    var axes = new THREE.AxisHelper(100);
    scene.add(axes);

    ////////////
    // floor  //
    ////////////
    var floorTexture = new THREE.ImageUtils.loadTexture('images/Grass.jpg');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(10, 10);
    var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
    var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -0.5;
    floor.rotation.x = Math.PI / 2;
    scene.add(floor);

    var floorTexture2 = new THREE.ImageUtils.loadTexture('images/asphalt.jpg');
    floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;1
    floorTexture2.repeat.set(10, 10);
    var floorMaterial2 = new THREE.MeshBasicMaterial({ map: floorTexture2, side: THREE.DoubleSide });
    var floorGeometry2 = new THREE.PlaneGeometry(1000, 200, 10, 10);
    var floor2 = new THREE.Mesh(floorGeometry2, floorMaterial2);
    floor2.position.set(0,0,140);
    floor2.rotation.x = Math.PI / 2;
    scene.add(floor2);

    ////////////
    // skybox //
    ////////////
    var materialArray = [];
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-xpos.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-xneg.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-ypos.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-yneg.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-zpos.png') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/dawnmountain-zneg.png') }));
    for (var i = 0; i < 6; i++) {
        materialArray[i].side = THREE.BackSide;
    }
    var skyboxMaterial = new THREE.MeshFaceMaterial(materialArray);
    var skyboxGeom = new THREE.CubeGeometry(5000, 5000, 5000, 1, 1, 1);
    var skybox = new THREE.Mesh(skyboxGeom, skyboxMaterial);
    scene.add(skybox);
    
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
    var controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.noKeys = true;

}

function animate() {
    requestAnimationFrame(animate);
    MoveCar();
    MoveCloud();
    MovePlane();
    render();
}

function MoveCar() {
    loadedObject.position.x += 2;
    if (loadedObject.position.x === 450) {
        loadedObject.position.set(-450,0,100);
    }
}

function MovePlane() {
    loadedObject3.rotateX(Math.PI / 180);
    loadedObject3.translateZ(-1);

}

function MoveCloud() {
    loadedObject2.position.x += 1;
    if (loadedObject2.position.x === 450) {
        loadedObject2.position.set(-450,Math.floor(Math.random() * 101) + 250  ,Math.floor(Math.random() * 1000) - 500  );
    }
}
function update() {

}

function render() {
    renderer.render(scene, camera);
}

function onDocumentKeyPress( event ) {

    var keyCode = event.which;
    var positionDelta = 20;
    //A
    if ( keyCode == 97 )
    {

        camera.position.x -= positionDelta;
    }
    //D
    else if ( keyCode == 100 )
    {

        camera.position.x += positionDelta;
    }
    //W
    else if ( keyCode == 119 )
    {
        camera.position.z -= positionDelta;
    }
    //S
    else if ( keyCode == 115 )
    {
        camera.position.z += positionDelta;

    }
    camera.updateProjectionMatrix();
}

var clock = new THREE.Clock();
