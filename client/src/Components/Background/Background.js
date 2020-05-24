import React, { Component } from 'react';
import * as THREE from "three";

class BackGround extends Component {

    componentDidMount(){
	  var loc= window.location.href;
	  var clock = new THREE.Clock();
	  var loc=window.location.href;
			var camera, scene, renderer,
			light1, light2, light3, light4,
			light5, light6, light7, light8,		
			light11, light12, light13, light14,
			light15, light16, light17, light18;
			var clock = new THREE.Clock();

			init();
			animate();

			function init() {
				var time = Date.now();
				camera = new THREE.PerspectiveCamera( 50  , window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 100;

				scene = new THREE.Scene();
				scene.fog=new THREE.Fog(0x000000,200)
				//model


				var sphere = new THREE.SphereBufferGeometry( 1.1, 16, 8 );

				//lights

				light1 = new THREE.PointLight( 0xff0040, 1.5, 10,0);
				light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light1 );

				light2 = new THREE.PointLight( 0x0040ff,  1.5,10,0 );
				light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light2 );

				light3 = new THREE.PointLight( 0x80ff80,  1.5,10,0 );
				light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light3 );

				light4 = new THREE.PointLight( 0xffaa00,  1.5,10,0);
				light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light4 );

    			light5 = new THREE.PointLight( 0xff0040,  1.5,10,0);
				light5.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light5 );

				light6 = new THREE.PointLight( 0x0040ff,  1,10,0);
				light6.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light6 );

				light7 = new THREE.PointLight( 0x80ff80,  1,10,0);
				light7.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light7 );

				light8 = new THREE.PointLight( 0xffaa00,  1,10,0);
				light8.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light8 );

				light11 = new THREE.PointLight( 0xff0040,  1,10,0);
				light11.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light11 );

				light12 = new THREE.PointLight( 0x0040ff,  1, 10,0 );
				light12.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light12 );

				light13 = new THREE.PointLight( 0x80ff80,  1, 10,0 );
				light13.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light13 );

				light14 = new THREE.PointLight( 0xffaa00,  1, 10,0 );
				light14.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light14 );

    			light15 = new THREE.PointLight( 0xff0040,  1, 10,0 );
				light15.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light15 );

				light16 = new THREE.PointLight( 0x0040ff,  1, 10,0 );
				light16.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light16 );

				light17 = new THREE.PointLight( 0x80ff80,  1, 10,0 );
				light17.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light17 );

				light18 = new THREE.PointLight( 0xffaa00,  1, 10,0 );
				light18.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: (Math.random()*0xFFFFFF<<0) } ) ) );
				scene.add( light18 );

				//cubes
				var objectMaterial = new THREE.MeshStandardMaterial( { color: 0xDB4437, roughness: 0.7, metalness: 0.1 ,} );
				var objectMaterial2 = new THREE.MeshStandardMaterial( { color: 0x04ADBF, roughness: 0.7, metalness: 0.1 ,} );
				var objectMaterial3 = new THREE.MeshStandardMaterial( { color: 0xF2B705, roughness: 0.7, metalness: 0.1 ,} );

					//for white screen
					let material = new THREE.MeshBasicMaterial( {color: 0xDB4437} );
					let material2 = new THREE.MeshBasicMaterial( {color: 0x04ADBF } );
					let material3 = new THREE.MeshBasicMaterial( {color:0xF2B705 } );
					scene.background = new THREE.Color( 0xffffff );
				var geometry = new THREE.BoxGeometry( 5, 5, 5 );
				
				
				var cube = new THREE.Mesh( geometry, material );
				scene.add( cube );

				var cube2 = new THREE.Mesh( geometry, material2 );
				scene.add( cube2 );

				var cube3 = new THREE.Mesh( geometry, material3 );
				scene.add( cube3 );

				//renderer

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				var animate = function () {
					requestAnimationFrame( animate );
					cube.rotation.x += 0.01;
					cube.rotation.y += 0.01;
					cube.rotation.z += 0.01;
					cube2.rotation.x += 0.01;
					cube2.rotation.z += 0.01;
					cube2.rotation.y += 0.01;
					cube3.rotation.x += 0.01;
					cube3.rotation.z += 0.01;
					cube3.rotation.y += 0.01;


					cube.position.x = 20;
					cube.position.y = 0;
					cube.position.z = 50;

					
					cube2.position.x = 0;
					cube2.position.y = 0;
					cube2.position.z = 50;

				
					cube3.position.x = -20;
					cube3.position.y = 0;
					cube3.position.z = 50;

					renderer.render( scene, camera );
				  };
				  animate();

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				var time = Date.now() * 0.0005;
				var delta = clock.getDelta();


				light1.position.x = Math.sin( time * 0.7 ) * 20;
				light1.position.y = Math.cos( time * 0.5 ) * 50;
				light1.position.z = Math.cos( time * 0.3 ) * 50;

				light2.position.x = Math.cos( time * 0.3 ) * 90;
				light2.position.y = Math.sin( time * 0.5 ) * 20;
				light2.position.z = Math.sin( time * 0.7 ) * 90;

				light3.position.x = Math.sin( time * 0.7 ) * 30;
				light3.position.y = Math.cos( time * 0.3 ) * 40;
				light3.position.z = Math.sin( time * 0.5 ) * 20;

				light4.position.x = Math.sin( time * 0.3 ) * 100;
				light4.position.y = Math.cos( time * 0.7 ) * 40;
        		light4.position.z = Math.sin( time * 0.5 ) * 20;
        
        		light5.position.x = Math.cos( time * 0.7 ) * 10;
				light5.position.y = Math.sin( time * 0.5 ) * 20;
				light5.position.z = Math.cos( time * 0.7 ) * 100;

				light6.position.x = Math.sin( time * 0.5 ) * 40;
				light6.position.y = Math.sin( time * 0.5 ) * 40;
				light6.position.z = Math.sin( time * 0.5 ) * 30;

				light7.position.x = Math.cos( time * 0.7 ) * 60;
				light7.position.y = Math.cos( time * 0.3 ) * 90;
				light7.position.z = Math.sin( time * 0.2 ) * 30;

				light8.position.x = Math.cos( time * 0.3 ) * 40;
				light8.position.y = Math.cos( time * 0.7 ) * 10;
				light8.position.z = Math.cos( time * 0.1 ) * 80;
				
				light11.position.x = Math.sin( time * 0.7 ) * 20;
				light11.position.y = Math.cos( time * 0.8 ) * 80;
				light11.position.z = Math.cos( time * 0.3 ) * 50;

				light12.position.x = Math.cos( time * 0.8 ) * 90;
				light12.position.y = Math.sin( time * 0.5 ) * 20;
				light12.position.z = Math.sin( time * 0.2 ) * 50;

				light13.position.x = Math.sin( time * 0.7 ) * 20;
				light13.position.y = Math.cos( time * 0.2 ) * 40;
				light13.position.z = Math.sin( time * 0.5 ) * 20;

				light14.position.x = Math.sin( time * 0.6 ) * 100;
				light14.position.y = Math.cos( time * 0.7 ) * 30;
        		light14.position.z = Math.sin( time * 0.5 ) * 200;
        
        		light15.position.x = Math.cos( time * 0.7 ) * 60;
				light15.position.y = Math.sin( time * 0.5 ) * 50;
				light15.position.z = Math.cos( time * 0.1 ) * 100;

				light16.position.x = Math.sin( time * 0.3 ) * 40;
				light16.position.y = Math.sin( time * 0.9 ) * 20;
				light16.position.z = Math.sin( time * 0.7 ) * 20;

				light17.position.x = Math.cos( time * 0.7 ) * 40;
				light17.position.y = Math.cos( time * 0.4 ) * 90;
				light17.position.z = Math.sin( time * 0.5 ) * 30;

				light18.position.x = Math.cos( time * 0.4 ) * 40;
				light18.position.y = Math.cos( time * 0.7 ) * 20;
				light18.position.z = Math.cos( time * 0.5 ) * 80;
				renderer.render( scene, camera );

			}
  }
    render(){
      return (
        <div ref={ref => (this.mount = ref)} />
      )
    }
  }
export default BackGround;