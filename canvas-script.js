window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 900;
  canvas.height = 450;
  const context = canvas.getContext("2d");

  const img = new Image();
  img.src = "apple.png";

  img.onload = () => {
    //Creating pattern

    const pattern = context.createPattern(img, "repeat");
    // const pattern = context.createPattern(img, "repeat-x");
    // const pattern = context.createPattern(img, "repeat-y");
    // const pattern = context.createPattern(img, "no-repeat");

    //Assigning this pattern as fillStyle
    context.fillStyle = pattern;

    //Creating Filled rectangle
    context.fillRect(0, 0, 900, 450);
  };
};
