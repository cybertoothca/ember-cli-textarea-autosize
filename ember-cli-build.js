"use strict";

const EmberAddon = require("ember-cli/lib/broccoli/ember-addon");

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    nodeAssets: {
      autosize: {
        vendor: {
          srcDir: "dist",
          destDir: "ember-cli-textarea-autosize",
          include: ["autosize.js"],
        },
      },
    },
    sassOptions: {
      includePaths: [
        "node_modules/bootstrap-sass/assets/stylesheets",
        "node_modules/bootswatch/spacelab",
        "node_modules/font-awesome/scss",
      ],
    },
  });

  // bootstrap & bootstrap-sass from node_modules
  app.import("node_modules/bootstrap/dist/js/bootstrap.js");
  app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot", {
    destDir: "fonts/bootstrap",
  });
  app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg", {
    destDir: "fonts/bootstrap",
  });
  app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf", {
    destDir: "fonts/bootstrap",
  });
  app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff", {
    destDir: "fonts/bootstrap",
  });
  app.import(
    "node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2",
    { destDir: "fonts/bootstrap" }
  );

  // font-awesome from node_modules
  app.import("node_modules/font-awesome/fonts/FontAwesome.otf", {
    destDir: "assets/font-awesome/fonts",
  });
  app.import("node_modules/font-awesome/fonts/fontawesome-webfont.eot", {
    destDir: "assets/font-awesome/fonts",
  });
  app.import("node_modules/font-awesome/fonts/fontawesome-webfont.svg", {
    destDir: "assets/font-awesome/fonts",
  });
  app.import("node_modules/font-awesome/fonts/fontawesome-webfont.ttf", {
    destDir: "assets/font-awesome/fonts",
  });
  app.import("node_modules/font-awesome/fonts/fontawesome-webfont.woff", {
    destDir: "assets/font-awesome/fonts",
  });
  app.import("node_modules/font-awesome/fonts/fontawesome-webfont.woff2", {
    destDir: "assets/font-awesome/fonts",
  });

  // autosize via `nodeAssets`
  app.import("vendor/ember-cli-textarea-autosize/autosize.js");

  return app.toTree();
};
