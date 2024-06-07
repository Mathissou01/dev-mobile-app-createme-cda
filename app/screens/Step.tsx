import React, { useEffect, useRef } from "react";
import { GLView } from "expo-gl";
import { ExpoWebGLRenderingContext } from "expo-gl";
import { Renderer } from "expo-three";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  AmbientLight,
  Box3,
  Object3D,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  Vector3,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Asset } from "expo-asset";
import ModalStep from "@/components/ModalStep";

// Define types for Model and Scene
type ModelType = Object3D & {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
};

type SceneType = Scene;

export default function Step() {
  const timeoutRef = useRef<number>();
  const modelsRef = useRef<ModelType[]>([]); // Store models in a ref to persist across re-renders

  useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Function to animate models by updating their Y position
  const animateModels = (models: ModelType[]) => {
    const time = performance.now() * 0.005;

    models.forEach((model, index) => {
      if (model) {
        const offsetY = Math.sin(time + index) * 0.03; // Adjust the amplitude
        model.position.y = offsetY;
      }
    });
  };

  // Function to load and spawn a model into the scene
  const spawnModel = (
    scene: SceneType,
    uri: string,
    positionX: number,
    positionY: number,
    positionZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    scaleX: number,
    scaleY: number,
    scaleZ: number
  ): Promise<ModelType> => {
    return new Promise((resolve, reject) => {
      const asset = Asset.fromModule(uri);

      asset
        .downloadAsync()
        .then(() => {
          const loader = new GLTFLoader();
          loader.load(
            asset.uri,
            (gltf) => {
              const model = gltf.scene as ModelType;
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

  // Function to spawn multiple models in the scene
  const spawnModels = async (scene: SceneType) => {
    const models: ModelType[] = [];

    const spawnModelHelper = async (
      uri: string,
      posX: number,
      posY: number,
      posZ: number,
      rotX: number,
      rotY: number,
      rotZ: number
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

  // Function to initialize the scene and start rendering
  const initializeScene = async (gl: ExpoWebGLRenderingContext) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const sceneColor = 0xe35a5a;

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

    // Calculate bounding box and center of the scene
    const boundingBox = new Box3().setFromObject(scene);
    const center = new Vector3();
    boundingBox.getCenter(center);

    // Set camera position to center and adjust it to be further from the scene
    camera.position.set(center.x + 5, center.y + 4, center.z + 5);
    camera.lookAt(center);

    // Spawn initial models
    const models = await spawnModels(scene);

    // Function to render the scene
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

    // Cleanup function to clear animation loop and interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutRef.current);
    };
  };

  // Render the GLView and ModalStep components
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ModalStep message="Commencez par récupérer les quatre planches de base fournies dans votre commande. Disposez-les de manière à ce qu'elles soient prêtes à être collées ensemble." />
      <GLView style={{ flex: 1 }} onContextCreate={initializeScene} />
    </GestureHandlerRootView>
  );
}
