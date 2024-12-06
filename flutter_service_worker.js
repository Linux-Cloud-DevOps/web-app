'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "55be4f54f9a254d8c202558fbe9b7acd",
"assets/AssetManifest.bin.json": "a401302fbe364f992feb4eded53a464b",
"assets/AssetManifest.json": "779d739019be681f533be33c91429f8b",
"assets/assets/images/png/bank_deposit.png": "c462736301e837abf442e61ae4bb0f9d",
"assets/assets/images/png/banner.png": "87c2884bb4fccb352508486215972086",
"assets/assets/images/png/cash_collector.png": "750b3b95fa830264503bd0b53c5a41ed",
"assets/assets/images/png/dubai_vehicel_plate.png": "01a29b2b624cc2eea6d2f37230b2dbef",
"assets/assets/images/png/hyundai.png": "27e0c43f78904e3ae0ff140f03620f4e",
"assets/assets/images/png/hyundai_car.png": "577aa49b31458e2586aa050329b58131",
"assets/assets/images/png/img_image191.png": "72980f61afe2a493ba942d08ceccc69a",
"assets/assets/images/png/ksa_vehicle_plate.png": "a3f11ee6bbd856bcff13c38ea085b17f",
"assets/assets/images/png/lastmonth.png": "3fc50fba8b9f1fa90656e59cac4666e3",
"assets/assets/images/png/login_image.png": "791dd547d2c4c2f177aad2be885f791d",
"assets/assets/images/png/logo.png": "13349d21e6774be5885e17b052b68f40",
"assets/assets/images/png/no-internet.png": "342fe741d228adc0ba8fd0824aa39239",
"assets/assets/images/png/profile_photo.png": "c2efbce1469d7372594db78330fcc415",
"assets/assets/images/png/searched-vehicle-not-found.png": "eaf725a1f3dfb6313f7d17daf3952b50",
"assets/assets/images/png/service_pack_image.png": "6d0577360ab07cad35ccd43e236eafc8",
"assets/assets/images/png/spareit-logo.png": "87a996def30c1431c7b38927862c9c9a",
"assets/assets/images/png/spareit_icon.png": "be7fcc09b6da37d2a2892e5645739340",
"assets/assets/images/png/thismonth.png": "26108f9d06fc21a9ed4d2eaef19d667f",
"assets/assets/images/png/total.png": "d0557ad6ccb288305f0d33097ccf3101",
"assets/assets/images/svg/atmMadaIcon.svg": "5cba3b973535565fe5d5197bcbd5d062",
"assets/assets/images/svg/backArrow_svg_icon.svg": "48fe1908f5eae527cf5f83b50acb3f4a",
"assets/assets/images/svg/backGroundImage_icon.svg": "e13df9dd6c7ac58c71ab9170c175be0a",
"assets/assets/images/svg/bankDepositIcon.svg": "756382cca1f39ef03208eb59258bc16d",
"assets/assets/images/svg/bankDepositIcon_selected.svg": "3882bb00560a48ac909ac7442c062b5d",
"assets/assets/images/svg/bay_view.svg": "636eb4829cf74e12c6b2c79aae2c1091",
"assets/assets/images/svg/bookingIcon.svg": "5fcf42b4738fd529746c5b975f240074",
"assets/assets/images/svg/bookingIcon_selected.svg": "ff0b336a4238386c3d50ff91a3e3c14f",
"assets/assets/images/svg/calendar_svg_icon.svg": "9e861da2042b38f2298702847cf62f47",
"assets/assets/images/svg/call.svg": "7a3063c6b51f81bea748eb644988de0f",
"assets/assets/images/svg/call_svg_icon.svg": "58696d9f420ed54c33c89e5414354193",
"assets/assets/images/svg/cancelled-card.svg": "e1dd6ac26bf1ed0d841dadad39d54d36",
"assets/assets/images/svg/car_image.svg": "bd43e8929c3e1c8e2c1ef88d5a18cc35",
"assets/assets/images/svg/car_svg_icon.svg": "f9efd59f03f4fea4d81ae5daeb10aced",
"assets/assets/images/svg/car_vertical.svg": "54763eff80e6b6598b47f8e66c571b92",
"assets/assets/images/svg/cashIcon.svg": "88f925c026abbec3d8379522a101c2f2",
"assets/assets/images/svg/check_list.svg": "b0a672b8b764291d4f24154b86887937",
"assets/assets/images/svg/close-circle.svg": "9886b5d4e4bd7559be197d04c186382c",
"assets/assets/images/svg/completed-card.svg": "3c13d0ed240a575feee4f844b58e2e08",
"assets/assets/images/svg/contacts.svg": "309a2de79338ad289fc297b91540e9a2",
"assets/assets/images/svg/creditCardIcon.svg": "cae4b4cbcd68830847e6fba0cda43f3a",
"assets/assets/images/svg/dashboardIcon.svg": "ddf5820906e96cea4ce8447ee36569fa",
"assets/assets/images/svg/dashboardIcon_selected.svg": "143121b148c73d3bf75c3b4382b56d2e",
"assets/assets/images/svg/dashboard_svg.svg": "b6c25959bdb494cbc22e10fc2d877d75",
"assets/assets/images/svg/dayEndOperationIcon.svg": "ebe86ce634ac078f7e01b97cb7a781ce",
"assets/assets/images/svg/dayEndOperationIcon_selected.svg": "2bd64dbe796401fca2a0f5495fffefb8",
"assets/assets/images/svg/deleteIcon.svg": "f4d2eb8a37fa3bc4cbdb3cbdfef29906",
"assets/assets/images/svg/depositIcon.svg": "42e44a8af089b7a6f7ada3efe995ee55",
"assets/assets/images/svg/diesel.svg": "4abe91b6e3d478209894c4eeac2e819f",
"assets/assets/images/svg/drive.svg": "01dcb325f76c041592d359f38c501303",
"assets/assets/images/svg/Dubai_Vehicle_Plate.svg": "ac5920b16a41c1d690c01575a4b66cf6",
"assets/assets/images/svg/edit_icon.svg": "41ffbbcf5cd582cd9e328af9f4a91d39",
"assets/assets/images/svg/electric.svg": "79fca46b61507f923da12013a68526b4",
"assets/assets/images/svg/error.svg": "f2c27d81fc7298d193c728ead27adcae",
"assets/assets/images/svg/estimateIcon.svg": "b2b400d84c7d9c916a6658b1f8b312a4",
"assets/assets/images/svg/estimateIcon_selected.svg": "e55164c44181f0c606f787945abfbbc4",
"assets/assets/images/svg/feet_icon.svg": "073d9d52d35a7a7c04ba54443e3137da",
"assets/assets/images/svg/FilterIcon.svg": "d5736ceb5ebe458a09515827689213a2",
"assets/assets/images/svg/fingerPrintIcon.svg": "15643bd87adcfc8a0212cb46e40c8406",
"assets/assets/images/svg/fingerPrintIcon_selected.svg": "ae749bc36063fb5ce8a30897db1e261e",
"assets/assets/images/svg/fleetAccountIcon.svg": "c4cb4c284dcce35701e7f4d299030cd3",
"assets/assets/images/svg/fleet_svg_icon.svg": "7d1f184f89611e31ebc2c43b5486350d",
"assets/assets/images/svg/graph.svg": "462cde1016be68403e426df90c33a6ed",
"assets/assets/images/svg/info.svg": "354a927d8a378b43c40b75a859a81993",
"assets/assets/images/svg/inprogress-card.svg": "eb86e0cefad6e08de66f954b3c53c4bd",
"assets/assets/images/svg/inventoryIcon.svg": "df9f0de3e2b6441df6257d2cdcaee817",
"assets/assets/images/svg/inventoryIcon_selected.svg": "5dd2dc3de6314ed6568fda57da5a2185",
"assets/assets/images/svg/KSA_Vehicle_Plate.svg": "b4b8120f88264c7a4e6baca45a09fcef",
"assets/assets/images/svg/language_background.svg": "8470c65292f77ef2353c6c96e74089d8",
"assets/assets/images/svg/language_svg.svg": "92c08f9e40d9c06dff6af91444f657db",
"assets/assets/images/svg/logout_svg.svg": "e188cd376e8be9efb9614360941b64e3",
"assets/assets/images/svg/loyaltyBadge.svg": "e96effdd104f052c374e6183a002cff4",
"assets/assets/images/svg/message_info.svg": "23d9ced7234721fc070be93803ca08fc",
"assets/assets/images/svg/mokafaaIcon.svg": "a804bf3163bfc91191b9f5e7aadd38ac",
"assets/assets/images/svg/myCustomers.svg": "a722641c046cf436a4348599666f6111",
"assets/assets/images/svg/my_customer_svg.svg": "a2bbd6431440192f61ff727e96fd5f22",
"assets/assets/images/svg/my_order_svg.svg": "9c24a26d3ab6846a6ca912b38c05c371",
"assets/assets/images/svg/newJobCard.svg": "223a754d296a2ed8a12603b451b1ec31",
"assets/assets/images/svg/notification.svg": "fd43acfdff3128a6350bd34b7b8ba96f",
"assets/assets/images/svg/not_verified.svg": "271620e85753c9d502b3a1143a57274c",
"assets/assets/images/svg/odometer_svg_icon.svg": "dcac711700148b8c87f8cec79e43be68",
"assets/assets/images/svg/orders.svg": "18ddd99fd8ecefd0d5e2670f3265548a",
"assets/assets/images/svg/order_view.svg": "e5bd68d821ee1c781295c8ec52f6ab4b",
"assets/assets/images/svg/Password.svg": "841a0256f85facda8b3744584f9cf24b",
"assets/assets/images/svg/pending-card.svg": "e4625ad2dab6d19b740cfea89393b1ac",
"assets/assets/images/svg/petLoyaltyPointsIcon.svg": "a804bf3163bfc91191b9f5e7aadd38ac",
"assets/assets/images/svg/petrol.svg": "d4cb829f9cd0cd83687bcbbbb6da8dbf",
"assets/assets/images/svg/petrol_drop.svg": "c3b93a66d3009469f4c8843c851379e9",
"assets/assets/images/svg/plateNumberSVG.svg": "e58056dcc2480ac2ce617657ab4a1ab1",
"assets/assets/images/svg/plus_with_circle.svg": "a35151eb129b90c5a0006cbe4caaa141",
"assets/assets/images/svg/printIcon.svg": "aeacb8b6e961612e0e80bb9461a6389a",
"assets/assets/images/svg/record.svg": "27f1ff5c1e18b5cdf7fbc2390d64d94e",
"assets/assets/images/svg/refundIcon.svg": "94e6188e85d456958c1d0fc5fb9231d3",
"assets/assets/images/svg/refundIcon_selected.svg": "1c0c68093b03a90047e6d74941c84f82",
"assets/assets/images/svg/refundPaymentBanner.svg": "c9573759f5a04ff609888a321646ced8",
"assets/assets/images/svg/refund_payment_banner_new.svg": "12a10c89b51951af3c93583f4df4c6bd",
"assets/assets/images/svg/reportIcon.svg": "d78f65b2e066f7e4a1c23b7c79e70db9",
"assets/assets/images/svg/reportIcon_selected.svg": "ddcefa5adeb9d4ca126021c449667fd5",
"assets/assets/images/svg/rewards.svg": "f2fdaacd8a39cd1d5e850041ca4bf2d0",
"assets/assets/images/svg/reward_badge.svg": "105c8d21d71201a9aa45b29d557a0e1b",
"assets/assets/images/svg/salesTransactionIcon.svg": "84858d75c83e524e92f1160197fe39e5",
"assets/assets/images/svg/salesTransactionIcon_selected.svg": "ccd6e5bddf6c6b51909efb284de2edfe",
"assets/assets/images/svg/saudi_arabia_flag.svg": "86df1267e26b05fb527a65791975954b",
"assets/assets/images/svg/serviceHistory.svg": "f5e961bb9968fda62a06ecbd2c8b0886",
"assets/assets/images/svg/service_history_svg.svg": "b8794c675d5f460de14b65bd87666761",
"assets/assets/images/svg/setting.svg": "f63e704fe707d5a2f4f275ff5b70c8aa",
"assets/assets/images/svg/SortIcon.svg": "aa10016f2021dd98351b74e8464c46bc",
"assets/assets/images/svg/spanMachineIcon.svg": "a804bf3163bfc91191b9f5e7aadd38ac",
"assets/assets/images/svg/staffTransferIcon.svg": "60ffd767bf3e1ca9618a79f435695a5a",
"assets/assets/images/svg/staffTransferIcon_selected.svg": "79e9b25c5b0dea6d0dfbcabd5fc1af32",
"assets/assets/images/svg/stickerIcon.svg": "19e9ed1595e081832f52b601b588457f",
"assets/assets/images/svg/stickerIcon_selected.svg": "4d84e2c54681b3e84c3cc4fb08617466",
"assets/assets/images/svg/support_avatar_svg.svg": "687a5861e49160a3b10556fbfd63d8cc",
"assets/assets/images/svg/syntetic.svg": "5370a22c2f3c0478c894233fafd357bf",
"assets/assets/images/svg/tamaraIcon.svg": "59797147010490b6e5e939fbaf4aaae5",
"assets/assets/images/svg/technicians.svg": "1a5a10655c9df8d5a625cceb05ab1a30",
"assets/assets/images/svg/tickIcon.svg": "c319621fcbb38d1865960d4bfd64e94d",
"assets/assets/images/svg/uae_flag.svg": "def423f69e7439c3ab65b0ebcb69cfee",
"assets/assets/images/svg/user-octagon.svg": "b97946a704b390a6e652af9286f8ad78",
"assets/assets/images/svg/User.svg": "1c8bc1a3425fa1cb8b4a1d6d645ecca5",
"assets/assets/images/svg/vehicle.svg": "ec33a46d0808ddace09750d69d0b0d2a",
"assets/assets/images/svg/verified_svg_icon.svg": "2d8d180831c90d86d8486e5017a03d65",
"assets/assets/images/svg/vinNumberSVG.svg": "623199a2e40dfa82458dd483e6837804",
"assets/assets/images/svg/warningIcon.svg": "3103fcc9b202001faa5afdd9d62a72da",
"assets/assets/images/svg/warranty.svg": "1b98255dba5b78904cc01f7a3c4ace0d",
"assets/assets/lottie/loading_asset.json": "57b8602d531a84785785908d43275b5b",
"assets/assets/lottie/loading_lottie.json": "fbeb0a216a30f9f1a7b8ce84136ba122",
"assets/assets/lottie/loading_lottie2.json": "e11cc89433a8b63c763c35cb3fe08771",
"assets/assets/lottie/loading_lottie3.json": "1684bbaaa56df75751376aa01fa03cac",
"assets/assets/lottie/PE_loading.json": "589f0455ae4f059d7f0c4f9a84f48781",
"assets/assets/plane_indicator/cloud1.png": "136efc4db543d4f6fa78e5b3ed695cdc",
"assets/assets/plane_indicator/cloud2.png": "a9912c93911e938d58131b7fb07b34f3",
"assets/assets/plane_indicator/cloud3.png": "0e663b4f9630f0d13942a5e0cb1641ea",
"assets/assets/plane_indicator/cloud4.png": "2fa64f60a94c34c631d48051733f5e55",
"assets/assets/plane_indicator/plane.png": "36c859c87c2e772c608dfbaf658d1de4",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "d82d664c04731f0fd97719beb9b13444",
"assets/lib/generated/app_ar.arb": "31a28c009c4915da09ab2d5dd4d29702",
"assets/lib/generated/app_en.arb": "ea0940f087b2f2796e772ebfb0981884",
"assets/lib/generated/app_gu.arb": "37f629d4dc0013fa0fc8928f3defef96",
"assets/lib/generated/app_hi.arb": "476c3cb733d94fe83aac4e3858255ac4",
"assets/lib/generated/app_kn.arb": "bd18e94459faa73897b4523445f033c3",
"assets/lib/generated/app_ml.arb": "2daacfb885f1e855b59b3360415f3273",
"assets/lib/generated/app_ta.arb": "c64aa28bdc22d7eca57f92816940e605",
"assets/lib/generated/app_te.arb": "18064f608fac65c0ad07c19c6f343ce6",
"assets/NOTICES": "2380e09457c8e291bfeba47d5b8cb97c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/spareit_temp_package/assets/images/svg/close-circle.svg": "9886b5d4e4bd7559be197d04c186382c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6026fbc2ff22426ad1beb81da9fc54ed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23563a645a74eef2d8683df5c46d551a",
"/": "23563a645a74eef2d8683df5c46d551a",
"main.dart.js": "8bd95dd488cc80b8941015350984b529",
"manifest.json": "916960a2acb53092c55b00313122de3b",
"version.json": "2d2733bc3492845b508617ac53d99366"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
