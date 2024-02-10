let gameMap = {
  name: "first map",
  id: "first_map",
  values: [],
};

let mapSize = 0;

function buildRandomMap() {
  c = console.log;
  cw = console.warn;
  ce = console.error;
  wantedMapSize = 6000;

  while (mapSize < wantedMapSize) {
    let randomTile = getRandomInt(1, 101);

    if (mapSize < wantedMapSize) {
      if (randomTile <= 80) {
        gameMap.values.push("gG");
        mapSize++;
      } else if (randomTile >= 95) {
        generateForests();
      } else if (randomTile >= 81 && randomTile <= 90) {
        generateHighGround();
      } else {
        generateWater();
      }
      //c(`this is the patch Size ${j}`);
    }
    c(`this is the map Size ${mapSize}`);
  }
}
function generatePlains() {
  let randomTile = getRandomInt(1, 1001);
  if (mapSize < wantedMapSize) {
    if (randomTile <= 970) {
      gameMap.values.push("gG");
      mapSize++;
    } else if (randomTile >= 971 && randomTile <= 980) {
      plainsGenerateWater();
    } else if (randomTile >= 981 && randomTile <= 990) {
      plainsGenerateHighGround();
    } else if (randomTile >= 991 && randomTile <= 1000) {
      plainsGenerateForests();
    }
  }
  // gameMap.values.push("gG");
  //c(mapSize);
}

function generateForests() {
  let forestSize = 30;
  let forestRandomnessN = 4;
  let forestRandomnessP = 22;
  let forestRandomness = getRandomInt(
    forestSize + forestRandomnessN,
    forestSize + forestRandomnessP
  );
  if (mapSize < wantedMapSize) {
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      generatePlains();
      mapSize++;
    }
  }
}
function plainsGenerateForests() {
  let forestSize = 30;
  let forestRandomnessN = 4;
  let forestRandomnessP = 22;
  let forestRandomness = getRandomInt(
    forestSize + forestRandomnessN,
    forestSize + forestRandomnessP
  );
  if (mapSize < wantedMapSize) {
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < forestSize; i++) {
      gameMap.values.push("fG");
      forestRandomness = getRandomInt(
        forestSize + forestRandomnessN,
        forestSize + forestRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < forestRandomness + forestSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
  }
}

function generateHighGround() {
  let moutainSize = 15;
  let moutainRandomnessN = 50;
  let moutainRandomnessP = 66;

  let moutainRandomness = getRandomInt(
    moutainSize + moutainRandomnessN,
    moutainSize + moutainRandomnessP
  );

  if (mapSize < wantedMapSize) {
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      generatePlains();
      mapSize++;
    }
  }
}
function plainsGenerateHighGround() {
  let moutainSize = 15;
  let moutainRandomnessN = 50;
  let moutainRandomnessP = 66;

  let moutainRandomness = getRandomInt(
    moutainSize + moutainRandomnessN,
    moutainSize + moutainRandomnessP
  );

  if (mapSize < wantedMapSize) {
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
    for (let i = 0; i < moutainSize; i++) {
      gameMap.values.push("hG");
      moutainRandomness = getRandomInt(
        moutainSize + moutainRandomnessN,
        moutainSize + moutainRandomnessP
      );
      mapSize++;
    }
    for (let i = 0; i < moutainRandomness + moutainSize; i++) {
      gameMap.values.push("gG");
      mapSize++;
    }
  }
}

