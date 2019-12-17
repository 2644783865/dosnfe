/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f752c90f8927efb31fe705538546f82e"
  },
  {
    "url": "assets/css/0.styles.8214cc71.css",
    "revision": "bf461e8e794b4a2a12d753d9743b0c99"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/kun_001.23cd2656.png",
    "revision": "23cd265695afb4a2a0d6052accb3f97c"
  },
  {
    "url": "assets/img/kun_002.72beafdd.png",
    "revision": "72beafddb2e1592b6ef33192ab40ba73"
  },
  {
    "url": "assets/img/kun_003.636c9383.png",
    "revision": "636c938338bfd767aab11970e0d98826"
  },
  {
    "url": "assets/img/lk_001.c0ca19d6.png",
    "revision": "c0ca19d607c2152d73867daefe79de6d"
  },
  {
    "url": "assets/img/lk_002.95b9a9ca.png",
    "revision": "95b9a9cae25ba30608899bbc78dc71a4"
  },
  {
    "url": "assets/img/lk_003.877726f1.png",
    "revision": "877726f10648a88c5f6069595d2f9ffd"
  },
  {
    "url": "assets/img/lzd_001.724f93f6.gif",
    "revision": "724f93f69e4de824a71e12835b3bcd17"
  },
  {
    "url": "assets/img/lzd_001.b1b1abbc.jpg",
    "revision": "b1b1abbcb1d8295a6d6859ba010c8c38"
  },
  {
    "url": "assets/img/lzd_002.51afbc44.gif",
    "revision": "51afbc44c7f6b9a003d2923674fcbf86"
  },
  {
    "url": "assets/img/lzd_003.64a9612f.gif",
    "revision": "64a9612f00c9bf52a97e6e59d5cf36ef"
  },
  {
    "url": "assets/img/lzd_004.dd15acae.png",
    "revision": "dd15acae1acc834fbfe342d5ec5d117a"
  },
  {
    "url": "assets/img/lzd_005.56d8b2b2.png",
    "revision": "56d8b2b2eea2a81087a740b2bb1d8679"
  },
  {
    "url": "assets/img/lzd_006.f9e9eda7.png",
    "revision": "f9e9eda763e5b3f608c57a956262bba3"
  },
  {
    "url": "assets/img/lzd_007.beb94eba.png",
    "revision": "beb94ebadf37fbbb3e5f07d8ce40b893"
  },
  {
    "url": "assets/img/lzd_008.d176eb7a.png",
    "revision": "d176eb7ad645bee11871b6685fed2fd7"
  },
  {
    "url": "assets/img/lzd_009.de541956.png",
    "revision": "de5419565f636987627cd4f86bbd3b3f"
  },
  {
    "url": "assets/img/lzd_010.ae47ab7f.png",
    "revision": "ae47ab7f097eab5316477810fef54305"
  },
  {
    "url": "assets/img/lzd_011.6e315570.png",
    "revision": "6e315570d2184cdb38b25f63716df2f5"
  },
  {
    "url": "assets/img/lzd_012.a17f1194.png",
    "revision": "a17f119470287036bc0497080c8df5ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zmy_001.9d96e688.png",
    "revision": "9d96e68810da872074fc54ebbb21559b"
  },
  {
    "url": "assets/img/zmy_002.e2604a17.png",
    "revision": "e2604a178dbaabc0e363bca75b4e2dae"
  },
  {
    "url": "assets/js/1.df0e1478.js",
    "revision": "0d8fa2460323bc8cd027d8cf2f023060"
  },
  {
    "url": "assets/js/10.ff854e22.js",
    "revision": "8f8f934e665b92f93e104149b4e2f456"
  },
  {
    "url": "assets/js/11.7d905091.js",
    "revision": "f888cbb7438d0ddf23b0327b0feb49a6"
  },
  {
    "url": "assets/js/12.f88f5ce5.js",
    "revision": "cbf7a424da5e452f1afce11b358a9a03"
  },
  {
    "url": "assets/js/13.aacfaa0a.js",
    "revision": "b353574aa1e0916cf5da63cf714d652d"
  },
  {
    "url": "assets/js/14.c95a56fa.js",
    "revision": "c040a7f1409ed1971854c3afdd4f1d4b"
  },
  {
    "url": "assets/js/15.7eed35c1.js",
    "revision": "d1be7840bb647437aa48a59ec3e42d24"
  },
  {
    "url": "assets/js/16.45182d78.js",
    "revision": "f79aa503b6554b90e498b4dc7d3c47f0"
  },
  {
    "url": "assets/js/17.4f902a15.js",
    "revision": "c045e3238570d8cb31eb86e9c72a644c"
  },
  {
    "url": "assets/js/18.c67ed5df.js",
    "revision": "e3258d3c04f97701fd27a66424319120"
  },
  {
    "url": "assets/js/19.6b739378.js",
    "revision": "f3e3b7513374eec6913ec93b55c36cf7"
  },
  {
    "url": "assets/js/20.ae81cdad.js",
    "revision": "0f35ae99d2a3770636ea1dc4214aea7c"
  },
  {
    "url": "assets/js/21.bc3a66fe.js",
    "revision": "c14e21d866c59911b24233d521fe760e"
  },
  {
    "url": "assets/js/22.bf823456.js",
    "revision": "0416cb5b2a2ebc34f294676e5c80093d"
  },
  {
    "url": "assets/js/23.8efc56d9.js",
    "revision": "33ccb17b480e5a436c708b01a16c0ecf"
  },
  {
    "url": "assets/js/24.7872ea00.js",
    "revision": "af45982e780da53481db2625d54806b6"
  },
  {
    "url": "assets/js/25.5344790c.js",
    "revision": "25aefbb23a3ff2cdcf1649053b2382a7"
  },
  {
    "url": "assets/js/26.c2fbcb32.js",
    "revision": "93ff523cc477ad1496cda8c91f5dd064"
  },
  {
    "url": "assets/js/27.876c39ba.js",
    "revision": "56cfe7ba460415853405f7fa8ae9d94e"
  },
  {
    "url": "assets/js/28.408b4a3b.js",
    "revision": "eb8cda7d0de7046726a271b457fffbdd"
  },
  {
    "url": "assets/js/29.62088152.js",
    "revision": "b5dc3e04f85f902cb5e7bdc7c9fcb0d3"
  },
  {
    "url": "assets/js/30.b2fcb620.js",
    "revision": "217246aff6bcdf06077ea71a645b5bff"
  },
  {
    "url": "assets/js/31.56149992.js",
    "revision": "6576ca4454bbd0d04c194b0ac611f394"
  },
  {
    "url": "assets/js/32.59e7dbf8.js",
    "revision": "78225d21eb48a51b9a947df614c78daa"
  },
  {
    "url": "assets/js/33.6f033b27.js",
    "revision": "893a8a7103d4db217780e6bde4a00812"
  },
  {
    "url": "assets/js/34.18110c3b.js",
    "revision": "d1ced97893c366b9f0cbd65e8357066a"
  },
  {
    "url": "assets/js/35.652f85a2.js",
    "revision": "023e7f02794aa7279433d523c6e44aeb"
  },
  {
    "url": "assets/js/36.c0b96e98.js",
    "revision": "562e962f7c677d9564a569d5a6e59d67"
  },
  {
    "url": "assets/js/37.39203eea.js",
    "revision": "14978037082ef7d3badced34c6dbabea"
  },
  {
    "url": "assets/js/38.7256c66d.js",
    "revision": "0da85d1d043d45a033311c4338e70470"
  },
  {
    "url": "assets/js/39.2bf7f5ff.js",
    "revision": "2ff704f155db48db74bfe989a57f5e43"
  },
  {
    "url": "assets/js/4.aca5f6cf.js",
    "revision": "7adf3846f191a2a7c7a6129b1d61feff"
  },
  {
    "url": "assets/js/40.099da8e2.js",
    "revision": "cd9b85a52c1cf3a53e722015f653b6a1"
  },
  {
    "url": "assets/js/41.b9b87ef2.js",
    "revision": "6bf9ed534ea791373babd5e3bd4b01f2"
  },
  {
    "url": "assets/js/42.390d41b8.js",
    "revision": "f1fad6a7f004a4b917bd57579f7d06ad"
  },
  {
    "url": "assets/js/43.0f9b8177.js",
    "revision": "e6c2179d5e14bd62c609d78c4f05f0b7"
  },
  {
    "url": "assets/js/5.6c954d69.js",
    "revision": "65046d3b1e977989c367758568cb4c1e"
  },
  {
    "url": "assets/js/6.3e563256.js",
    "revision": "a10bea8da79c1e8ed448e9d1a79bea0f"
  },
  {
    "url": "assets/js/7.dc20ff18.js",
    "revision": "eb37457dcd4359d7d197cb9aa35f6d87"
  },
  {
    "url": "assets/js/8.b811c21f.js",
    "revision": "d3c5029321abec9186d21d1a3a3adffc"
  },
  {
    "url": "assets/js/9.4ba4ba0f.js",
    "revision": "d4283e635577a6c7c1ca6e264a12177c"
  },
  {
    "url": "assets/js/app.05b2bb75.js",
    "revision": "9ff851944759d4a5dd6b08eabc30ea00"
  },
  {
    "url": "assets/js/vendors~notification.e64d507a.js",
    "revision": "b04b6679d8d9b311bf19ce3be22109cf"
  },
  {
    "url": "cmpdocs/base/layout.html",
    "revision": "6d675181f6d698ee55eea46bbf2a05c4"
  },
  {
    "url": "cmpdocs/base/siderDialog.html",
    "revision": "0e3f8ee97fc4b0f241c377684f14ce0f"
  },
  {
    "url": "cmpdocs/index.html",
    "revision": "562f7ab06b34c44596fe0b1b6c519f86"
  },
  {
    "url": "cmpdocs/select/IndustryCascader.html",
    "revision": "55538048ce38f51cff779a9ab5b625f0"
  },
  {
    "url": "cmpdocs/select/mediaCascader.html",
    "revision": "d03361e6f1cc838884e6e1cc31f7989f"
  },
  {
    "url": "cmpdocs/select/regionCascader.html",
    "revision": "4cd0e19d8666f1db5c86064271c847cb"
  },
  {
    "url": "cmpdocs/table/selBran.html",
    "revision": "52c52d7a736d33a80737401424ff6203"
  },
  {
    "url": "cmpdocs/table/selCommunity.html",
    "revision": "44f3125a21fa5f5bb13a4c7492c47f81"
  },
  {
    "url": "cmpdocs/tree/selBusiness.html",
    "revision": "958d7b3cf8a86f3ee33192392e40c932"
  },
  {
    "url": "cmpdocs/tree/selMedia.html",
    "revision": "e81bf432c1a88dfbe914db144853cfa5"
  },
  {
    "url": "cmpdocs/tree/selUser.html",
    "revision": "bdc98072fdcaa5ea95fd7ac06f70bd44"
  },
  {
    "url": "cmpdocs/upLoad/customUpload.html",
    "revision": "4b16bbb5a998f963c242b428a5bdb3c5"
  },
  {
    "url": "cmpdocs/upLoad/fileList.html",
    "revision": "6c9f00f8c2ebfc1939c1e200dbb3c8d6"
  },
  {
    "url": "cmpdocs/upLoad/importFile.html",
    "revision": "78b4256698b8868e1301281862c5e7af"
  },
  {
    "url": "cmpdocs/upLoad/upLoadFile.html",
    "revision": "3b838750837d09322c5a92beb1fde7eb"
  },
  {
    "url": "cmpdocs/upLoad/uploadImg.html",
    "revision": "b4411de5c92ce5d52e3703383b452d46"
  },
  {
    "url": "cmpdocs/upLoad/uploadSingleImg.html",
    "revision": "b1dffa7b4f21422b99300330e761cda6"
  },
  {
    "url": "css/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "css/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "css/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "css/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "css/iconfont.css",
    "revision": "932f42c7c9dd14bbcf5022abf0b6ce3d"
  },
  {
    "url": "index.html",
    "revision": "168cd423787b847a66affcb977007db3"
  },
  {
    "url": "knowledge/index.html",
    "revision": "d1335109f20a03a4716f5d99a335888d"
  },
  {
    "url": "logo.png",
    "revision": "7225c8154fdf4abefd771d6e2d4084ec"
  },
  {
    "url": "publicMethod/directive.html",
    "revision": "9cc4cebb94bce6335438240314d40500"
  },
  {
    "url": "publicMethod/filter.html",
    "revision": "8e87a033d4194f9a92416f50f3d76ad2"
  },
  {
    "url": "publicMethod/method.html",
    "revision": "36178938a1f21d6462b2632f5a2fbb4a"
  },
  {
    "url": "publicMethod/regexp.html",
    "revision": "57b03ca2602564370c18318895e400df"
  },
  {
    "url": "standard/CSS.html",
    "revision": "958b1f7dbcc5a94c2075fd3122ee558f"
  },
  {
    "url": "standard/HTML.html",
    "revision": "2e91e08e9420099f5eb34eea3a9d85a2"
  },
  {
    "url": "standard/index.html",
    "revision": "76cd800ffcde1b084ccec2f8a3fbe01b"
  },
  {
    "url": "standard/JS.html",
    "revision": "70deca19b331d92ef03259e6b5ff5b4d"
  },
  {
    "url": "standard/VSCODE.html",
    "revision": "38985a6a951296362de81c215fa4335b"
  },
  {
    "url": "standard/VUE.html",
    "revision": "5f94d714abcd67ea92ddde6d9c103623"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
