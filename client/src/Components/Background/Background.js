import React, { Component } from 'react';
import * as THREE from "three";

class BackGround extends Component {

	componentDidUpdate(prevProps) {
		if (prevProps.mode != this.props.mode) {
			this.forceUpdate();
		}
	}

	componentDidMount() {
		this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.z = 100;

		this.scene = new THREE.Scene();
		this.scene.fog = new THREE.Fog(0x000000, 200)
		//model


		var sphere = new THREE.SphereBufferGeometry(1.1, 16, 8);

		//this.lights

		this.light1 = new THREE.PointLight(0xff0040, 1.5, 10, 0);
		this.light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light1);

		this.light2 = new THREE.PointLight(0x0040ff, 1.5, 10, 0);
		this.light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light2);

		this.light3 = new THREE.PointLight(0x80ff80, 1.5, 10, 0);
		this.light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light3);

		this.light4 = new THREE.PointLight(0xffaa00, 1.5, 10, 0);
		this.light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light4);

		this.light5 = new THREE.PointLight(0xff0040, 1.5, 10, 0);
		this.light5.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light5);

		this.light6 = new THREE.PointLight(0x0040ff, 1, 10, 0);
		this.light6.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light6);

		this.light7 = new THREE.PointLight(0x80ff80, 1, 10, 0);
		this.light7.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light7);

		this.light8 = new THREE.PointLight(0xffaa00, 1, 10, 0);
		this.light8.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light8);

		this.light11 = new THREE.PointLight(0xff0040, 1, 10, 0);
		this.light11.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light11);

		this.light12 = new THREE.PointLight(0x0040ff, 1, 10, 0);
		this.light12.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light12);

		this.light13 = new THREE.PointLight(0x80ff80, 1, 10, 0);
		this.light13.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light13);

		this.light14 = new THREE.PointLight(0xffaa00, 1, 10, 0);
		this.light14.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light14);

		this.light15 = new THREE.PointLight(0xff0040, 1, 10, 0);
		this.light15.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light15);

		this.light16 = new THREE.PointLight(0x0040ff, 1, 10, 0);
		this.light16.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light16);

		this.light17 = new THREE.PointLight(0x80ff80, 1, 10, 0);
		this.light17.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light17);

		this.light18 = new THREE.PointLight(0xffaa00, 1, 10, 0);
		this.light18.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: (Math.random() * 0xFFFFFF << 0) })));
		this.scene.add(this.light18);

		//cubes
		var objectMaterial = new THREE.MeshStandardMaterial({ color: 0xDB4437, roughness: 0.7, metalness: 0.1, });
		var objectMaterial2 = new THREE.MeshStandardMaterial({ color: 0x04ADBF, roughness: 0.7, metalness: 0.1, });
		var objectMaterial3 = new THREE.MeshStandardMaterial({ color: 0xF2B705, roughness: 0.7, metalness: 0.1, });

		//for white screen
		let material = new THREE.MeshBasicMaterial({ color: 0xDB4437 });
		let material2 = new THREE.MeshBasicMaterial({ color: 0x04ADBF });
		let material3 = new THREE.MeshBasicMaterial({ color: 0xF2B705 });

		var geometry = new THREE.BoxGeometry(5, 5, 5);

		if (this.props.mode == "white") {
			this.scene.background = new THREE.Color(0xffffff);
			this.cub = new THREE.Mesh(geometry, material);
			this.scene.add(this.cub);

			this.cub2 = new THREE.Mesh(geometry, material2);
			this.scene.add(this.cub2);

			this.cub3 = new THREE.Mesh(geometry, material3);
			this.scene.add(this.cub3);
		}
		else {
		this.cub = new THREE.Mesh(geometry, objectMaterial);
			this.scene.add(this.cub);

			this.cub2 = new THREE.Mesh(geometry, objectMaterial2);
			this.scene.add(this.cub2);

			this.cub3 = new THREE.Mesh(geometry, objectMaterial3);
			this.scene.add(this.cub3);
		}



		//this.renderer

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.mount.appendChild(this.renderer.domElement)

		window.addEventListener('resize', this.onWindowResize, false);


		this.start();
	}

	 onWindowResize=()=> {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	animate = () => {

		this.cub.rotation.x += 0.01;
		this.cub.rotation.y += 0.01;
		this.cub.rotation.z += 0.01;
		this.cub2.rotation.x += 0.01;
		this.cub2.rotation.z += 0.01;
		this.cub2.rotation.y += 0.01;
		this.cub3.rotation.x += 0.01;
		this.cub3.rotation.z += 0.01;
		this.cub3.rotation.y += 0.01;


		this.cub.position.x = 20;
		this.cub.position.y = 0;
		this.cub.position.z = 50;


		this.cub2.position.x = 0;
		this.cub2.position.y = 0;
		this.cub2.position.z = 50;


		this.cub3.position.x = -20;
		this.cub3.position.y = 0;
		this.cub3.position.z = 50;

		this.frameId = window.requestAnimationFrame(this.animate)
		this.renderScene()
	}

	renderScene = () => {
		var time = Date.now() * 0.0005;

		this.light1.position.x = Math.sin(time * 0.7) * 20;
		this.light1.position.y = Math.cos(time * 0.5) * 50;
		this.light1.position.z = Math.cos(time * 0.3) * 50;

		this.light2.position.x = Math.cos(time * 0.3) * 90;
		this.light2.position.y = Math.sin(time * 0.5) * 20;
		this.light2.position.z = Math.sin(time * 0.7) * 90;

		this.light3.position.x = Math.sin(time * 0.7) * 30;
		this.light3.position.y = Math.cos(time * 0.3) * 40;
		this.light3.position.z = Math.sin(time * 0.5) * 20;

		this.light4.position.x = Math.sin(time * 0.3) * 100;
		this.light4.position.y = Math.cos(time * 0.7) * 40;
		this.light4.position.z = Math.sin(time * 0.5) * 20;

		this.light5.position.x = Math.cos(time * 0.7) * 10;
		this.light5.position.y = Math.sin(time * 0.5) * 20;
		this.light5.position.z = Math.cos(time * 0.7) * 100;

		this.light6.position.x = Math.sin(time * 0.5) * 40;
		this.light6.position.y = Math.sin(time * 0.5) * 40;
		this.light6.position.z = Math.sin(time * 0.5) * 30;

		this.light7.position.x = Math.cos(time * 0.7) * 60;
		this.light7.position.y = Math.cos(time * 0.3) * 90;
		this.light7.position.z = Math.sin(time * 0.2) * 30;

		this.light8.position.x = Math.cos(time * 0.3) * 40;
		this.light8.position.y = Math.cos(time * 0.7) * 10;
		this.light8.position.z = Math.cos(time * 0.1) * 80;

		this.light11.position.x = Math.sin(time * 0.7) * 20;
		this.light11.position.y = Math.cos(time * 0.8) * 80;
		this.light11.position.z = Math.cos(time * 0.3) * 50;

		this.light12.position.x = Math.cos(time * 0.8) * 90;
		this.light12.position.y = Math.sin(time * 0.5) * 20;
		this.light12.position.z = Math.sin(time * 0.2) * 50;

		this.light13.position.x = Math.sin(time * 0.7) * 20;
		this.light13.position.y = Math.cos(time * 0.2) * 40;
		this.light13.position.z = Math.sin(time * 0.5) * 20;

		this.light14.position.x = Math.sin(time * 0.6) * 100;
		this.light14.position.y = Math.cos(time * 0.7) * 30;
		this.light14.position.z = Math.sin(time * 0.5) * 200;

		this.light15.position.x = Math.cos(time * 0.7) * 60;
		this.light15.position.y = Math.sin(time * 0.5) * 50;
		this.light15.position.z = Math.cos(time * 0.1) * 100;

		this.light16.position.x = Math.sin(time * 0.3) * 40;
		this.light16.position.y = Math.sin(time * 0.9) * 20;
		this.light16.position.z = Math.sin(time * 0.7) * 20;

		this.light17.position.x = Math.cos(time * 0.7) * 40;
		this.light17.position.y = Math.cos(time * 0.4) * 90;
		this.light17.position.z = Math.sin(time * 0.5) * 30;

		this.light18.position.x = Math.cos(time * 0.4) * 40;
		this.light18.position.y = Math.cos(time * 0.7) * 20;
		this.light18.position.z = Math.cos(time * 0.5) * 80;
		this.renderer.render(this.scene, this.camera);

	}

	start = () => {
		if (!this.frameId) {
			this.frameId = requestAnimationFrame(this.animate)
		}
	}

	stop = () => {
		cancelAnimationFrame(this.frameId)
	}

	componentWillUnmount() {
		this.stop()
		this.mount.removeChild(this.renderer.domElement)
	}

	render() {
		return (
			<div ref={ref => (this.mount = ref)} />
		)
	}
}
export default BackGround;