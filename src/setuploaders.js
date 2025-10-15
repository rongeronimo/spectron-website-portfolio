// src/utils/setupLoaders.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

// Global reference to reuse the same configured loader
let globalGLTFLoader = null;

export function setupLoaders(renderer) {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/draco/');

  const ktx2Loader = new KTX2Loader()
    .setTranscoderPath('/basis/')
    .detectSupport(renderer);

  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  gltfLoader.setKTX2Loader(ktx2Loader);

  globalGLTFLoader = gltfLoader;

  console.log('✅ Global GLTF + KTX2 + Draco loaders initialized');
}

// Export a helper to use this loader directly
export function getGLTFLoader() {
  if (!globalGLTFLoader) {
    throw new Error("GLTF loader not initialized! Call setupLoaders(renderer) first.");
  }
  return globalGLTFLoader;
}
