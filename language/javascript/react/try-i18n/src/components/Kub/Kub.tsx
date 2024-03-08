import React, { useLayoutEffect, useRef } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';

const Kub: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current as HTMLCanvasElement,
            antialias: true,
            alpha: true,
        });

        const camera = new THREE.PerspectiveCamera(
            75, // fov - field of view
            window.innerWidth / window.innerHeight, // aspect
            0.1, // near
            100 // far
        )

        camera.position.set(0, 0, 4)

        const scene = new THREE.Scene()

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
        directionalLight.castShadow = true;
        directionalLight.position.set(-1, 2, 4)
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
        scene.add(ambientLight)

        const cubs: any = []

        for (let i = 0; i < 20; i++) {
            const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            
            // cube.position.x = (i * 0.9999999999 ) - 5;
            cubs.push(cube)
            scene.add(cube);
        }

        let cubsPos: number = 0;

        function rotateBoxs () {
            if (cubsPos < 10) {
                cubs.forEach((cube: any) => {
                    cubsPos = cubsPos + 0.01
                    cube.position.y -= 0.01 * cubsPos
                })
            } else {
                cubs.forEach((cube: any) => {
                    cube.position.y = 0
                })
                cubsPos = 0
            }

        }


        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera)
        })

        renderer.setAnimationLoop(() => {
            rotateBoxs()

            renderer.render(scene, camera)
        })

        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth - 17, window.innerHeight)

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth - 17, window.innerHeight)
        }

        window.addEventListener("resize", onResize, false)

        // new OrbitControls(camera, renderer.domElement)

        return () => {
            window.removeEventListener("resize", onResize)
        }

    }, [])

    return (
        <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef} />
    )
}

export default Kub