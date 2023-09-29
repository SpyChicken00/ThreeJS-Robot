import * as THREE from '../modules/three.module.js';
//import * as BufferGeometryUtils from '../three/addons/utils/BufferGeometryUtils.js';
//import * as BufferGeometryUtils from './jsm/utils/BufferGeometryUtils.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add lights
//test

var ambientLight = new THREE.AmbientLight( 0x0000FF );
scene.add(ambientLight);

var dirLight = new THREE.DirectionalLight( 0xFFFFFF, 0.5 );
scene.add(dirLight);


/*
//add custom lights
var ambientLight = new THREE.AmbientLight( 0xffaaff);
scene.add(ambientLight);

var dirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add(dirLight);
*/

//creates a cube object
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const material3 = new THREE.MeshBasicMaterial( { color: 0xddffdd, side:THREE.DoubleSide} );
const material4 = new THREE.MeshBasicMaterial( { color: 0xaaccaa, side:THREE.DoubleSide} );
const material5 = new THREE.MeshBasicMaterial( { color: 0xfedcba} );
const material6 = new THREE.MeshBasicMaterial( { color: 0xabcdef, side:THREE.DoubleSide } );
const material7 = new THREE.MeshLambertMaterial( { color: 0xfedcba, flatShading: true});
const material8 = new THREE.MeshPhongMaterial( { color: 0x80fc66, emissive: 0x111111, shininess: 70, specular: 0xff0000});
const material9 = new THREE.MeshLambertMaterial( { color: 0x00ff00});
//, flatShading: true

const cube = new THREE.Mesh( geometry, material);
const cylinder = new THREE.Mesh(drawCylinder(0.01, 1, 3), material6);
const mycube = new THREE.Mesh(drawCube(0, 2, 0, 2, 0, -2), material);
const polygon = new THREE.Mesh(PolygonGeometry(5, 3, new THREE.Vector3(-1, -1, 0)), material3);
const array = [mycube, cylinder];
const sphere = new THREE.Mesh(drawSphere(2, 64, 32), material8);
//mycube.mergeGeometries([cylinder], false);
//const hat = BufferGeometryUtils.mergeBufferGeometries([mycube, cylinder]);
//const triangle1 = new THREE.Mesh(drawTriangle(), material);
//const triangle2 = new THREE.Mesh(drawTriangle2(), material2);
//const triangle3 = new THREE.Mesh(drawTriangle3(), material3);
//const triangle4 = new THREE.Mesh(drawTriangle4(), material4);
//const triangle5 = new THREE.Mesh(drawTriangle5(), material5);
//const triangle6 = new THREE.Mesh(drawTriangle6(), material6);
//scene.add(cube);

scene.add(mycube);
scene.add(cylinder);
scene.add(sphere);
scene.add(polygon);
//scene.add(hat);
//scene.add(triangle1);
//scene.add(triangle2);
//scene.add(triangle3);
//scene.add(triangle4);
//scene.add(triangle5);
//scene.add(triangle6);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

	//cube.rotation.x += 0.00;
	//cube.rotation.y += 0.01;

	//mycube.rotation.x += 0.01;
	mycube.rotation.y += 0.01;
	//mycube.rotation.x += 0.05
	cylinder.rotation.x += 0.001;
	sphere.rotation.z += 0.0005
	sphere.rotation.y += 0.0005;
	/*
	triangle1.rotation.y += 0.01;
	triangle2.rotation.y += 0.01;
	triangle3.rotation.y += 0.01;
	triangle4.rotation.y += 0.01;
	triangle5.rotation.y += 0.01;
	triangle6.rotation.y += 0.01;
	*/

	renderer.render( scene, camera );
}


function drawTriangle() {
	const triangle = new THREE.BufferGeometry();
	// vertices
	const points = [
	new THREE.Vector3(1, 1, 0),
	new THREE.Vector3(3, 1, 0),
	new THREE.Vector3(3, 3, 0)
	]
	triangle.setFromPoints(points);
	return triangle;
}



function drawTriangle2() {
	var triangle2 = new THREE.BufferGeometry();
	// vertices
	
	const points2 = [
	new THREE.Vector3(3, 3, 0),
	new THREE.Vector3(1, 3, 0),
	new THREE.Vector3(1, 1, 0)
	]
	triangle2.setFromPoints(points2);



	return triangle2;
}

function drawTriangle3() {
	var triangle = new THREE.BufferGeometry();
	// vertices
	const points = [
	new THREE.Vector3(3, 3, 1),
	new THREE.Vector3(3, 1, 0),
	new THREE.Vector3(3, 1, 1)
	]
	triangle.setFromPoints(points);
	return triangle;
}

