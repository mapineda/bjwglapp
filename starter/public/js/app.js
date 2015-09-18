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

	// ground mesh 
	var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene);
	// grass mesh 
	var grass = new BABYLON.StandardMaterial('grass', scene);
	grass.diffuseTexture = new BABYLON.Texture('assets/images/grass.png', scene);
	grass.diffuseTexture.uScale = 10;
	grass.diffuseTexture.vScale = 10;
	grass.specularColor = new BABYLON.Color3(0,0,0);


	ground.material = grass;


	//create a sphere
	var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
	//sphere position
	sphere.position.y = 1;

	//second sphere
	var sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 16, 4, scene);
	//sphere 2 position`
	sphere2.position = new BABYLON.Vector3(3, 3, 3);
	sphere2.scaling = new BABYLON.Vector3(1, 0.5, 0.5);

	var sphereMaterial = new BABYLON.StandardMaterial('sphereMat', scene);
	// adding color red
	sphereMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
	// add transperancy
	sphereMaterial.alpha = 0.5;
	sphereMaterial.specularColor = new BABYLON.Color3(0,0,1);
	sphereMaterial.specularPower = 5;

	sphere2.material = sphereMaterial;

	// create a box
	var box = BABYLON.Mesh.CreateBox('box', 1, scene);
	box.position = new BABYLON.Vector3(5, 2, -5);
	box.scaling.y = 2;

	//make box rotate
	box.rotation.x = 45;

	box.material = sphereMaterial;

	//create a cylinder
	var cylinder = BABYLON.Mesh.CreateCylinder('cyl', 5, 1, 3, 30, scene);
	//emit the cone in the night time
	var emissiveMaterial = new BABYLON.StandardMaterial('emissiveMat', scene);
	emissiveMaterial.emissiveColor = new BABYLON.Color3(0,1,0);

	cylinder.material = emissiveMaterial;

	// create lines 
	var lines = BABYLON.Mesh.CreateLines('lines', [
			new BABYLON.Vector3(0, 5, 0), 
			new BABYLON.Vector3(1, 5, 0), 
			new BABYLON.Vector3(0, 5, 1), 
			new BABYLON.Vector3(2, 2, 0), 
			new BABYLON.Vector3(1, 5, -5)
			], scene );

	//render the scene
	engine.runRenderLoop(function(){
		scene.render();
	});


	//listen for resize event
	window.addEventListener('resize', function(){
		engine.resize();
	});

};