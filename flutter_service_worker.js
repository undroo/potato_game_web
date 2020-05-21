'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1e112152983bd2f8ba2b3d92c17e200f",
".git/config": "5acfb322ba4dcd97010babc0971c7c71",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "572be4270c11e814a73af238b8959ff3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "9daf556d988e58659283eec40f6ee045",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c4cbeb8397a191344b27d5ddd30907a",
".git/logs/refs/heads/master": "3c4cbeb8397a191344b27d5ddd30907a",
".git/logs/refs/remotes/origin/master": "995bde8d0d46f47d86dda7b7fe78d4ba",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/f3cf41757b89ac0625774b62def66a913a2d24": "22d5c01500d7c4f0d834cf3fcb1f7287",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2e/54ac573da8994ce7f7d819e7ea5b54a5e1e706": "f17df2f1b26b7b8ca3593698aa53415d",
".git/objects/44/95842c1139d877a5196e30153990602d5d2d27": "f2b2095e14d3392a2384571931c5c936",
".git/objects/49/cf667db7f58e9a82ca4f2e630e7871ee0dea94": "23c5ea52c29852d039487ed786e667cb",
".git/objects/4c/09c2c6b99af96fda280ce311046305fda189e0": "8fc09728505018ed425402fe6084c187",
".git/objects/78/fee39974a8853a2220fac3257d57d351135ec3": "ff95436a26bf9bcd2da747819925ef52",
".git/objects/80/18ef9cb0eee85e3435642123758104d143f8f4": "255d9ddd22d8cac9eae7acebef4ea70f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/2689e3634843c9637f53cb836d243fb9bd1894": "be2c535c9f6ff133aae9338a743c4d7f",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/92/be8b1bfa05a222209654ce83fef3630e6af3e5": "e405beac99f7581acc48838820137846",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5d057cbf30492ef6a9ab072fd96c88ddfb4e0a": "a4f708c3fed69b9c9a7d5c0dde64b015",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e8/d0f50bc08d8ef56dd0ba685d8773c0023ac573": "7f3f3b62ef801e5cac33c2ac473a111e",
".git/objects/f7/5ef313e00bd9fead57356f1019cd6211b5ce26": "f9bf6ff140fd48592a24d5edae5b05a4",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "1077f681060f8be3667b08c75253b6a5",
".git/refs/remotes/origin/master": "36e5376aa9acaa314a0aa046225a89d1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "381a96d58942c4df894a2eaeb3962a16",
"/": "381a96d58942c4df894a2eaeb3962a16",
"main.dart.js": "274378a8d43c11b2d13a06c968cad543",
"manifest.json": "e142c3c8686f445a04a23d25eeaa3997"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
