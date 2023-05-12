export const isMobile = () => {
  return Cypress.config("viewportWidth") < Cypress.env("mobileViewportWidthBreakpoint");
};

export const forcedFlake = () => {
  const randomNum = Math.floor(Math.random() * 11);
  if(randomNum % 2 === 0)  throw new Error("Flakey test")
}