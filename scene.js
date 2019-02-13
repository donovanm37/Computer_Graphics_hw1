var scene, camera, renderer;

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
    var floorTexture = new THREE.ImageUtils.loadTexture('images/ground.jpg');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(10, 10);
    var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
    var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -0.5;
    floor.rotation.x = Math.PI / 2;
    scene.add(floor);

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
    for (var i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;
    var skyboxMaterial = new THREE.MeshFaceMaterial(materialArray);
    var skyboxGeom = new THREE.CubeGeometry(5000, 5000, 5000, 1, 1, 1);
    var skybox = new THREE.Mesh(skyboxGeom, skyboxMaterial);
    scene.add(skybox);

    ////////////
    //  cube  //
    /////////////

    
    var material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/crate.jpg') });
    var geometry = new THREE.CubeGeometry(50, 50, 50);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 25, 0);
    scene.add(cube);

    var geometry2 = new THREE.ConeGeometry( 60, 40, 4);
    var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cone = new THREE.Mesh( geometry2, material2 );
    cone.position.set(0, 70, 0);
    cone.rotateY(Math.PI / 4);
    scene.add( cone );

    var material3 = new THREE.MeshBasicMaterial({color: 0xffff00});
    var geometry3 = new THREE.CubeGeometry(10, 20, 1);
    var cube2 = new THREE.Mesh(geometry3, material3);
    cube2.position.set(12, 12.5, 25);
    scene.add(cube2);

    var materialwindow = new THREE.MeshBasicMaterial({color: 0xffff00});
    var geometrywindow = new THREE.CubeGeometry(10, 10, 1);
    var cube3 = new THREE.Mesh(geometrywindow, materialwindow);
    cube3.position.set(12, 35, 25);
    scene.add(cube3);

    var cube4 = new THREE.Mesh(geometrywindow, materialwindow);
    cube4.position.set(-12, 35, 25);
    scene.add(cube4);

    var window3 = new THREE.Mesh(geometrywindow,materialwindow);
    window3.position.set(-12, 12.5, 25);
    scene.add(window3);

}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function update() {

}

function render() {
    renderer.render(scene, camera);
}

function onDocumentKeyPress( event ) {

    var keyCode = event.which;
    var positionDelta = 20;
    var rotationDelta = 0.1;
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


var light = new THREE.DirectionalLight(0xddd, 1);
light.position.set(0, 0, 1);
scene.add(light);

//camera.position.x = 2;
//camera.position.y = 1;
//camera.position.Z = 5;
////renderer.render(scene, camera);

var controls = new THREE.OrbitControls(camera);
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
controls.noKeys = true;

var clock = new THREE.Clock();
var render = function () {
	requestAnimationFrame(render);
//	var delta = clock.getDelta();

//	cube.rotation.x += 3, 3 * delta;
//	cube.rotation.z += delta;

	renderer.render(scene, camera);
};
render();
