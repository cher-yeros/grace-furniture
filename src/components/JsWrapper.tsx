"use client";

import { useEffect } from "react";

export default function JsWrapper() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
    require("../assets/js/custom.js");
    require("../assets/js/tiny-slider.js");
  }, []);

  return null;
}
