function House(x, y, z, rotate) {
    var material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/red_bricks.jpg') });
    var geometry = new THREE.CubeGeometry(50, 50, 50);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    scene.add(cube);

    var geometry2 = new THREE.ConeGeometry( 50, 30, 4);
    var material2 = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/roofTexture.jpg')});
    var roof = new THREE.Mesh( geometry2, material2 );
    roof.position.set(x, y + 40, z);
    roof.rotateY(Math.PI / 4);
    scene.add(roof);

    var material3 = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/doorTexture.jpg')});
    var geometry3 = new THREE.CubeGeometry(10, 20, 1);
    var door = new THREE.Mesh(geometry3, material3);
    door.position.set(x + 12, y - 12.5, z + 25);
    if (rotate === true) {
    door.position.z -= 50;
    }
    scene.add(door);

    var materialwindow = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/windowTexture.jpg')});
    var geometrywindow = new THREE.CubeGeometry(10, 10, 1);
    var window1 = new THREE.Mesh(geometrywindow, materialwindow);
    window1.position.set(x + 12, y + 10, z + 25);
    if (rotate === true) {
        window1.position.z -= 50;
    }
    scene.add(window1);

    var window2 = new THREE.Mesh(geometrywindow, materialwindow);
    window2.position.set(x - 12, y + 10, z + 25);
    if (rotate === true) {
        window2.position.z -= 50;
    }
    scene.add(window2);

    var window3 = new THREE.Mesh(geometrywindow,materialwindow);
    window3.position.set(x - 12, y - 12.5, z + 25);
    if (rotate === true) {
        window3.position.z -= 50;
    }
    scene.add(window3);
}

function Tree(x,y,z) {
    var geometry = new THREE.CylinderGeometry( 5, 5, 50, 64 );
    var material = new THREE.MeshBasicMaterial( {color: 0x8b4513} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(x,y,z);
    scene.add(cylinder);

    var geometry2 = new THREE.SphereGeometry( 10, 32, 32 );
    var material2 = new THREE.MeshLambertMaterial( {color: 0x136207} );
    var sphere = new THREE.Mesh( geometry2, material2 );
    sphere.position.set(x,y + 25,z);
    scene.add(sphere);

    var geometry3 = new THREE.SphereGeometry( 14, 32, 32 );
    var sphere2 = new THREE.Mesh( geometry3, material2 );
    sphere2.position.set(x,y + 10,z);
    scene.add(sphere2);

    var geometry4 = new THREE.SphereGeometry( 16, 32, 32 );
    var sphere3 = new THREE.Mesh( geometry4, material2 );
    sphere3.position.set(x,y,z);
    scene.add(sphere3);
}

function Sun(x, y, z) {
    var ambient = new THREE.AmbientLight( 0xffffff, 0.1 );
    scene.add( ambient );
    spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set( x, y, z );
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.05;
    spotLight.decay = 0;
    spotLight.distance = 250;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.far = 200;
    scene.add( spotLight );
    lightHelper = new THREE.SpotLightHelper( spotLight );
    scene.add( lightHelper );

    var geometry = new THREE.SphereGeometry( 10, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xf9d71c} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(x,y,z);
    scene.add(sphere);

}