// const canvas = document.getElementById("canvas");
// const scene = new THREE.Scene();
// scene.fog = new THREE.Fog(0x1a2332, 50, 200);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer({
//   canvas,
//   alpha: true,
//   antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// camera.position.set(0, 5, 50);

// // Створюємо крижаний кристал
// function createCrystal(size, x, y, z) {
//   const geometry = new THREE.OctahedronGeometry(size, 0);
//   const material = new THREE.MeshPhongMaterial({
//     color: 0x3498db,
//     emissive: 0x1f618d,
//     emissiveIntensity: 0.4,
//     transparent: true,
//     opacity: 0.7,
//     shininess: 100,
//   });
//   const crystal = new THREE.Mesh(geometry, material);
//   crystal.position.set(x, y, z);
//   return crystal;
// }

// // Створюємо подарункові коробки замість кристалів
// const gifts = [];
// for (let i = 0; i < 30; i++) {
//   const size = 1 + Math.random() * 2;
//   const x = (Math.random() - 0.5) * 100;
//   const y = (Math.random() - 0.5) * 60;
//   const z = (Math.random() - 0.5) * 100;

//   const giftGroup = new THREE.Group();

//   // Основна коробка
//   const boxGeometry = new THREE.BoxGeometry(size, size, size);
//   const giftColors = [
//     0xe74c3c, // Червоний
//     0x3498db, // Синій
//     0x2ecc71, // Зелений
//     0xf39c12, // Помаранчевий
//     0x9b59b6, // Фіолетовий
//     0xe67e22, // Темно-помаранчевий
//     0x1abc9c, // Бірюзовий
//   ];
//   const boxMaterial = new THREE.MeshPhongMaterial({
//     color: giftColors[i % giftColors.length],
//     emissive: giftColors[i % giftColors.length],
//     emissiveIntensity: 0.2,
//     shininess: 80,
//   });
//   const box = new THREE.Mesh(boxGeometry, boxMaterial);
//   giftGroup.add(box);

//   // Стрічка горизонтальна
//   const ribbonH = new THREE.BoxGeometry(size * 1.05, size * 0.12, size * 0.12);
//   const ribbonMaterial = new THREE.MeshPhongMaterial({
//     color: 0xffd700,
//     emissive: 0xffa500,
//     emissiveIntensity: 0.3,
//     shininess: 100,
//   });
//   const ribbonHMesh = new THREE.Mesh(ribbonH, ribbonMaterial);
//   ribbonHMesh.position.y = size * 0.25;
//   giftGroup.add(ribbonHMesh);

//   // Стрічка вертикальна
//   const ribbonV = new THREE.BoxGeometry(size * 0.12, size * 1.05, size * 0.12);
//   const ribbonVMesh = new THREE.Mesh(ribbonV, ribbonMaterial.clone());
//   giftGroup.add(ribbonVMesh);

//   // Бантик зверху
//   const bowGeometry = new THREE.SphereGeometry(size * 0.2, 8, 8);
//   const bowMaterial = new THREE.MeshPhongMaterial({
//     color: 0xffd700,
//     emissive: 0xffa500,
//     emissiveIntensity: 0.5,
//     shininess: 100,
//   });
//   const bow = new THREE.Mesh(bowGeometry, bowMaterial);
//   bow.position.y = size * 0.6;
//   bow.scale.set(1.5, 0.8, 1.5);
//   giftGroup.add(bow);

//   // Додаткові деталі бантика
//   for (let j = 0; j < 4; j++) {
//     const loopGeometry = new THREE.SphereGeometry(size * 0.15, 6, 6);
//     const loop = new THREE.Mesh(loopGeometry, bowMaterial.clone());
//     const angle = (j / 4) * Math.PI * 2;
//     loop.position.x = Math.cos(angle) * size * 0.25;
//     loop.position.y = size * 0.6;
//     loop.position.z = Math.sin(angle) * size * 0.25;
//     loop.scale.set(0.8, 1.2, 0.8);
//     giftGroup.add(loop);
//   }

//   giftGroup.position.set(x, y, z);
//   giftGroup.rotation.set(
//     Math.random() * Math.PI,
//     Math.random() * Math.PI,
//     Math.random() * Math.PI
//   );

