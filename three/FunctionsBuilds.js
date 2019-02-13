function Building(x, y, z) {
    var material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/crate.jpg') });
    var geometry = new THREE.CubeGeometry(50, 50, 50);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    scene.add(cube);

    var geometry2 = new THREE.ConeGeometry( 60, 40, 4);
    var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var roof = new THREE.Mesh( geometry2, material2 );
    roof.position.set(x, y + 45, z);
    roof.rotateY(Math.PI / 4);
    scene.add(roof);

    var material3 = new THREE.MeshBasicMaterial({color: 0xffff00});
    var geometry3 = new THREE.CubeGeometry(10, 20, 1);
    var door = new THREE.Mesh(geometry3, material3);
    door.position.set(x + 12, y - 12.5, z + 25);
    scene.add(door);

    var materialwindow = new THREE.MeshBasicMaterial({color: 0xffff00});
    var geometrywindow = new THREE.CubeGeometry(10, 10, 1);
    var window1 = new THREE.Mesh(geometrywindow, materialwindow);
    window1.position.set(x + 12, y + 10, z + 25);
    scene.add(window1);

    var window2 = new THREE.Mesh(geometrywindow, materialwindow);
    window2.position.set(x - 12, y + 10, z + 25);
    scene.add(window2);

    var window3 = new THREE.Mesh(geometrywindow,materialwindow);
    window3.position.set(x - 12, 12.5, 25);
    scene.add(window3);
}

