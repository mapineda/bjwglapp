/// <reference path="babylon.2.1.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function(){
	//get the canvas
	var canvas = document.getElementById('renderCanvas');

	// create a BabylonJS engine object
	var engine = new BABYLON.Engine(canvas, true);

	//create a new scene
	var scene = new BABYLON.Scene(engine);

//create a camera
var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 1, -15), scene);
scene.activeCamera = camera;
scene.activeCamera.attachControl(canvas);
scene.activeCamera.keysUp.push(87); // W
scene.activeCamera.keysLeft.push(65); // A 
scene.activeCamera.keysDown.push(83); // S 
scene.activeCamera.keysRight.push(68); // D 

	//let the user move the camera
	camera.attachControl(canvas);

	camera.upperRadiusLimit = 100;
	// light environment light (comes from above)
	var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);


	//sun
	var sun = BABYLON.Mesh.CreateSphere('sun', 16, 4, scene);

	var sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);
	sunMaterial.emissiveTexture = new BABYLON.Texture('assets/images/sun.png', scene);
	sunMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
	sunMaterial.specularColor = new BABYLON.Color3(0,0,0);
	sunMaterial.emissiveTexture.uScale = 2;
	sunMaterial.emissiveTexture.vScale = 2;
	sunMaterial.emissiveTexture.hasAlpha = true;
	sun.material = sunMaterial;

	//sunlight 
	var sunLight = new BABYLON.PointLight('sunLight', BABYLON.Vector3.Zero(), scene);
	sunLight.intensity = 4;

	//skybox
	var skybox = BABYLON.Mesh.CreateBox('skybox', 1000, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial('skyboxmat', scene);

	//dont render what we cant see
	skyboxMaterial.backFaceCulling = false;

	//move with camera
	skybox.infiniteDistance = true;

	skybox.material = skyboxMaterial;

	//remove reflection in skybox
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0,0,0);

	//texture of 6 sides of the cube
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/images/skybox', scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	
	//thing medthod allows you to animate / move things
	scene.beforeRender = function () {
		//mercury
		planet1.position.x = planet1.orbit.radius * Math.sin(planet1.orbit.angle);
		planet1.position.z = planet1.orbit.radius * Math.cos(planet1.orbit.angle);
		planet1.orbit.angle += planet1.orbit.speed;
		//venus
		planet2.position.x = planet2.orbit.radius * Math.sin(planet2.orbit.angle);
		planet2.position.z = planet2.orbit.radius * Math.cos(planet2.orbit.angle);
		planet2.orbit.angle += planet2.orbit.speed;
		//earth
		planet3.position.x = planet3.orbit.radius * Math.sin(planet3.orbit.angle);
		planet3.position.z = planet3.orbit.radius * Math.cos(planet3.orbit.angle);
		planet3.orbit.angle += planet3.orbit.speed;
		//mars
		planet4.position.x = planet4.orbit.radius * Math.sin(planet4.orbit.angle);
		planet4.position.z = planet4.orbit.radius * Math.cos(planet4.orbit.angle);
		planet4.orbit.angle += planet4.orbit.speed;
		//jupiter
		planet5.position.x = planet5.orbit.radius * Math.sin(planet5.orbit.angle);
		planet5.position.z = planet5.orbit.radius * Math.cos(planet5.orbit.angle);
		planet5.orbit.angle += planet5.orbit.speed;
		//saturn
		planet6.position.x = planet6.orbit.radius * Math.sin(planet6.orbit.angle);
		planet6.position.z = planet6.orbit.radius * Math.cos(planet6.orbit.angle);
		planet6.orbit.angle += planet6.orbit.speed;
		//uranus
		planet7.position.x = planet7.orbit.radius * Math.sin(planet8.orbit.angle);
		planet7.position.z = planet7.orbit.radius * Math.cos(planet8.orbit.angle);
		planet7.orbit.angle += planet7.orbit.speed;
		//neptune
		planet9.position.x = planet9.orbit.radius * Math.sin(planet9.orbit.angle);
		planet9.position.z = planet9.orbit.radius * Math.cos(planet9.orbit.angle);
		planet9.orbit.angle += planet9.orbit.speed;


		//astroids
		astroid1.position.x = astroid1.orbit.radius * Math.sin(astroid1.orbit.angle);
		astroid1.position.z = astroid1.orbit.radius * Math.cos(astroid1.orbit.angle);
		astroid1.orbit.angle += astroid1.orbit.speed;

		astroid2.position.x = astroid2.orbit.radius * Math.sin(astroid2.orbit.angle);
		astroid2.position.z = astroid2.orbit.radius * Math.cos(astroid2.orbit.angle);
		astroid2.orbit.angle += astroid2.orbit.speed;

		astroid3.position.x = astroid3.orbit.radius * Math.sin(astroid3.orbit.angle);
		astroid3.position.z = astroid3.orbit.radius * Math.cos(astroid3.orbit.angle);
		astroid3.orbit.angle += astroid3.orbit.speed;

		astroid4.position.x = astroid4.orbit.radius * Math.sin(astroid4.orbit.angle);
		astroid4.position.z = astroid4.orbit.radius * Math.cos(astroid4.orbit.angle);
		astroid4.orbit.angle += astroid4.orbit.speed;

		astroid5.position.x = astroid5.orbit.radius * Math.sin(astroid5.orbit.angle);
		astroid5.position.z = astroid5.orbit.radius * Math.cos(astroid5.orbit.angle);
		astroid5.orbit.angle += astroid5.orbit.speed;

		astroid6.position.x = astroid6.orbit.radius * Math.sin(astroid6.orbit.angle);
		astroid6.position.z = astroid6.orbit.radius * Math.cos(astroid6.orbit.angle);
		astroid6.orbit.angle += astroid6.orbit.speed;

		astroid7.position.x = astroid7.orbit.radius * Math.sin(astroid7.orbit.angle);
		astroid7.position.z = astroid7.orbit.radius * Math.cos(astroid7.orbit.angle);
		astroid7.orbit.angle += astroid7.orbit.speed;

		astroid8.position.x = astroid8.orbit.radius * Math.sin(astroid8.orbit.angle);
		astroid8.position.z = astroid8.orbit.radius * Math.cos(astroid8.orbit.angle);
		astroid8.orbit.angle += astroid8.orbit.speed;

		astroid9.position.x = astroid9.orbit.radius * Math.sin(astroid9.orbit.angle);
		astroid9.position.z = astroid9.orbit.radius * Math.cos(astroid9.orbit.angle);
		astroid9.orbit.angle += astroid9.orbit.speed;

		astroid10.position.x = astroid10.orbit.radius * Math.sin(astroid10.orbit.angle);
		astroid10.position.z = astroid10.orbit.radius * Math.cos(astroid10.orbit.angle);
		astroid10.orbit.angle += astroid10.orbit.speed;

		astroid11.position.x = astroid11.orbit.radius * Math.sin(astroid11.orbit.angle);
		astroid11.position.z = astroid11.orbit.radius * Math.cos(astroid11.orbit.angle);
		astroid11.orbit.angle += astroid11.orbit.speed;

		astroid12.position.x = astroid12.orbit.radius * Math.sin(astroid12.orbit.angle);
		astroid12.position.z = astroid12.orbit.radius * Math.cos(astroid12.orbit.angle);
		astroid12.orbit.angle += astroid12.orbit.speed;

		astroid13.position.x = astroid13.orbit.radius * Math.sin(astroid13.orbit.angle);
		astroid13.position.z = astroid13.orbit.radius * Math.cos(astroid13.orbit.angle);
		astroid13.orbit.angle += astroid13.orbit.speed;

		// astroid14.position.x = astroid14.orbit.radius * Math.sin(astroid14.orbit.angle);
		// astroid14.position.z = astroid14.orbit.radius * Math.cos(astroid14.orbit.angle);
		// astroid14.orbit.angle += astroid14.orbit.speed;

	};	



	//Mercury and Venus textures 
	var planetMaterial = new BABYLON.StandardMaterial('planetMat', scene);
	planetMaterial.diffuseTexture = new BABYLON.Texture('assets/images/sand.png', scene);
	planetMaterial.specularColor = new BABYLON.Color3(0,0,0);
	// Earth texture
	var planetMaterial1 = new BABYLON.StandardMaterial('planetMat1', scene);
	planetMaterial1.diffuseTexture = new BABYLON.Texture('assets/images/earth.png', scene);
	planetMaterial1.specularColor = new BABYLON.Color3(0,0,0);
	// Mars Texture
	var planetMaterial2 = new BABYLON.StandardMaterial('planetMat2', scene);
	planetMaterial2.diffuseTexture = new BABYLON.Texture('assets/images/mars.png', scene);
	planetMaterial2.specularColor = new BABYLON.Color3(0,0,0);
	//astroid belt texture
	var astroidMaterial = new BABYLON.StandardMaterial('astroidMat', scene);
	astroidMaterial.diffuseTexture = new BABYLON.Texture('assets/images/astroid.png', scene);
	astroidMaterial.specularColor = new BABYLON.Color3(0,0,0);
	//Jupiter Texture
	var planetMaterial3 = new BABYLON.StandardMaterial('planetMat3', scene);
	planetMaterial3.diffuseTexture = new BABYLON.Texture('assets/images/jupiter.png', scene);
	planetMaterial3.specularColor = new BABYLON.Color3(0,0,0);
	//Saturn Texture
	var planetMaterial4 = new BABYLON.StandardMaterial('planetMat4', scene);
	planetMaterial4.diffuseTexture = new BABYLON.Texture('assets/images/saturn.png', scene);
	planetMaterial4.specularColor = new BABYLON.Color3(0,0,0);
	//Uranus Texture
	var planetMaterial4 = new BABYLON.StandardMaterial('planetMat4', scene);
	planetMaterial3.diffuseTexture = new BABYLON.Texture('assets/images/uranus.png', scene);
	planetMaterial3.specularColor = new BABYLON.Color3(0,0,0);
	//Neptune Texture
	var planetMaterial5 = new BABYLON.StandardMaterial('planetMat5', scene);
	planetMaterial5.diffuseTexture = new BABYLON.Texture('assets/images/neptune.png', scene);
	planetMaterial5.specularColor = new BABYLON.Color3(0,0,0);

	



	//Mercury
	var planet1 = BABYLON.Mesh.CreateSphere('planet1', 16, 0.5, scene);
	planet1.position.x = 4;
	planet1.material = planetMaterial;
	planet1.orbit = {
		radius: planet1.position.x,
		speed: 0.08,
		angle: 0
	};

	//Venus
	var planet2 = BABYLON.Mesh.CreateSphere('planet2', 16, 1, scene);
	planet2.position.x = 8;
	planet2.position.z = 10;
	planet2.material = planetMaterial;
	planet2.orbit = {
		radius: planet2.position.x,
		speed: 0.06,
		angle: 0
	}

	//Earth
	var planet3 = BABYLON.Mesh.CreateSphere('planet3', 16, 2, scene);
	planet3.position.x = 12;
	planet3.position.z = 12;
	planet3.material = planetMaterial1;
	planet3.orbit = {
		radius: planet3.position.x,
		speed: 0.03,
		angle: 0
	}

	//Mars
	var planet4 = BABYLON.Mesh.CreateSphere('planet4', 16, 1.5, scene);
	planet4.position.x = 16;
	planet4.position.z = 14;
	planet4.material = planetMaterial2;
	planet4.orbit = {
		radius: planet4.position.x,
		speed: 0.02,
		angle: 0
	}

	//Jupiter
	var planet5 = BABYLON.Mesh.CreateSphere('planet5', 16, 10, scene);
	planet5.position.x = 80;
	planet5.position.z = 14;
	planet5.material = planetMaterial3;
	planet5.orbit = {
		radius: planet5.position.x,
		speed: 0.009,
		angle: 0
	}

	//Saturn
	var planet6 = BABYLON.Mesh.CreateSphere('planet6', 16, 9, scene);
	planet6.position.x = 100;
	planet6.position.z = 14;
	planet6.material = planetMaterial4;
	planet6.orbit = {
		radius: planet6.position.x,
		speed: 0.009,
		angle: 0
	}

	//Uranus
	var planet7 = BABYLON.Mesh.CreateSphere('planet7', 16, 4, scene);
	planet7.position.x = 150;
	planet7.position.z = 14;
	planet7.material = planetMaterial5;
	planet7.orbit = {
		radius: planet7.position.x,
		speed: 0.009,
		angle: 0
	}

	//Neptune
	var planet8 = BABYLON.Mesh.CreateSphere('planet8', 16, 5, scene);
	planet8.position.x = 250;
	planet8.position.z = 14;
	planet8.material = planetMaterial6;
	planet8.orbit = {
		radius: planet8.position.x,
		speed: 0.009,
		angle: 0
	}

	//astroid belt
	var astroid1 = BABYLON.Mesh.CreateSphere('astroid1', 16, 1.5, scene);
	astroid1.position.x = 20;
	astroid1.position.z = 9;
	astroid1.material = astroidMaterial;
	astroid1.orbit = {
		radius: astroid1.position.x,
		speed: 0.013,
		angle: 0
	}

	var astroid2 = BABYLON.Mesh.CreateSphere('astroid2', 16, 1.3, scene);
	astroid2.position.x = 22;
	astroid2.position.z = 21.5;
	astroid2.material = astroidMaterial;
	astroid2.orbit = {
		radius: astroid2.position.x,
		speed: 0.011,
		angle: 0
	}

	var astroid3 = BABYLON.Mesh.CreateSphere('astroid3', 16, 3, scene);
	astroid3.position.x = 24;
	astroid3.position.z = 7;
	astroid3.material = astroidMaterial;
	astroid3.orbit = {
		radius: astroid3.position.x,
		speed: 0.016,
		angle: 0
	}

	var astroid4 = BABYLON.Mesh.CreateSphere('astroid4', 16, 1.8, scene);
	astroid4.position.x = 26;
	astroid4.position.z = 7.1;
	astroid4.material = astroidMaterial;
	astroid4.orbit = {
		radius: astroid4.position.x,
		speed: 0.015,
		angle: 0
	}

	var astroid5 = BABYLON.Mesh.CreateSphere('astroid5', 16, 0.9, scene);
	astroid5.position.x = 31;
	astroid5.position.z = 22;
	astroid5.material = astroidMaterial;
	astroid5.orbit = {
		radius: astroid5.position.x,
		speed: 0.014,
		angle: 0
	}

	var astroid6 = BABYLON.Mesh.CreateSphere('astroid6', 16, 1.5, scene);
	astroid6.position.x = 21.7;
	astroid6.position.z = 2;
	astroid6.material = astroidMaterial;
	astroid6.orbit = {
		radius: astroid6.position.x,
		speed: 0.012,
		angle: 0
	}

	var astroid7 = BABYLON.Mesh.CreateSphere('astroid7', 16, 2.5, scene);
	astroid7.position.x = 32;
	astroid7.position.z = 8;
	astroid7.material = astroidMaterial;
	astroid7.orbit = {
		radius: astroid6.position.x,
		speed: 0.02,
		angle: 0
	}

	var astroid8 = BABYLON.Mesh.CreateSphere('astroid8', 16, 1, scene);
	astroid8.position.x = 36;
	astroid8.position.z = 19;
	astroid8.material = astroidMaterial;
	astroid8.orbit = {
		radius: astroid8.position.x,
		speed: 0.018,
		angle: 5
	}

	var astroid9 = BABYLON.Mesh.CreateSphere('astroid9', 16, 1.5, scene);
	astroid9.position.x = 38;
	astroid9.position.z = 1;
	astroid9.material = astroidMaterial;
	astroid9.orbit = {
		radius: astroid9.position.x,
		speed: 0.01,
		angle: 0
	}

	var astroid10 = BABYLON.Mesh.CreateSphere('astroid10', 16, 1.1, scene);
	astroid10.position.x = 40;
	astroid10.position.z = 50;
	astroid10.material = astroidMaterial;
	astroid10.orbit = {
		radius: astroid10.position.x,
		speed: 0.015,
		angle: 0
	}

	var astroid11 = BABYLON.Mesh.CreateSphere('astroid11', 16, 1.7, scene);
	astroid11.position.x = 45;
	astroid11.position.z = 22;
	astroid11.material = astroidMaterial;
	astroid11.orbit = {
		radius: astroid6.position.x,
		speed: 0.017,
		angle: 0
	}

	var astroid12 = BABYLON.Mesh.CreateSphere('astroid12', 16, 1.5, scene);
	astroid12.position.x = 44;
	astroid12.position.z = 21;
	astroid12.material = astroidMaterial;
	astroid12.orbit = {
		radius: astroid12.position.x,
		speed: 0.017,
		angle: 0
	}

	var astroid13 = BABYLON.Mesh.CreateSphere('astroid13', 16, 2, scene);
	astroid13.position.x = 44.5;
	astroid13.position.z = 15;
	astroid13.material = astroidMaterial;
	astroid13.orbit = {
		radius: astroid13.position.x,
		speed: 0.017,
		angle: 0
	}

	// var astroid14 = BABYLON.Mesh.CreateSphere('astroid14', 16, 1.5, scene);
	// astroid14.position.x = 48;
	// astroid14.position.z = 20;
	// astroid14.material = astroidMaterial;
	// astroid14.orbit = {
	// 	radius: astroid14.position.x,
	// 	speed: 0.015,
	// 	angle: 0
	// }




	//render the scene
	engine.runRenderLoop(function(){
		scene.render();
	});


	//listen for resize event
	window.addEventListener('resize', function(){
		engine.resize();
	});
};
