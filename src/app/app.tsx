import "@shared/static/styles/global.scss";

import { Routing } from "@app/router";
import { DEFAULT_LANG, STORAGE_LANG } from "@shared/config";
import i18next from "@shared/static/languages/translate";
import { Toaster } from "@shared/ui/toaster";
import React, { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem(STORAGE_LANG) || DEFAULT_LANG;
    i18n.changeLanguage(lang);
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={Routing} />
      <Toaster />
    </I18nextProvider>
  );
};

export default App;