function generateWater() {
  let lakeType = getRandomInt(1, 6);
  let riverSize = getRandomInt(1, 4);
  let lakeRandomness = getRandomInt(-3, 4);

  if (mapSize < wantedMapSize) {
    if (lakeType >= 1 && lakeType <= 4) {
      lakeType = 4;
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94 + lakeRandomness; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92 + lakeRandomness; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91 + lakeRandomness; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91 + lakeRandomness; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92 + lakeRandomness; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94 + lakeRandomness; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
    } else if (lakeType == 5) {
      lakeType = 3;
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94; i++) {
        generatePlains();
        mapSize++;
      }
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 97; i++) {
        generatePlains();
        mapSize++;
      }
      if (riverSize > 1) {
        for (let i = 0; i < lakeType; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 94; i++) {
          generatePlains();
          mapSize++;
        }
        for (let i = 0; i < lakeType + 2; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 92; i++) {
          generatePlains();
          mapSize++;
        }
        for (let i = 0; i < lakeType + 4; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 91; i++) {
          generatePlains();
          mapSize++;
        }
        for (let i = 0; i < lakeType + 4; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 91; i++) {
          generatePlains();
          mapSize++;
        }
        for (let i = 0; i < lakeType + 4; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 92; i++) {
          generatePlains();
          mapSize++;
        }
        for (let i = 0; i < lakeType + 2; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 94; i++) {
          generatePlains();
          mapSize++;
        }
        for (let i = 0; i < lakeType; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }

        for (let i = 0; i < lakeType + 97; i++) {
          generatePlains();
          mapSize++;
        }
        if (riverSize > 2) {
          for (let i = 0; i < lakeType; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 94; i++) {
            generatePlains();
            mapSize++;
          }
          for (let i = 0; i < lakeType + 2; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 92; i++) {
            generatePlains();
            mapSize++;
          }
          for (let i = 0; i < lakeType + 4; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 91; i++) {
            generatePlains();
            mapSize++;
          }
          for (let i = 0; i < lakeType + 4; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 91; i++) {
            generatePlains();
            mapSize++;
          }
          for (let i = 0; i < lakeType + 4; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 92; i++) {
            generatePlains();
            mapSize++;
          }
          for (let i = 0; i < lakeType + 2; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 94; i++) {
            generatePlains();
            mapSize++;
          }
          for (let i = 0; i < lakeType; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
        }
      }
    }
  }
}
function plainsGenerateWater() {
  let lakeType = getRandomInt(1, 6);
  let riverSize = getRandomInt(1, 4);
  let lakeRandomness = getRandomInt(-3, 4);

  if (mapSize < wantedMapSize) {
    if (lakeType >= 1 && lakeType <= 4) {
      lakeType = 4;
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94 + lakeRandomness; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92 + lakeRandomness; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91 + lakeRandomness; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91 + lakeRandomness; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92 + lakeRandomness; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94 + lakeRandomness; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
    } else if (lakeType == 5) {
      lakeType = 3;
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 91; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 4; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 92; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 2; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 94; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      for (let i = 0; i < lakeType; i++) {
        gameMap.values.push("wB");
        mapSize++;
      }
      for (let i = 0; i < lakeType + 97; i++) {
        gameMap.values.push("gG");
        mapSize++;
      }
      if (riverSize > 1) {
        for (let i = 0; i < lakeType; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 94; i++) {
          gameMap.values.push("gG");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 2; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 92; i++) {
          gameMap.values.push("gG");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 4; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 91; i++) {
          gameMap.values.push("gG");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 4; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 91; i++) {
          gameMap.values.push("gG");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 4; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 92; i++) {
          gameMap.values.push("gG");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 2; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }
        for (let i = 0; i < lakeType + 94; i++) {
          gameMap.values.push("gG");
          mapSize++;
        }
        for (let i = 0; i < lakeType; i++) {
          gameMap.values.push("wB");
          mapSize++;
        }

        for (let i = 0; i < lakeType + 97; i++) {
          gameMap.values.push("gG");
          mapSize++;
        }
        if (riverSize > 2) {
          for (let i = 0; i < lakeType; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 94; i++) {
            gameMap.values.push("gG");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 2; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 92; i++) {
            gameMap.values.push("gG");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 4; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 91; i++) {
            gameMap.values.push("gG");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 4; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 91; i++) {
            gameMap.values.push("gG");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 4; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 92; i++) {
            gameMap.values.push("gG");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 2; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
          for (let i = 0; i < lakeType + 94; i++) {
            gameMap.values.push("gG");
            mapSize++;
          }
          for (let i = 0; i < lakeType; i++) {
            gameMap.values.push("wB");
            mapSize++;
          }
        }
      }
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
document.addEventListener("keypress", (event) => {
  if (event.key == "1") {
    gameMap.values = [];
    mapSize = 0;
    buildRandomMap();
    renderMap();
  }
});

buildRandomMap();

// function AIVersion1() {
//   let gameMap = {
//     name: "first map",
//     id: "first_map",
//     values: [],
//     width: 103, // Adjust the dimensions as needed
//     height: 55,
//   };

//   function generateRandomMap() {
//     for (let y = 0; y < gameMap.height; y++) {
//       for (let x = 0; x < gameMap.width; x++) {
//         let terrainType = getRandomTerrainType();
//         gameMap.values.push(terrainType);
//       }
//     }
//   }

//   function getRandomTerrainType() {
//     let terrainTypes = ["Plain", "Forest", "Lake", "River", "Mountain"];
//     return terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
//   }

//   function printMap() {
//     for (let y = 0; y < gameMap.height; y++) {
//       let row = [];
//       for (let x = 0; x < gameMap.width; x++) {
//         let index = y * gameMap.width + x;
//         row.push(gameMap.values[index]);
//       }
//       console.log(row.join(" "));
//     }
//   }

//   // Example usage
//   generateRandomMap();
//   printMap();
// }
// function AIVersion2() {
//   let gameMap = {
//     name: "first map",
//     id: "first_map",
//     values: [],
//     width: 103,
//     height: 55,
//   };

//   // Adjust the probabilities for each biome
//   let biomeProbabilities = {
//     Plain: 0.8,
//     Forest: 0.1,
//     Lake: 0.1,
//     River: 0.1,
//     Mountain: 0.1,
//   };

//   function generateRandomMap() {
//     for (let y = 0; y < gameMap.height; y++) {
//       for (let x = 0; x < gameMap.width; x++) {
//         let terrainType = getRandomTerrainType(x, y);
//         gameMap.values.push(terrainType);
//       }
//     }
//   }

//   function getRandomTerrainType(x, y) {
//     let patchSize = 5;
//     let patchDensity = 0.2;

//     let isInPatch = Math.random() < patchDensity;

//     if (isInPatch) {
//       return getBiomeFromPatch(x, y, patchSize);
//     } else {
//       return getRandomBiome();
//     }
//   }

//   function getBiomeFromPatch(x, y, patchSize) {
//     let centerX = Math.floor(gameMap.width / 2);
//     let centerY = Math.floor(gameMap.height / 2);

//     let distanceToCenter = Math.sqrt(
//       Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
//     );

//     if (distanceToCenter < patchSize / 2) {
//       return "Forest";
//     } else {
//       return "Plain";
//     }
//   }

//   function getRandomBiome() {
//     let randomValue = Math.random();
//     let cumulativeProbability = 0;

//     for (let biome in biomeProbabilities) {
//       cumulativeProbability += biomeProbabilities[biome];

//       if (randomValue <= cumulativeProbability) {
//         return biome;
//       }
//     }

//     // Fallback (shouldn't reach here, but just in case)
//     return "Plain";
//   }

//   function printMap() {
//     for (let y = 0; y < gameMap.height; y++) {
//       let row = [];
//       for (let x = 0; x < gameMap.width; x++) {
//         let index = y * gameMap.width + x;
//         row.push(gameMap.values[index]);
//       }
//       console.log(row.join(" "));
//     }
//   }

//   // Example usage
//   generateRandomMap();
//   printMap();
// }
