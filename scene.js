var scene, camera, renderer;
var loadedObject = null;
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
    floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
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
    
    House(0,25,0, true);
    House(100,25,0);
    House(-100,25,0);
    Tree(0,25,100);
    Tree(100,25,100);
    Tree(-100,25,100);

    // instantiate a loader
    var loader = new THREE.OBJLoader();

    // load a resource
    loader.load(
        // resource URL
        'Objects/Lamborghini_Aventador.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.set(-70,0,100);
            object.rotateY(Math.PI / 2);
            object.scale.set(0.2,0.2,0.2);
            loadedObject = object;
            scene.add( object );

        },
        // called when loading is in progresses
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );

    var light = new THREE.DirectionalLight(0xddd, 1);
    light.position.set(0, 200, 1);
    scene.add(light);

    var controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.noKeys = true;

}

function animate() {
    requestAnimationFrame(animate);
    MoveCar();
    render();
}

function MoveCar() {
    loadedObject.position.x += 2;
    if (loadedObject.position.x === 450) {
        loadedObject.position.set(-450,0,100);
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
//// Create scene
//var scene = new THREE.Scene();

//// Create camera
//var camera = new THREE.PerspectiveCamera(
//	75, // fov — Camera frustum vertical field of view.
//	window.innerWidth/window.innerHeight, // aspect — Camera frustum aspect ratio.
//	0.1, // near — Camera frustum near plane.
//	1000); // far — Camera frustum far plane. 

//// Create renderer
//var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

////create
//var geometry = new THREE.BoxGeometry(1, 1, 1);
//var material = new THREE.MeshPhongMaterial({color:0x27a, shininess: 100});
//var cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

///*
//var dir_names = ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"];
//var materialArray = [];
//for (var i = 0; i < 6; i++) {
//	materialArray.push(
//		new THREE.BasicMaterial(({
//			map: THREE.ImageUtils.loadTexture(dir_names[i]),
//			side: THREE.BackSide
//		})
//	);
//}

//var sky_geometry = 
//var sky_material =
//*/




//camera.position.x = 2;
//camera.position.y = 1;
//camera.position.Z = 5;
////renderer.render(scene, camera);


var clock = new THREE.Clock();
