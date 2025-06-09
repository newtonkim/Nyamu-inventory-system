import { ref, unref, withCtx, createVNode, createBlock, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-C2gookwo.js";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Modal-BsRUyuxY.js";
import { P as PrimaryButton } from "./PrimaryButton-CZbnR4E4.js";
import { _ as _sfc_main$3 } from "./SecondaryButton-CuwfkeiC.js";
import "./ApplicationLogo-DxaUfI_m.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: Object,
    categories: Array,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const filterForm = useForm({
      name: props.filters.name || "",
      category_id: props.filters.category_id || "",
      start_date: props.filters.start_date || "",
      end_date: props.filters.end_date || ""
    });
    const applyFilters = () => {
      filterForm.get(route("products.index"), {
        preserveState: true,
        replace: true
      });
    };
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    };
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(void 0, options);
    };
    const showDeleteModal = ref(false);
    const productToDelete = ref(null);
    const confirmDeleteProduct = (product) => {
      productToDelete.value = product;
      showDeleteModal.value = true;
    };
    const deleteProduct = () => {
      if (productToDelete.value) {
        router.delete(route("products.destroy", productToDelete.value.id), {
          preserveScroll: true,
          onFinish: () => {
            showDeleteModal.value = false;
            productToDelete.value = null;
          }
        });
      }
    };
    const editProduct = (productId) => {
      router.visit(route("products.edit", productId));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Products" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>Products</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, "Products")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><div class="flex justify-end mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600",
              href: _ctx.route("products.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Create</span><span class="hidden md:inline"${_scopeId2}> Product</span>`);
                } else {
                  return [
                    createVNode("span", null, "Create"),
                    createVNode("span", { class: "hidden md:inline" }, " Product")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="p-4 mb-6 bg-gray-100 rounded-lg"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Filters</h3></div><div class="grid grid-cols-1 gap-4 md:grid-cols-5"${_scopeId}><div class="md:col-span-1"${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700"${_scopeId}>Name</label><input type="text"${ssrRenderAttr("value", unref(filterForm).name)} id="name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"${_scopeId}></div><div class="md:col-span-1"${_scopeId}><label for="category_id" class="block text-sm font-medium text-gray-700"${_scopeId}>Category</label><select id="category_id" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filterForm).category_id) ? ssrLooseContain(unref(filterForm).category_id, "") : ssrLooseEqual(unref(filterForm).category_id, "")) ? " selected" : ""}${_scopeId}>All</option><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(filterForm).category_id) ? ssrLooseContain(unref(filterForm).category_id, category.id) : ssrLooseEqual(unref(filterForm).category_id, category.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="md:col-span-1"${_scopeId}><label for="start_date" class="block text-sm font-medium text-gray-700"${_scopeId}>Start Date</label><input type="date"${ssrRenderAttr("value", unref(filterForm).start_date)} id="start_date" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"${_scopeId}></div><div class="md:col-span-1"${_scopeId}><label for="end_date" class="block text-sm font-medium text-gray-700"${_scopeId}>End Date</label><input type="date"${ssrRenderAttr("value", unref(filterForm).end_date)} id="end_date" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"${_scopeId}></div><div class="flex items-end md:col-span-1"${_scopeId}><button class="w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"${_scopeId}> Filter </button></div></div></div>`);
            if (__props.products.data.length > 0) {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="min-w-full bg-white"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"${_scopeId}>Name</th><th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"${_scopeId}>Barcode</th><th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"${_scopeId}>Category</th><th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"${_scopeId}>Price</th><th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"${_scopeId}>Stock</th><th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"${_scopeId}>Date</th><th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(__props.products.data, (product) => {
                _push2(`<tr${_scopeId}><td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0 w-10 h-10"${_scopeId}><img class="w-10 h-10 rounded-full"${ssrRenderAttr("src", product.image ? `/storage/${product.image}` : "https://via.placeholder.com/150")} alt=""${_scopeId}></div><div class="ml-4"${_scopeId}><div class="text-sm font-medium leading-5 text-gray-900"${_scopeId}>${ssrInterpolate(product.name)}</div></div></div></td><td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"${_scopeId}>${ssrInterpolate(product.barcode)}</td><td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"${_scopeId}>${ssrInterpolate(product.category.name)}</td><td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"${_scopeId}>${ssrInterpolate(formatCurrency(product.selling_price))}</td><td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"${_scopeId}>${ssrInterpolate(product.stock_quantity)}</td><td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"${_scopeId}>${ssrInterpolate(formatDate(product.created_at))}</td><td class="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200"${_scopeId}><div class="flex items-center justify-end"${_scopeId}><button class="text-indigo-600 hover:text-indigo-900"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg></button><button class="ml-4 text-red-600 hover:text-red-900"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            } else {
              _push2(`<div${_scopeId}><p${_scopeId}>No products found.</p></div>`);
            }
            _push2(`<div class="mt-6"${_scopeId}><div class="flex justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(__props.products.links, (link, index) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: index,
                href: link.url,
                class: ["px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50", { "bg-blue-500 text-white": link.active }]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                createVNode("div", { class: "p-6 text-gray-900" }, [
                  createVNode("div", { class: "flex justify-end mb-4" }, [
                    createVNode(unref(Link), {
                      class: "px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600",
                      href: _ctx.route("products.create")
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Create"),
                        createVNode("span", { class: "hidden md:inline" }, " Product")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "p-4 mb-6 bg-gray-100 rounded-lg" }, [
                    createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                      createVNode("h3", { class: "text-lg font-semibold" }, "Filters")
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-5" }, [
                      createVNode("div", { class: "md:col-span-1" }, [
                        createVNode("label", {
                          for: "name",
                          class: "block text-sm font-medium text-gray-700"
                        }, "Name"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(filterForm).name = $event,
                          id: "name",
                          class: "block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(filterForm).name]
                        ])
                      ]),
                      createVNode("div", { class: "md:col-span-1" }, [
                        createVNode("label", {
                          for: "category_id",
                          class: "block text-sm font-medium text-gray-700"
                        }, "Category"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(filterForm).category_id = $event,
                          id: "category_id",
                          class: "block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        }, [
                          createVNode("option", { value: "" }, "All"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                            return openBlock(), createBlock("option", {
                              key: category.id,
                              value: category.id
                            }, toDisplayString(category.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(filterForm).category_id]
                        ])
                      ]),
                      createVNode("div", { class: "md:col-span-1" }, [
                        createVNode("label", {
                          for: "start_date",
                          class: "block text-sm font-medium text-gray-700"
                        }, "Start Date"),
                        withDirectives(createVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": ($event) => unref(filterForm).start_date = $event,
                          id: "start_date",
                          class: "block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(filterForm).start_date]
                        ])
                      ]),
                      createVNode("div", { class: "md:col-span-1" }, [
                        createVNode("label", {
                          for: "end_date",
                          class: "block text-sm font-medium text-gray-700"
                        }, "End Date"),
                        withDirectives(createVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": ($event) => unref(filterForm).end_date = $event,
                          id: "end_date",
                          class: "block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(filterForm).end_date]
                        ])
                      ]),
                      createVNode("div", { class: "flex items-end md:col-span-1" }, [
                        createVNode("button", {
                          onClick: applyFilters,
                          class: "w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                        }, " Filter ")
                      ])
                    ])
                  ]),
                  __props.products.data.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "overflow-x-auto"
                  }, [
                    createVNode("table", { class: "min-w-full bg-white" }, [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200" }, "Name"),
                          createVNode("th", { class: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200" }, "Barcode"),
                          createVNode("th", { class: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200" }, "Category"),
                          createVNode("th", { class: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200" }, "Price"),
                          createVNode("th", { class: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200" }, "Stock"),
                          createVNode("th", { class: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200" }, "Date"),
                          createVNode("th", { class: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (product) => {
                          return openBlock(), createBlock("tr", {
                            key: product.id
                          }, [
                            createVNode("td", { class: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("div", { class: "flex-shrink-0 w-10 h-10" }, [
                                  createVNode("img", {
                                    class: "w-10 h-10 rounded-full",
                                    src: product.image ? `/storage/${product.image}` : "https://via.placeholder.com/150",
                                    alt: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "ml-4" }, [
                                  createVNode("div", { class: "text-sm font-medium leading-5 text-gray-900" }, toDisplayString(product.name), 1)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, toDisplayString(product.barcode), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, toDisplayString(product.category.name), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, toDisplayString(formatCurrency(product.selling_price)), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, toDisplayString(product.stock_quantity), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, toDisplayString(formatDate(product.created_at)), 1),
                            createVNode("td", { class: "px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200" }, [
                              createVNode("div", { class: "flex items-center justify-end" }, [
                                createVNode("button", {
                                  onClick: ($event) => editProduct(product.id),
                                  class: "text-indigo-600 hover:text-indigo-900"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-6 h-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    })
                                  ]))
                                ], 8, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => confirmDeleteProduct(product),
                                  class: "ml-4 text-red-600 hover:text-red-900"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "w-6 h-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    })
                                  ]))
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("p", null, "No products found.")
                  ])),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("div", { class: "flex justify-center" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.products.links, (link, index) => {
                        return openBlock(), createBlock(unref(Link), {
                          key: index,
                          href: link.url,
                          innerHTML: link.label,
                          class: ["px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50", { "bg-blue-500 text-white": link.active }]
                        }, null, 8, ["href", "innerHTML", "class"]);
                      }), 128))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        show: showDeleteModal.value,
        onClose: ($event) => showDeleteModal.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete this product? </h2><div class="flex justify-end mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              onClick: ($event) => showDeleteModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              onClick: deleteProduct,
              class: "ml-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete `);
                } else {
                  return [
                    createTextVNode(" Delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete this product? "),
                createVNode("div", { class: "flex justify-end mt-6" }, [
                  createVNode(_sfc_main$3, {
                    onClick: ($event) => showDeleteModal.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(PrimaryButton, {
                    onClick: deleteProduct,
                    class: "ml-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
