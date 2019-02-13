function Building(x, y, z) {
    var material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/crate.jpg') });
    var geometry = new THREE.CubeGeometry(50, 50, 50);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    scene.add(cube);

    var geometry2 = new THREE.ConeGeometry( 60, 40, 4);
    var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cone = new THREE.Mesh( geometry2, material2 );
    cone.position.set(x, y + 45, z);
    cone.rotateY(Math.PI / 4);
    scene.add( cone );

    var material3 = new THREE.MeshBasicMaterial({color: 0xffff00});
    var geometry3 = new THREE.CubeGeometry(10, 20, 1);
    var cube2 = new THREE.Mesh(geometry3, material3);
    cube2.position.set(x + 12, y - 12.5, z + 25);
    scene.add(cube2);

    var materialwindow = new THREE.MeshBasicMaterial({color: 0xffff00});
    var geometrywindow = new THREE.CubeGeometry(10, 10, 1);
    var cube3 = new THREE.Mesh(geometrywindow, materialwindow);
    cube3.position.set(x + 12, y + 10, z + 25);
    scene.add(cube3);

    var cube4 = new THREE.Mesh(geometrywindow, materialwindow);
    cube4.position.set(x - 12, y + 10, z + 25);
    scene.add(cube4);

    var window3 = new THREE.Mesh(geometrywindow,materialwindow);
    window3.position.set(x - 12, 12.5, 25);
    scene.add(window3);
}