//   gifts.push({
//     group: giftGroup,
//     speed: 0.3 + Math.random() * 0.5,
//     rotationSpeed: (Math.random() - 0.5) * 0.02,
//     bow: bow,
//   });
//   scene.add(giftGroup);
// }

// // Падаючий сніг (частинки)
// const snowGeometry = new THREE.BufferGeometry();
// const snowCount = 8000;
// const snowPositions = new Float32Array(snowCount * 3);

// for (let i = 0; i < snowCount * 3; i += 3) {
//   snowPositions[i] = (Math.random() - 0.5) * 200;
//   snowPositions[i + 1] = Math.random() * 100;
//   snowPositions[i + 2] = (Math.random() - 0.5) * 200;
// }

// snowGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(snowPositions, 3)
// );
// const snowMaterial = new THREE.PointsMaterial({
//   color: 0xaed6f1,
//   size: 0.4,
//   transparent: true,
//   opacity: 0.9,
// });
// const snow = new THREE.Points(snowGeometry, snowMaterial);
// scene.add(snow);

// // Створюємо прекрасні ялинки
// const trees = [];
// for (let i = 0; i < 8; i++) {
//   const angle = (i / 8) * Math.PI * 2;
//   const radius = 35;

//   const treeGroup = new THREE.Group();

//   // Стовбур ялинки
//   const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.6, 3, 8);
//   const trunkMaterial = new THREE.MeshPhongMaterial({
//     color: 0x4d2600,
//     emissive: 0x2d1600,
//     emissiveIntensity: 0.2,
//   });
//   const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
//   trunk.position.y = 1.5;
//   treeGroup.add(trunk);

//   // Яруси хвої (3 рівні)
//   const treeLevels = [
//     { y: 3, radius: 2.5, height: 4 },
//     { y: 5.5, radius: 2, height: 3.5 },
//     { y: 7.5, radius: 1.5, height: 3 },
//   ];

//   treeLevels.forEach((level, idx) => {
//     const coneGeometry = new THREE.ConeGeometry(level.radius, level.height, 8);
//     const coneMaterial = new THREE.MeshPhongMaterial({
//       color: idx === 0 ? 0x1e5631 : idx === 1 ? 0x1a4d2e : 0x16442a,
//       emissive: 0x0d3d1f,
//       emissiveIntensity: 0.3,
//       shininess: 30,
//     });
//     const cone = new THREE.Mesh(coneGeometry, coneMaterial);
//     cone.position.y = level.y;
//     treeGroup.add(cone);
//   });

//   // Зірка на верхівці
//   const starGeometry = new THREE.SphereGeometry(0.4, 8, 8);
//   const starMaterial = new THREE.MeshPhongMaterial({
//     color: 0xffd700,
//     emissive: 0xffa500,
//     emissiveIntensity: 1,
//     shininess: 100,
//   });
//   const star = new THREE.Mesh(starGeometry, starMaterial);
//   star.position.y = 9.5;
//   treeGroup.add(star);

//   // Гірлянди на ялинці
//   const lightPositions = [
//     { y: 3.5, radius: 2.2 },
//     { y: 4.5, radius: 1.8 },
//     { y: 6, radius: 1.7 },
//     { y: 7, radius: 1.3 },
//     { y: 8, radius: 1 },
//   ];

//   const treeLights = [];
//   const lightColors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff];

//   lightPositions.forEach((pos, idx) => {
//     for (let j = 0; j < 4; j++) {
//       const lightAngle = (j / 4) * Math.PI * 2;
//       const lightGeometry = new THREE.SphereGeometry(0.1, 8, 8);
//       const lightMaterial = new THREE.MeshPhongMaterial({
//         color: lightColors[(idx + j) % lightColors.length],
//         emissive: lightColors[(idx + j) % lightColors.length],
//         emissiveIntensity: 1,
//       });
//       const light = new THREE.Mesh(lightGeometry, lightMaterial);
//       light.position.x = Math.cos(lightAngle) * pos.radius;
//       light.position.y = pos.y;
//       light.position.z = Math.sin(lightAngle) * pos.radius;
//       treeGroup.add(light);
//       treeLights.push({ mesh: light, offset: idx + j });
//     }
//   });

