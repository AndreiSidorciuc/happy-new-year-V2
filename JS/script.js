// Версія 1
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

// camera.position.set(0, -5, 50);
// camera.lookAt(0, -10, 0);

// // Створюємо подарункові коробки
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
//     0xe74c3c, 0x3498db, 0x2ecc71, 0xf39c12, 0x9b59b6, 0xe67e22, 0x1abc9c,
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

// // Падаючий сніг
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

//   // Яруси хвої
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

//   // Гірлянди
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

// // Створюємо землю під ялинками
// const groundGeometry = new THREE.CircleGeometry(50, 64);
// const groundMaterial = new THREE.MeshPhongMaterial({
//   color: 0xe8f4f8,
//   emissive: 0xb8d8e8,
//   emissiveIntensity: 0.1,
//   shininess: 30,
//   side: THREE.DoubleSide,
// });
// const ground = new THREE.Mesh(groundGeometry, groundMaterial);
// ground.rotation.x = -Math.PI / 2;
// ground.position.y = -10;
// scene.add(ground);

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

//   // // Падіння частинок снігу
//   const positions = snow.geometry.attributes.position.array;
//   for (let i = 1; i < positions.length; i += 3) {
//     positions[i] -= 0.3;
//     if (positions[i] < -20) {
//       positions[i] = 40;
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
//   camera.position.y = 5 - y;
// });

//Версія 2
// const canvas = document.getElementById("canvas");
// const scene = new THREE.Scene();
// scene.fog = new THREE.Fog(0x0a0e1a, 50, 200);

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
// // Камера
// camera.position.set(0, -8, 50);
// camera.lookAt(0, -10, 0);

// // Падаючий сніг у формі сніжинок
// const snowflakes = [];
// const snowCount = 3000;

// // Створюємо текстуру сніжинки
// const canvas2d = document.createElement("canvas");
// canvas2d.width = 64;
// canvas2d.height = 64;
// const ctx = canvas2d.getContext("2d");

// // Малюємо сніжинку
// ctx.fillStyle = "white";
// ctx.shadowBlur = 10;
// ctx.shadowColor = "white";

// // Центр сніжинки
// const centerX = 32;
// const centerY = 32;

// // Малюємо 6 променів сніжинки
// for (let i = 0; i < 6; i++) {
//   const angle = (i / 6) * Math.PI * 2;
//   ctx.beginPath();
//   ctx.moveTo(centerX, centerY);
//   ctx.lineTo(centerX + Math.cos(angle) * 28, centerY + Math.sin(angle) * 28);
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = "white";
//   ctx.stroke();

//   // Додаємо бічні гілочки
//   for (let j = 0; j < 2; j++) {
//     const branchDist = 10 + j * 10;
//     const branchX = centerX + Math.cos(angle) * branchDist;
//     const branchY = centerY + Math.sin(angle) * branchDist;

//     ctx.beginPath();
//     ctx.moveTo(branchX, branchY);
//     ctx.lineTo(
//       branchX + Math.cos(angle + Math.PI / 4) * 6,
//       branchY + Math.sin(angle + Math.PI / 4) * 6
//     );
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(branchX, branchY);
//     ctx.lineTo(
//       branchX + Math.cos(angle - Math.PI / 4) * 6,
//       branchY + Math.sin(angle - Math.PI / 4) * 6
//     );
//     ctx.stroke();
//   }
// }

// // Центральний кружечок
// ctx.beginPath();
// ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
// ctx.fillStyle = "white";
// ctx.fill();

// const snowflakeTexture = new THREE.CanvasTexture(canvas2d);

// // Створюємо окремі сніжинки
// for (let i = 0; i < snowCount; i++) {
//   const size = 0.3 + Math.random() * 0.5;
//   const snowflakeGeometry = new THREE.PlaneGeometry(size, size);
//   const snowflakeMaterial = new THREE.MeshBasicMaterial({
//     map: snowflakeTexture,
//     transparent: true,
//     opacity: 0.8 + Math.random() * 0.2,
//     depthWrite: false,
//   });

//   const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
//   snowflake.position.x = (Math.random() - 0.5) * 200;
//   snowflake.position.y = Math.random() * 100;
//   snowflake.position.z = (Math.random() - 0.5) * 200;

//   snowflakes.push({
//     mesh: snowflake,
//     speed: 0.2 + Math.random() * 0.3,
//     rotationSpeed: (Math.random() - 0.5) * 0.02,
//     swingSpeed: Math.random() * 0.5,
//     swingAmount: Math.random() * 0.5,
//   });

//   scene.add(snowflake);
// }

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

//   // Яруси хвої
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

//   // Гірлянди
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

// // Створюємо землю під ялинками
// const groundGeometry = new THREE.CircleGeometry(50, 64);
// const groundMaterial = new THREE.MeshPhongMaterial({
//   color: 0xe8f4f8,
//   emissive: 0xb8d8e8,
//   emissiveIntensity: 0.1,
//   shininess: 30,
//   side: THREE.DoubleSide,
// });
// const ground = new THREE.Mesh(groundGeometry, groundMaterial);
// ground.rotation.x = -Math.PI / 2;
// ground.position.y = -10;
// scene.add(ground);

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

