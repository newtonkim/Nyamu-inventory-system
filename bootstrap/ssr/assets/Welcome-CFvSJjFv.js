import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><nav class="bg-white shadow-sm border-b border-gray-200"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex items-center"><div class="flex-shrink-0"><h1 class="text-xl font-bold text-gray-900">Tusui Inventory System</h1></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "text-gray-500 hover:text-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register"),
        class: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Register`);
          } else {
            return [
              createTextVNode("Register")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav><div class="relative bg-white overflow-hidden"><div class="max-w-7xl mx-auto"><div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"><main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"><div class="sm:text-center lg:text-left"><h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"><span class="block xl:inline">Professional</span><span class="block text-blue-600 xl:inline">Inventory Management</span></h1><p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> Complete inventory management system with accounting, reporting, and multi-user support. Built with Laravel, Inertia.js, and Tailwind CSS. </p><div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class="rounded-md shadow">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register"),
        class: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Started `);
          } else {
            return [
              createTextVNode(" Get Started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-3 sm:mt-0 sm:ml-3">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign In `);
          } else {
            return [
              createTextVNode(" Sign In ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></main></div></div><div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"><div class="h-56 w-full bg-gradient-to-r from-blue-500 to-purple-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center"><div class="text-white text-center"><div class="text-6xl mb-4">📊</div><h3 class="text-2xl font-bold">Dashboard Analytics</h3><p class="mt-2">Real-time inventory tracking</p></div></div></div></div><div class="py-12 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2><p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Everything you need to manage inventory </p></div><div class="mt-10"><div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"><div class="relative"><div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"> 📦 </div><p class="ml-16 text-lg leading-6 font-medium text-gray-900">Product Management</p><p class="mt-2 ml-16 text-base text-gray-500"> Complete CRUD operations for products with categories, suppliers, and stock tracking. </p></div><div class="relative"><div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"> 🔐 </div><p class="ml-16 text-lg leading-6 font-medium text-gray-900">User Authentication</p><p class="mt-2 ml-16 text-base text-gray-500"> Secure login with Google OAuth integration and role-based access control. </p></div><div class="relative"><div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"> 📊 </div><p class="ml-16 text-lg leading-6 font-medium text-gray-900">Accounting Module</p><p class="mt-2 ml-16 text-base text-gray-500"> Complete accounting system with journal entries and financial tracking. </p></div><div class="relative"><div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"> 📈 </div><p class="ml-16 text-lg leading-6 font-medium text-gray-900">Financial Reports</p><p class="mt-2 ml-16 text-base text-gray-500"> Profit &amp; Loss, Balance Sheet, Cash Flow, and Trial Balance reports. </p></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
