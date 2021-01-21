import React from "react";

const DragAndDrop = () => {
  let dropzone = document.getElementById("dropzone");
  let nodes = document.getElementsByClassName("node");
  let selectedNode = "";
  let selectedNodePos = 0;
  const nodesMouseDown = (e) => {
    console.log(e.target.id);
    document.getElementById(e.target.id).style.backgroundColor = "tomato";
  };
  const dropzoneDragOver = (e) => {
    e.preventDefault();
    whereAmI(e.clientY);
  };
  const dropzoneDrop = (e) => {
    e.preventDefault();

    dropzone.insertBefore(selectedNode, dropzone.children[selectedNodePos]);

    resetNodes();

    setTimeout(() => {
      selectedNode.style.backgroundColor = "cornsilk";
      selectedNode.style.transition = "2s";
    }, 300);
  };
  const nodeDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);

    dropzone = document.getElementById("dropzone");

    selectedNode = document.getElementById(e.target.id);
    setTimeout(() => {
      dropzone.removeChild(selectedNode);
    }, 0);
  };
  const establishNodePositions = () => {
    for (let i = 0; i < nodes.length; i++) {
      let element = document.getElementById(nodes[i]["id"]);
      let position = element.getBoundingClientRect();
      let yTop = position.top;
      let yBottom = position.bottom;
      nodes[i]["yPos"] = yTop + (yBottom - yTop) / 2;
    }
  };
  const resetNodes = () => {
    for (let i = 0; i < nodes.length; i++) {
      document.getElementById(nodes[i]["id"]).style.marginTop = "0.5em";
    }
  };
  const whereAmI = (currentYPos) => {
    establishNodePositions();

    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i]["yPos"] < currentYPos) {
        var nodeAbove = document.getElementById(nodes[i]["id"]);
        selectedNodePos = i + 1;
      } else {
        if (!nodeBelow) {
          var nodeBelow = document.getElementById(nodes[i]["id"]);
        }
      }

      if (typeof nodeAbove == "undefined") {
        selectedNodePos = 0;
      }

      resetNodes();

      if (typeof nodeBelow == "object") {
        nodeBelow.style.marginTop = "3em";
        nodeBelow.style.transition = "1.8s";
      }
    }
  };
  return (
    <div className="col-lg-12">
      <div
        className="offset-lg-3 col-lg-6 mx-auto"
        id="dropzone"
        onDragOver={dropzoneDragOver}
        onDrop={dropzoneDrop}
      >
        <div
          id="record-id-23"
          className="node"
          draggable="true"
          onMouseDown={nodesMouseDown}
          onDragStart={nodeDragStart}
        >
          Watches
        </div>
        <div
          id="record-id-32"
          className="node"
          draggable="true"
          onMouseDown={nodesMouseDown}
          onDragStart={nodeDragStart}
        >
          Gold
        </div>
        <div
          id="record-id-15"
          className="node"
          draggable="true"
          onMouseDown={nodesMouseDown}
          onDragStart={nodeDragStart}
        >
          Silver
        </div>
        <div
          id="record-id-44"
          className="node"
          draggable="true"
          onMouseDown={nodesMouseDown}
          onDragStart={nodeDragStart}
        >
          Copper
        </div>
        <div
          id="record-id-5"
          className="node"
          draggable="true"
          onMouseDown={nodesMouseDown}
          onDragStart={nodeDragStart}
        >
          Charms
        </div>
        <div
          id="record-id-76"
          className="node"
          draggable="true"
          onMouseDown={nodesMouseDown}
          onDragStart={nodeDragStart}
        >
          Designer
        </div>
        <div
          id="record-id-25"
          className="node"
          draggable="true"
          onMouseDown={nodesMouseDown}
          onDragStart={nodeDragStart}
        >
          Test
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
