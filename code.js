// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
function pushClone(node) {
    const selection = figma.currentPage.selection.slice();
    let nodePull = selection.join(node);
    console.log(nodePull);
    //selection.concat(node);
    figma.currentPage.selection = selection;
}
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.onmessage = msg => {
    //const overview = figma.root.findOne(n => n.name === "test");
    const pageSelection = figma.root.findChild(n => n.name === "test");
    let clone;
    //------------ Variations ---------------
    if (msg.type === 'create-prof-print') {
        const profPrintVariation = pageSelection.findOne(node => node.name === "templates/variation/prof-print");
        clone = profPrintVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-office-print') {
        const officePrintVariation = pageSelection.findOne(node => node.name === "templates/variation/office-print");
        clone = officePrintVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-digital') {
        const digitalVariation = pageSelection.findOne(node => node.name === "templates/variation/digital");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    //------------ Inputs ---------------
    //text input
    else if (msg.type === 'create-text-input-true') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/text/locked");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-text-input-false') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/text");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    //choice input
    else if (msg.type === 'create-choice-input-true') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/choice/locked");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-choice-input-false') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/choice");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    //image input
    else if (msg.type === 'create-image-input-true') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/image/locked");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-image-input-false') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/image");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    //number input
    else if (msg.type === 'create-number-input-true') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/number/locked");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-number-input-false') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/number");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    //spreadsheet input
    else if (msg.type === 'create-spreadsheet-input-true') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/spreadsheet/locked");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-spreadsheet-input-false') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/spreadsheet");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    //colour input
    else if (msg.type === 'create-colour-input-true') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/colour/false");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-colour-input-false') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/colour");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    //smart input
    else if (msg.type === 'create-smart-input-false') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/smart/locked");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    else if (msg.type === 'create-smart-input-true') {
        const digitalVariation = pageSelection.findOne(node => node.name === "input/smart");
        clone = digitalVariation.clone();
        pushClone(clone);
    }
    /*//collection
    else if(msg.type === 'create-collection-input') {
      const digitalVariation = pageSelection.findOne(node => node.name === "input/collection");
      clone = digitalVariation.clone();
      pushClone(clone);
    }*/
};
/*
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
*/ 
