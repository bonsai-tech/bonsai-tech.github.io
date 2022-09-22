import React, { useEffect, useRef } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { CreatePlane } from "@babylonjs/core/Meshes/Builders/planeBuilder";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import { Vector3, Vector4, Color3 } from "@babylonjs/core/Maths/math";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
// for side effects
import "@babylonjs/core/Meshes/instancedMesh";
import gridTexture from "../../assets/images/grid-texture.jpg";

import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { PointLight } from "@babylonjs/core/Lights/pointLight";

const config = {
  intensity: 1.5,
  speed: 1.5,
  blockSeparation: 0.5,
  ortho: 6,
  offsetX: -4,
  offsetZ: -6,
  viewportRatio: 1080 / 900,
  pattern: [
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1],
  ],
};

const id = name => `${name}-${Math.random().toString(36).slice(2)}`;

class SceneManager {
  engine = null;
  scene = null;
  camera = null;
  viewportRatio = config.viewportRatio;
  nodes = [];
  frameCount = 0;

  constructor(canvas) {
    this.canvas = canvas;
    this.engine = new Engine(canvas, true, {
      // preserveDrawingBuffer: true,
      stencil: true,
      // disableWebGL2Support: false,
    });
    this.createScene();
    this.populateScene();
    this.engine.runRenderLoop(this.onFrame);
  }

  createScene() {
    this.scene = new Scene(this.engine);
    this.camera = new ArcRotateCamera(
      "cam",
      0,
      0,
      0,
      Vector3.Zero(),
      this.scene,
      true,
    );
    this.camera.minZ = 0.1;
    // this.camera.attachControl(this.canvas, true);
    this.camera.setPosition(new Vector3(5, 5, -5));
    // BABYLON.Camera.ORTHOGRAPHIC_CAMERA === 1
    this.camera.mode = 1;
    this.camera.orthoTop = config.ortho;
    this.camera.orthoBottom = -config.ortho;
    this.camera.orthoLeft = -config.ortho * this.viewportRatio;
    this.camera.orthoRight = config.ortho * this.viewportRatio;
  }

  createBlock(texture) {
    // texture
    const faceUV = [
      new Vector4(0, 0, 1, 1), // back
      new Vector4(0, 0, 0.9, 0.9), // front
      new Vector4(0, 0, 1, 0.9), // right
      new Vector4(0, 0, 1, 1), // left
      new Vector4(0, 0, 1, 1), // top
      new Vector4(0, 0, 1, 0), // bottom
    ];
    const textureOptions = {
      faceUV: faceUV,
      wrap: true,
    };

    // material
    const mat = new StandardMaterial(id("mat"));
    mat.emissiveColor = Color3.Red();
    mat.diffuseColor = Color3.White();
    mat.emissiveColor = Color3.White();
    mat.diffuseTexture = texture;

    // cube
    const cube = CreateBox(
      id("box"),
      { size: 1, height: 2, ...textureOptions },
      this.scene,
    );
    cube.material = mat;

    return cube;
  }

  populateScene() {
    const floor = CreatePlane("foor", { size: 150 }, this.scene);
    floor.material = new StandardMaterial(id("mat"));
    floor.material.emissiveColor = Color3.White();
    floor.rotation.x = Math.PI / 2;
    floor.position.y = 0;

    const root = new TransformNode("root");
    root.position.x = config.offsetX;
    root.position.z = config.offsetZ;

    const texture = new Texture(gridTexture);

    const node = this.createBlock(texture);
    node.parent = root;
    node.setEnabled(false);

    window.floor = floor;
    window.root = root;

    const rows = 9;
    const cols = 9;
    for (let i = 0; i < cols; i++) {
      const col = [];
      this.nodes[i] = col;
      for (let j = 0; j < rows; j++) {
        if (config.pattern[i][j]) {
          const clone = node.createInstance();
          // const clone = node.clone(id("clone"));
          clone.position.x = (1 + config.blockSeparation) * i;
          clone.position.z = (1 + config.blockSeparation) * j;
          clone.parent = root;
          clone.setEnabled(true);
          col[j] = clone;
        } else {
          col[j] = false;
        }
      }
    }
  }

  onFrame = () => {
    const f = this.frameCount;
    for (let i = 0; i < this.nodes.length; i++) {
      const col = this.nodes[i];
      for (let j = 0; j < col.length; j++) {
        const box = col[j];
        if (!box) continue;
        box.position.y =
          config.intensity *
          (Math.sin(
            f * config.speed * 0.01 -
              j * 0.2 +
              (f * config.speed * 0.006 + i * 0.3),
          ) /
            10 +
            Math.sin(f * config.speed * 0.01 - j * i * 0.2) / 10 +
            Math.cos(f * config.speed * 0.02 - j * 0.2) / 8 -
            0.25);
      }
    }
    this.frameCount = f + 1;
    this.scene.render();
  };

  onResize() {
    this.engine.resize();
  }

  dispose() {
    this.camera.dispose();
    this.scene.dispose();
    this.engine.dispose();
  }
}

const AnimatedGrid = () => {
  const canvasRef = useRef(null);

  // initialize babylon scene
  useEffect(() => {
    if (!canvasRef.current) return;
    const sceneManager = new SceneManager(canvasRef.current);
    canvasRef.current.classList.add("visible");
    // resize window
    const onResize = () => sceneManager.onResize();
    window.addEventListener("resize", onResize);
    // cleanup
    return () => {
      sceneManager.dispose();
      window.removeEventListener("resize", onResize);
    };
  }, [canvasRef]);

  return (
    <div className="animated-grid">
      <canvas className="viewport" ref={canvasRef} />
    </div>
  );
};

export default AnimatedGrid;