//   treeGroup.position.x = Math.cos(angle) * radius;
//   treeGroup.position.y = -10;
//   treeGroup.position.z = Math.sin(angle) * radius;
//   treeGroup.rotation.y = -angle;

//   trees.push({
//     group: treeGroup,
//     star: star,
//     lights: treeLights,
//     baseY: treeGroup.position.y,
//     angle: angle,
//   });
//   scene.add(treeGroup);
// }

// // Освітлення
// const ambientLight = new THREE.AmbientLight(0x34495e, 0.5);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0x5dade2, 0.8);
// directionalLight.position.set(10, 30, 20);
// scene.add(directionalLight);

// const pointLight1 = new THREE.PointLight(0x3498db, 1.5, 100);
// scene.add(pointLight1);

// const pointLight2 = new THREE.PointLight(0x1f618d, 1.5, 100);
// scene.add(pointLight2);

// // Анімація
// let time = 0;
// function animate() {
//   requestAnimationFrame(animate);
//   time += 0.01;

//   // Обертання подарункових коробок
//   gifts.forEach((gift) => {
//     gift.group.rotation.x += gift.rotationSpeed;
//     gift.group.rotation.y += gift.rotationSpeed * 1.5;
//     gift.group.position.y += Math.sin(time * gift.speed) * 0.02;

//     // Пульсація бантика
//     const bowPulse = (Math.sin(time * 3 + gift.speed) + 1) * 0.1 + 0.9;
//     gift.bow.scale.set(1.5 * bowPulse, 0.8 * bowPulse, 1.5 * bowPulse);
//   });

//   // Падіння частинок снігу
//   const positions = snow.geometry.attributes.position.array;
//   for (let i = 1; i < positions.length; i += 3) {
//     positions[i] -= 0.1;
//     if (positions[i] < -20) {
//       positions[i] = 80;
//     }
//   }
//   snow.geometry.attributes.position.needsUpdate = true;

//   // Пульсація ялинок
//   trees.forEach((tree, i) => {
//     // Плавне гойдання
//     const sway = Math.sin(time * 1.5 + i) * 0.05;
//     tree.group.rotation.z = sway;

//     // Обертання зірки
//     tree.star.rotation.y = time * 2;
//     const starPulse = (Math.sin(time * 3 + i) + 1) * 0.5 + 0.5;
//     tree.star.material.emissiveIntensity = starPulse * 1.5;
//     tree.star.scale.set(
//       1 + starPulse * 0.3,
//       1 + starPulse * 0.3,
//       1 + starPulse * 0.3
//     );

//     // Мерехтіння гірлянд
//     tree.lights.forEach((light) => {
//       const blink = Math.abs(Math.sin(time * 2.5 + light.offset * 0.5));
//       light.mesh.material.emissiveIntensity = blink * 0.8 + 0.2;
//     });
//   });

//   // Рух освітлення
//   pointLight1.position.x = Math.cos(time) * 40;
//   pointLight1.position.y = 20;
//   pointLight1.position.z = Math.sin(time) * 40;

//   pointLight2.position.x = Math.sin(time * 0.7) * 40;
//   pointLight2.position.y = 20;
//   pointLight2.position.z = Math.cos(time * 0.7) * 40;

//   renderer.render(scene, camera);
// }

// animate();

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// document.addEventListener("mousemove", (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 20;
//   const y = (e.clientY / window.innerHeight - 0.5) * 20;
//   camera.position.x = x;
//   camera.position.y = 6 - y;
// });

// ------------------------Версія 2 ------------------------------

// const canvas = document.getElementById("canvas");
// const scene = new THREE.Scene();
// scene.fog = new THREE.Fog(0x1a2332, 50, 200);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer({
//   canvas,
//   alpha: true,
//   antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// camera.position.set(0, 5, 50);

// /* ================== СНІГ ================== */
// const snowGeometry = new THREE.BufferGeometry();
// const snowCount = 8000;
// const snowPositions = new Float32Array(snowCount * 3);

// for (let i = 0; i < snowCount * 3; i += 3) {
//   snowPositions[i] = (Math.random() - 0.5) * 200;
//   snowPositions[i + 1] = Math.random() * 100;
//   snowPositions[i + 2] = (Math.random() - 0.5) * 200;
// }

// snowGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(snowPositions, 3)
// );