//   // Падіння сніжинок з обертанням та гойданням
//   snowflakes.forEach((snowflake) => {
//     snowflake.mesh.position.y -= snowflake.speed;
//     snowflake.mesh.rotation.z += snowflake.rotationSpeed;

//     // Гойдання вліво-вправо
//     snowflake.mesh.position.x +=
//       Math.sin(time * snowflake.swingSpeed) * snowflake.swingAmount * 0.01;

//     // Якщо сніжинка впала - піднімаємо вгору
//     if (snowflake.mesh.position.y < -20) {
//       snowflake.mesh.position.y = 80;
//       snowflake.mesh.position.x = (Math.random() - 0.5) * 200;
//       snowflake.mesh.position.z = (Math.random() - 0.5) * 200;
//     }

//     // Сніжинки завжди дивляться на камеру
//     snowflake.mesh.lookAt(camera.position);
//   });

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
// // камера позиція
// document.addEventListener("mousemove", (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 20;
//   const y = (e.clientY / window.innerHeight - 0.5) * 20;
//   camera.position.x = x;
//   camera.position.y = Math.max(-9.5, -7 - y);
// });
// Версія 3
const canvas = document.getElementById("canvas");
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x1a2332, 50, 200);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.set(0, -5, 50);
camera.lookAt(0, -10, 0);

// Падаючий сніг у формі сніжинок
const snowflakes = [];
const snowCount = 3000;

// Створюємо текстуру сніжинки
const canvas2d = document.createElement("canvas");
canvas2d.width = 64;
canvas2d.height = 64;
const ctx = canvas2d.getContext("2d");

// Малюємо сніжинку
ctx.fillStyle = "white";
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

// Центр сніжинки
const centerX = 32;
const centerY = 32;

// Малюємо 6 променів сніжинки
for (let i = 0; i < 6; i++) {
  const angle = (i / 6) * Math.PI * 2;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + Math.cos(angle) * 28, centerY + Math.sin(angle) * 28);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();

  // Додаємо бічні гілочки
  for (let j = 0; j < 2; j++) {
    const branchDist = 10 + j * 10;
    const branchX = centerX + Math.cos(angle) * branchDist;
    const branchY = centerY + Math.sin(angle) * branchDist;

    ctx.beginPath();
    ctx.moveTo(branchX, branchY);
    ctx.lineTo(
      branchX + Math.cos(angle + Math.PI / 4) * 6,
      branchY + Math.sin(angle + Math.PI / 4) * 6
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(branchX, branchY);
    ctx.lineTo(
      branchX + Math.cos(angle - Math.PI / 4) * 6,
      branchY + Math.sin(angle - Math.PI / 4) * 6
    );
    ctx.stroke();
  }
}

// Центральний кружечок
ctx.beginPath();
ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();

const snowflakeTexture = new THREE.CanvasTexture(canvas2d);

// Створюємо окремі сніжинки
for (let i = 0; i < snowCount; i++) {
  const size = 0.3 + Math.random() * 0.5;
  const snowflakeGeometry = new THREE.PlaneGeometry(size, size);
  const snowflakeMaterial = new THREE.MeshBasicMaterial({
    map: snowflakeTexture,
    transparent: true,
    opacity: 0.8 + Math.random() * 0.2,
    depthWrite: false,
  });

  const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
  snowflake.position.x = (Math.random() - 0.5) * 200;
  snowflake.position.y = Math.random() * 100;
  snowflake.position.z = (Math.random() - 0.5) * 200;

  snowflakes.push({
    mesh: snowflake,
    speed: 0.2 + Math.random() * 0.3,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    swingSpeed: Math.random() * 0.5,
    swingAmount: Math.random() * 0.5,
  });

  scene.add(snowflake);
}

