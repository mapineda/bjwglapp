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
		planet1.position.x = planet1.orbit.radius * Math.sin(planet1.orbit.angle);
		planet1.position.z = planet1.orbit.radius * Math.cos(planet1.orbit.angle);
		planet1.orbit.angle += planet1.orbit.speed;

		planet2.position.x = planet2.orbit.radius * Math.sin(planet2.orbit.angle);
		planet2.position.z = planet2.orbit.radius * Math.cos(planet2.orbit.angle);
		planet2.orbit.angle += planet2.orbit.speed;

		planet3.position.x = planet3.orbit.radius * Math.sin(planet3.orbit.angle);
		planet3.position.z = planet3.orbit.radius * Math.cos(planet3.orbit.angle);
		planet3.orbit.angle += planet3.orbit.speed;

		planet4.position.x = planet4.orbit.radius * Math.sin(planet4.orbit.angle);
		planet4.position.z = planet4.orbit.radius * Math.cos(planet4.orbit.angle);
		planet4.orbit.angle += planet4.orbit.speed;
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
	//Jupiter Texture
	var planetMaterial3 = new BABYLON.StandardMaterial('planetMat3', scene);
	planetMaterial3.diffuseTexture = new BABYLON.Texture('assets/images/jupiter.png', scene);
	planetMaterial3.specularColor = new BABYLON.Color3(0,0,0);



	//astroid belt texture
	var astroidMaterial = new BABYLON.StandardMaterial('astroidMat', scene);
	astroidMaterial.diffuseTexture = new BABYLON.Texture('assets/images/astroid.png', scene);
	astroidMaterial.specularColor = new BABYLON.Color3(0,0,0);



	//Mercury
	var planet1 = BABYLON.Mesh.CreateSphere('planet1', 16, 0.5, scene);
	planet1.position.x = 4;
	planet1.material = planetMaterial;
	planet1.orbit = {
		radius: planet1.position.x,
		speed: 0.01,
		angle: 0
	};

	//Venus
	var planet2 = BABYLON.Mesh.CreateSphere('planet2', 16, 1, scene);
	planet2.position.x = 8;
	planet2.position.z = 10;
	planet2.material = planetMaterial;
	planet2.orbit = {
		radius: planet2.position.x,
		speed: 0.02,
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
		speed: 0.015,
		angle: 0
	}

	//Jupiter

	//Saturn

	//Uranus

	//Neptune

	//astroid belt
	var astroid1 = BABYLON.Mesh.CreateSphere('astroid1', 16, 1.5, scene);
	astroid1.position.x = 20;
	astroid1.position.z = 20;
	astroid1.material = astroidMaterial;
	astroid1.orbit = {
		radius: astroid1.position.x,
		speed: 0.015,
		angle: 0
	}

	var astroid2 = BABYLON.Mesh.CreateSphere('astroid2', 16, 1.5, scene);
	astroid2.position.x = 21;
	astroid2.position.z = 20;
	astroid2.material = astroidMaterial;
	astroid2.orbit = {
		radius: astroid2.position.x,
		speed: 0.015,
		angle: 0
	}

	var astroid3 = BABYLON.Mesh.CreateSphere('astroid3', 16, 1.5, scene);
	astroid3.position.x = 22;
	astroid3.position.z = 20;
	astroid3.material = astroidMaterial;
	astroid3.orbit = {
		radius: astroid3.position.x,
		speed: 0.015,
		angle: 0
	}

	var astroid4 = BABYLON.Mesh.CreateSphere('astroid4', 16, 1.5, scene);
	astroid4.position.x = 23;
	astroid4.position.z = 20;
	astroid4.material = astroidMaterial;
	astroid4.orbit = {
		radius: astroid4.position.x,
		speed: 0.015,
		angle: 0
	}

	var astroid5 = BABYLON.Mesh.CreateSphere('astroid5', 16, 1.5, scene);
	astroid5.position.x = 24;
	astroid5.position.z = 20;
	astroid5.material = astroidMaterial;
	astroid5.orbit = {
		radius: astroid5.position.x,
		speed: 0.015,
		angle: 0
	}

	var astroid6 = BABYLON.Mesh.CreateSphere('astroid6', 16, 1.5, scene);
	astroid6.position.x = 25;
	astroid6.position.z = 20;
	astroid6.material = astroidMaterial;
	astroid6.orbit = {
		radius: astroid6.position.x,
		speed: 0.015,
		angle: 0
	}




	//render the scene
	engine.runRenderLoop(function(){
		scene.render();
	});


	//listen for resize event
	window.addEventListener('resize', function(){
		engine.resize();
	});
};
