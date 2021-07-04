miro.onReady(() => {
  console.log("MIRO ready");
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "LOREM IPSUM",
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="red" fill-rule="evenodd" stroke="blue" stroke-width="2"/>',
        onClick: () => {
          alert("Hi!");
        },
      },
    },
  });
});