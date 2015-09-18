/// <reference path="babylon.2.1.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function(){
	//get the canvas
	var canvas = document.getElementById('renderCanvas');

	// create a BabylonJS engine object
	var engine = new BABYLON.Engine(canvas, true);

	//create a new scene
	var scene = new BABYLON.Scene(engine);


	//create camera
	var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0 ,2, -15), scene);	
	// interactive camera
	camera.attachControl(canvas);

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

	//planets
	var planetMaterial = new BABYLON.StandardMaterial('planetMat', scene);
	planetMaterial.diffuseTexture = new BABYLON.Texture('assets/images/sand.png', scene);
	planetMaterial.specularColor = new BABYLON.Color3(0,0,0);


	//planet one
	var planet1 = BABYLON.Mesh.CreateSphere('planet1', 16, 1, scene);
	planet1.position.x = 4;
	planet1.material = planetMaterial;


	//planet two 
	var planet2 = BABYLON.Mesh.CreateSphere('planet2', 16, 1, scene);
	planet2.position.x = 8;
	planet2.position.z = -12;
	planet2.material = planetMaterial;


	//planet two 
	var planet3 = BABYLON.Mesh.CreateSphere('planet3', 16, 0.5, scene);
	planet3.position.x = 10;
	planet3.position.z = 5;
	planet3.material = planetMaterial;


	//skybox


	//render the scene
	engine.runRenderLoop(function(){
		scene.render();
	});


	//listen for resize event
	window.addEventListener('resize', function(){
		engine.resize();
	});

};