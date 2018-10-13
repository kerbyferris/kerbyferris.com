// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('kerbyferris.routes');
goog.require('kerbyferris.views.main');
goog.require('kerbyferris.state');
cljs.core.enable_console_print_BANG_.call(null);
kerbyferris.core.start = (function kerbyferris$core$start(){
kerbyferris.routes.app_routes.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kerbyferris.views.main.page], null),document.getElementById("app"));
});
goog.exportSymbol('kerbyferris.core.start', kerbyferris.core.start);
kerbyferris.core.on_js_reload = (function kerbyferris$core$on_js_reload(){
return null;
});
kerbyferris.core.start.call(null);

//# sourceMappingURL=core.js.map?rel=1539456019122