// Створюємо прекрасні ялинки
const trees = [];
for (let i = 0; i < 8; i++) {
  const angle = (i / 8) * Math.PI * 2;
  const radius = 35;

  const treeGroup = new THREE.Group();

  // Стовбур ялинки
  const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.6, 3, 8);
  const trunkMaterial = new THREE.MeshPhongMaterial({
    color: 0x4d2600,
    emissive: 0x2d1600,
    emissiveIntensity: 0.2,
  });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.position.y = 1.5;
  treeGroup.add(trunk);

  // Яруси хвої
  const treeLevels = [
    { y: 3, radius: 2.5, height: 4 },
    { y: 5.5, radius: 2, height: 3.5 },
    { y: 7.5, radius: 1.5, height: 3 },
  ];

  treeLevels.forEach((level, idx) => {
    const coneGeometry = new THREE.ConeGeometry(level.radius, level.height, 8);
    const coneMaterial = new THREE.MeshPhongMaterial({
      color: idx === 0 ? 0x1e5631 : idx === 1 ? 0x1a4d2e : 0x16442a,
      emissive: 0x0d3d1f,
      emissiveIntensity: 0.3,
      shininess: 30,
    });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.position.y = level.y;
    treeGroup.add(cone);
  });

  // Зірка на верхівці
  const starGeometry = new THREE.SphereGeometry(0.4, 8, 8);
  const starMaterial = new THREE.MeshPhongMaterial({
    color: 0xffd700,
    emissive: 0xffa500,
    emissiveIntensity: 1,
    shininess: 100,
  });
  const star = new THREE.Mesh(starGeometry, starMaterial);
  star.position.y = 9.5;
  treeGroup.add(star);

  // Гірлянди
  const lightPositions = [
    { y: 3.5, radius: 2.2 },
    { y: 4.5, radius: 1.8 },
    { y: 6, radius: 1.7 },
    { y: 7, radius: 1.3 },
    { y: 8, radius: 1 },
  ];

  const treeLights = [];
  const lightColors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff];

  lightPositions.forEach((pos, idx) => {
    for (let j = 0; j < 4; j++) {
      const lightAngle = (j / 4) * Math.PI * 2;
      const lightGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const lightMaterial = new THREE.MeshPhongMaterial({
        color: lightColors[(idx + j) % lightColors.length],
        emissive: lightColors[(idx + j) % lightColors.length],
        emissiveIntensity: 1,
      });
      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      light.position.x = Math.cos(lightAngle) * pos.radius;
      light.position.y = pos.y;
      light.position.z = Math.sin(lightAngle) * pos.radius;
      treeGroup.add(light);
      treeLights.push({ mesh: light, offset: idx + j });
    }
  });

  treeGroup.position.x = Math.cos(angle) * radius;
  treeGroup.position.y = -10;
  treeGroup.position.z = Math.sin(angle) * radius;
  treeGroup.rotation.y = -angle;

  trees.push({
    group: treeGroup,
    star: star,
    lights: treeLights,
    baseY: treeGroup.position.y,
    angle: angle,
  });
  scene.add(treeGroup);
}

// Створюємо землю під ялинками
const groundGeometry = new THREE.CircleGeometry(50, 64);
const groundMaterial = new THREE.MeshPhongMaterial({
  color: 0xe8f4f8,
  emissive: 0xb8d8e8,
  emissiveIntensity: 0.1,
  shininess: 30,
  side: THREE.DoubleSide,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -10;
scene.add(ground);

// Освітлення
const ambientLight = new THREE.AmbientLight(0x34495e, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0x5dade2, 0.8);
directionalLight.position.set(10, 30, 20);
scene.add(directionalLight);

const pointLight1 = new THREE.PointLight(0x3498db, 1.5, 100);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0x1f618d, 1.5, 100);
scene.add(pointLight2);

// Анімація
let time = 0;
function animate() {
  requestAnimationFrame(animate);
  time += 0.01;

  // Падіння сніжинок з обертанням та гойданням
  snowflakes.forEach((snowflake) => {
    snowflake.mesh.position.y -= snowflake.speed;
    snowflake.mesh.rotation.z += snowflake.rotationSpeed;

    // Гойдання вліво-вправо
    snowflake.mesh.position.x +=
      Math.sin(time * snowflake.swingSpeed) * snowflake.swingAmount * 0.01;

    // Якщо сніжинка впала - піднімаємо вгору
    if (snowflake.mesh.position.y < -20) {
      snowflake.mesh.position.y = 80;
      snowflake.mesh.position.x = (Math.random() - 0.5) * 200;
      snowflake.mesh.position.z = (Math.random() - 0.5) * 200;
    }

    // Сніжинки завжди дивляться на камеру
    snowflake.mesh.lookAt(camera.position);
  });

  // Пульсація ялинок
  trees.forEach((tree, i) => {
    // Плавне гойдання
    const sway = Math.sin(time * 1.5 + i) * 0.05;
    tree.group.rotation.z = sway;

    // Обертання зірки
    tree.star.rotation.y = time * 2;
    const starPulse = (Math.sin(time * 3 + i) + 1) * 0.5 + 0.5;
    tree.star.material.emissiveIntensity = starPulse * 1.5;
    tree.star.scale.set(
      1 + starPulse * 0.3,
      1 + starPulse * 0.3,
      1 + starPulse * 0.3
    );

    // Мерехтіння гірлянд
    tree.lights.forEach((light) => {
      const blink = Math.abs(Math.sin(time * 2.5 + light.offset * 0.5));
      light.mesh.material.emissiveIntensity = blink * 0.8 + 0.2;
    });
  });

  // Рух освітлення
  pointLight1.position.x = Math.cos(time) * 40;
  pointLight1.position.y = 20;
  pointLight1.position.z = Math.sin(time) * 40;

  pointLight2.position.x = Math.sin(time * 0.7) * 40;
  pointLight2.position.y = 20;
  pointLight2.position.z = Math.cos(time * 0.7) * 40;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  camera.position.x = x;
  camera.position.y = 5 - y;
});
