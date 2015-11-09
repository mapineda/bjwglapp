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
	sunMaterial.emissiveTexture = new BABYLON.Texture('../public/assets/images/sun.png', scene);
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
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('../public/assets/images/skybox', scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	
	//thing medthod allows you to animate / move things
	scene.beforeRender = function () {
		planet1.position.x = planet1.orbit.radius * Math.sin(planet1.orbit.angle);
		planet1.position.z = planet1.orbit.radius * Math.cos(planet1.orbit.angle);
		planet1.orbit.angle += planet1.orbit.speed;

		planet2.position.x = planet2.orbit.radius * Math.sin(planet2.orbit.angle);
		planet2.position.z = planet2.orbit.radius * Math.cos(planet2.orbit.angle);
		planet2.orbit.angle += planet2.orbit.speed;

		// planet3.position.x = planet3.orbit.radius * Math.sin(planet3.orbit.angle);
		// planet3.position.z = planet3.orbit.radius * Math.cos(planet3.orbit.angle);
		// planet3.orbit.angle += planet3.orbit.speed;
	};	



	//planets
	var planetMaterial = new BABYLON.StandardMaterial('planetMat', scene);
	planetMaterial.diffuseTexture = new BABYLON.Texture('../public/assets/images/sand.png', scene);
	planetMaterial.specularColor = new BABYLON.Color3(0,0,0);


	//planet one
	var planet1 = BABYLON.Mesh.CreateSphere('planet1', 16, 1, scene);
	planet1.position.x = 4;
	planet1.material = planetMaterial;
	planet1.orbit = {
		radius: planet1.position.x,
		speed: 0.01,
		angle: 0
	};


	//planet two 
	var planet2 = BABYLON.Mesh.CreateSphere('planet2', 16, 1, scene);
	planet2.position.x = 8;
	planet2.position.z = 12;
	planet2.material = planetMaterial;
	planet2.orbit = {
		radius: planet2.position.x,
		speed: -0.02,
		angle: 0
	}


	//planet three
	// var planet3 = BABYLON.Mesh.CreateSphere('planet3', 16, 0.5, scene);
	// planet3.position.x = 6;
	// planet3.position.z = 5;
	// planet3.material = planetMaterial;
	// planet3.orbit = {
	// 	radius: planet3.position.x,
	// 	speed: 0.01,
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
