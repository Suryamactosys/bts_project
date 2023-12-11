// import explainproject from "../assets/OurService/explainproject.png";
// import { useState, useCallback } from "react";
// import { Cropper, CircleStencil } from "react-easy-crop";

// const Demo = () => {
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);

//   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
//     console.log(croppedArea, croppedAreaPixels);
//   }, []);

//   return (
//     <Cropper
//       image={explainproject}
//       crop={crop}
//       zoom={zoom}
//       aspect={4 / 3}
//       onCropChange={setCrop}
//       onCropComplete={onCropComplete}
//       onZoomChange={setZoom}
//       stencilComponent={CircleStencil}
//     />
//   );
// };

// export default Demo;

// import { useState } from "react";
// import FileInput from "./FileInput";
// import ImageCropper from "./ImageCropper";

// function App() {
//   const [image, setImage] = useState("");
//   const [currentPage, setCurrentPage] = useState("choose-img");
//   const [imgAfterCrop, setImgAfterCrop] = useState("");

//   // Invoked when new image file is selected
//   const onImageSelected = (selectedImg) => {
//     setImage(selectedImg);
//     setCurrentPage("crop-img");
//   };

//   // Generating Cropped Image When Done Button Clicked
//   const onCropDone = (imgCroppedArea) => {
//     const canvasEle = document.createElement("canvas");
//     canvasEle.width = imgCroppedArea.width;
//     canvasEle.height = imgCroppedArea.height;

//     const context = canvasEle.getContext("2d");

//     let imageObj1 = new Image();
//     imageObj1.src = image;
//     imageObj1.onload = function () {
//       context.drawImage(
//         imageObj1,
//         imgCroppedArea.x,
//         imgCroppedArea.y,
//         imgCroppedArea.width,
//         imgCroppedArea.height,
//         0,
//         0,
//         imgCroppedArea.width,
//         imgCroppedArea.height
//       );

//       const dataURL = canvasEle.toDataURL("image/jpeg");

//       setImgAfterCrop(dataURL);
//       setCurrentPage("img-cropped");
//     };
//   };

//   // Handle Cancel Button Click
//   const onCropCancel = () => {
//     setCurrentPage("choose-img");
//     setImage("");
//   };

//   return (
//     <div className="container">
//       {currentPage === "choose-img" ? (
//         <FileInput setImage={setImage} onImageSelected={onImageSelected} />
//       ) : currentPage === "crop-img" ? (
//         <ImageCropper
//           image={image}
//           onCropDone={onCropDone}
//           onCropCancel={onCropCancel}
//         />
//       ) : (
//         <div>
//           <div>
//             <img src={imgAfterCrop} className="cropped-img" />
//           </div>

//           <button
//             onClick={() => {
//               setCurrentPage("crop-img");
//             }}
//             className="btn">
//             Crop
//           </button>

//           <button
//             onClick={() => {
//               setCurrentPage("choose-img");
//               setImage("");
//             }}
//             className="btn">
//             New Image
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useRef } from "react";
import { CircleStencil, Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
// import "./Surya.css";

// const defaultSrc =
//   "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export const Demo = () => {
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState();
  const cropperRef = useRef();

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = async () => {
    try {
      if (cropperRef.current) {
        const data = await cropperRef.current.getCroppedImageData();
        setCropData(data);
      }
    } catch (error) {
      console.error("Error getting crop data:", error);
    }
  };

  // const getCropData = () => {
  //   if (typeof cropperRef.current?.cropper !== "undefined") {
  //     setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
  //   }
  // };

  return (
    <div>
      <div style={{ width: "50%", height: "400px" }}>
        <input type="file" onChange={onChange} />
        <button>Use default img</button>
        <br />
        <br />
        <Cropper
          style={{ height: 800 }}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          ref={cropperRef}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          stencilComponent={CircleStencil}
          checkOrientation={false}
        />
      </div>
      <div>
        <div
          className="box"
          style={{ width: "50%", float: "right", height: "300px" }}>
          <h1>
            <span>Crop</span>
            <button style={{ float: "right" }} onClick={getCropData}>
              Crop Image
            </button>
          </h1>
          <img style={{ width: "100%" }} src={cropData} alt="cropped" />
        </div>
      </div>
      <br style={{ clear: "both" }} />
    </div>
  );
};

export default Demo;
