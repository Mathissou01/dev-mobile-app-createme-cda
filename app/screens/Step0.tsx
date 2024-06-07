import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { Renderer, TextureLoader } from "expo-three";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as React from "react";
import {
  AmbientLight,
  BoxGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Asset } from "expo-asset";

// ... (imports and other code)

export default function App() {
  let timeout;

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const spawnModel = async (
    scene,
    uri,
    positionX,
    postionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ
  ) => {
    const asset = Asset.fromModule(uri);
    await asset.downloadAsync();

    let model;

    const loader = new GLTFLoader();
    loader.load(
      asset.uri,
      function (gltf) {
        model = gltf.scene;
        model.position.set(positionX, postionY, positionZ);
        model.rotation.set(rotationX, rotationY, rotationZ);
        model.scale.set(0.04, 0.04, 0.04);
        scene.add(model);
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error("An error happened", error);
      }
    );

    return model;
  };
  console.log("test");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GLView
        style={{ flex: 1 }}
        onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
          const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
          const sceneColor = 0x6ad6f0;

          // Create a WebGLRenderer without a DOM element
          const renderer = new Renderer({ gl });
          renderer.setSize(width, height);
          renderer.setClearColor(sceneColor);

          const camera = new PerspectiveCamera(80, width / height, 0.01, 900);
          camera.position.set(2, 5, 5);

          const scene = new Scene();
          scene.fog = new Fog(sceneColor, 1, 10000);
          scene.add(new GridHelper(10, 10));

          const ambientLight = new AmbientLight(0x101010);
          scene.add(ambientLight);

          const pointLight = new PointLight(0xffffff, 2, 1000, 1);
          pointLight.position.set(0, 200, 200);
          scene.add(pointLight);

          const spotLight = new SpotLight(0xffffff, 0.5);
          spotLight.position.set(0, 500, 100);
          spotLight.lookAt(scene.position);
          scene.add(spotLight);

          // Load and add a texture
          const cube = new IconMesh();

          camera.lookAt(0, 0, 0);

          // Spawn multiple models
          const numModels = 1;
          const models = [];

          for (let i = 0; i < numModels; i++) {
            const spawnedModel = await spawnModel(
              scene,
              require("../../assets/feet.glb"),
              0,
              0,
              0,
              0,
              0,
              0
            );
            models.push(spawnedModel);
          }

          for (let i = 0; i < numModels; i++) {
            const spawnedModel = await spawnModel(
              scene,
              require("../../assets/base_planche.glb"),
              0,
              0,
              0,
              0,
              0,
              0
            );
            models.push(spawnedModel);
          }

          function update() {
            models.forEach((model) => {
              if (model) {
                model.scale.set(5000, 5000, 5000);
              }
            });
          }

          // Setup an animation loop
          const render = () => {
            timeout = requestAnimationFrame(render);
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

class IconMesh extends Mesh {
  constructor() {
    super(
      new BoxGeometry(1.0, 1.0, 1.0),
      new MeshStandardMaterial({
        map: new TextureLoader().load(require("../../assets/icon.png")),
        // color: 0xff0000
      })
    );
  }
}
