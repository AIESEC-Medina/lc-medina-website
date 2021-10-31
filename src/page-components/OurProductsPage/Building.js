import React from 'react';
import { useGLTF } from 'drei';

export default function Building() {
  const gltf = useGLTF('/gv_3d.glb', '/draco-gltf');

  return <primitive object={gltf.scene} dispose={null} />;
}
useGLTF.preload('/3d/gv_3d.glb');
