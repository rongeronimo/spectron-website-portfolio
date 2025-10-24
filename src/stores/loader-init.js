// src/loader-init.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

// Only run once
if (!window.__THREE_GLOBAL_LOADERS__) {
  const renderer = new THREE.WebGLRenderer({ antialias: false });

  const draco = new DRACOLoader().setDecoderPath('/draco/');
  const ktx2 = new KTX2Loader()
    .setTranscoderPath('/basis/')
    .detectSupport(renderer);

  // Patch GLTFLoader prototype before anything uses it
  const originalParse = GLTFLoader.prototype.parse;
  GLTFLoader.prototype.parse = function (...args) {
    if (!this.dracoLoader) this.setDRACOLoader(draco);
    if (!this.ktx2Loader) this.setKTX2Loader(ktx2);
    return originalParse.apply(this, args);
  };

  console.log('✅ Global THREE GLTFLoader patched with Draco + KTX2 support');
  window.__THREE_GLOBAL_LOADERS__ = true;
}