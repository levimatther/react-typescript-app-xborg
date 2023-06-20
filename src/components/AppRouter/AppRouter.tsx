import { Route, Routes } from "react-router-dom";
import { AppViewmodel } from "../../AppViewModel";
import { AboutUs } from "../../modules";

export const AppRouter = (app: AppViewmodel) => {
  return (
    <Routes>
      <Route path="/" element={<AboutUs app={app} />} />
    </Routes>
  );
};
