/*
| Developed by Hasni
| Filename: MyPage.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { NextPage } from "next";
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Clone } from "@react-three/drei";
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MyPage: NextPage = () => {
  // const model = useGLTF("Table01.glb");
  // Render
  //--------------------------------------------------------------------------
  return (
    <div
      style={{
        marginTop: "5rem",
        maxHeight: "90vh",
      }}
    >
      <h1>My Page</h1>
      {/* <Canvas>
        <Clone object={model.scene} />
      </Canvas> */}
    </div>
  );
};
export default MyPage;
