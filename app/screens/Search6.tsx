import React, { useEffect, useRef } from "react";
import { GLView } from "expo-gl";
import { Renderer, TextureLoader } from "expo-three";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  AmbientLight,
  Box3,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  Vector3,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Asset } from "expo-asset";

export default function App() {
  const timeoutRef = useRef();
  const modelsRef = useRef([]); // Store models in a ref to persist across re-renders

  useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const animateModels = (models) => {
    const time = performance.now() * 0.005;

    models.forEach((model, index) => {
      if (model) {
        const offsetY = Math.sin(time + index) * 0.03; // Adjust the amplitude
        model.position.y = offsetY;
      }
    });
  };

  const spawnModel = (
    scene,
    uri,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    scaleX,
    scaleY,
    scaleZ
  ) => {
    return new Promise((resolve, reject) => {
      const asset = Asset.fromModule(uri);

      asset
        .downloadAsync()
        .then(() => {
          const loader = new GLTFLoader();
          loader.load(
            asset.uri,
            function (gltf) {
              const model = gltf.scene;
              model.position.set(positionX, positionY, positionZ);
              model.rotation.set(rotationX, rotationY, rotationZ);
              model.scale.set(scaleX, scaleY, scaleZ);
              scene.add(model);
              resolve(model);
            },
            (xhr) => {
              console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
            },
            (error) => {
              console.error("An error happened", error);
              reject(error);
            }
          );
        })
        .catch((error) => {
          console.error("Error downloading asset", error);
          reject(error);
        });
    });
  };

  const spawnModels = async (scene) => {
    const models = [];

    const spawnModelHelper = async (
      uri,
      posX,
      posY,
      posZ,
      rotX,
      rotY,
      rotZ
    ) => {
      try {
        const spawnedModel = await spawnModel(
          scene,
          uri,
          posX,
          posY,
          posZ,
          rotX,
          rotY,
          rotZ,
          10,
          10,
          10
        );
        models.push(spawnedModel);
      } catch (error) {
        console.error("Error spawning model", error);
      }
    };

    await spawnModelHelper(
      require("../../assets/Base-planche.glb"),
      0,
      0,
      0,
      0,
      0,
      0
    );
    await spawnModelHelper(
      require("../../assets/Base-planche.glb"),
      0.3,
      0,
      3.2,
      0,
      1.5708,
      0
    );
    await spawnModelHelper(
        require("../../assets/Base-planche.glb"),
      3.2,
      0,
      -0.3,
      0,
      -1.5708,
      0
    );
    await spawnModelHelper(
        require("../../assets/Base-planche.glb"),
      3.5,
      0,
      2.9,
      0,
      3.14159,
      0
    );

    modelsRef.current = models; // Save models in the ref for later use
    return models;
  };

  const initializeScene = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const sceneColor = 0xffddff;

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(sceneColor);

    const scene = new Scene();

    const ambientLight = new AmbientLight(0x101010);
    scene.add(ambientLight);

    const pointLight = new PointLight(0xffffff, 2, 1000, 1);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    const spotLight = new SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 500, 100);
    spotLight.lookAt(scene.position);
    scene.add(spotLight);

    const camera = new PerspectiveCamera(80, width / height, 0.1, 1000); // Adjusted FOV
    // Calculate bounding box
    const boundingBox = new Box3().setFromObject(scene);

    // Calculate center of bounding box
    const center = new Vector3();
    boundingBox.getCenter(center);

    // Set camera position to center and adjust it to be further from the scene
    camera.position.set(center.x + 4, center.y + 4, center.z + 7);
    camera.lookAt(center);

    const models = await spawnModels(scene);

    const render = () => {
      animateModels(models);

      timeoutRef.current = requestAnimationFrame(render);
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    // Set up the periodic animation
    const intervalId = setInterval(() => {
      animateModels(modelsRef.current);
    }, 5000);

    // Start the initial animation loop
    render();

    return () => {
      // Cleanup: Clear the animation loop and interval when the component unmounts
      clearInterval(intervalId);
      clearTimeout(timeoutRef.current);
    };
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GLView style={{ flex: 1 }} onContextCreate={initializeScene} />
    </GestureHandlerRootView>
  );
}
