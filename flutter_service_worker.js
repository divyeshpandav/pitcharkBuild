'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "33db285532619643ad02c1f648cc529f",
"assets/AssetManifest.bin.json": "2f6dcb4833799c68edaa03fb9b76ddee",
"assets/AssetManifest.json": "7346508769492ef14ba7fe451188fb30",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/gif/coinprofile.gif": "8a20c93a9d1462e42fbcec6ce1ffeed0",
"assets/assets/gif/cube.gif": "1f1b5cbf617971e8db1ec8e2d35d6ce7",
"assets/assets/png_images/about_screen_logo.png": "f7ffeeadde87a0049aa7021ac8b95cd0",
"assets/assets/png_images/applogo.png": "3006cca4e20c24049ed8f7280cddd1b5",
"assets/assets/png_images/background.png": "f60482033bf12fb985b26a8f5870acc5",
"assets/assets/png_images/bottomsheet.png": "8612cd3da734ef06c0aa5827ea5aa6e5",
"assets/assets/png_images/bottomsheet2.png": "85003d736d0aeb5b18efc74da95aa0ee",
"assets/assets/png_images/coin.png": "50b9cb2297ad228936a9a788079f35c9",
"assets/assets/png_images/coin2.png": "70478c53b95014d1c478d816a4b0d08e",
"assets/assets/png_images/coin3.png": "2e7ce23f2578234e8d4709dcdb25dcf8",
"assets/assets/png_images/coin4.png": "9ce9540a4316d5239eb342d2b882bbeb",
"assets/assets/png_images/coin5.png": "0decc41aee46ecb771e3ed246b3cf517",
"assets/assets/png_images/coin6.png": "ea488e32df1383b742287a3e42d0324f",
"assets/assets/png_images/coin7.png": "a74fb6ddda2329bc4654c8e02a331921",
"assets/assets/png_images/coin8.png": "ef202b16d296e657cc107d5905c463ee",
"assets/assets/png_images/coinbackground.png": "87b62e7bbfbdcac75955100b25a2251f",
"assets/assets/png_images/coin_icon.png": "046ec89bd577e48dbbd3aa1225069e60",
"assets/assets/png_images/createaccountbackground.png": "ffa77eee42dd8055d86ac172cc6c002f",
"assets/assets/png_images/drawer_header.png": "5f93678fddac5af9d9b047f411bf26b9",
"assets/assets/png_images/envelope.png": "e1adea8f75d5e71dc1518e99bdff05e5",
"assets/assets/png_images/home_background.png": "d3a426b1f3169e18267ef70a0fed4009",
"assets/assets/png_images/idcard.png": "3025d0b9d4b7bcf4c2d24b55b5b5c499",
"assets/assets/png_images/logo.png": "24ef7737b376124b7770708f636f625f",
"assets/assets/png_images/mobile_img.png": "05402dc63088f905180356929cd090cb",
"assets/assets/png_images/notification_screen_logo.png": "dc63d0ec34194658813df69e6fb89202",
"assets/assets/png_images/placeholderimage.jpg": "5d06c7be9b747abb0d140c706d30063e",
"assets/assets/png_images/polygon_background.png": "b161769ff9076fcaa8b8eb1f97c233c8",
"assets/assets/png_images/premium.png": "bda6c00d03acac4293eee56b8b7108fe",
"assets/assets/png_images/profile.png": "9bf557c6bf443872768bd51da01093e0",
"assets/assets/png_images/profileicon.png": "36c07113eb319265a7c743543d43a3cd",
"assets/assets/png_images/splash.png": "51ccbc369aa81d13ef2c60bdb95d0d11",
"assets/assets/png_images/splashhome.png": "e6fed5d0973ad29d3a9163f057ea6a67",
"assets/assets/png_images/splashtransparent.png": "e4bbb3d0e1280c32005042118e1c7c1f",
"assets/assets/png_images/wellness.png": "63ea4b443645ba01eed51ae8b2a7f429",
"assets/assets/svg_images/about_icon.svg": "861cdaab8469c7b64ff2e1e6dfb0f5f5",
"assets/assets/svg_images/adhd_icon.svg": "d2c3454d1c050ebcd53ed68cb4e1d804",
"assets/assets/svg_images/anxiety_icon.svg": "66b7500a0eea8ea8ea2faabe857e8f98",
"assets/assets/svg_images/autism_icon.svg": "aadc9e5eefed8acec801a37abac99d4f",
"assets/assets/svg_images/awaken_icon.svg": "9a03658f294a0f835039964c07779760",
"assets/assets/svg_images/biography.svg": "5eff40541de6b5161bd9a1bfc6333516",
"assets/assets/svg_images/bipolar_disorder_icon.svg": "5a757cd74d54863b12cca37d20b24cc4",
"assets/assets/svg_images/calendericon.svg": "e8369391f9593a363d80d797eb60f97e",
"assets/assets/svg_images/check_green_icon.svg": "a747038f888db68c0d34470601fdd2d1",
"assets/assets/svg_images/check_icon.svg": "20e80cd048d2a9b0f46057176fbc3f7a",
"assets/assets/svg_images/close_drawer_icon.svg": "7d4d8431e91d23cb20b338cb8c4abcc3",
"assets/assets/svg_images/coin_image1.svg": "85403a29b5d989205f514a11b86678b0",
"assets/assets/svg_images/connect_icon.svg": "df50d33b852a51df5c95afc1c25a9e28",
"assets/assets/svg_images/content.svg": "bb0a6d2675a1eff094da3b086550d844",
"assets/assets/svg_images/cptsd_icon.svg": "8ac9676cdf7508d328bce0bd9f17fccf",
"assets/assets/svg_images/cube.svg": "7d394240a514f29ce64a9b5c94a77006",
"assets/assets/svg_images/cube_icon.svg": "5c799fcc0f363f1b1cf8883db398e453",
"assets/assets/svg_images/daily_quotes_icon.svg": "0aeac3c8fc04185f0318b3aa636146e7",
"assets/assets/svg_images/date_icon.svg": "7e48c9862c4549cc6837ab31ddc78e61",
"assets/assets/svg_images/delete_img.svg": "676adb53e2e6aea64919dcb05d403a76",
"assets/assets/svg_images/depression_icon.svg": "d12c8f3c404b543fb9457def64ee459e",
"assets/assets/svg_images/disorder_icon.svg": "89fa18642a00beb78a4da978a97ca00c",
"assets/assets/svg_images/dropdown.svg": "6f6fba71f51437692ff3e94515167f4a",
"assets/assets/svg_images/edit.svg": "40cef0014995af94ee15c0250d8e5732",
"assets/assets/svg_images/edit_profile_icon.svg": "98385b4dd8d44210926cb1a339c88c26",
"assets/assets/svg_images/email_icon.svg": "a1b0e19dd6f9905919a75cec04436c58",
"assets/assets/svg_images/energize_icon.svg": "f80e939c31b173ddd4d9f255e1829f32",
"assets/assets/svg_images/experience.svg": "be9907b44d5d851817b422a17ff13d3a",
"assets/assets/svg_images/feedback_icon.svg": "0e87fd4d73bc2f85480c5499ef5fbfc2",
"assets/assets/svg_images/friends_icon.svg": "a627a7b3dd120685e281216d2bb3ca47",
"assets/assets/svg_images/gradient_container.svg": "8d9f7cd5cadd72b667c4cb12ff5cc2cf",
"assets/assets/svg_images/hidepassword.svg": "9d42f198f322af2bb31a1ed77335af15",
"assets/assets/svg_images/history_icon.svg": "6655ffce2bea3ee3d5a0ff6787191d1a",
"assets/assets/svg_images/home.svg": "7d382b6f25cfd7bc807aa2ae58521e7b",
"assets/assets/svg_images/mapin.svg": "9bc318b5d9561e8e224b7613de40c9b8",
"assets/assets/svg_images/move_c.svg": "352c365b666279d1fd52e4fff5a4617d",
"assets/assets/svg_images/notification.svg": "47efa3da98421177b23b38afc2b2d064",
"assets/assets/svg_images/notification_icon.svg": "ac1b0a70c33555daa5c1c0ad4c9c9866",
"assets/assets/svg_images/ocd_icon.svg": "d5aac3c615e952e00866582ed257874e",
"assets/assets/svg_images/pdfimage.svg": "8a9ca3b613452207862ee39734874dc6",
"assets/assets/svg_images/pitchlibrary.svg": "7e20572d36e933d7487e695f93c6856c",
"assets/assets/svg_images/policy_icon.svg": "5590d3098855a08ab53f8e01f9c8df05",
"assets/assets/svg_images/powerpoint.svg": "d8a2f0b54eb34ad25531c87d052768ee",
"assets/assets/svg_images/profileicon.png": "36c07113eb319265a7c743543d43a3cd",
"assets/assets/svg_images/profile_icon.svg": "8a6388b546c4a23ed57cb5cc013d66ba",
"assets/assets/svg_images/ptsd_icon.svg": "da7adad7063f52ceee239ed9d8b19af5",
"assets/assets/svg_images/recharge_icon.svg": "e01f307c8e9997d9bc69099a73c907f1",
"assets/assets/svg_images/redeem_icon.svg": "8cc0a3e80f3fdd60ef98ff66f1e229c0",
"assets/assets/svg_images/referral_code_icon.svg": "11e760a61eda6ca8fd9fc8ce1d73d703",
"assets/assets/svg_images/report_icon.svg": "3b67d7ba873462dba9fdb8e477a2ca09",
"assets/assets/svg_images/restore_icon.svg": "b461c70af7bd82f7621f3367b6c13a58",
"assets/assets/svg_images/rewards_icon.svg": "a848c6bb9fc37fedec03b491193edd95",
"assets/assets/svg_images/right_arrow.svg": "cee5b50679732ae57cb6fc8b6f168f1a",
"assets/assets/svg_images/settingsvg.svg": "b366f43c1bb3ffe34de0f78ba6fc66a0",
"assets/assets/svg_images/settings_icon.svg": "7d226d52949bee0fedc152b516e18349",
"assets/assets/svg_images/sms_icon.svg": "c0faa7f8541615bf11927385e62265d4",
"assets/assets/svg_images/spectrum_icon.svg": "83af01dd9543f85e136337749ab40057",
"assets/assets/svg_images/subscription_icon.svg": "fdd5003b93882842f24c08970193c44f",
"assets/assets/svg_images/template.svg": "f0a73415bc297ec06c44c113c43e8412",
"assets/assets/svg_images/terms_icon.svg": "5d59291315d23125832f2af21c3d38fc",
"assets/assets/svg_images/thrive_icon.svg": "08047cc91ea1688c69272c6581cb0df4",
"assets/assets/svg_images/upload.svg": "a8afbe76a2597c065bc639db725237d1",
"assets/assets/svg_images/upload_file.svg": "aefd50fc15e43cf4e1201427feb0067c",
"assets/assets/svg_images/upload_svg.svg": "d64b9c7644685606bed4e5bdb4e6944d",
"assets/assets/svg_images/wellness_icon.svg": "637ffdda4272601458f7a4b396b1f4a9",
"assets/assets/svg_images/word.svg": "176d06338db25f255ee356d195b2bd41",
"assets/FontManifest.json": "934e9c2de1a26d0f2e825fb6f772db89",
"assets/fonts/MaterialIcons-Regular.otf": "b262d848b31de2f58fe4e5e50a602293",
"assets/NOTICES": "5fdfc6ee0b825035593f9cbb6ed455fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3f524775a47c9b829256e93d2c1946b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "36b292a64ae3bb963f71c5fa6a4ebd9b",
"/": "36b292a64ae3bb963f71c5fa6a4ebd9b",
"main.dart.js": "948f79805e85e2a2d2b34d1cc21afa88",
"manifest.json": "96197fb582d39fee2c64a1450472124d",
"version.json": "8305de673942c8bafaa559ef17f20187"};
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
