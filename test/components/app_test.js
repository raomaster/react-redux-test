import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/app";

// Use describe to group together similar tests
describe("App", () => {
  // usa it para testear un simple atributo de un objetivo
  it("Muestra el texto correcto", () => {
    // usa expect para hacer un 'assertion' sobre el objetivo
    //throw new Error

    //crear una instancia de App
    const component = renderComponent(App);

    //pregunta si el componente tiene una clase .comment-box
    expect(component).to.contain('React simple starter');

  });
});
