"use client";

import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { CameraAlt, Close } from "@mui/icons-material";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label
        id="drop-area"
        htmlFor="img-uploader"
        style={{
          width: "200px",
          height: "200px",
          padding: imageUrl ? "5px" : "32px 16px",
          borderRadius: "50%",
          backgroundColor: "#fffbed",
          border: "dashed #dbb11c 1px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          cursor: "grab",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          id="img-uploader"
          type="file"
          accept="image/*"
          hidden
          onChange={uploadImage}
        />

        <div
          id="img-view"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
          }}
        >
          {!imageUrl && (
            <>
              <CameraAlt sx={{ color: "#DBB11C" }} />
              <Typography>Click / Drop to Upload</Typography>
              <Typography variant="caption" color="#373737" fontSize="10px">
                Click on this div or drag the image of the logo.
              </Typography>
            </>
          )}
        </div>
      </label>

      {imageUrl && (
        <Button
          onClick={() => {
            setImageUrl(null);
          }}
          sx={{ mt: 1.4 }}
          color="warning"
        >
          Remove Image
        </Button>
      )}
    </>
  );
}
