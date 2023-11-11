export default defineAppConfig({
  ui: {
    strategy: "override",
    primary: "orange",
    colors: ["jade"],
    button: {
      rounded: "rounded-full",
      font: "font-extrabold",
      default: {
        size: "xl",
        variant: "outline",
        loadingIcon: "i-carbon-account",
      },
    },
  },
});