// const snowMaterial = new THREE.PointsMaterial({
//   color: 0xaed6f1,
//   size: 0.4,
//   transparent: true,
//   opacity: 0.9,
// });

// const snow = new THREE.Points(snowGeometry, snowMaterial);
// scene.add(snow);

// /* ================== ОСВІТЛЕННЯ ================== */
// const ambientLight = new THREE.AmbientLight(0x34495e, 0.5);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0x5dade2, 0.8);
// directionalLight.position.set(10, 30, 20);
// scene.add(directionalLight);

// const pointLight1 = new THREE.PointLight(0x3498db, 1.5, 100);
// scene.add(pointLight1);

// const pointLight2 = new THREE.PointLight(0x1f618d, 1.5, 100);
// scene.add(pointLight2);

// /* ================== АНІМАЦІЯ ================== */
// let time = 0;
// function animate() {
//   requestAnimationFrame(animate);
//   time += 0.01;

//   // Падіння снігу
//   const positions = snow.geometry.attributes.position.array;
//   for (let i = 1; i < positions.length; i += 3) {
//     positions[i] -= 0.1;
//     if (positions[i] < -20) {
//       positions[i] = 80;
//     }
//   }
//   snow.geometry.attributes.position.needsUpdate = true;

//   // Рух світла
//   pointLight1.position.set(Math.cos(time) * 40, 20, Math.sin(time) * 40);

//   pointLight2.position.set(
//     Math.sin(time * 0.7) * 40,
//     20,
//     Math.cos(time * 0.7) * 40
//   );

//   renderer.render(scene, camera);
// }

// animate();

// /* ================== RESIZE ================== */
// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// /* ================== MOUSE MOVE ================== */
// document.addEventListener("mousemove", (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 20;
//   const y = (e.clientY / window.innerHeight - 0.5) * 20;
//   camera.position.x = x;
//   camera.position.y = 6 - y;
// });

// ------------------------Версія 3 ------------------------------

// const canvas = document.getElementById("canvas");
// const scene = new THREE.Scene();
// scene.fog = new THREE.Fog(0x1a2332, 50, 200);

// /* ================== CAMERA ================== */
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 5, 50);

// /* ================== RENDERER ================== */
// const renderer = new THREE.WebGLRenderer({
//   canvas,
//   alpha: true,
//   antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// /* ================== SNOWFLAKE TEXTURE ================== */
// function createSnowflakeTexture() {
//   const size = 64;
//   const canvas = document.createElement("canvas");
//   canvas.width = size;
//   canvas.height = size;
//   const ctx = canvas.getContext("2d");

//   ctx.translate(size / 2, size / 2);
//   ctx.strokeStyle = "white";
//   ctx.lineWidth = 2;

//   for (let i = 0; i < 6; i++) {
//     ctx.rotate(Math.PI / 3);
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     ctx.lineTo(0, -22);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(0, -14);
//     ctx.lineTo(5, -18);
//     ctx.moveTo(0, -14);
//     ctx.lineTo(-5, -18);
//     ctx.stroke();
//   }

//   const texture = new THREE.CanvasTexture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// }

// /* ================== SNOW ================== */
// const snowCount = 7000;
// const snowGeometry = new THREE.BufferGeometry();
// const snowPositions = new Float32Array(snowCount * 3);

// const snowData = [];

// for (let i = 0; i < snowCount; i++) {
//   snowPositions[i * 3] = (Math.random() - 0.5) * 200;
//   snowPositions[i * 3 + 1] = Math.random() * 100;
//   snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;

//   snowData.push({
//     speed: 0.05 + Math.random() * 0.15,
//     drift: Math.random() * Math.PI * 2,
//     twinkle: Math.random() * Math.PI * 2,
//     depth: Math.random(), // 0 far — 1 near
//   });
// }

// snowGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(snowPositions, 3)
// );

// const snowMaterial = new THREE.PointsMaterial({
//   map: createSnowflakeTexture(),
//   size: 1.8,
//   transparent: true,
//   opacity: 0.9,
//   depthWrite: false,
//   blending: THREE.AdditiveBlending,
//   sizeAttenuation: true,
// });

// const snow = new THREE.Points(snowGeometry, snowMaterial);
// scene.add(snow);