function drawTriangle4() {
	var triangle = new THREE.BufferGeometry();
	// vertices
	const points = [
	new THREE.Vector3(3, 1, 0),
	new THREE.Vector3(3, 3, 1),
	new THREE.Vector3(3, 3, 0)
	]
	triangle.setFromPoints(points);
	return triangle;
}

function drawTriangle5() {
	var triangle = new THREE.BufferGeometry();
	// vertices
	const points = [
	new THREE.Vector3(1, 1, 1),
	new THREE.Vector3(3, 1, 1),
	new THREE.Vector3(3, 3, 1)
	]
	triangle.setFromPoints(points);
	return triangle;
}



function drawTriangle6() {
	var triangle2 = new THREE.BufferGeometry();
	// vertices
	
	const points2 = [
	new THREE.Vector3(3, 3, 1),
	new THREE.Vector3(1, 3, 1),
	new THREE.Vector3(1, 1, 1)
	]
	triangle2.setFromPoints(points2);



	return triangle2;
}

function drawCube(x1, x2, y1, y2, z1, z2) {
	const cube = new THREE.BufferGeometry();
	const points = new Float32Array([

		//TODO NEEDS TO BE CLOCKWISE BECAUSE FACIGN FROM BACK ITSCOUNTER CLOCKWISE

		//FRONT SIDE TWO TRIANGLES same z
		x1, y1, z1,
		x2, y1, z1,
		x2, y2, z1,

		x2, y2, z1, 
		x1, y2, z1,
		x1, y1, z1,

		//BACK SIDE TWO TRIANGLES same z (FIXED)
		x1, y1, z2,
		x1, y2, z2,
		x2, y2, z2,

		x2, y2, z2,
		x2, y1, z2,
		x1, y1, z2,

		//TOP SIDE- same y
		x1, y2, z1,
		x2, y2, z1,
		x2, y2, z2,

		x2, y2, z2,
		x1, y2, z2,
		x1, y2, z1,

		//BOTTOM SIDE- same y

		x1, y1, z1,
		x1, y1, z2,
		x2, y1, z2,

		x2, y1, z2,
		x2, y1, z1,
		x1, y1, z1,

		
		//RIGHT SIDE SIDE - same x
		x2, y1, z1,
		x2, y1, z2,
		x2, y2, z2,

		x2, y2, z2,
		x2, y2, z1,
		x2, y1, z1,

		 
		//LEFT SIDE SIDE - same x

		x1, y1, z1,
		x1, y2, z1,
		x1, y2, z2,

		x1, y2, z2,
		x1, y1, z2,
		x1, y1, z1,


		
		//TODO how to optimize to not have to use doublesided?
	]);

	cube.setAttribute('position', new THREE.BufferAttribute (points, 3));

	return cube;
}

function drawCylinder(topRadius, bottomRadius, height) {
	const cylinder = new THREE.CylinderGeometry(topRadius, bottomRadius, height);
	cylinder.translate(2,2,-2);
	return cylinder;
}

function drawSphere(radius, width, height) {
	const sphere = new THREE.SphereGeometry(radius, width, height);
	sphere.translate(-3, -3, -2);
	return sphere;
}
	



//broken but i dont know why, are the vertexes being defined in the wrong order? 
function PolygonGeometry(sides, radius, location) {
	var geo = new THREE.BufferGeometry();
	var indices = [];
	//generate vertices
	for (var pt = 0; pt < sides; pt++) {
		//add 90 degrees so we start at +Y axis
		//rotate counterclockwise around
		var angle = (Math.PI/2) + (pt / sides) * 2 * Math.PI;

		var x = radius * Math.sin(angle) + location.x;
		var y = radius * Math.cos(angle) + location.y;

		//TODO save the vertex location : fill in the code
		//geo.Vertices.push(new THREE.Vector3(x,y,0.0));
		

		
		
		
		//TODO save the vertex location : fill in the code
		indices.push(x, y, 0.0); // face 1
	}
	geo.setIndex(indices);
	//geo.setAttribute( 'position', new THREE.BufferAttribute(vertices, 3 ) );

	//TODO your code to generate minimum amount of faces for the polygon
	//for (var face = 0; face < sides-2; face++) {
		//triangle fanm from first +Y point around
		//geo.faces.push( new THREE.Face3(0, face+1, face+2));
	//}
	//return the geometry object
	
	return geo;
}


animate();