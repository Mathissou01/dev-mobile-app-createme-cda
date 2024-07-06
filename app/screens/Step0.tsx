import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { Renderer } from "expo-three";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as React from "react";
import {
  AmbientLight,
  Fog,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Asset } from "expo-asset";
import { useCallback, useEffect, useRef } from "react";
import ModalStep from "@/components/ModalStep";

export default function Step0() {
  const requestId = useRef(null);

  const spawnModel = useCallback(
    async (scene, uri, position, rotation, scale = 0.04) => {
      const asset = Asset.fromModule(uri);
      await asset.downloadAsync();

      const loader = new GLTFLoader();
      loader.load(
        asset.uri,
        (gltf) => {
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              // Créer un nouveau matériau avec couleur grise
              const grayMaterial = new THREE.MeshStandardMaterial({
                color: 0x808080, // Couleur grise
              });
              child.material = grayMaterial;
            }
          });

          gltf.scene.position.set(...position);
          gltf.scene.rotation.set(...rotation);
          gltf.scene.scale.set(scale, scale, scale);

          scene.add(gltf.scene);
        },
        (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
        (error) =>
          console.error(`An error happened while loading ${asset.uri}`, error)
      );
    },
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ModalStep message="Voila vos morceau de bois sont collés" />
      <GLView
        style={{ flex: 1 }}
        onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
          const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
          const sceneColor = 0xe35a5a;

          const renderer = new Renderer({ gl });
          renderer.setSize(width, height);
          renderer.setClearColor(sceneColor);

          const camera = new PerspectiveCamera(80, width / height, 0.01, 900);
          camera.position.set(2, 5, 5);

          const scene = new Scene();
          scene.fog = new Fog(sceneColor, 1, 10000);

          scene.add(new AmbientLight(0x101010));

          const pointLight = new PointLight(0xffffff, 2, 1000, 1);
          pointLight.position.set(0, 200, 200);
          scene.add(pointLight);

          const spotLight = new SpotLight(0xffffff, 0.5);
          spotLight.position.set(0, 500, 100);
          spotLight.lookAt(scene.position);
          scene.add(spotLight);

          camera.lookAt(0, 0, 0);

          await Promise.all([
            spawnModel(
              scene,
              require("../../assets/feet.glb"),
              [0, 0, 0],
              [0, 0, 0]
            ),
            spawnModel(
              scene,
              require("../../assets/base_planche.glb"),
              [0, 0, 0],
              [0, 0, 0]
            ),
          ]);

          const update = () => {
            scene.children.forEach((child) => {
              if (child.isMesh) {
                child.scale.set(5000, 5000, 5000);
              }
            });
          };

          const render = () => {
            requestId.current = requestAnimationFrame(render);
            update();
            renderer.render(scene, camera);
            gl.endFrameEXP();
          };

          render();
        }}
      />
    </GestureHandlerRootView>
  );
}