// /* ================== LIGHTING ================== */
// scene.add(new THREE.AmbientLight(0x34495e, 0.5));

// const directionalLight = new THREE.DirectionalLight(0x5dade2, 0.8);
// directionalLight.position.set(10, 30, 20);
// scene.add(directionalLight);

// const pointLight1 = new THREE.PointLight(0x3498db, 1.5, 100);
// const pointLight2 = new THREE.PointLight(0x1f618d, 1.5, 100);
// scene.add(pointLight1, pointLight2);

// /* ================== ANIMATION ================== */
// let time = 0;

// function animate() {
//   requestAnimationFrame(animate);
//   time += 0.01;

//   const positions = snow.geometry.attributes.position.array;

//   for (let i = 0; i < snowCount; i++) {
//     const i3 = i * 3;
//     const d = snowData[i];

//     // ❄️ падіння + паралакс
//     positions[i3 + 1] -= d.speed * (0.5 + d.depth);

//     // 🌬 вітер
//     positions[i3] += Math.sin(time * 0.8 + d.drift) * 0.03 * (0.3 + d.depth);

//     // 🌀 глибина
//     positions[i3 + 2] += Math.cos(time * 0.6 + d.drift) * 0.01 * d.depth;

//     // 🔄 респавн
//     if (positions[i3 + 1] < -20) {
//       positions[i3 + 1] = 80;
//       positions[i3] = (Math.random() - 0.5) * 200;
//       positions[i3 + 2] = (Math.random() - 0.5) * 200;
//     }

//     // ✨ twinkle
//     d.twinkle += 0.05;
//   }

//   // ✨ sparkle (глобальне мерехтіння)
//   snowMaterial.opacity = 0.6 + (Math.sin(time * 3) + 1) * 0.2;

//   snow.geometry.attributes.position.needsUpdate = true;

//   // 💡 рух світла
//   pointLight1.position.set(Math.cos(time) * 40, 20, Math.sin(time) * 40);
//   pointLight2.position.set(
//     Math.sin(time * 0.7) * 40,
//     20,
//     Math.cos(time * 0.7) * 40
//   );

//   renderer.render(scene, camera);
// }

// animate();

// /* ================== EVENTS ================== */
// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// document.addEventListener("mousemove", (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 20;
//   const y = (e.clientY / window.innerHeight - 0.5) * 20;
//   camera.position.x = x;
//   camera.position.y = 6 - y;
// });

// ------------------------------------Версія 4 -------------------

const canvas = document.getElementById("canvas");
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x1a2332, 50, 200);

/* ================= CAMERA ================= */
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 50);

/* ================= RENDERER ================= */
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

/* ================= SNOWFLAKE TEXTURE ================= */
function createSnowflakeTexture() {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d");

  ctx.translate(size / 2, size / 2);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -22);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -14);
    ctx.lineTo(5, -18);
    ctx.moveTo(0, -14);
    ctx.lineTo(-5, -18);
    ctx.stroke();
  }

  return new THREE.CanvasTexture(c);
}

/* ================= SNOW ================= */
const snowCount = 6000;
const snowGeometry = new THREE.BufferGeometry();
const snowPositions = new Float32Array(snowCount * 3);

for (let i = 0; i < snowCount; i++) {
  snowPositions[i * 3] = (Math.random() - 0.5) * 200;
  snowPositions[i * 3 + 1] = Math.random() * 100;
  snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;
}

snowGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(snowPositions, 3)
);

const snowMaterial = new THREE.PointsMaterial({
  map: createSnowflakeTexture(),
  size: 1.6,
  transparent: true,
  opacity: 0.9,
  depthWrite: false,
});

const snow = new THREE.Points(snowGeometry, snowMaterial);
scene.add(snow);

/* ================= LIGHT ================= */
scene.add(new THREE.AmbientLight(0x4a5a6a, 0.8));

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 30, 20);
scene.add(dirLight);

/* ================= ANIMATION ================= */
function animate() {
  requestAnimationFrame(animate);

  const pos = snow.geometry.attributes.position.array;

  for (let i = 0; i < pos.length; i += 3) {
    pos[i + 1] -= 0.08;

    if (pos[i + 1] < -20) {
      pos[i + 1] = 80;
    }
  }

  snow.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}

animate();

/* ================= RESIZE ================= */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
