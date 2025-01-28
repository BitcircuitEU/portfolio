import { Object3DNode } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    pointMaterial: Object3DNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
    color: any;
    fog: any;
    ambientLight: any;
  }
} 