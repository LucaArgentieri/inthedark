import React, { useEffect, useRef } from 'react'
import Logo from '../assets/svg/logo.svg'
// import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Hotspot from '../components/Hotspot'
import { gsap, Power4 } from 'gsap'
import { useParams } from 'react-router-dom'
/* POSTPROCESSING  */
import { HorizontalTiltShiftShader } from 'three/examples/jsm/shaders/HorizontalTiltShiftShader'
import { VerticalTiltShiftShader } from 'three/examples/jsm/shaders/VerticalTiltShiftShader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js'
import {
  hover,
  click,
  stonSound,
  stopGizaSound,
  stopSound
} from '../animations/sounds'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 2em;
`
const stopAudio = () => {
  stopSound()
  stopGizaSound()
  click()
}

function App({ location }) {
  const webgl = useRef(null)
  const HContainer = useRef(null)
  const stonehengeHotspots = useRef([])
  let { id, isPyramid = id === 'gyza-pyramid' } = useParams()

  const hash = location.hash.substring(1)

  useEffect(() => {
    // Canvas
    const canvas = webgl.current
    // const gui = new dat.GUI({ closed: true })

    //scene
    const scene = new THREE.Scene()

    /*  Models */
    const gltfLoader = new GLTFLoader()

    gltfLoader.load(
      `../../../${id}/scene.${isPyramid ? 'glb' : 'gltf'}`,
      (gltf) => {
        const children = [...gltf.scene.children]
        children.forEach((el) => {
          if (isPyramid) el.scale.set(3.2, 3.2, 3.2)
          scene.add(el)
        })
      }
    )

    const ambientLight = new THREE.AmbientLight(0xffffff)

    const initScene = (ambientLightIntensity) => {
      /* Lights */
      ambientLight.intensity = ambientLightIntensity
      scene.add(ambientLight)
    }

    if (isPyramid) {
      initScene(2.8)
    } else {
      initScene(0.97)
    }

    scene.scale.set(10, 10, 10)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1)
    directionalLight.position.x = 0.5
    directionalLight.position.y = 0.2
    directionalLight.position.z = 0.9
    // gui.add(ambientLight, 'intensity').min(0).max(2).step(0.001)
    scene.add(directionalLight)

    // sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
      camera.aspect = sizes.width / sizes.height
      //when changing properties like aspect, we need to call camera.updateProjectionMatrix()
      camera.updateProjectionMatrix()
      //update renderer
      renderer.setSize(sizes.width, sizes.height)

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )

    // camera.position.set(-8, 4.5, 4.5);
    camera.position.set(10, 8, 10)
    gsap.to(camera.position, {
      x: -8,
      y: 4.5,
      z: 4.5,
      duration: 4,
      delay: 0.2,
      ease: Power4.easeInOut
    })
    // gui.add(camera.position, 'x').min(0).max(10).step(0.001).name('X Cam')
    // gui.add(camera.position, 'y').min(0).max(10).step(0.001).name('Y Cam')
    // gui.add(camera.position, 'z').min(0).max(10).step(0.001).name('Z Cam')
    scene.add(camera)
    const renderer = new THREE.WebGLRenderer({
      canvas
    })

    const tempV = new THREE.Vector3()

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.maxDistance = 12
    controls.maxPolarAngle = Math.PI / 2.2

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // const clock = new THREE.Clock();
    // let previousTime = 0;

    // Hotspot
    const circleGeometry = new THREE.CircleGeometry(0.001, 18)
    const circleMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      visible: false
    })

    const cubeTextureLoader = new THREE.CubeTextureLoader()

    const environmentMap = cubeTextureLoader.load([
      '../../../environmentMap/px.png',
      '../../../environmentMap/nx.png',
      '../../../environmentMap/py.png',
      '../../../environmentMap/ny.png',
      '../../../environmentMap/pz.png',
      '../../../environmentMap/nz.png'
    ])

    // gui.add(environmentMap.offset, 'x').min(-10).max(12).step(0.001)
    // gui.add(environmentMap.offset, 'y').min(-10).max(12).step(0.001)

    scene.background = environmentMap

    const circleMesh1 = new THREE.Mesh(circleGeometry, circleMaterial)
    const circleMesh2 = new THREE.Mesh(circleGeometry, circleMaterial)
    const circleMesh3 = new THREE.Mesh(circleGeometry, circleMaterial)

    if (!isPyramid) {
      circleMesh1.position.set(17.85, 19.5, -8.69)
      circleMesh2.position.set(-14.3, 19.89, 25)
      circleMesh3.position.set(-22.5, 19.98, -24)
    }

    stonehengeHotspots.current = [circleMesh1, circleMesh2, circleMesh3]

    // gui.add(circleMesh1.position, 'x').min(-24).max(25).step(0.001)
    // gui.add(circleMesh1.position, 'y').min(-24).max(25).step(0.001)
    // gui.add(circleMesh1.position, 'z').min(-24).max(25).step(0.001)

    // scene.scale(1.4);
    /*
     * POSTPROCESSING
     */
    let composer

    const initPostProcessing = () => {
      var renderPass = new RenderPass(scene, camera)
      // TODO: Look at using @mattdesl's optimised FXAA shader    // https://github.com/mattdesl/three-shader-fxaa    var fxaaPass = new ShaderPass(FXAAShader);
      var hblurPass = new ShaderPass(HorizontalTiltShiftShader)
      var vblurPass = new ShaderPass(VerticalTiltShiftShader)
      var bluriness = 10
      hblurPass.uniforms.r.value = vblurPass.uniforms.r.value = 0.6
      var copyPass = new ShaderPass(CopyShader)
      copyPass.renderToScreen = true
      composer = new EffectComposer(renderer)
      composer.addPass(renderPass)
      composer.addPass(hblurPass)
      composer.addPass(vblurPass)
      composer.addPass(copyPass)
      var updatePostProcessingSize = function () {
        var width = canvas.clientWidth
        var height = canvas.clientHeight
        hblurPass.uniforms.h.value =
          bluriness / (width * Math.min(window.devicePixelRatio, 2))
        vblurPass.uniforms.v.value =
          bluriness / (height * Math.min(window.devicePixelRatio, 2))
      }
      updatePostProcessingSize()
      window.addEventListener('resize', updatePostProcessingSize, false)
    }

    initPostProcessing()

    // Cursor
    const mouse = new THREE.Vector2()

    window.addEventListener('mousemove', (evt) => {
      mouse.x = evt.clientX / sizes.width - 0.5
      mouse.y = -(evt.clientY / sizes.height - 0.5)
    })

    stonehengeHotspots.current.forEach((h) => h.updateWorldMatrix(true, false))

    /* RAF function */
    const tick = () => {
      stonehengeHotspots.current.forEach((h, i) => {
        h.getWorldPosition(tempV)
        tempV.project(camera)
        // convert the normalized position to CSS coordinates
        const x = (tempV.x * 0.5 + 0.5) * canvas.clientWidth
        const y = (tempV.y * -0.5 + 0.5) * canvas.clientHeight

        const hotspot = document.querySelector(`#hotspot-${i}`)
        hotspot.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`
      })

      controls.update()
      // Render
      composer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [hash])

  return (
    <>
      <canvas id="webgl" ref={webgl}></canvas>
      <div id="hotspots" ref={HContainer}>
        <Hotspot id="0" type="stonehenge" />
        <Hotspot id="1" type="stonehenge" />
        <Hotspot id="2" type="stonehenge" />
        <Hotspot id="3" type="stonehenge" />
        {/* <Hotspot id="0" type="gyza-pyramid" />
        <Hotspot id="1" type="gyza-pyramid" />
        <Hotspot id="2" type="gyza-pyramid" /> */}

        <Title>
          <Link
            to="/experience"
            onMouseEnter={() => hover()}
            onClick={() => stopAudio()}
          >
            <img className="experience-logo" src={Logo} alt="" />
          </Link>
        </Title>
      </div>
    </>
  )
}

export default App
