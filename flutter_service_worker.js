'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0c486ca99dbe8ff0df715f2b1d0ec78a",
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
".git/index": "3f762435a76f2a3ac16043434db16953",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a4a42a4d6df196baa1ffbae08b844ae0",
".git/logs/refs/heads/gh-pages": "a4a42a4d6df196baa1ffbae08b844ae0",
".git/logs/refs/remotes/origin/gh-pages": "8009dcfefb8d404a702c720d5381f498",
".git/logs/refs/remotes/origin/HEAD": "7f5719d285b3fa88a91bcc489d23fba4",
".git/objects/00/6c5babf1633f29336c969c5ffc254b6e268d40": "100b448d60ce75a0f38a787ffa590f0d",
".git/objects/03/f6cab9bac60324321193508209dc7580cd816f": "6cbe1cb26b18c0added122261e984bce",
".git/objects/04/3b607ca0946428bbe5569d87bed9276ea64f45": "5cf3e80bc05b34dea69482ae50feac61",
".git/objects/05/298ac4955ab9f3c7d89b9714dd68271763369f": "1162840adcc2ae9ff1045ea94532c066",
".git/objects/09/d044cc8f0ecbb8024b8ddc548c7216cc6baa09": "95bfc90089411b4a50a33f151cb3032a",
".git/objects/0f/70fe939fae2a0b9ad93954161db1859c04d240": "02f22ccbd1c672dbdf634fa2627ef573",
".git/objects/0f/d85d5732bb1b79daf5ec79f2c88b3dfe97a99d": "048c772d69401c470734187651896c9e",
".git/objects/10/c1b346fd806fbd1d224949abcc838e345acd5c": "5d6ec07becd85a0dc42bd95c5ce2e094",
".git/objects/18/4537965d995ce6488f1db69b08397c511fb500": "364c3ff1d95be7da90a784385bc50498",
".git/objects/1f/2ea11e7f0069b02b6f715f9735b8a31b234538": "9f407f0227e9088dc55d244fd862f113",
".git/objects/1f/339ac7e038f04e896ec746e118da49b6d720ed": "569bb3946399d4fee885b1a834341ad0",
".git/objects/27/dae21e3a790f50d200de57811dbe099d21dc91": "5efd1fbe1992fe6d8e5527332651911f",
".git/objects/3f/000c45dba0305ac99d026eb3a3adfcff35e05d": "c614b8d02067d7826a1e3902582d74c1",
".git/objects/44/10ac68fb80947101825edcff3ba8c51d6c081f": "f756bec06adce48116d864ca482e40c3",
".git/objects/44/6a9c4abad0515b56c2cdd66549c03ff656f70d": "d2887b918836925a1643d857a5699a79",
".git/objects/46/3a10193fb4b1ab3586cb379352779edc6e880a": "65270d903d766714b425be43abfe8ebf",
".git/objects/47/0c2ce3d7d79bf755fffb34c552cf2b3ea99f47": "dd31f38e5952eebce4e4918f74ab847c",
".git/objects/4b/3ee0a451af486911669ee784ac111069a85df5": "60e77348a1b2b790b025e77c692f99fc",
".git/objects/4e/a72a911af2d782f20b992e808276bb838718d8": "879d3d367ee3f1259cf89544b6f5bab2",
".git/objects/4f/10022d5a1130f5728dfa4ffce722e7175436fe": "1e1b5dce139efe74c459f283bb05176b",
".git/objects/50/68a1de22faa158bd88fa9548a9662913d11a70": "4ee4f08a4dcc717d5166b0304b2ba2b8",
".git/objects/53/80cfc06f532e53ea80bcc997af748d75e656e5": "3ab36b78f904d82eb152719573f674cd",
".git/objects/54/3e9e15023dc3213c65146be01626705d58dc87": "3a2d0d0c116594cafc6b6a8b48cf548b",
".git/objects/59/7cc1b50a52af2111d1d77c5665e73d74780f30": "c537dbb6599e7d71dff6921465215d26",
".git/objects/5c/1aa342d7a0f331091ffe71e78e1bb9b2c270f0": "f23374d0b7be2a4d7ab162f0ee829f7f",
".git/objects/5d/fdc7d0f63cd98fd1de244ab32d36d6b7c7857d": "b2d733d08bb416b8e2ee0173d7c0a34c",
".git/objects/5f/45a598d68105294bad0312565b129ace9e37c0": "1af3ada765231b9a7349bd3e0625bc04",
".git/objects/5f/c74ad1c35865a34f4e1cabf27ee67d8b1684dd": "af4629266496392023664e94756b4008",
".git/objects/5f/f071def0395c718050f18e20f20d472cbca61e": "08c30802416834d9a2b2246d451c3f15",
".git/objects/68/fff8fc5406be066cca566990a4396950b9bd3c": "19e76ec0483d9d45767fa5bf255e368e",
".git/objects/6b/0eb5d766ad8bc1f4b85f7d5736ea62ff65814b": "6cf62d21b2fd4e912527a928e12605cd",
".git/objects/6c/540f6820202f062f2eec59f1ebe4dd7642b471": "1d7edffa393d3ff4a5d63e7500585f2e",
".git/objects/6e/e1caf6f1cd123ba63de31812defc2ab781bc2c": "039cbc8713b769a4838fcd151eae5aec",
".git/objects/76/0f067446b99beed28336c38caaebfa0bc2e20e": "8311f228d24ffc1f96cc846f04d216ee",
".git/objects/77/035af521b4a5726764c1c106aa957b2bcdce96": "0276d095ed91ace71f9a126fe2708df0",
".git/objects/7a/78613dc4d9750c01781157e5e8295f082c89af": "d1296ce01aaca3b159a483dfc8577765",
".git/objects/7b/08163cebc50fb3e777eea4881b68fcebc10590": "f433753c476f6cdca99ea5dbc0847138",
".git/objects/7e/56575e9c454c1688b2720d7ac5426929abefdd": "09f218f9509ac761126822f4b593bccd",
".git/objects/7e/f04e2ea0752989be4a246d998b53adf46bab42": "abf8a785a80f05ba1a3aeef62c8ce81c",
".git/objects/81/86f6539f77d3aee249bdbde9def368d8d8ce00": "e0d8f4c6d6b84f0741e3215117148e69",
".git/objects/81/a23bdc52ba1146dff15c632b45e9f4f83d957b": "455174a2c5100c717267b783e86bc7e5",
".git/objects/84/47ce6b48a8c7beee78c9cc8f28cbb54a0299c7": "c58296907f0ecab877570628909d85f5",
".git/objects/86/48f9401aa827dc53e658ac3b1c1f1556df236b": "b5a54b6c1372179f7c5002d51ca4fb19",
".git/objects/89/c07510e8b5342a52069cf349497c9f9c2eab02": "064fe70423399f60068d744b39ebf496",
".git/objects/8d/e2c0a61b2259090e9c8807577998f17490dcec": "b5e7ca594bbdf6a1e707eff6c310f6a2",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/95/217cb2576b1c4a662b907ae937df535c023afe": "7f8dde648e7fdb997d467421337cca23",
".git/objects/9b/1541b0a7f920f11222ff2cacae6d788c4d21a7": "8e90e1fe19ff86572532e81e77295494",
".git/objects/a0/f0b6e6e699cfb13d65ab265af67eaa5b4f73bd": "8ffa1ece646102697b12b4dd2ada113a",
".git/objects/a5/800d61ba4c3a8e3c5df39a81bd89a170487419": "f779a59ec6cf05d3f5d3b66fdb272c41",
".git/objects/af/01fdc3d22b42ca339865db1a060a06a04a993d": "11ff5c1bdf62363dcd740ffb8c7f4429",
".git/objects/af/efa51330508c16bff3d07556ee7d47371a48c1": "324c3f61a0fd530f32ec463b73d9e629",
".git/objects/b1/4d9fbbf2573b2c296873d63a50c4deb732dd4a": "1ad66ef2d9021880a3039794072889dc",
".git/objects/b4/f245532ab440bd93e89686898a51a601a8bb77": "dc0050fec502f39dd08dbd0dd0d45f13",
".git/objects/b6/7789bc8fac3f8ce15e18f20fc40cad65e5575a": "ef0b56a0082b97a8541413aa74863152",
".git/objects/b7/9cabc3d83c584982f28383d9fa66feca1a2d26": "483fbafdb0e4831e932db336cb728bbd",
".git/objects/b8/6be32b130bdaeb1b4d8209b56e099928d7ac3f": "cf557d260cbc6813aa1685d923485db2",
".git/objects/ba/af837a49aeedb5baebb0aecf06195439da24a0": "3674bff928bcfba06c593d2747b1d556",
".git/objects/ba/b42d248ad60bd0e2a46e4ec837bbc4e6196122": "c4987f80be72fe7810196b2c2b38be53",
".git/objects/bc/b834799df3580cfbeb16350e1af684cea1dfef": "fc1dbe1f5960feca27a08fcca8a1e6db",
".git/objects/bf/9d369323d3ddfb93f1290014e1c7fec13602a2": "f514b016d0c39c72cf616d5ac8ed3335",
".git/objects/c0/9ec8505c30ec7359d4d0bc4f0116f8adb30aed": "e6c39db4c0217a4af6b36f1c30dc3f80",
".git/objects/c2/0a8a958ec104ff9c77d358144b87e97b325461": "38e186cfc2c201605319006636ef3148",
".git/objects/cb/e3684bb0026a914e06bc6d5537ebb64e0905d6": "17df9df0246cb1357cdc5f17c7914c27",
".git/objects/cd/f1b698c3bb59594fe232c432896fdb22f502ce": "5514be316381a742e804e7f17daf9708",
".git/objects/ce/918cb11be3c0f0d61087cc8c6522312e48d6a6": "f6d27e17fae01f0d6fc8abc18f0e8c4f",
".git/objects/ce/a4778f615d54d85bdf04a885d15ebdf2625a8e": "a5816c21a94c72a583a565af457bb029",
".git/objects/d4/19ee70f8a6ebe1da95ab243a46c10fda83a62b": "f7404cf44aa9338f101ccea6a04a3fb8",
".git/objects/d8/7988843978cb5279ed2bb3214a0c20501124db": "3912144c5ed42be2823e70d30c2086ec",
".git/objects/d9/20e89c06bc7a02f21b8bd9597b72acd3123e9d": "6fbc8cc879cf64829aa1dfce4b59d52f",
".git/objects/db/37e77dbee937b50412343db37d0b37065e1938": "93728b0a8fcf159e2c9802fae0b1c115",
".git/objects/dc/5a78a4850f6db241f541f384a8f81a7b089470": "75b065052051c33e2cb21ac5ddcdbfc8",
".git/objects/dc/bdd4704443476975175d2b9f42f5a381a26c03": "6eeb90c6a358f46a47d22ed13436f889",
".git/objects/de/9653e473ee4e1caeb835e3f91eabbda09c2d5e": "7e961f18954c714227ef3e5dbed321d5",
".git/objects/df/87cf951fb4858ab7a76b68dd479c98b2df2404": "04fe2b1fb5de9582f647e8ac2993d2a1",
".git/objects/e2/5b4f93ab3f783995047362942dca0c75cf609b": "81ca856bf1a8c918d537cc4cfd5c8434",
".git/objects/e2/70e7ad496b2a503599929a4988f11cf2dc4094": "55d872c222296bf3e2f6112cf4ed65a4",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/87542b97a24cbdd2f131c9589c8c81ecff64b4": "f8214ff26d4c18eee5f8c1e1906d862c",
".git/objects/f2/341d42a7cf388dc2b104367257147733cafd76": "171c34b34b5419219ba358c5c16ac650",
".git/objects/fc/5fb7fb3a344acfb589293af8a8424586ac6e4e": "771981270ce8d55bfd1729be68c7ac2a",
".git/objects/fc/e68857776cb34a0df6854b0126ab05f8a4fb9c": "9a69e222737577fabdd993fc442730fb",
".git/objects/ff/e69115d9143d4ea81f5d3252c62c3b4371836d": "091863860a63598a46607acb5a95ba1e",
".git/objects/pack/pack-6c10f7c4de5604f66826c811109d0a62c9d5fb52.idx": "322250146b7692493818a2c8b52a8bd5",
".git/objects/pack/pack-6c10f7c4de5604f66826c811109d0a62c9d5fb52.pack": "8eff65115fe0b457efac900283375f07",
".git/objects/pack/pack-6c10f7c4de5604f66826c811109d0a62c9d5fb52.rev": "4f1fa4e36406370567d236453734f841",
".git/packed-refs": "4ab6d966e39805ad2c3caa069cd37f8c",
".git/refs/heads/gh-pages": "2e183adc887e3f3f336eddacdd778129",
".git/refs/remotes/origin/gh-pages": "2e183adc887e3f3f336eddacdd778129",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".idea/copilot.data.migration.agent.xml": "2ec93051af2a04305b2ce905d0799a0e",
".idea/copilot.data.migration.ask.xml": "c236f1695918f68792654fbd28f0b82f",
".idea/copilot.data.migration.ask2agent.xml": "5ae6376d0447439987e63236bc016174",
".idea/copilot.data.migration.edit.xml": "265af5708780cab08862d5ff9eebcbb0",
".idea/encodings.xml": "1f02723bd2c50b7cd3c5a18eb42149af",
".idea/indexLayout.xml": "1877d9057c34496132daa816c6e6da7d",
".idea/projectSettingsUpdater.xml": "7a17509e4a5b26e354bb7d3926fb731c",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/workspace.xml": "d85081222c280813b278f690912d20ff",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fee19f7cfdb61f6003b6554083f48a26",
"assets/NOTICES": "964758413d1dc95eaa39e585e74ed455",
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
"flutter_bootstrap.js": "d0b885555a90357c1ff8d4a059366569",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0b84ec6bc734454fd93a5ad3ae00514",
"/": "f0b84ec6bc734454fd93a5ad3ae00514",
"main.dart.js": "f2ed43ecd1751ccfbd4297eaf390f9b2",
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
