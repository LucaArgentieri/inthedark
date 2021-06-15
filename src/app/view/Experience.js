import React, { useEffect, useRef } from "react";
import * as dat from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Hotspot from "../components/Hotspot";
import { useParams } from "react-router-dom";

function App({ location }) {
  const webgl = useRef(null);
  const HContainer = useRef(null);
  const stonehengeHotspots = useRef([]);
  let { id } = useParams();
  // const [hotspots, setHotspots] = useState([]);
  // const history = useHistory();

  /* useEffect(() => {
    if (location.hash !== "stonehenge") {
      history.push("/experience/#stonehenge");
    }
  }, [location, history]); */

  const hash = location.hash.substring(1);

  useEffect(() => {
    // Canvas
    const canvas = webgl.current;
    const gui = new dat.GUI({ closed: true });

    //scene
    const scene = new THREE.Scene();

    /*  Models */
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(`../../../${id}/scene.gltf`, (gltf) => {
      const children = [...gltf.scene.children]; // questo array è completamente scollegato da threejs
      children.forEach((el) => scene.add(el));
    });

    /* Lights */
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    // directionalLight.castShadow = true;
    directionalLight.position.x = 0.5;
    directionalLight.position.y = 0.2;
    directionalLight.position.z = 0.9;
    // const fireLight = new THREE.PointLight("#ff743d", 1.8, 10);
    // fireLight.position.set(0, 1.6, 0.3);
    gui.add(directionalLight, "intensity").min(0).max(2).step(0.001);
    // gui.add(fireLight.position, "x").min(0).max(6).step(0.001);
    // gui.add(fireLight.position, "y").min(0).max(6).step(0.001);
    // gui.add(fireLight.position, "z").min(0).max(6).step(0.001);
    // const pointLightHelper = new THREE.PointLightHelper(fireLight);
    scene.add(directionalLight);

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

    camera.position.set(-8, 4.5, 4.5);
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    const tempV = new THREE.Vector3();

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // const clock = new THREE.Clock();
    // let previousTime = 0;

    // Hotspot
    const circleGeometry = new THREE.CircleGeometry(0.001, 18);
    const circleMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      visible: false,
    });

    // const createHotspot = (x, y, z) => {
    //   const newHotspot = new THREE.Mesh(circleGeometry, circleMaterial);
    //   scene.add(newHotspot);

    //   newHotspot.position.x = x;
    //   newHotspot.position.y = y;
    //   newHotspot.position.z = z;

    //   setHotspots((oldArray) => [...oldArray, newHotspot]);
    //   console.log(hotspots);
    // };

    const circleMesh1 = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh1.position.set(1.2, 2.5, 3.1);
    const circleMesh2 = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh2.position.set(-5.3, 1.65, 1.14);
    const circleMesh3 = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh3.position.set(0.81, 1.855, -5.06);

    stonehengeHotspots.current = [circleMesh1, circleMesh2, circleMesh3];

    // createHotspot(1.2, 2.5, 3.1);
    // createHotspot(0.77, 2.5, 2.8);
    // createHotspot(2.2, 2.5, 1.1);

    gui.add(circleMesh3.position, "x").min(-10).max(12).step(0.001);
    gui.add(circleMesh3.position, "y").min(-10).max(12).step(0.001);
    gui.add(circleMesh3.position, "z").min(-10).max(12).step(0.001);

    /*
     * RAYCASTER
     */
    // const raycaster = new THREE.Raycaster();

    // Cursor
    const mouse = new THREE.Vector2();

    window.addEventListener("mousemove", (evt) => {
      mouse.x = evt.clientX / sizes.width - 0.5;
      mouse.y = -(evt.clientY / sizes.height - 0.5);
    });

    stonehengeHotspots.current.forEach((h) => h.updateWorldMatrix(true, false));

    /* RAF function */
    const tick = () => {
      // const elapsedTime = clock.getElapsedTime();
      // const deltaTime = elapsedTime - previousTime;
      // previousTime = elapsedTime;

      stonehengeHotspots.current.forEach((h, i) => {
        h.getWorldPosition(tempV);
        tempV.project(camera);
        // convert the normalized position to CSS coordinates
        const x = (tempV.x * 0.5 + 0.5) * canvas.clientWidth;
        const y = (tempV.y * -0.5 + 0.5) * canvas.clientHeight;

        const hotspot = document.querySelector(`#hotspot-${i}`);
        hotspot.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
      });

      controls.update();
      // Render
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();
  }, [hash]);

  return (
    <>
      <canvas id="webgl" ref={webgl}></canvas>
      <div id="hotspots" ref={HContainer}>
        <Hotspot id="0" type="stonehenge" />
        <Hotspot id="1" type="stonehenge" />
        <Hotspot id="2" type="stonehenge" />
      </div>
    </>
  );
}

export default App;
