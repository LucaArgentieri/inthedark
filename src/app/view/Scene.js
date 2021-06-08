import React, { useEffect, useRef } from "react";
import * as dat from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function App() {
  const webgl = useRef(null);
  useEffect(() => {
    // Canvas
    const canvas = webgl.current;
    const gui = new dat.GUI({ closed: true });

    //scene
    const scene = new THREE.Scene();

    /* Models */
    const gltfLoader = new GLTFLoader();

    gltfLoader.load("../../../stonehenge/scene.gltf", (gltf) => {
      console.log(gltf);
      const children = [...gltf.scene.children]; // questo array è completamente scollegato da threejs
      children.forEach((el) => scene.add(el));
      console.log(gltf);

      // gltf.scene.scale.set(0.8, 0.8, 0.8);
      scene.add(gltf.scene);
    });

    /* Lights */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    directionalLight.castShadow = true;
    directionalLight.position.x = 0.5;
    directionalLight.position.y = 0.2;
    directionalLight.position.z = 0.9;
    const fireLight = new THREE.PointLight("#ff743d", 1.8, 10);
    fireLight.position.set(0, 1.6, 0.3);
    gui.add(directionalLight, "intensity").min(0).max(2).step(0.001);
    gui.add(fireLight.position, "x").min(0).max(6).step(0.001);
    gui.add(fireLight.position, "y").min(0).max(6).step(0.001);
    gui.add(fireLight.position, "z").min(0).max(6).step(0.001);
    // const pointLightHelper = new THREE.PointLightHelper(fireLight);
    scene.add(directionalLight, fireLight);

    // sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      //when changing properties like aspect, we need to call camera.updateProjectionMatrix()
      camera.updateProjectionMatrix();
      //update renderer
      renderer.setSize(sizes.width, sizes.height);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );

    camera.position.set(-3, 2.5, 1.5);
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // const clock = new THREE.Clock();
    // let previousTime = 0;

    const tick = () => {
      // const elapsedTime = clock.getElapsedTime();
      // const deltaTime = elapsedTime - previousTime;
      // previousTime = elapsedTime;

      // Update mixer

      controls.update();
      // Render
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();
    // === THREE.JS EXAMPLE CODE END ===
  }, []);
  return <canvas id="webgl" ref={webgl}></canvas>;
}

export default App;
