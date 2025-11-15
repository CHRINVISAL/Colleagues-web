'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ff012622202636b9f7bc07c159ad2e79",
".git/config": "d693f09eb30b8548bbfbe3da43d55725",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15f5972a2d351324e313dfbe6bf7e5d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69cf90a83606d0f14a8c9a2e36672c33",
".git/logs/refs/heads/gh-pages": "69cf90a83606d0f14a8c9a2e36672c33",
".git/logs/refs/remotes/origin/gh-pages": "499142bd52b65b65933170b661693bba",
".git/logs/refs/remotes/origin/HEAD": "7f5719d285b3fa88a91bcc489d23fba4",
".git/objects/04/3b607ca0946428bbe5569d87bed9276ea64f45": "5cf3e80bc05b34dea69482ae50feac61",
".git/objects/05/298ac4955ab9f3c7d89b9714dd68271763369f": "1162840adcc2ae9ff1045ea94532c066",
".git/objects/09/d044cc8f0ecbb8024b8ddc548c7216cc6baa09": "95bfc90089411b4a50a33f151cb3032a",
".git/objects/10/c1b346fd806fbd1d224949abcc838e345acd5c": "5d6ec07becd85a0dc42bd95c5ce2e094",
".git/objects/1f/2ea11e7f0069b02b6f715f9735b8a31b234538": "9f407f0227e9088dc55d244fd862f113",
".git/objects/27/dae21e3a790f50d200de57811dbe099d21dc91": "5efd1fbe1992fe6d8e5527332651911f",
".git/objects/4e/a72a911af2d782f20b992e808276bb838718d8": "879d3d367ee3f1259cf89544b6f5bab2",
".git/objects/4f/10022d5a1130f5728dfa4ffce722e7175436fe": "1e1b5dce139efe74c459f283bb05176b",
".git/objects/5f/45a598d68105294bad0312565b129ace9e37c0": "1af3ada765231b9a7349bd3e0625bc04",
".git/objects/5f/c74ad1c35865a34f4e1cabf27ee67d8b1684dd": "af4629266496392023664e94756b4008",
".git/objects/68/fff8fc5406be066cca566990a4396950b9bd3c": "19e76ec0483d9d45767fa5bf255e368e",
".git/objects/77/035af521b4a5726764c1c106aa957b2bcdce96": "0276d095ed91ace71f9a126fe2708df0",
".git/objects/7b/08163cebc50fb3e777eea4881b68fcebc10590": "f433753c476f6cdca99ea5dbc0847138",
".git/objects/7e/f04e2ea0752989be4a246d998b53adf46bab42": "abf8a785a80f05ba1a3aeef62c8ce81c",
".git/objects/81/86f6539f77d3aee249bdbde9def368d8d8ce00": "e0d8f4c6d6b84f0741e3215117148e69",
".git/objects/84/47ce6b48a8c7beee78c9cc8f28cbb54a0299c7": "c58296907f0ecab877570628909d85f5",
".git/objects/86/48f9401aa827dc53e658ac3b1c1f1556df236b": "b5a54b6c1372179f7c5002d51ca4fb19",
".git/objects/89/c07510e8b5342a52069cf349497c9f9c2eab02": "064fe70423399f60068d744b39ebf496",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/af/01fdc3d22b42ca339865db1a060a06a04a993d": "11ff5c1bdf62363dcd740ffb8c7f4429",
".git/objects/af/efa51330508c16bff3d07556ee7d47371a48c1": "324c3f61a0fd530f32ec463b73d9e629",
".git/objects/b4/f245532ab440bd93e89686898a51a601a8bb77": "dc0050fec502f39dd08dbd0dd0d45f13",
".git/objects/b6/7789bc8fac3f8ce15e18f20fc40cad65e5575a": "ef0b56a0082b97a8541413aa74863152",
".git/objects/b8/6be32b130bdaeb1b4d8209b56e099928d7ac3f": "cf557d260cbc6813aa1685d923485db2",
".git/objects/ba/b42d248ad60bd0e2a46e4ec837bbc4e6196122": "c4987f80be72fe7810196b2c2b38be53",
".git/objects/bc/b834799df3580cfbeb16350e1af684cea1dfef": "fc1dbe1f5960feca27a08fcca8a1e6db",
".git/objects/cb/e3684bb0026a914e06bc6d5537ebb64e0905d6": "17df9df0246cb1357cdc5f17c7914c27",
".git/objects/ce/a4778f615d54d85bdf04a885d15ebdf2625a8e": "a5816c21a94c72a583a565af457bb029",
".git/objects/d8/7988843978cb5279ed2bb3214a0c20501124db": "3912144c5ed42be2823e70d30c2086ec",
".git/objects/df/87cf951fb4858ab7a76b68dd479c98b2df2404": "04fe2b1fb5de9582f647e8ac2993d2a1",
".git/objects/e2/70e7ad496b2a503599929a4988f11cf2dc4094": "55d872c222296bf3e2f6112cf4ed65a4",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/fc/5fb7fb3a344acfb589293af8a8424586ac6e4e": "771981270ce8d55bfd1729be68c7ac2a",
".git/objects/ff/e69115d9143d4ea81f5d3252c62c3b4371836d": "091863860a63598a46607acb5a95ba1e",
".git/objects/pack/pack-6c10f7c4de5604f66826c811109d0a62c9d5fb52.idx": "322250146b7692493818a2c8b52a8bd5",
".git/objects/pack/pack-6c10f7c4de5604f66826c811109d0a62c9d5fb52.pack": "8eff65115fe0b457efac900283375f07",
".git/objects/pack/pack-6c10f7c4de5604f66826c811109d0a62c9d5fb52.rev": "4f1fa4e36406370567d236453734f841",
".git/packed-refs": "4ab6d966e39805ad2c3caa069cd37f8c",
".git/refs/heads/gh-pages": "27b7aaafe132b7c5cb064886b68eea2a",
".git/refs/remotes/origin/gh-pages": "27b7aaafe132b7c5cb064886b68eea2a",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".idea/copilot.data.migration.agent.xml": "2ec93051af2a04305b2ce905d0799a0e",
".idea/copilot.data.migration.ask.xml": "c236f1695918f68792654fbd28f0b82f",
".idea/copilot.data.migration.ask2agent.xml": "5ae6376d0447439987e63236bc016174",
".idea/copilot.data.migration.edit.xml": "265af5708780cab08862d5ff9eebcbb0",
".idea/encodings.xml": "1f02723bd2c50b7cd3c5a18eb42149af",
".idea/indexLayout.xml": "1877d9057c34496132daa816c6e6da7d",
".idea/projectSettingsUpdater.xml": "7a17509e4a5b26e354bb7d3926fb731c",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/workspace.xml": "2b1aef4c70cc9a6faf657943874ab45a",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fb99835617fe594940ebd6ebac578de6",
"assets/NOTICES": "493e97320c8731bc7f7d9f483e7d44b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c7616cf7a672381485debae5d418b303",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0b84ec6bc734454fd93a5ad3ae00514",
"/": "f0b84ec6bc734454fd93a5ad3ae00514",
"main.dart.js": "f87f411f6c6c19b8d84a40eb09aefb31",
"manifest.json": "76d1eb8ffde971000e41d629d7c3a8d7",
"version.json": "be61e11badc9f63f5bf46333ab4992ff"};
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
