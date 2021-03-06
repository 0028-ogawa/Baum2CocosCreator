type AnimationAnimator = any;
type id = any;
type TMXTilesetInfo = any;
type Ray = any;
type DOMImageElement = any;
type PixelFormat = any;
type Filter = any;
type TypedArray = any;
type vec3 = cc.Vec3;
type Proxy = any;
type Texture2D = any;
type Texture = any;
type int = bigint;

interface Matrix {}
interface Matrix3 extends Matrix {}

interface Color {}
interface RemoteType {
  _allPaths: Proxy;
  _curTask: null;
  _dbAdd: Proxy;
  _dbDelete: Proxy;
  _dbMove: Proxy;
  _dbpath: Proxy;
  _dbReset: Proxy;
  _dispatchEvent: Proxy;
  _ensureDirSync: Proxy;
  _eventCallback: Proxy;
  _events: undefined;
  _expectWatchON: boolean;
  _extname2infos: Object;
  _fspath: Proxy;
  _fspathToImportPathNoExt: Proxy;
  _genTaskID: number;
  _getDestPathByMeta: Proxy;
  _handleErrorResults: Proxy;
  _handleMetaBackupResults: Proxy;
  _handleRefreshResults: Proxy;
  _importPath: string;
  _isAssetPath: Proxy;
  _isMountPath: Proxy;
  _maxListeners: undefined;
  _metaToAssetPath: Proxy;
  _MOUNT_PREFIX: string;
  _mountIDByMountPath: Proxy;
  _mountIDByPath: Proxy;
  _mountPaths: Proxy;
  _mounts: Object;
  _path2uuid: Object;
  _paths: Array<string>;
  _pathsDirty: boolean;
  _rmMetas: Proxy;
  _tasks: Object;
  _url: Proxy;
  _uuid2meta: Object;
  _uuid2mtime: Object;
  _uuid2mtimePath: string;
  _uuid2path: Object;
  _uuidToImportPathNoExt: Proxy;
  _watchState: string;
  addListener: Proxy;
  arrayCmpFilter: Proxy;
  assetBackupPath: string;
  assetInfo: Proxy;
  assetInfoByPath: Proxy;
  assetInfoByUuid: Proxy;
  attachMountPath: Proxy;
  clearImports: Proxy;
  constructor: Proxy;
  containsSubAssets: Proxy;
  containsSubAssetsByPath: Proxy;
  containsSubAssetsByUuid: Proxy;
  copyAssetToLibrary: Proxy;
  create: Proxy;
  cwd: string;
  deepQuery: Proxy;
  delete: Proxy;
  dev: boolean;
  domain: any;
  emit: Proxy;
  error: Proxy;
  eventNames: Proxy;
  exchangeUuid: Proxy;
  exists: Proxy;
  existsByPath: Proxy;
  existsByUuid: Proxy;
  failed: Proxy;
  fspathToUrl: Proxy;
  fspathToUuid: Proxy;
  getAssetBackupPath: Proxy;
  getMaxListeners: Proxy;
  getRelativePath: Proxy;
  getWatchState: Proxy;
  import: Proxy;
  info: Proxy;
  init: Proxy;
  isMount: Proxy;
  isMountByPath: Proxy;
  isMountByUuid: Proxy;
  isSubAsset: Proxy;
  isSubAssetByPath: Proxy;
  isSubAssetByUuid: Proxy;
  library: string;
  listenerCount: Proxy;
  listeners: Proxy;
  loadMeta: Proxy;
  loadMetaByPath: Proxy;
  loadMetaByUuid: Proxy;
  log: Proxy;
  metaBackupPath: string;
  mkdirForAsset: Proxy;
  mount: Proxy;
  mountInfo: Proxy;
  mountInfoByPath: Proxy;
  mountInfoByUuid: Proxy;
  move: Proxy;
  on: Proxy;
  once: Proxy;
  padLeft: Proxy;
  prependListener: Proxy;
  prependOnceListener: Proxy;
  queryAssets: Proxy;
  queryMetas: Proxy;
  refresh: Proxy;
  register: Proxy;
  removeAllListeners: Proxy;
  removeListener: Proxy;
  saveAssetToLibrary: Proxy;
  saveExists: Proxy;
  saveMeta: Proxy;
  setDefaultMetaType: Proxy;
  setEventCallback: Proxy;
  setMaxListeners: Proxy;
  silent: false;
  subAssetInfos: Proxy;
  subAssetInfosByPath: Proxy;
  subAssetInfosByUuid: Proxy;
  submitChanges: Proxy;
  success: Proxy;
  syncChanges: Proxy;
  throw: Proxy;
  unattachMountPath: Proxy;
  unmount: Proxy;
  unregister: Proxy;
  updateMtime: Proxy;
  urlToFspath: Proxy;
  urlToUuid: Proxy;
  uuidToFspath: Proxy;
  uuidToUrl: Proxy;
  warn: Proxy;
  watchOFF: Proxy;
  watchON: Proxy;
}
interface AssetdbType {
  import(e: any, s: any, t: any, d: any);
  create(e, s, t);
  createOrSave(e, s, t);
  deepQuery(e);
  delete(e, s);
  explore(e);
  exploreLib(e);
  import(e, s, t, d);
  library: string;
  move(e, s, t, d);
  queryAssets(e, s, t);
  queryInfoByUuid(e, s);
  queryMetaInfoByUuid(e, s);
  queryPathByUrl(e, s);
  queryPathByUuid(e, s);
  queryUrlByUuid(e, s);
  queryUuidByUrl(e, s);
  refresh(e, s);
  log(e, ...r);
  logArgs();
  MainMenu: Object;
  Math: Object;
  Menu: Object;
  metas: Object;
  Metrics: Object;
  Package: Object;
  Panel: Object;
  Polygon(t);
  polymerElement(t);
  polymerPanel(t, i);
  preprocessForSetProperty(t, a, s);
  Profile: Object;
  Project: Object;
  projectInfo: Object;
  properties: Object;
  Protocol: Object;
  registerElement();
  registerPanel();
  require(r);
  resetPropertyByPath(e, t, a);
  Scene: Object;
  sceneScripts: Object;
  Selection: Object;
  serialize(i, e);
  setAsset(e, t, a, s);
  setDeepPropertyByPath(e, t, a, s, r);
  setNodePropertyByPath(e, t, a);
  setPropertyByPath(e, t);
  success(e, ...r);
  T(t, r);
  trace(e, r, ...t);
  UI: Object;
  Undo: Object;
  url(t);
  User: Object;
  Utils: Object;
  UuidCache: Object;
  UuidUtils: Object;
  warn(e, ...r);
  watchVariable(e, c, n);
  Window: Object;
  remote: RemoteType;
  saveExists(e, s, t);
  saveMeta(e, s, t);
}
interface IpcType {
  sendToMain: Function;
}
interface EditorType {
  assetdb: AssetdbType;
  appPath: string;
  argv: Object;
  assets: Object;
  assettype2name: Object;
  Audio: Object;
  createVariablesWatcher(e);
  dev: boolean;
  Dialog: Object;
  Easing: Object;
  error(t);
  failed(e, ...r);
  fillDefaultValue(e, t, s, r);
  frameworkPath: string;
  getNodeDump(e);
  getNodeFunctions(n);
  Gizmo: Object;
  gizmos: Object;
  GizmosUtils: Object;
  globalProfile: Object;
  i18n: Object;
  import(e);
  importPath: string;
  info(e, ...r);
  log(...r);
  inspectors: Object;
  Intersection: Object;
  Ipc: IpcType;
  IpcListener: Object;
  isBuilder: boolean;
  isDarwin: boolean;
  isElectron: boolean;
  isMainProcess: boolean;
  isNative: boolean;
  isNode: boolean;
  isPureWeb: boolean;
  isRendererProcess: boolean;
  isRetina: boolean;
  isWin32: boolean;
  JS: Object;
  KeyCode(r);
  lang: string;
  libraryPath: string;
  require(t);
  serialize(n);

  warn(n);
  success: Function;
}
declare var Editor: EditorType;
