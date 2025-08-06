import Canvas from "./canvas/canvas";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Spacer,
} from "@heroui/react";
import { Palette } from "lucide-react";
import { EditDrawer } from "./UI/EditDrawer";

export const App = () => {
  return (
    <div>
      <Navbar maxWidth={"full"} isBordered>
        <NavbarBrand>
          <Palette color="#5745dc" size={40} strokeWidth={2} />
          <Spacer x={2} />
          <p className="text-lg font-semibold">Generative Art Machine</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <EditDrawer />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Canvas />
    </div>
  );
};
