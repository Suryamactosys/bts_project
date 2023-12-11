// import { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import { Button } from "@mui/material";
// import "./Surya.css";

// const ProfilePhotoEditor = () => {
//   const [image, setImage] = useState(null);
//   const [user, setUser] = useState();
//   const [editingMode, setEditingMode] = useState(false);
//   const cropperRef = useRef();

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCrop = () => {
//     if (cropperRef.current) {
//       const croppedImage = cropperRef.current.getCroppedCanvas().toDataURL();
//       // You can save or update the cropped image as needed
//       console.log(croppedImage);
//       setEditingMode(false); // Exit editing mode after cropping
//     }
//   };

//   const handleEdit = () => {
//     if (user) {
//       // Implement logic for authenticated user
//       console.log("Editing for authenticated user:", user);
//     } else {
//       // Redirect to login or show an authentication prompt
//       console.log("User not authenticated. Redirecting to login...");
//     }
//   };

//   const handleAddFrame = () => {
//     if (user) {
//       // Implement logic for authenticated user
//       console.log("Adding frame for authenticated user:", user);
//     } else {
//       // Redirect to login or show an authentication prompt
//       console.log("User not authenticated. Redirecting to login...");
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {image && (
//         <>
//           <Cropper
//             ref={cropperRef}
//             src={image}
//             className={`photo-editor ${editingMode ? "editing-mode" : ""}`}
//             style={{ height: 400, width: "100%" }}
//             aspectRatio={1}
//             viewMode={1}
//             guides={true}
//             background={false}
//             zoomable={false}
//             autoCropArea={1}
//           />
//           <Button onClick={handleEdit}>Edit</Button>
//           <Button onClick={handleAddFrame}>Add Frame</Button>
//           <Button onClick={handleCrop}>Crop</Button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProfilePhotoEditor;

// import { useState } from "react";
// import { CircleStencil, Cropper } from "react-advanced-cropper";
// import "react-advanced-cropper/dist/style.css";

// export const Surya = () => {
//   const [image] = useState(
//     "https://images.unsplash.com/photo-1599140849279-1014532882fe?fit=crop&w=1300&q=80"
//   );

//   const onChange = (cropper) => {
//     console.log(cropper.getCoordinates(), cropper.getCanvas());
//   };

//   return (
//     <div style={{ height: "400px" }}>
//       <Cropper
//         src={image}
//         stencilComponent={CircleStencil}
//         stencilProps={{
//           aspectRatio: 6 / 9,
//           movable: false,
//           resizable: false,
//         }}
//         onChange={onChange}
//         className={"cropper"}
//       />
//     </div>
//   );
// };

import { useState, useRef } from "react";
// import { CircleStencil, Cropper } from "react-advanced-cropper";
// import "react-advanced-cropper/dist/style.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Surya.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export const Demo = () => {
  const [image, setImage] = useState(defaultSrc);
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

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div>
      <div style={{ width: "50%", height: "auto", float: "left" }}>
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
          // stencilComponent={CircleStencil}
          // stencilProps={{
          //   aspectRatio: 6 / 9,
          //   movable: false,
          //   resizable: false,
          // }}
          checkOrientation={false}
        />
      </div>
      <div>
        {/* <div className="box" style={{ width: "50%", float: "right" }}>
          <h1>Preview</h1>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />
        </div> */}
        <div className="box" style={{ width: "30%", float: "right" }}>
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
