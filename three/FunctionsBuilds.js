function House(x, y, z, rotate) { // To make a house given position where to place it, and rotate = true if on other side of street

    //Make the base of the house
    var material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/red_bricks.jpg') });
    var geometry = new THREE.CubeGeometry(50, 50, 50);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    scene.add(cube);

    //Add a roof
    var geometry2 = new THREE.ConeGeometry( 50, 30, 4);
    var material2 = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/roofTexture.jpg')});
    var roof = new THREE.Mesh( geometry2, material2 );
    roof.position.set(x, y + 40, z);
    roof.rotateY(Math.PI / 4);
    scene.add(roof);

    //Add a door
    var material3 = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/doorTexture.jpg')});
    var geometry3 = new THREE.CubeGeometry(10, 20, 1);
    var door = new THREE.Mesh(geometry3, material3);
    door.position.set(x + 12, y - 12.5, z + 25);
    if (rotate === true) {
    door.position.z -= 50;
    }
    scene.add(door);

    //add window1
    var materialwindow = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('images/windowTexture.jpg')});
    var geometrywindow = new THREE.CubeGeometry(10, 10, 1);
    var window1 = new THREE.Mesh(geometrywindow, materialwindow);
    window1.position.set(x + 12, y + 10, z + 25);
    if (rotate === true) {
        window1.position.z -= 50;
    }
    scene.add(window1);

    //add window 2
    var window2 = new THREE.Mesh(geometrywindow, materialwindow);
    window2.position.set(x - 12, y + 10, z + 25);
    if (rotate === true) {
        window2.position.z -= 50;
    }
    scene.add(window2);


    //add window3
    var window3 = new THREE.Mesh(geometrywindow,materialwindow);
    window3.position.set(x - 12, y - 12.5, z + 25);
    if (rotate === true) {
        window3.position.z -= 50;
    }
    scene.add(window3);

    //add a chimney
    var geometrychimney = new THREE.CubeGeometry(10, 25, 10);
    var chimney = new THREE.Mesh(geometrychimney, material2);
    chimney.position.set(x + 12.5, y + 50, z);
    scene.add(chimney);


}

//Make a tree
function Tree(x,y,z) {
    //add the trunk of the tree
    var geometry = new THREE.CylinderGeometry( 5, 5, 50, 64 );
    var material = new THREE.MeshBasicMaterial( {color: 0x8b4513} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(x,y,z);
    scene.add(cylinder);

    //add the spheres to make it look like a tree
    var geometry2 = new THREE.SphereGeometry( 10, 32, 32 );
    var material2 = new THREE.MeshLambertMaterial( {color: 0x136207, reflectivity: 30} );
    var sphere = new THREE.Mesh( geometry2, material2 );
    sphere.position.set(x,y + 25,z);
    scene.add(sphere);

    //add another sphere
    var geometry3 = new THREE.SphereGeometry( 14, 32, 32 );
    var sphere2 = new THREE.Mesh( geometry3, material2 );
    sphere2.position.set(x,y + 10,z);
    scene.add(sphere2);

    //and another sphere
    var geometry4 = new THREE.SphereGeometry( 16, 32, 32 );
    var sphere3 = new THREE.Mesh( geometry4, material2 );
    sphere3.position.set(x,y,z);
    scene.add(sphere3);
}

//we cane make a sun
function Sun(x, y, z) {
    //a new directional lightning to make the sun give light
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set(x,y,z);
    scene.add( directionalLight ); // point it towards the middle

    //make a sphere so it looks like there is a sun
    var geometry = new THREE.SphereGeometry( 20, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xf9d71c} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(x,y,z);
    scene.add(sphere);

}

// make a street lantern
function Lantern(x,y,z) {
    //make the pole of the lantern
    var geometry = new THREE.CylinderGeometry( 5, 5, 50, 64 );
    var material = new THREE.MeshPhongMaterial( {color: 0x808080, shininess: 60} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(x,y,z);
    scene.add(cylinder);

    // make the lamp of the lantern
    var geometry3 = new THREE.SphereGeometry( 7, 32, 32, 0, 6.3, 2,1.3);
    var material3 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var lamp = new THREE.Mesh( geometry3, material3 );
    lamp.position.set(x,y + 25,z);
    scene.add(lamp);

    //make the top of the lantern
    var geometry2 = new THREE.CylinderBufferGeometry( 10, 5, 10, 8 );
    var material2 = new THREE.MeshPhongMaterial( {color: 0xffffff, shininess: 60} );
    var cylinder2 = new THREE.Mesh( geometry2, material2 );
    cylinder2.position.set(x,y + 25,z);
    scene.add( cylinder2 );

}

// make a car with the use of the mtl and obj loader
function Car(x,y,z){
    var mtlLoader = new THREE.MTLLoader(); // get mtlloader
    mtlLoader.setPath( 'Objects/Materials/' ); // set the path of the mtl file
    url = "Lamborghini_Aventador.mtl"; //set the mtl file
    mtlLoader.load( url, function( materials ) { // load the file

        materials.preload(); //set the materials

        var objLoader = new THREE.OBJLoader(); // get objloader
        objLoader.setMaterials( materials ); //set the materials of the object
        objLoader.setPath( 'Objects/' ); // set path of the obj file
        objLoader.load( 'Lamborghini_Aventador.obj', function ( object ) { //load the obj file
                object.position.set(x,y,z); //set pos
                object.rotateY(Math.PI / 2); // make it point correctly
                object.scale.set(0.2,0.2,0.2); // make it smaller cuz obj files are giant
                loadedObject = object; // set it in the variable so it can be animated
                scene.add( object ); //add to scene

            },
            // called when loading is in progresses
            function ( xhr ) {
                //in console log make it so you can see how fast its done
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                console.log( 'An error happened' );

            });

    });
}


function Cloud(x,y,z) {
    var loader = new THREE.OBJLoader();
    loader.load(
        // resource URL
        'Objects/cloud.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.set(x,y,z);
            object.scale.set(0.2,0.2,0.2);
            loadedObject2 = object;
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
}

function Plane(x,y,z) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'Objects/Materials/' );
    var url = "Plane.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'Objects/' );
        objLoader.load( 'Plane.obj', function ( object ) {
                object.position.set(x,y,z);
                object.scale.set(0.2,0.2,0.2);
                object.rotateY(Math.PI / 4);
                loadedObject3 = object;
                scene.add( object );

            },
            // called when loading is in progresses
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                console.log( 'An error happened' );

            });

    });
}

function MailBox(x,y,z,rotate){
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'Objects/Materials/' );
    var url = "pstblpll2.mtl";
    mtlLoader.load( url, function( materials ) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'Objects/' );
        objLoader.load( 'pstblpll2.obj', function ( object ) {
                object.position.set(x,y,z);
                object.scale.set(3,3,3);
                if (rotate === true) {
                    object.rotateY(Math.PI);
                }
                scene.add( object );

            },
            // called when loading is in progresses
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                console.log( 'An error happened' );

            });

    });
}