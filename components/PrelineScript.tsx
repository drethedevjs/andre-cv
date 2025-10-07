"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Optional third-party libraries
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
// import $ from "jquery";
// import _ from "lodash";
import noUiSlider from "nouislider";
import * as VanillaCalendarPro from "vanilla-calendar-pro";

// window._ = _;
// window.$ = $;
// window.jQuery = $;
// window.DataTable = $.fn.dataTable;

// @ts-ignore
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;

// Preline UI
async function loadPreline() {
  return import("preline/dist/index.js");
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();
    };

    initPreline();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [path]);

  return null;
}
